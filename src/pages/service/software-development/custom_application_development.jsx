import React from "react";
import { Helmet } from "react-helmet-async";
import software from "../../../data/Home/software.json"
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const CustomApplicationDevelopment   = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Custom App Solutions | I-Cons Technologies</title>
        <meta
          name="description"
          content="Custom app development made simple. I-Cons Technologies delivers smart, global solutions for all your business needs."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/custom-application-development-lifecycle-support.jpg"
          alt="Custom Application Development globally with quality and innovation."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Experience Tailored Innovation with Custom Application Development at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we deliver custom application development services designed to meet your unique business challenges and growth objectives. Leveraging the latest technologies and best practices, our solutions span web, desktop, and mobile platforms—ensuring scalable, secure, and user-centric applications that evolve with your business.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Custom Application Development Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {software.custom_application.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          > 
          <div className="flex gap-3 pb-3 items-center">
             <img src={card.image} className="w-10 " alt={card.alt} />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          </div>
            <p className="text-gray-600 text-justify">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Custom Application Development Process at I-Cons Technologies
        </h3>
      </div>
       
      <div>
        <Ourpages cards={software.custom_application_card} />
      </div>
 <div>
                <ContactForm />
              </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Partnering with I-Cons Technologies
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Solutions crafted to align perfectly with your operational needs and strategic goals.
            </li>
            <li>
              • Scalable architectures designed to grow with your organization.
            </li>
            <li>
              • Enhanced user satisfaction through branded, intuitive UI/UX design.
            </li>
            <li>
              • Reduced operational risks with comprehensive testing and secure deployments.
            </li>
            <li>
              • Post-launch reliability that keeps your site running seamlessly while optimizing returns.
            </li>
            <li>
              • Ongoing innovation through regular feature enhancements and proactive performance monitoring.
            </li>
          </ul>

          <h4 className="pt-5 playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Custom Application Development?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expertise Across Platforms:</b>Our development teams bring deep experience in web, desktop, and mobile application technologies tailored to your industry and needs.
            </li>
            <li>
              • <b>User-Centric Design Philosophy:</b>We focus on creating intuitive interfaces that enhance usability and increase user retention.
            </li>
            <li>
              • <b>End-to-End Lifecycle Management:</b>We take ownership of the entire journey, from idea to upkeep, ensuring a smooth launch and sustained growth.
            </li>
            <li>
              • <b>Proven Quality & Security:</b>Through meticulous QA and proven security measures, we deliver applications that are both resilient and trustworthy.
            </li>
            <li>
              • <b>Agile & Transparent Collaboration:</b>With open communication and flexible workflows, we ensure you're always informed and actively involved.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
             Experience the power of custom-built applications combined with expert lifecycle support—only at I-Cons Technologies.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomApplicationDevelopment;
