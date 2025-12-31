import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-[#071D37]"
        poster="/assets/bg.jpg"
        src="/assets/bg.webm"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/bg.webm" type="video/webm" />
      </video>

      {/* Overlay Content */}
      <div
        className="
          flex flex-col md:flex-row gap-5
          z-10 px-6 md:pl-[10%] lg:pl-[15%] pb-[10%]
          h-full text-white w-full md:w-[80%] lg:w-[60%]
          relative
        "
      >
        {/* Vertical Line (visible on md+) */}
        <div className="hidden md:flex flex-col items-center justify-center pb-[20%] mr-5">
          <div className="w-[2px] h-[60px] bg-white"></div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 items-start justify-center w-full mt-20 sm:mt-16 md:mt-0">
          <div>
            <h3 className="text-xs sm:text-sm tracking-widest font-light text-white mb-2 fira-sans-thin-2">
              I-CONS TECHNOLOGIES
            </h3>
            <h1
              className="
              text-2xl sm:text-3xl md:text-[38px] lg:text-[44px]
              leading-snug md:leading-tight font-bold
              max-w-[700px]
            "
            >
              Empowering Businesses with Smart Outsourcing Solutions
            </h1>
            <p className="w-full md:w-[85%] text-sm sm:text-base text-[#f0bc44] font-light mt-4 poppins-regular">
              Strike a balance between technology and you with enterprise
              business process improvement strategies.
            </p>
          </div>

          {/* CTA Button */}
          <Link to={"/about"} className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#f0bc44] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group">
          READ MORE
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
