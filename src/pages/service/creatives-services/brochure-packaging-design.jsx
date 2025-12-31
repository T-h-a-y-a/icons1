import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const BrochurePackagingDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Custom Brochure Design & Digital Brochure Services</title>
        <meta
          name="description"
          content="Professional brochure design services for print and digital formats. We craft engaging, brand-aligned brochures that drive interest and conversions globally."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/brochure-packaging-design-header.jpg"
          alt="Brochure Packaging Design services globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Brochure Design Services to Showcase Your Brand Effectively
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          A well-designed brochure is a powerful tool for communicating your brand’s message, showcasing your products or services, and engaging potential customers. At our brochure design agency, we specialize in creating high-quality, visually appealing brochures that effectively communicate your business’s value while representing your brand’s identity. Whether you need a traditional printed brochure or a digital brochure design that shines online, we provide brochure designing services tailored to your needs.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our experienced brochure designers work closely with you to craft a brochure that tells your story, highlights your unique selling points, and makes a lasting impression. From initial concepts to final design, we ensure every detail is considered to deliver a product that perfectly aligns with your brand.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Brochure Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.BrochureDesign.map((card) => (
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
          Our Brochure Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.BrochureDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Brochure Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Professional Brand Representation:</b>Our brochures are designed to reflect your brand’s professionalism, helping you build trust with your audience.
            </li>
            <li>
              <b>• Increased Engagement:</b>A well-designed brochure grabs attention, sparking curiosity and engagement among your potential customers.
            </li>
            <li>
              <b>• Improved Information Delivery:</b>We craft brochures that clearly communicate your message, making it easy for customers to understand your offerings and take action.
            </li>
            <li>
              <b>• Multi-Platform Compatibility:</b>Whether in print or digital format, our designs are optimized to look great across all platforms, reaching your audience wherever they are.
            </li>
            <li>
              <b>• Greater Conversion Rates:</b>Our brochures are designed with conversion in mind, effectively guiding your audience to take the next step—whether it’s purchasing a product, signing up, or contacting you.
            </li>
            <li>
              <b>• Long-Lasting Impact:</b> A great brochure remains in circulation for a long time, continuing to generate interest and lead conversions long after it’s been distributed.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Brochure Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored to Your Brand:</b>Every brochure we design is custom-tailored to reflect your unique brand identity, ensuring your business stands out and communicates effectively with your audience.
            </li>
            <li>
              • <b>Experienced Designers:</b>Our team of expert brochure designers brings years of experience in crafting brochures that are not only visually appealing but also functional and strategic in conveying your message.
            </li>
            <li>
              • <b>Versatility in Design Styles:</b>Whether you need a traditional printed brochure or a digital version, our brochure designing services cover all design styles and formats to meet your needs.
            </li>
            <li>
              • <b>Quick Turnaround:</b>We understand the importance of deadlines. Our team is committed to delivering high-quality brochures on time, without compromising on quality.
            </li>
            <li>
              • <b>Competitive Pricing:</b>As a leading brochure design agency, we provide top-quality brochure designs at affordable prices, ensuring you get the best value for your investment.
            </li>
            <li>
              • <b>Ongoing Support:</b>We don’t just stop at the delivery. Our brochure designing company offers ongoing support for future design revisions and updates, ensuring your brochure stays relevant and up-to-date.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Bring Your Brand to Life with Our Custom Brochure Design Services — Get Started Today! 
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePackagingDesign;
