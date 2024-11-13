import React from "react";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
import "./styles.css";

function Services() {
  return (
    <>
      <div className="wave-services h-screen absolute w-screen">
        <div className="w-full flex justify-around p-10 h-screen">
          <div>
            <h4 className="text-[3rem] text-[#F9593F] font-bold">
              Our Services
            </h4>
            <p className="text-xl text-gray-400 max-w-[300px]">
              National Brand with a Local Feel.{" "}
              <span className="text-gray-400">
                Experience with Fetch! Difference
              </span>
            </p>
            <strong className="text-[#F9593F] text-xl">
              {" "}
              Enter Your Location and Fetch Our Services
            </strong>
            <div className="relative w-72 mt-5">
              <input
                type="text"
                placeholder="Zip Code"
                className="p-5 pr-10 rounded-full w-full text-black shadow-md"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F9593F] p-2 rounded-full">
                <GrLinkNext className="text-white text-sm" size={20} />
              </button>
            </div>
          </div>
          <section className=" grid grid-cols-2 gap-5  h-[50%]">
            <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
              <Image src={"/dog.png"} height={70} width={70} alt="dog" />
              <p className="text-gray-500">Dog Walking</p>
            </div>
            <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
              {" "}
              <Image
                src={"/cat_sitting.png"}
                height={70}
                width={70}
                alt="pet sitting"
              />
              <p className="text-gray-500">Pet Sitting</p>
            </div>
            <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
              {" "}
              <Image
                src={"/dog_house.png"}
                height={70}
                width={70}
                alt="fingerprint"
              />
              <p className="text-gray-500">Overnight Care</p>
            </div>
            <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
              {" "}
              <Image
                src={"/fingerprint.png"}
                height={70}
                width={70}
                alt="fingerprint"
              />
              <p className="text-gray-500">Other Services</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Services;
