"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
const loginSchema = z.object({
  email: z.string().email("Debe ser un correo válido"),
  password: z.string().min(4, "La contraseña debe tener al menos 4 caracteres"),
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
    <>
      <div className="flex h-screen w-screen justify-end background-wave">
        <Image
          src={"/icon.png"}
          width={500}
          height={500}
          alt={"icon"}
          className="absolute left-10 z-50 top-[30%]"
        />
        <div className="h-full w-[55%] flex flex-col justify-center p-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center w-[300px]">
              <div className="flex items-end w-full">
                <span className="text-[#F9593F] text-3xl">|</span>
                <h4 className="text-2xl font-bold text-[#4D4F5C] ml-2">
                  WELCOME
                </h4>
              </div>
            </div>
            <form onSubmit={handleOnSubmit}>
              <div className="flex flex-col h-32 justify-around mt-10">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow-gray-200 shadow-md h-10  w-96 text-md p-4 text-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}

                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow-gray-200 shadow-md h-10 w-96 text-md p-4 text-black"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
                <div className="w-full flex justify-end">
                  <a href="#" className="text-gray-400 text-end text-xs w-fit">
                    ¿Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center h-32 justify-around">
                <button
                  className="bg-[#4487FF] rounded-full p-4 shadow-gray-300 shadow-md disabled:bg-gray-600 disabled:cursor-not-allowed"
                  disabled={!isValid}
                  type="submit"
                >
                  <p className="font-bold text-lg text-white">SIGN IN</p>
                </button>

                <span className="text-gray-400 text-xs">
                  DON&apos;T HAVE AN ACCOUNT{" "}
                  <a href="/register" className="text-[#4087AC]">
                    REGISTER
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <p className="text-white text-lg font-bold">Cargando...</p>
        </div>
      )}
    </>
  );
}
