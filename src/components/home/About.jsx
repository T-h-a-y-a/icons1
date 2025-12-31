import React from "react";
import home_about from "../../data/Home/home_about.json";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 bg-white">
        {/* Left Video & Experience Box */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
          <div className="relative w-[90%] sm:w-[80%] md:w-[70%] h-full rounded-lg overflow-hidden shadow-lg">
            {/* Video */}
            <video
              src={home_about.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Since */}
            <div className="absolute top-4 right-4 text-[#f0bc44] text-xs sm:text-sm font-semibold uppercase tracking-widest">
              <span>Since </span>
              {home_about.exp.since}
            </div>

            {/* 21+ Years */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="playfont text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-bold text-gray-300 leading-none">
                {home_about.exp.nmb}
              </h2>
              <h5 className="text-sm sm:text-base tracking-widest text-[#f0bc44] mt-1">
                Years Experience
              </h5>
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="flex flex-row items-center mb-4 gap-4">
            <hr className="w-8 h-[2px] bg-[#f0bc44] mb-2" />
            <h6 className="text-sm font-bold uppercase tracking-widest text-[#f0bc44] mb-2 playfont">
              About Us
            </h6>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight playfont">
            {home_about.title.first} <br /> {home_about.title.second}
          </h2>
          <h5 className="text-lg sm:text-xl font-semibold text-black mb-4 playfont leading-relaxed">
            {home_about.title.third}
          </h5>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 poppins-regular">
            {home_about.content}
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 playfont">
            {home_about.numbers.map((item) => (
              <div key={item.id} className="text-center">
                <h3 className="text-3xl flex items-center justify-center sm:text-4xl font-bold text-[#f0bc44]">
                  {/* {item.number} */}
                  <CountUp 
                    end={item.number}
                    duration={5}
                    />
                    <p>{item.plus}</p>
                </h3>
                
                <h6 className="text-xs sm:text-sm tracking-widest font-semibold text-[#333] mt-2">
                  {item.name.toUpperCase()}
                </h6>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;