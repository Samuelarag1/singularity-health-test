import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Opinions from "../components/opinions";
import "./styles.css";
import HowWorksPage from "../components/how_works/page";
function Home() {
  return (
    <>
      <div className="w-full h-screen wave-landing-1">
        <nav className="w-full bg-[#F9593F] h-28 flex justify-between items-center p-5 absolute top-0 z-[999]">
          <Image src={"/icon.png"} width={100} height={100} alt="icon" />

          <div className="w-[40%] flex justify-around">
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
        </nav>

        <div className="flex justify-around items-center h-[80%] z-[50] absolute w-full p-52 mt-10 text-white">
          <div className="w[40%] text-wrap">
            <h4 className="text-[4rem]">We Get Pet Care!</h4>

            <p className="text-lg w-[60%]">
              For over 17 Years, Fetch! Pet Care has been a trusted partner in
              keeping pets healthy and happy!
            </p>
            <div className="flex justify-between items-center w-[50%] mt-10">
              <button className="bg-[#4487FF] p-4 rounded-full shadow-blue-700 shadow-md font-bold">
                Schedule Service
              </button>
              <p>Or Call 866.338.2463</p>
            </div>
          </div>
          <div className="relative h-80 w-80 bg-yellow-300 rounded-full overflow-hidden">
            <Image
              src="/dog_landing.png"
              alt="Perro"
              width={900}
              height={900}
              className=""
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
