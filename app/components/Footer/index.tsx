import React from "react";
import "./styles.css";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[80%] h-80 bg-[#3D7DF9] rounded-xl flex justify-between items-center p-8">
          <div className="relative h-60 w-60 bg-yellow-300 rounded-full overflow-hidden">
            <Image
              src="/doggy.png"
              alt="Perro"
              width={900}
              height={900}
              className=""
            />
          </div>
          <div className="w-[70%] flex flex-col justify-around items-start h-full">
            <h3 className="text-4xl text-yellow-300 font-bold text-start">
              Make Fetch! Happen
            </h3>

            <p className="text-wrap text-2xl text-white max-w-[80%]">
              If you love pets and want exciting work, apply to be a Fetch! Pet
              Care Provider! We train every team member and provide ongoing
              support to help you get the most from your
            </p>
            <button className="bg-white text-orange-600 shadow-md p-4 rounded-full font-bold">
              Join Now
            </button>
          </div>
        </div>

        <div className="wave-footer relative h-screen">
          <nav className="absolute top-[80%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-full justify-around gap-8 text-center text-white">
            <div className="flex flex-col">
              <strong className="text-yellow-300 text-xl">About</strong>
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
            <div className="flex flex-col">
              <strong className="text-yellow-300 text-xl">Resources</strong>
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
            <div className="flex flex-col">
              <a
                href="#"
                className="text-white hover:text-yellow-400 text-lg py-2 mt-8"
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
            <div className="flex flex-col h-full justify-around">
              <strong className="text-yellow-300 text-start">NewsLetter</strong>
              <p className="max-w-[70%] text-start">
                Sign up to receive the Fetch! Family Nesletter
              </p>
              <div className="relative w-72 mt-5">
                <input
                  type="text"
                  placeholder="Email Adress"
                  className="p-5 pr-10 rounded-full w-full text-black shadow-md"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F9593F] p-2 rounded-full">
                  <GrLinkNext className="text-white text-sm" size={20} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Footer;
