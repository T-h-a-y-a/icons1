import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const BusinessLogoDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Business Logo Design Services for Global Brands</title>
        <meta
          name="description"
          content="Professional business logo design services that deliver unique, high-quality logos to strengthen your brand identity and recognition worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/business-logo-header.jpg"
          alt="Business Logo services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Custom Business Logo Design Services to Build a Powerful Brand Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Your business logo is a key element of your brand identity, making it essential to create a design that is unique, professional, and reflective of your brand values. At our agency, we specialize in delivering custom Business Logo Design Services that are tailored to elevate your brand and make a lasting impression. Whether you’re launching a new business or rebranding an existing one, we are here to help you create a logo that resonates with your target audience and sets you apart.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Business Logo Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.BusinessLogoDesign.map((card) => (
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
          Our Business Logo Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.BusinessLogoDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Business Logo Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Stronger Brand Identity:</b>A custom logo helps your business establish a unique, recognizable identity that sets you apart from competitors.
            </li>
            <li>
              <b>• Increased Brand Recognition:</b>A well-designed logo boosts visibility, making your business more memorable to your audience.
            </li>
            <li>
              <b>• Timeless & Professional Design:</b>Our logos are built to stand the test of time and convey professionalism, making sure your brand remains relevant for years to come.
            </li>
            <li>
              <b>• Versatility Across Platforms:</b>We ensure your logo works seamlessly across all media—print, digital, and merchandise—without losing quality.
            </li>
            <li>
              <b>• Emotional Connection:</b>Our logos are designed to connect with your target audience on an emotional level, enhancing brand loyalty and trust.
            </li>
            <li>
              <b>• Boosts Business Credibility:</b>A professionally designed logo builds trust and credibility, helping your business appear more established and reliable.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our Business Logo Design Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Custom, Tailored Designs:</b>We create logos that are uniquely crafted to reflect your business’s identity, values, and goals.
            </li>
            <li>
              • <b>Professional & Experienced Team:</b> Our talented designers bring years of experience to deliver high-quality logos that capture the essence of your brand.
            </li>
            <li>
              • <b>Fast & Reliable Service:</b>We understand the importance of time and deliver high-quality designs on time, every time.
            </li>
            <li>
              • <b>Affordable Pricing:</b>Get a stunning, professional logo at a competitive price, without compromising on quality.
            </li>
            <li>
              • <b>Scalable & Versatile Logos:</b>Our logos are designed to look great on all platforms, from websites to business cards, ensuring consistency across all mediums.
            </li>
            <li>
              • <b>Long-Term Brand Support:</b>We believe in building lasting relationships and offer ongoing support as your brand grows and evolves.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Get a Unique, Professional Logo with Our Business Logo Design Services — Start Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogoDesign;
