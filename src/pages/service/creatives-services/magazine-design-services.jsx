import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const MagazineDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Digital & Print Magazine Design Services Worldwide</title>
        <meta
          name="description"
          content="We design eye-catching magazine covers, engaging article layouts, and professional typography for print and digital publications globally."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/magazine-design-services-header.jpg"
          alt="Magazine Design services globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Magazine Design Services to Captivate and Engage Readers
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our magazine design services are crafted to deliver visually captivating layouts, expertly designed covers, and engaging article layouts that captivate your audience. Whether you're launching a new magazine or looking to refresh an existing one, our team is here to provide end-to-end solutions for all your magazine design needs. With a keen eye for detail, we deliver designs that reflect the essence of your publication, enhance your brand, and create a lasting impression with every issue.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our services include magazine cover design, strategic layout design, and article magazine layout, ensuring that each page is not only aesthetically pleasing but also functional and easy to read. Our experience in the graphic design industry makes us the perfect partner for designing magazines that stand out in the market.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Magazine Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.MagazineDesigns.map((card) => (
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
          Our Magazine Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.MagazineDesigns} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Magazine Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Engaging and Professional Layouts:</b>Our magazine designs create visually engaging layouts that grab attention, making your magazine more appealing to readers.
            </li>
            <li>
              <b>• Consistent Brand Identity:</b>Every design, from the magazine cover design to the article magazine layout, is tailored to reflect and strengthen your brand’s identity.
            </li>
            <li>
              <b>• High-Quality Imagery:</b>Our premium photo editing service ensures your magazine’s visuals are of the highest quality, enhancing the overall appeal of your publication.
            </li>
            <li>
              <b>• Increased Readership and Engagement:</b>A well-designed magazine with an appealing visual design magazine can increase engagement, keeping your audience captivated and encouraging them to return for future issues.
            </li>
            <li>
              <b>• Seamless Integration for Digital Magazines:</b>Our digital magazine design services ensure your publication is optimized for web and mobile devices, offering a seamless experience across all platforms.
            </li>
            <li>
              <b>• Custom Solutions for Every Publication:</b>Whether you need custom book covers design or a book layout service, we offer tailored solutions to meet the unique needs of your publication, ensuring a personalized approach to every project.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our Magazine Design Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored Designs for Your Brand:</b>We create magazine cover designs and layouts that perfectly align with your brand’s identity, helping you stand out in the competitive magazine industry.
            </li>
            <li>
              • <b>Expert Design Team:</b>Our team of designers brings years of experience in the graphic design industry, specializing in creating stunning magazine designs that resonate with your readers.
            </li>
            <li>
              • <b>Comprehensive Services:</b> From book design services to graphic design books covers, we offer a full range of services, ensuring your magazine design needs are met under one roof.
            </li>
            <li>
              • <b>Print and Digital Expertise:</b>Whether it’s a personal magazine cover or a digital magazine design, we have the expertise to deliver exceptional designs for both print and digital formats.
            </li>
            <li>
              • <b>Efficient Project Management:</b>We prioritize deadlines and offer a smooth workflow, ensuring that your article magazine layout and visual design magazine are completed on time without compromising quality.
            </li>
            <li>
              • <b>Affordable & High-Quality Designs:</b>Our services are competitively priced, providing exceptional value for professional magazine design services that meet your specific requirements and vision.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Create Stunning, Reader-Friendly Magazines with Our Expert Magazine Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDesigns;
