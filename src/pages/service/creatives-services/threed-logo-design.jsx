import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import { Link } from "react-router-dom";

const ThreeDLogoDesignServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing 3D Logo Design Services Globally</title>
        <meta
          name="description"
          content="Outsourcing 3D logo design services to create stunning, high-quality logos that add depth, dimension, and sophistication to your brand worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/3d-logo-header.jpg"
          alt="3D Logo services tailored globally with creativity and innovation."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Expert 3D Logo Design Services to Elevate Your Brand Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Your business logo is the face of your brand, and a well-designed logo can leave a lasting impression. At our agency, we specialize in creating 3D logo designs that add depth, dimension, and sophistication to your brand’s identity. Whether you're looking to enhance an existing logo or develop a new one, our team is here to help you craft a memorable, professional logo that stands out from the competition.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our 3D Logo Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.threeDLogoServices.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <div className="flex gap-3 pb-3 items-center">
                <img src={card.image} className="w-10 " alt={card.alt} />
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
              <div>
                
              </div>
              <p className="text-gray-600 text-justify pb-4">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our 3D Logo Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.threeDLogoServices} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our 3D Logo Designs:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Increased Visual Appeal:</b>3D logos offer depth and dimension that grab attention and make your brand stand out.
            </li>
            <li>
              <b>• Stronger Brand Recognition:</b>A unique 3D logo makes your brand memorable and helps improve customer recall.
            </li>
            <li>
              <b>• Modern, Cutting-Edge Design:</b>Our 3D logos reflect a contemporary, innovative brand image that keeps you ahead of the competition.
            </li>
            <li>
              <b>• Enhanced Versatility:</b>3D logos maintain their impact across all media, from websites to business cards and merchandise.
            </li>
            <li>
              <b>• A Timeless Brand Identity:</b>A well-crafted 3D logo evolves with your business, ensuring a lasting, relevant visual identity.
            </li>
            <li>
              <b>• Differentiation from Competitors:</b>Stand out from the crowd with a 3D logo that sets your brand apart and catches attention.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your 3D Logo Design:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Experienced & Talented Designers:</b>Our expert team delivers high-quality 3D logo designs that capture your brand’s essence.
            </li>
            <li>
              • <b>Custom & Unique Designs:</b>We create logos that are tailor-made to reflect your business’s personality and values.
            </li>
            <li>
              • <b>End-to-End Design Service:</b>From concept to delivery, we manage the entire process, ensuring a smooth, collaborative experience.
            </li>
            <li>
              • <b>Affordable Pricing & Fast Turnaround:</b>We offer competitive prices with quick delivery times, providing excellent value without compromising on quality.
            </li>
            <li>
              • <b>Versatility Across Mediums:</b>Our 3D logos are designed to look great on all platforms, from digital to print and everything in between.
            </li>
            <li>
              • <b>Long-Term Support:</b>We provide ongoing support for future branding and logo updates as your business evolves.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Transform Your Brand with a Stunning 3D Logo Design — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDLogoDesignServices;
