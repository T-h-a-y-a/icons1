import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const IllustratedLogoDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Illustrated Logo Design Services for Businesses Worldwide</title>
        <meta
          name="description"
          content="Professional illustrated logo design services creating hand-drawn, character-based, and symbolic logos that make your brand stand out globally."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/illustrated-logo-header.jpg"
          alt="Illustrated Logo services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Custom Illustrated Logo Design Services to Give Your Brand a Creative Edge
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          An Illustrated Logo Design is a unique and artistic way to bring your brand’s identity to life. At our agency, we specialize in creating custom illustrated logos that capture the essence of your business with creativity and flair. Whether you're a creative agency or a brand looking for something distinctive, our illustrative logo services offer a personalized and memorable design solution. We take pride in crafting brand logo illustrated concepts that stand out, offering a fresh approach to brand identity.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Illustrated Logo Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.IllustratedLogoDesign.map((card) => (
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
          Illustrated Logo Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.IllustratedLogoDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Illustrated Logo Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Memorable Brand Identity:</b>A custom illustrated logo makes your brand stand out and ensures it’s easily remembered by your audience.
            </li>
            <li>
              <b>• Enhanced Emotional Connection:</b> Illustrative logos build a stronger emotional connection with your audience by bringing personality and character to your brand.
            </li>
            <li>
              <b>• Increased Visual Appeal:</b>Artistic and creative illustration logos captivate attention, enhancing your brand’s visual impact and appeal.
            </li>
            <li>
              <b>• Flexible & Scalable Design:</b>Our illustrated logos maintain their quality and visual integrity across all sizes and formats, from websites to print materials.
            </li>
            <li>
              <b>• Versatility Across Platforms:</b>Brand logo illustrated designs adapt seamlessly across digital, print, and merchandise platforms, ensuring consistency in all formats.
            </li>
            <li>
              <b>• Unique Brand Representation:</b>Illustrated logo design offers a creative and distinctive representation of your brand, helping you differentiate from competitors.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Illustrated Logo Design Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Creative & Unique Designs:</b>We specialize in illustrated logo design, offering original and creative concepts that reflect your brand’s personality.
            </li>
            <li>
              • <b>Personalized Approach:</b>Every illustrative logo we create is custom-tailored to reflect your unique brand values and vision.
            </li>
            <li>
              • <b>Expert Designers:</b>Our team of experienced designers has the artistic skill to craft detailed and professional illustrative logos that make a lasting impact.
            </li>
            <li>
              • <b>Fast Turnaround Time:</b>We prioritize your time, delivering high-quality illustration logos in a timely manner.
            </li>
            <li>
              • <b>Affordable Pricing:</b>We offer competitive pricing for illustrated logo design services, providing great value without compromising quality.
            </li>
            <li>
              • <b>Long-Term Brand Appeal:</b>Our illustrative logos are designed to be timeless and versatile, ensuring your brand identity stays fresh and relevant over time.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Stand Out with a Unique Illustrated Logo Design — Start Your Project Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustratedLogoDesign;
