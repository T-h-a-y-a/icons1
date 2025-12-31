import React from "react";
import service from "../../data/Home/service.json";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#F8F4F3]"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      {/* Background overlay to hide image initially, becomes more transparent on hover */}
      <div className="absolute inset-0 bg-white/90 hover:bg-white/60 transition-all duration-500 z-0"></div>

      {/* Main content sits above the overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-center justify-center py-16">
          <h6 className="text-sm font-bold uppercase tracking-widest text-[#f0bc44] mb-2 playfont">
            Best Features
          </h6>
          <h4 className="playfont text-4xl">Our Services</h4>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16"
          data-wow-delay=".3s"
        >
          {service.services.map((item) => (
            <div
              className="item-bx p-6 bg-white bg-opacity-80 hover:bg-opacity-95  rounded shadow-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
              key={item.id}
            >
              <h2 className="numb text-2xl font-bold mb-2">{item.id}</h2>
              <h6 className="mb-4 text-lg font-semibold .playfont-2">{item.title}</h6>
              <p className="mb-4 text-sm text-black-700">{item.content}</p>
              <Link
                to={item.link}
                className="more mt-4 inline-block text-[#f0bc44] font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
