import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const BusinessCardDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Business Card Design Services for Global Brands</title>
        <meta
          name="description"
          content="Professional business card design services with custom graphics, premium finishes, and unique styles that make your brand unforgettable worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/business-card-design-header.jpg"
          alt="Business Card Design services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Custom Business Card Design Services to Make a Lasting First Impression
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our business card design service, we specialize in creating custom graphic design business cards that not only provide your contact information but also reflect the personality and professionalism of your brand. A well-designed business card leaves a lasting impact, sparking conversation and establishing trust from the very first exchange.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you're looking for sleek, minimalistic designs or something more creative and bold, our team of expert graphic designers ensures your business card stands out. We focus on quality, originality, and alignment with your overall branding strategy, ensuring that your business cards design reinforces your brand identity and makes you memorable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Business Card Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.BusinessCardDesign.map((card) => (
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
          Our Business Card Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.BusinessCardDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Business Card Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Professional Representation of Your Brand:</b>A well-designed business card instantly communicates professionalism, helping to establish trust with your clients and partners.
            </li>
            <li>
              <b>• Memorable First Impression:</b>Our creative graphic design business cards ensure that your business card makes a memorable impact, giving you an edge over competitors.
            </li>
            <li>
              <b>• Enhanced Networking Opportunities:</b>With unique and custom business cards design, you can stand out at networking events and ensure people remember your brand long after meeting you.
            </li>
            <li>
              <b>• Increased Brand Recognition:</b>Our business cards graphic design services help create a cohesive brand identity that reinforces your business image every time someone interacts with your card.
            </li>
            <li>
              <b>• Quality & Durability:</b>We ensure your business cards are made with high-quality materials, providing durability and a premium feel that reinforces your brand’s image.
            </li>
            <li>
              <b>• Creative Customization:</b>We offer creative options for your design business card, allowing you to customize your card with unique shapes, materials, and features that make it stand out from the crowd.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Business Card Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Customized Designs for Your Brand:</b>We specialize in design business card solutions that align perfectly with your brand’s identity and message, ensuring consistency across your branding materials.
            </li>
            <li>
              • <b>Experienced Graphic Designers:</b>Our team of expert brochure designers brings years of experience in crafting brochures that are not only visually appealing but also functional and strategic in conveying your message.
            </li>
            <li>
              • <b>Creative & Unique Designs:</b>We go beyond traditional designs to offer creative and innovative graphic design business cards that grab attention and make your brand memorable.
            </li>
            <li>
              • <b>Quality Materials & Finishes:</b>We use only the highest quality materials for printing, ensuring that your business cards graphic design stands out not only in aesthetics but also in tactile experience.
            </li>
            <li>
              • <b>Affordable Pricing & Fast Turnaround:</b>We offer competitive pricing for premium business card design, delivering top-notch results without breaking your budget and within the promised timelines.
            </li>
            <li>
              • <b>End-to-End Support:</b>From initial consultation to final delivery, we offer full support, guiding you through the entire design process and ensuring your business card design perfectly matches your vision.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Stand Out with Our Professional Business Card Design Services — Start Your Design Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardDesigns;
