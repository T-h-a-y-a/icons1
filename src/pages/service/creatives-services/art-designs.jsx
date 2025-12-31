import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const ArtDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Custom Art Design & Artwork Services</title>
        <meta
          name="description"
          content="Outsourcing custom art design services to create unique, high-quality artwork for brands, projects, and personal use—crafted to match your vision worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/art-design-header.jpg"
          alt="Art Design services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Custom Art Design Services to Bring Your Unique Vision to Life
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our custom art design agency, we specialize in creating unique, personalized artwork that reflects your vision and brings your ideas to life. Whether you're looking for a one-of-a-kind custom artwork design for your brand, project, or personal collection, our team of talented artists is here to craft designs that are as individual as you are. We blend creativity, expertise, and innovation to create stunning artwork designs that capture the essence of your concept.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you're in need of illustrations, graphic art, or visual representations for your brand, our artwork design services are tailored to meet your specific needs. We focus on understanding your style and goals to ensure that the final piece perfectly aligns with your vision. Our custom artwork design services not only enhance your brand’s visual identity but also create lasting impressions on your audience. 
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Custom Art Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.ArtDesign.map((card) => (
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
          Our Art Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.ArtDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Custom Art Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Unique Visual Identity:</b>Custom art design creates a strong and unique visual identity that sets you apart from competitors and builds brand recognition.
            </li>
            <li>
              <b>• Enhanced Brand Engagement:</b>Original and visually appealing artwork designs engage your audience and create a memorable experience that connects with them on a deeper level.
            </li>
            <li>
              <b>• Versatile Application:</b>Our custom artwork design services ensure that your designs work seamlessly across digital and print formats, whether for websites, promotional materials, or packaging.
            </li>
            <li>
              <b>• Creative Excellence:</b>We bring your ideas to life with creativity and expertise, ensuring that every artwork design we create exceeds expectations.
            </li>
            <li>
              <b>• Long-Term Brand Impact:</b>High-quality, custom artwork design pieces contribute to a lasting visual identity that supports your brand’s growth and recognition over time.
            </li>
            <li>
              <b>• Personalized Designs:</b>Our custom art design services offer a completely personalized approach, ensuring the artwork reflects your unique preferences and requirements.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our Custom Art Design Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored to Your Vision:</b>Our custom art design services are built around your unique vision, ensuring each artwork piece reflects your personal or brand identity.
            </li>
            <li>
              • <b>Expert Designers:</b>Our talented team of designers has years of experience in creating custom artwork design solutions, ensuring the highest quality in every piece.
            </li>
            <li>
              • <b>Creative & Original Designs:</b>We pride ourselves on originality, delivering artwork designs that are fresh, unique, and creatively tailored to your needs.
            </li>
            <li>
              • <b>Comprehensive Art Services:</b>From illustrations to branding visuals, we offer a complete range of artwork designs, ensuring all your art needs are met under one roof.
            </li>
            <li>
              • <b>High-Quality Results:</b>We ensure that every custom artwork design is produced with meticulous attention to detail and crafted with quality in mind, whether it’s for digital or print.
            </li>
            <li>
              • <b>Collaborative Process:</b>Our process is highly collaborative, ensuring you are part of every stage of the design process, from concept to final delivery.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Create Stunning, One-of-a-Kind Artwork with Our Custom Art Design Services — Start Your Project Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDesigns;
