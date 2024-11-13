"use client";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Opinions from "../components/opinions";
import "./styles.css";
import HowWorksPage from "../components/how_works/page";
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen wave-landing-1 z-20">
        <nav className="w-full bg-[#F9593F] py-4 flex justify-between items-center px-4 lg:px-8 absolute top-0 z-[999] ">
          <Image src="/icon.png" width={80} height={80} alt="icon" />

          <div className="hidden lg:flex justify-around items-center space-x-6">
            <a
              href="#"
              className="text-lg text-white cursor-pointer hover:text-yellow-400"
            >
              Location
            </a>
            <a
              href="#"
              className="text-lg text-white cursor-pointer hover:text-yellow-400"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-lg text-white cursor-pointer hover:text-yellow-400"
            >
              Services
            </a>
            <a
              href="#"
              className="text-lg text-white cursor-pointer hover:text-yellow-400"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg text-white cursor-pointer hover:text-yellow-400"
            >
              Franchise with Us
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-[#F9593F] py-4 px-6 space-y-4 text-center">
              <a
                href="#"
                className="text-lg text-white cursor-pointer hover:text-yellow-400"
              >
                Location
              </a>
              <a
                href="#"
                className="text-lg text-white cursor-pointer hover:text-yellow-400"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-lg text-white cursor-pointer hover:text-yellow-400"
              >
                Services
              </a>
              <a
                href="#"
                className="text-lg text-white cursor-pointer hover:text-yellow-400"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-lg text-white cursor-pointer hover:text-yellow-400"
              >
                Franchise with Us
              </a>
            </div>
          )}
        </nav>

        <div className="flex flex-col lg:flex-row justify-around items-center min-h-screen pt-28 lg:pt-0 px-4 lg:px-12 text-white absolute z-50 w-full">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 ">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We Get Pet Care!
            </h1>
            <p className="text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              For over 17 Years, Fetch! Pet Care has been a trusted partner in
              keeping pets healthy and happy!
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <button className="text-white bg-[#4487FF] px-6 py-3 rounded-full shadow-blue-700 shadow-md font-bold hover:bg-[#3366CC] transition-colors">
                Schedule Service
              </button>
              <p className="text-lg text-black">Or Call 866.338.2463</p>
            </div>
          </div>
          <div className="relative h-64 w-64 lg:h-80 lg:w-80 bg-yellow-300 rounded-full overflow-hidden">
            <Image
              src="/dog_landing.png"
              alt="Perro"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <Services />
      <Opinions />
      <HowWorksPage />
      <Footer />
    </>
  );
}

export default Home;
