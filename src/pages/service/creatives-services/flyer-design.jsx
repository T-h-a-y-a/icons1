import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const FlyerDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Creative Graphic Design Flyers & Promotional Flyer Services</title>
        <meta
          name="description"
          content="Professional flyer design services delivering visually striking, brand-focused flyers for marketing, events, and promotions in both print and digital formats."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/flyer-design-header.jpg"
          alt="Flyer Design services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Flyer Design Services to Promote Your Business with Impact
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          A well-designed flyer is one of the most effective ways to promote your business, event, or service. At our flyer design services, we specialize in creating visually striking and informative flyers that captivate your audience. Whether you need flyers for a marketing campaign, an event, or to advertise your products and services, our team ensures that your flyer stands out and grabs attention.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our creative graphic design flyers are tailored to communicate your message clearly and persuasively, while also reflecting your brand’s identity. We combine eye-catching graphics, bold typography, and compelling content to create flyers that not only look great but also drive action.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Flyer Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.FlyerDesign.map((card) => (
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
          Our Flyer Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.FlyerDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Flyer Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Increased Brand Awareness:</b>A professionally designed flyer boosts brand recognition, helping you stand out in a crowded market.
            </li>
            <li>
              <b>• Targeted Marketing:</b>Flyers are an excellent way to reach specific audiences, and our designs are targeted to communicate your message clearly and persuasively.
            </li>
            <li>
              <b>• Effective Call to Action:</b>Our creative graphic design flyer layouts emphasize calls to action, ensuring your flyer drives responses and conversions.
            </li>
            <li>
              <b>• Cost-Effective Promotion:</b>Flyers are an affordable marketing tool that provide a great return on investment, especially when designed to make an impact.
            </li>
            <li>
              <b>• Versatile Distribution Options:</b> Whether you’re handing them out at an event, posting them on a bulletin board, or sharing them digitally, our flyers are designed to work across various platforms.
            </li>
            <li>
              <b>• Long-Lasting Impact:</b>A well-designed flyer stays in the hands of your potential customers for a long time, continuing to promote your business even after it’s distributed.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Flyer Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored Designs for Your Brand:</b>Our flyer design services are fully customized to reflect your brand’s personality, ensuring consistency in all your marketing materials.
            </li>
            <li>
              • <b>Creative & Impactful Designs:</b>Our creative graphic design flyers are crafted to capture attention and deliver your message in a visually engaging way, making a memorable impact.
            </li>
            <li>
              • <b>Affordable & Transparent Pricing:</b>We offer competitive flyer cost design options, ensuring you get high-quality flyer designs without exceeding your budget.
            </li>
            <li>
              • <b>Fast & Reliable Turnaround:</b>We understand the importance of deadlines, and our team delivers high-quality flyers on time, ensuring your campaign stays on track.
            </li>
            <li>
              • <b>Expert Designers with Experience:</b>Our team has years of experience in designing flyers that help businesses and events stand out. We know what works and ensure your flyer achieves its purpose.
            </li>
            <li>
              • <b>Comprehensive Design Services:</b>From print to digital flyers, our design services flyer cater to both formats, allowing you to reach your audience wherever they are.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Grab Attention and Drive Action with Our Custom Flyer Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerDesigns;
