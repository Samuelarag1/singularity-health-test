import React from "react";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";

function HowWorksPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#FFDD25] rounded-full h-full w-[70%] -z-10 transform translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 bg-[#FFDD25] rounded-full h-52 w-52 -z-10 transform -translate-x-1/4"></div>

      <div className="container mx-auto h-screen flex flex-col lg:flex-row  items-center px-4 lg:px-8">
        <section className="w-full lg:w-1/2 flex flex-wrap justify-around items-center mb-8 lg:mb-0">
          <div className="flex flex-col space-y-8 lg:space-y-24">
            <div className="bg-white shadow-md shadow-gray-500 h-40 w-40 lg:h-52 lg:w-52 rounded-xl flex flex-col items-center justify-around p-4">
              <Image src="/reserve.png" height={70} width={70} alt="reserve" />
              <p className="text-gray-500 text-center">Reserve</p>
            </div>
            <div className="bg-white shadow-md shadow-gray-500 h-40 w-40 lg:h-52 lg:w-52 rounded-xl flex flex-col items-center justify-around p-4">
              <Image src="/cat_face.png" height={70} width={70} alt="relax" />
              <p className="text-gray-500 text-center">Relax</p>
            </div>
          </div>

          <div className="bg-white shadow-md shadow-gray-500 h-40 w-40 lg:h-52 lg:w-52 rounded-xl flex flex-col items-center justify-around p-4 mt-8 lg:mt-0">
            <Image src="/match.png" height={70} width={70} alt="match" />
            <p className="text-gray-500 text-center">Match</p>
          </div>
        </section>

        <div className="flex flex-col items-start justify-center space-y-5 w-full lg:w-1/2">
          <h4 className="text-4xl lg:text-5xl text-[#F9593F] font-bold">
            How it Works
          </h4>
          <p className="text-lg lg:text-xl text-gray-600 max-w-[90%] lg:max-w-[55%]">
            Because finding a good pet sitter shouldn&apos;t be a hassle. With
            Fetch! It&apos;s as easy as...
          </p>

          <strong className="text-[#F9593F] text-xl">
            Enter Your Location and Fetch Our Services
          </strong>
          <div className="relative w-full max-w-md mt-5">
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
      </div>
    </div>
  );
}

export default HowWorksPage;
