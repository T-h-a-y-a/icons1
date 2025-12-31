import React from "react";
import { Helmet } from "react-helmet-async";
import software from "../../../data/Home/software.json"
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const EndToEnd = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Software Development Services Worldwide</title>
        <meta
          name="description"
          content="Providing top software development services worldwide. Expert team delivering custom solutions tailored to your business needs for global clients."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/end-to-end-software-digital-solutions.jpg"
          alt="Software Solutions tailored globally with quality and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Experience Innovation & Reliability with Comprehensive Software Development Services at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">I-Cons Technologies delivers innovative software designed to empower businesses with scalability, robust security, and seamless usability. Leveraging industry best practices, advanced technologies, and expert insights, we transform your ideas into powerful digital products that drive growth and efficiency.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Software Development Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {software.endtoend.map((card) => (
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
          Our Software Development Process at I-Cons Technologies
        </h3>
      </div>
         
      <div>
        <Ourpages cards={software.endtoend_card} />
      </div>
 <div>
                <ContactForm />
              </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Partnering with I-Cons Technologies.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Scalable & Future-Ready Software:</b>Solutions designed to grow with your business and adapt to emerging trends.
            </li>
            <li>
              • <b>Enhanced User Engagement:</b>Intuitive designs and seamless functionality to maximize user satisfaction.
            </li>
            <li>
              • <b>Optimized Business Operations:</b>Streamlined processes and automation reduce costs and increase efficiency.
            </li>
            <li>
              • <b>Data-Driven Insights:</b>Empower decision-making with actionable analytics and research.
            </li>
            <li>
              • <b>Integrated Digital Solutions:</b>From marketing to cloud services, a full-stack approach to digital transformation.
            </li>
          </ul>

          <h4 className="pt-5 playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Software Development?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Industry Expertise & Proven Track Record:</b>Our skilled developers and consultants bring years of experience across diverse industries, delivering reliable solutions that meet global standards.
            </li>
            <li>
              • <b>Cutting-Edge Technologies:</b>We use the latest frameworks, tools, and methodologies—including Agile and DevOps—to accelerate your project delivery.
            </li>
            <li>
              • <b>Customized Solutions:</b>Customized software solutions created to seamlessly integrate with your business processes and needs.
            </li>
            <li>
              • <b>Security & Compliance Focus:</b>We prioritize data protection and regulatory compliance, ensuring your software is secure and trustworthy.
            </li>
            <li>
              • <b>Transparent Communication & Agile Workflow:</b>Regular updates and collaborative processes keep you in control throughout the development lifecycle.
            </li>
            <li>
              • <b>Comprehensive Support & Maintenance:</b>Our commitment extends beyond launch, offering fast issue resolution and continuous improvements.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Unlock the full potential of technology with I-Cons Technologies — your trusted partner for innovative, reliable, and secure software development services.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndToEnd;
