import React from "react";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";

function HowWorksPage() {
  return (
    <>
      {" "}
      <div className="relative h-screen w-full">
        <div className="absolute top-0 -right-[40%] bg-[#FFDD25] rounded-full h-full w-[70%] z-[-1]"></div>
        <div className="w-screen h-screen flex justify-between items-center px-8">
          <section className="w-[50%] flex justify-around items-center">
            <div className="flex flex-col h-[60%] justify-between space-y-24">
              <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
                {" "}
                <Image
                  src={"/reserve.png"}
                  height={70}
                  width={70}
                  alt="reserve"
                />
                <p className="text-gray-500">Reserve</p>
              </div>
              <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
                {" "}
                <Image
                  src={"/cat_face.png"}
                  height={70}
                  width={70}
                  alt="relax"
                />
                <p className="text-gray-500">Relax</p>
              </div>
            </div>

            <div className="bg-white shadow-md shadow-gray-500 h-52 w-52 rounded-xl flex flex-col items-center justify-around">
              {" "}
              <Image src={"/match.png"} height={70} width={70} alt="match" />
              <p className="text-gray-500">Match</p>
            </div>
          </section>

          <div className="flex flex-col items-start justify-center space-y-5 ">
            <h4 className="text-[3rem] text-[#F9593F] font-bold">
              How it Works
            </h4>
            <p className="text-xl text-gray-400 text-wrap max-w-[55%]">
              Because finding a good pet sitter shouldn&apos;t be a hassle. With
              Fetch! It&apos;s as easy as...
            </p>

            <strong className="text-[#F9593F] text-xl">
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
        </div>{" "}
        <div className="absolute bottom-0 -left-24 bg-[#FFDD25] rounded-full h-52 w-52"></div>
      </div>
    </>
  );
}

export default HowWorksPage;
