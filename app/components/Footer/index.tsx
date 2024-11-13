import React from "react";
import "./styles.css";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
function Footer() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="w-full bg-[#3D7DF9] rounded-xl flex flex-col lg:flex-row justify-between items-center p-8">
          <div className="relative h-60 w-60 bg-yellow-300 rounded-full overflow-hidden mb-8 lg:mb-0">
            <Image
              src="/doggy.png"
              alt="Perro"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="lg:w-[70%] flex flex-col justify-around items-start h-full">
            <h3 className="text-3xl lg:text-4xl text-yellow-300 font-bold text-start mb-4">
              Make Fetch! Happen
            </h3>
            <p className="text-xl lg:text-2xl text-white max-w-[80%] mb-6">
              If you love pets and want exciting work, apply to be a Fetch! Pet
              Care Provider! We train every team member and provide ongoing
              support to help you get the most from your
            </p>
            <button className="bg-white text-orange-600 shadow-md px-6 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <div className="wave-footer relative min-h-screen bg-[#F9593F]">
        <nav className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl mx-auto px-4 py-12 flex flex-wrap justify-around gap-8 text-center text-white">
          <div className="flex flex-col mb-8 lg:mb-0">
            <strong className="text-yellow-300 text-xl mb-4">About</strong>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Locations
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Franchise With Us
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Make Fetch Happen!
            </a>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0">
            <strong className="text-yellow-300 text-xl mb-4">Resources</strong>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Pet Resource Center
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Media Fact Sheet
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              News
            </a>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0">
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Gift Cards
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Franchisee Login
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 text-lg py-2"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <strong className="text-yellow-300 text-xl mb-4">Newsletter</strong>
            <p className="max-w-[70%] text-start mb-4">
              Sign up to receive the Fetch! Family Newsletter
            </p>
            <div className="relative w-full max-w-md mt-5">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 pr-12 rounded-full w-full text-black shadow-md"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F9593F] p-2 rounded-full hover:bg-[#E84C3D] transition-colors">
                <GrLinkNext className="text-white" size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
