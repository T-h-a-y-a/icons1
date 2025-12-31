import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";

const PowerPointDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing PowerPoint Design & Presentation Services</title>
        <meta
          name="description"
          content="Outsourcing PowerPoint design services to create professional, engaging corporate presentations, pitch decks, and data-driven slides that impress audiences worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/powerpoint-design-services-header.jpg"
          alt="PowerPoint Design services globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional PowerPoint Design Services to Elevate Your Presentations
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          A well-designed PowerPoint presentation can significantly enhance your business communication. Whether you're presenting to investors, clients, or internal teams, the design of your slides can make a lasting impact. Our PowerPoint design services focus on creating visually engaging and professional slides that help you effectively convey your message. From corporate presentations to marketing pitch decks, we provide tailored solutions to meet your specific presentation needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our PowerPoint Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.PowerPointDesign.map((card) => (
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
          Our PowerPoint Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.PowerPointDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our PowerPoint Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Enhanced Professionalism:</b> A well-designed presentation elevates your professionalism, making your content stand out and helping you convey your message effectively.
            </li>
            <li>
              <b>• Engaging Visuals:</b>Our focus on infographics, charts, and graphs transforms your data into engaging visuals, making your presentation easy to follow and understand.
            </li>
            <li>
              <b>• Improved Audience Engagement:</b>With visually appealing designs, your audience stays engaged, ensuring they absorb your message and stay interested throughout your presentation.
            </li>
            <li>
              <b>• Brand Consistency:</b>We incorporate your brand’s colors, fonts, and style into every slide, ensuring your presentation aligns with your overall branding.
            </li>
            <li>
              <b>• Clear Communication:</b>Our business presentation design services ensure that your content is communicated in a structured, easy-to-follow format, increasing understanding and retention.
            </li>
            <li>
              <b>• Fast Turnaround:</b>We understand deadlines and strive to deliver your PowerPoint design quickly without sacrificing quality, ensuring you’re ready on time for your presentation.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our PowerPoint Design Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Custom Designs Tailored to Your Brand:</b>Our business presentation design services ensure each slide reflects your unique brand identity, helping to reinforce your message and connect with your audience.
            </li>
            <li>
              • <b>Experienced Designers:</b>Our team of expert designers brings years of experience in creating corporate PowerPoint design services, making sure your presentation stands out in both content and design.
            </li>
            <li>
              • <b>Visually Engaging Presentations:</b>We focus on creating slides that are not only visually attractive but also communicate your ideas clearly, using professional PowerPoint layout techniques to enhance readability and engagement.
            </li>
            <li>
              • <b>Comprehensive Services:</b>From research analysis PPT design to infographic design, we offer comprehensive solutions that cater to all aspects of your presentation, ensuring consistency and impact throughout.
            </li>
            <li>
              • <b>Time-Saving Solutions:</b>Let our designers handle the heavy lifting! Our PowerPoint presentation design services save you time, allowing you to focus on your message while we perfect the visuals.
            </li>
            <li>
              • <b>Affordable & High-Quality Designs:</b>We offer cost-effective presentation services without compromising on quality, ensuring that you get a professional-looking PowerPoint at a competitive price.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Impress Your Audience with Our Custom PowerPoint Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPointDesign;
