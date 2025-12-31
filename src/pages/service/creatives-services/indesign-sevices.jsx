import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";

const InDesignService = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Adobe InDesign & Web-to-Print Solutions</title>
        <meta
          name="description"
          content="Professional InDesign services, from Kindle conversions to workflow automation and plugin development, helping brands streamline design and publishing processes."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/indesign-services-header.jpg"
          alt="InDesign services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional InDesign Services to Streamline Your Design and Publishing Workflow
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our InDesign company, we specialize in providing comprehensive InDesign solutions that streamline your design and publishing workflows. Whether you’re working on print materials, digital publications, or creating interactive documents, we have the expertise to help you achieve high-quality results. Our Adobe InDesign services cater to a variety of industries, from publishing and marketing to e-commerce, offering flexible and innovative solutions that meet your needs.
        </p>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          We understand the power of Adobe InDesign in designing professional layouts, and our services are designed to maximize its potential. With our customized web-to-print solutions, workflow automation services, and InDesign plugin development services, we ensure that your projects run smoothly, from creation to final output.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our InDesign Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.InDesignService.map((card) => (
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
          Our InDesign Services Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.InDesignService} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our InDesign Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Enhanced Productivity:</b>With our web2print solutions and workflow automation services, you can speed up your design processes, allowing your team to focus on creativity and innovation.
            </li>
            <li>
              <b>• Consistency Across Platforms:</b>Our services help ensure your designs are consistent across all formats, whether you’re printing or publishing online, providing professional-grade results every time.
            </li>
            <li>
              <b>• Customizability & Flexibility:</b>Our Adobe InDesign plugin development services allow for tailored features that fit your specific design and business needs, enhancing your workflow.
            </li>
            <li>
              <b>• Cost-Efficient:</b>By automating processes and integrating design systems, we help reduce costs associated with manual tasks and improve operational efficiency.
            </li>
            <li>
              <b>• Streamlined Workflow:</b>Adobe InDesign server integration services and web-to-print solutions simplify the design-to-print process, enabling faster project turnaround times and more efficient production.
            </li>
            <li>
              <b>• Scalability:</b>Our InDesign solutions grow with your business. Whether you're scaling up for larger print runs or expanding your online presence, we provide scalable services to meet your evolving needs.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our InDesign Services:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expert InDesign Knowledge:</b>As a leading InDesign company, we bring years of experience in utilizing InDesign for all types of design projects, ensuring quality and precision.
            </li>
            <li>
              • <b>Custom Solutions Tailored to Your Needs:</b>Whether you need web-to-print solutions or workflow automation services, we provide customized solutions that fit your specific business goals and design requirements.
            </li>
            <li>
              • <b>Seamless Integration:</b>Our web-to-print solutions and Adobe InDesign server integration services help streamline your processes, offering a smooth, efficient workflow from design to print.
            </li>
            <li>
              • <b>Innovative Approach:</b>Our Adobe InDesign plugin development services ensure that you have the latest tools and technology at your fingertips, helping you enhance your design process.
            </li>
            <li>
              • <b>Efficiency & Time-Saving:</b>We focus on automating processes with our workflow automation services, ensuring that your design and publishing processes are faster, more efficient, and error-free.
            </li>
            <li>
              • <b>End-to-End Support:</b>From the initial consultation to final deployment, we provide comprehensive support, ensuring your web-to-print solutions and InDesign systems work seamlessly and meet your expectations.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Enhance Your Creativity and Efficiency with Our Expert InDesign Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InDesignService;
