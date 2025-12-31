import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const IllustrationServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Illustration Services Worldwide</title>
        <meta
          name="description"
          content="Outsource expert illustration services globally. We deliver custom visuals—product, book, character, and more—to match your brand and vision."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/illustration-services-header.jpg"
          alt="Illustration services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Tailored illustration services that make your concepts come alive.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Premium illustration solutions crafted to reflect your brand’s individuality. From detailed product visuals to captivating character art, our expert illustrators ensure every piece reflects your vision and communicates your story effectively. Let us transform your ideas into stunning visuals that stand out in any medium.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our illustration services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.IllustrationServices.map((card) => (
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
          Our illustration services Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.IllustrationServices} />
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
              <b>• Cost-Effective:</b>Save on the expense of an in-house design team and software.
            </li>
            <li>
              <b>• Expertise:</b>Work with skilled illustrators proficient in diverse styles and industries.
            </li>
            <li>
              <b>• Time-Saving:</b>Focus on your core business while we handle the creative process.
            </li>
            <li>
              <b>• High-Quality Results:</b>Professionally crafted artwork that aligns with your brand identity.
            </li>
            <li>
              <b>• Scalability:</b>Flexible services for both one-off and long-term projects.
            </li>
            <li>
              <b>• Fresh Creative Ideas:</b>New perspectives that bring innovation to your brand visuals.
            </li>
            <li>
              <b>• Consistency:</b>Uniform quality and style across all your illustrations.
            </li>
            <li>
              <b>• Faster Turnaround:</b>Our dedicated team delivers your artwork promptly and efficiently.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Illustration Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Proven track record in delivering creative, brand-focused illustrations.
            </li>
            <li>
              • Expertise across multiple illustration styles and mediums.
            </li>
            <li>
              • Personalized artwork developed to align with your audience’s needs and your vision.
            </li>
            <li>
              • High attention to detail in every project.
            </li>
            <li>
              • On-time delivery without compromising on quality.
            </li>
            <li>
              • Eye-catching designs crafted to align with your brand strategy.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               From Concept to Canvas — Begin Your Custom Illustration Journey!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationServices;
