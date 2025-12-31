import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const ArtworkServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Creative Artwork Services Globally</title>
        <meta
          name="description"
          content="Outsource professional artwork services for print and digital. From book layouts to 2D art, we deliver creative visuals tailored to your brand."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/artwork-services-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Creative Artwork Services to Strengthen Your Brand’s Visual Impact
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          As a trusted artwork service provider, we offer end-to-end creative solutions for brands, publishers, and businesses seeking professional visual content. Our services cover print design, digital artwork, image optimization, and publication layouts, ensuring that your materials are not only visually stunning but also strategically aligned with your goals. Whether it’s for marketing campaigns, publishing, or corporate communications, we deliver artwork that is on-brand, impactful, and ready for immediate use.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Artwork services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.ArtworkServices.map((card) => (
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
          Our Artwork services Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.ArtworkServices} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Outsourcing Illustration Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Cost-Effective:</b>Save on in-house design costs and software investments.
            </li>
            <li>
              <b>• Expertise Access:</b> Work with skilled professionals experienced in diverse industries.
            </li>
            <li>
              <b>• Time-Saving:</b> Free up your resources while we handle the creative work.
            </li>
            <li>
              <b>• High-Quality Output:</b>Professionally designed visuals that enhance your brand.
            </li>
            <li>
              <b>• Scalability:</b>Flexible services for single projects or ongoing design needs.
            </li>
            <li>
              <b>• Consistency:</b>Maintain a unified brand look across all platforms.
            </li>
            <li>
              <b>• Quick Turnaround:</b>Prompt delivery that exceeds both time and quality expectations.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Artwork Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Proven experience delivering creative and brand-focused artwork.
            </li>
            <li>
              • Extensive experience in producing content optimized for print and digital platforms.
            </li>
            <li>
              • Strategic design solutions created to grow your brand and foster audience engagement.
            </li>
            <li>
              • Collaborative approach to bring your vision to life.
            </li>
            <li>
              • Reliable delivery with uncompromising quality standards.
            </li>
            <li>
              • Designs that look great and work strategically for your business.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Let’s turn your ideas into powerful visuals that captivate your audience and strengthen your brand identity.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkServices;
