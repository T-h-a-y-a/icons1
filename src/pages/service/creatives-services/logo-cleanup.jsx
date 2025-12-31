import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const LogoCleanup = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Logo Cleanup Services Worldwide</title>
        <meta
          name="description"
          content="Outsourcing professional logo cleanup services to refine, vectorize, and modernize your brand’s logo for perfect clarity across all media worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/logo-cleanup-header.jpg"
          alt="Logo Cleanup services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Logo Cleanup Services to Refresh and Refine Your Brand
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our agency, we understand the importance of a polished and professional logo. Whether your existing logo needs refinement or you want to update an old design, our Logo Cleanup Services help enhance the quality and clarity of your logo, ensuring it looks great on all mediums. We specialize in transforming outdated or low-quality logos into sharp, clear, and versatile designs that perfectly represent your brand.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Logo Cleanup Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.logoCleanup.map((card) => (
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
          Our Logo Cleanup Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.logoCleanup} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Logo Cleanup Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Polished, Professional Look:</b>We give your logo a clean, modern, and professional appearance that enhances your brand image.
            </li>
            <li>
              <b>• Scalable & Versatile Design:</b>A vectorized logo ensures perfect quality across all platforms and sizes without distortion.
            </li>
            <li>
              <b>• Better Brand Representation:</b>We ensure your logo reflects your values and resonates with your audience, strengthening your brand identity.
            </li>
            <li>
              <b>• Stronger Brand Recognition:</b>An updated logo helps your brand become more memorable and easily recognizable in the market.
            </li>
            <li>
              <b>• Time-Saving Efficiency:</b>Our quick turnaround times allow you to start using your updated logo sooner, without delays.
            </li>
            <li>
              <b>• Long-Term Logo Integrity:</b>We ensure your logo stays relevant and adaptable as your business grows and changes.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Logo Cleanup Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expert Designers:</b>We specialize in transforming logos into polished, professional designs that reflect your brand’s identity.
            </li>
            <li>
              • <b>High-Quality Vectorization:</b>We provide custom vectorized files that ensure your logo looks great at any size or resolution.
            </li>
            <li>
              • <b>Business-Centric Approach:</b>We tailor your logo to align with your business goals and audience, enhancing your brand message.
            </li>
            <li>
              • <b>Quick Turnaround Time:</b>We guarantee fast, efficient services, delivering your refined logo within the agreed timeframe.
            </li>
            <li>
              • <b>Affordable Services:</b>Our logo cleanup services offer high-quality results at competitive and budget-friendly prices.
            </li>
            <li>
              • <b>Ongoing Support:</b>We offer continuous design support, ensuring your brand remains consistent as it evolves.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Give Your Logo a Fresh, Polished Look — Try Our Logo Cleanup Services Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCleanup;
