import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";

const BrandingDesignServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Branding Services for Strong Brand Identity</title>
        <meta
          name="description"
          content="Outsourcing branding services to create cohesive brand identities, from product packaging to brochures and business cards, for lasting global impact."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/branding-design-services-header.jpg"
          alt="Branding Design services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Comprehensive Branding Services to Build a Strong and Memorable Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our branding services are designed to help you build a strong, unified identity that resonates with your audience and sets you apart in a competitive market. Whether you're in need of brand marketing services, business branding services, or a complete brand identity service, our team is here to guide you in creating a memorable brand. We specialize in offering everything from product packaging design to brochure designs and business card designs, ensuring that every touchpoint of your brand is cohesive and impactful.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Branding Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.BrandingDesignServices.map((card) => (
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
              <Link
                to={card.link}
                className="relative overflow-hidden p-2 m-2 group border tracking-[2px] text-[13px] text-black font-semibold  transition-allisolation-auto border-gray-150 before:absolute before:w-full before:transition-all before:duration-700  before:hover:left-0  hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Branding Services Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.BrandingDesignServices} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Branding Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Stronger Brand Recognition:</b> Our branding services help create a consistent and recognizable identity that boosts brand visibility and loyalty.
            </li>
            <li>
              <b>• Improved Customer Engagement:</b> Engaging designs help create an emotional connection with your audience, driving higher engagement and loyalty.
            </li>
            <li>
              <b>• Increased Brand Appeal:</b>From flyer designs to product packaging design, we ensure your brand is visually appealing and aligned with your target market's preferences.
            </li>
            <li>
              <b>• Clear Communication:</b>We ensure your brand’s message is communicated effectively, no matter what type of design material you need—whether it's brochure designs or business card designs.
            </li>
            <li>
              <b>• Consistency Across Channels:</b> Our business branding services ensure your brand’s look and feel are consistent across all platforms, from online to print materials.
            </li>
            <li>
              <b>• Sustainable Brand Growth:</b>Our brand strategy services ensure your brand is built to grow and evolve over time, staying relevant in a constantly changing market.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Branding Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Comprehensive Branding Solutions:</b>We provide everything you need from business branding services to product packaging design, ensuring a cohesive brand image across all touchpoints.
            </li>
            <li>
              • <b>Custom Branding Approach:</b> Every project is tailored to meet your specific needs and goals, resulting in a unique and memorable brand identity.
            </li>
            <li>
              • <b>Experienced Team of Designers:</b>Our team brings years of experience in creating brands that stand out. We specialize in aligning your vision with your audience through strategic design.
            </li>
            <li>
              • <b>Fast & Efficient Service:</b>We deliver high-quality designs quickly, meeting your deadlines without compromising on quality.
            </li>
            <li>
              • <b>Affordable Pricing:</b>We offer competitive pricing for brand identity services and brand design services, ensuring you get great value without breaking the bank.
            </li>
            <li>
              • <b>Ongoing Brand Support:</b>Our partnership doesn’t end after the design process. We’re here to help with future brand development services and ongoing support as your business evolves.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Elevate Your Brand with Our Professional Branding Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingDesignServices;
