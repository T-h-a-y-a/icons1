import React from "react";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DigitalMarketing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Digital Marketing Services for Global Businesses</title>
        <meta
          name="description"
          content="Outsource digital marketing services for global growth. SEO, PPC, social media & more to boost your business worldwide."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/digital-marketing-services-header.jpg"
          alt="Video Editing"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Digital Marketing Services
        </h1>
        <p className=" poppins-regular text-justify text-[#9f9f9f] text-lg md:text-[20px]  max-w-[58%] mx-auto mt-4 leading-relaxed ">
          At I-Cons Technologies, we specialize in offering comprehensive digital marketing services that drive growth and visibility for your business. Our team combines data-driven strategies with creative solutions to ensure measurable results. Whether you're looking to optimize your SEO, run targeted ad campaigns, or engage your audience through social media, we deliver tailored strategies to meet your needs. Trust us as one of the top digital marketing companies to take your online presence to new heights.
        </p>
        
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {digital_marketing.digital_marketing.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
                {item.heading}
              </h1>
              <Link
                to={item.link}
                className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
     

      
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Digital Marketing into Business Growth
        </h3>
      </div>

      
      <div>
        <Ourpages cards={digital_marketing.digital_marketing_card} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Outsource Digital Marketing Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expertise & Experience:</b> Our digital marketing team brings years of experience in SEO, SEM, SMM, CRO, and content marketing.
            </li>
            <li>
              • <b>Tailored Solutions:</b> We customize our digital marketing strategies to meet the unique needs and goals of your business.
            </li>
            <li>
              • <b>Cutting-Edge Tools:</b> We use the latest digital marketing tools and technologies to ensure you stay ahead of the competition.
            </li>
            <li>
              • <b>Comprehensive Approach:</b>Our integrated digital marketing strategies cover all channels to maximize your online visibility and conversions.
            </li>
            <li>
              • <b>Measurable Results:</b> We deliver results that you can track, measure, and optimize, ensuring a clear return on investment.
            </li>
            <li>
              • <b>Customer-Centric:</b> Our focus is on understanding your customers and creating campaigns that speak directly to their needs and interests.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Contact us to learn how our tailored digital marketing strategies can help your business succeed in the online world.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
