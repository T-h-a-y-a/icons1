import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const BrandLogoDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Brand Logo Design Services for Global Businesses</title>
        <meta
          name="description"
          content="Outsourcing brand logo design services to create unique, professional logos that enhance identity, boost recognition, and connect with audiences globally."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/branding-design-services-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Creative Brand Logo Design Services to Define Your Unique Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Your logo is the face of your brand. At our agency, we specialize in Brand Logo Design Services that help create a unique and memorable identity for your business. Whether you’re a startup or an established company, we craft logos that represent your values and connect with your target audience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Brand Logo Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.BrandLogoDesign.map((card) => (
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
          Brand Logo Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.BrandLogoDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Brand Logo Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Enhanced Brand Identity:</b>A custom-designed logo gives your business a unique identity that sets you apart from competitors.
            </li>
            <li>
              <b>• Increased Recognition:</b>A well-crafted logo enhances your brand’s visibility, making it more memorable to your target audience.
            </li>
            <li>
              <b>• Long-Lasting Appeal:</b>Our logos are timeless, designed to grow with your brand and remain relevant as your business evolves.
            </li>
            <li>
              <b>• Consistent Branding Across Platforms:</b>We ensure your logo looks great and maintains consistency across all marketing materials, from websites to merchandise.
            </li>
            <li>
              <b>• Emotional Connection:</b>We design logos that connect emotionally with your audience, fostering trust and loyalty.
            </li>
            <li>
              <b>• Scalable & Versatile Design:</b>Our logos are created to be scalable and adaptable, ensuring they maintain quality across different sizes and formats.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Brand Logo Design Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Experienced & Creative Designers:</b>Our team has the skills and expertise to create logos that make a lasting impression and capture your brand’s essence.
            </li>
            <li>
              • <b>Tailored Solutions:</b>We don’t believe in one-size-fits-all; each logo is custom-designed to reflect your business’s unique identity.
            </li>
            <li>
              • <b>Quick & Efficient Turnaround:</b>We respect your time and ensure a fast, efficient design process while maintaining the highest quality.
            </li>
            <li>
              • <b>Affordable & Competitive Pricing:</b>Get top-quality logo design services at competitive rates that fit within your budget.
            </li>
            <li>
              • <b>Strong Brand Impact:</b>We design logos that resonate with your target audience, making your brand more recognizable and memorable.
            </li>
            <li>
              • <b>Ongoing Support:</b>We offer continuous support even after the project is completed, helping you with any future branding or design needs.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Build a Memorable Brand with Our Professional Brand Logo Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoDesign;
