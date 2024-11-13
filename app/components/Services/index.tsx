import React from "react";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
import "./styles.css";

function Services() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 wave-services">
        <div className="w-full p-4 md:p-10 absolute z-[999]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-10 lg:mb-0 lg:mr-10">
              <h4 className="text-4xl md:text-5xl text-[#F9593F] font-bold mb-4">
                Our Services
              </h4>
              <p className="text-lg md:text-xl text-gray-600 max-w-md mb-4">
                National Brand with a Local Feel.{" "}
                <span className="text-gray-500">
                  Experience the Fetch! Difference
                </span>
              </p>
              <strong className="text-[#F9593F] text-xl block mb-4">
                Enter Your Location and Fetch Our Services
              </strong>
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="p-4 pr-12 rounded-full w-full text-black shadow-md"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F9593F] p-2 rounded-full hover:bg-[#E84C3D] transition-colors">
                  <GrLinkNext className="text-white" size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white shadow-md shadow-gray-500 lg:h-52 lg:w-52 h-48 w-48 rounded-xl flex flex-col items-center justify-around">
                <Image src={"/dog.png"} height={70} width={70} alt="dog" />
                <p className="text-gray-500">Dog Walking</p>
              </div>
              <div className="bg-white shadow-md shadow-gray-500 lg:h-52 lg:w-52 h-48 w-48 rounded-xl flex flex-col items-center justify-around">
                {" "}
                <Image
                  src={"/cat_sitting.png"}
                  height={70}
                  width={70}
                  alt="pet sitting"
                />
                <p className="text-gray-500">Pet Sitting</p>
              </div>
              <div className="bg-white shadow-md shadow-gray-500 lg:h-52 lg:w-52 h-48 w-48 rounded-xl flex flex-col items-center justify-around">
                {" "}
                <Image
                  src={"/dog_house.png"}
                  height={70}
                  width={70}
                  alt="fingerprint"
                />
                <p className="text-gray-500">Overnight Care</p>
              </div>
              <div className="bg-white shadow-md shadow-gray-500 lg:h-52 lg:w-52 h-48 w-48 rounded-xl flex flex-col items-center justify-around">
                {" "}
                <Image
                  src={"/fingerprint.png"}
                  height={70}
                  width={70}
                  alt="fingerprint"
                />
                <p className="text-gray-500">Other Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
