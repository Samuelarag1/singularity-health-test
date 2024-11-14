"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const loginSchema = z.object({
  email: z.string().email("It must be a valid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsValid(isFormValid());
  }, [formData, isValid]);

  const isFormValid = () => {
    try {
      loginSchema.parse(formData);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    try {
      loginSchema.shape[name as keyof typeof formData].parse(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error.errors[0].message,
        }));
      }
    }
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setLoading(false);
          router.push("/home");
        }, 3000);
      } else {
        const errorData = await response.json();

        alert(errorData.error || "Error al iniciar sesión.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un problema al intentar iniciar sesión.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="bg-[#F9593F] w-full lg:w-2/5 flex justify-center items-center p-4 lg:p-0">
        <Image
          src="/icon.png"
          width={200}
          height={200}
          alt="icon"
          className="max-w-[60%] lg:max-w-[80%]"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-10">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-8">
            <span className="text-[#F9593F] text-3xl mr-2">|</span>
            <h4 className="text-2xl font-bold text-[#4D4F5C]">WELCOME</h4>
          </div>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded shadow-sm focus:ring-[#4487FF] focus:border-[#4487FF]"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded shadow-sm focus:ring-[#4487FF] focus:border-[#4487FF]"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-xs">{errors.password}</p>
              )}
            </div>
            <div className="text-right">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#4487FF]"
              >
                Forgot your password?
              </Link>
            </div>
            <button
              className="w-full bg-[#4487FF] text-white font-bold py-3 px-4 rounded-full shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:bg-[#3366CC] focus:outline-none focus:ring-2 focus:ring-[#4487FF] focus:ring-opacity-50"
              disabled={!isValid}
              type="submit"
            >
              SIGN IN
            </button>
            <p className="text-center text-sm text-gray-600">
              DON&apos;T HAVE AN ACCOUNT?{" "}
              <Link href="/register" className="text-[#4087AC] hover:underline">
                REGISTER
              </Link>
            </p>
          </form>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <p className="text-white text-lg font-bold">Loading...</p>
        </div>
      )}
    </div>
  );
}
