import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import ContactForm from "../../../components/hoz_contact";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const CroServices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global CRO Services to Grow Your Online Revenue </title>
        <meta
          name="description"
          content="Optimize your website with global CRO services to increase conversions, enhance user experience, and drive higher online revenue for your business."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/cro-services-header.jpg"
          alt="CRO services tailored globally with accuracy and reliable growth."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Expert CRO Services to Maximize Your Website’s Conversion Potential</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, our comprehensive CRO services are designed to help businesses unlock the full potential of their websites by turning visitors into loyal customers. Through in-depth analysis and strategic optimization, our CRO solutions focus on key metrics like bounce rate, click-through rate (CTR), pages per visit, and page load time to improve user experience and increase conversions.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">As a trusted provider of effective CRO service, we measure and enhance essential performance indicators such as leads generated, website traffic, exit rate, and cost per conversion, ensuring that every aspect of your digital presence drives business growth and delivers a strong return on investment.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our CRO Services Include</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.cro_services.map((card) => (
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
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>
       
        <div>
        <Ourpages cards={digital_marketing.digital_marketing_card} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our CRO Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Higher Conversion Rates:</b>Turn more visitors into customers through targeted improvements.
            </li>
            <li>
             <b>•	Improved User Experience:</b>Create seamless, engaging interactions that encourage action.
            </li>
            <li>
              <b>•	Increased Revenue:</b>Optimize marketing spend and boost sales with measurable impact.
            </li>
            <li>
              <b>•	Better Website Performance:</b>Faster load times and intuitive navigation reduce drop-offs.
            </li>
            <li>
              <b>•	Actionable Insights:</b> Ongoing analytics help refine strategies for continuous growth.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for CRO Solutions?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Data-Driven Approach:</b>We leverage analytics and user insights to inform every optimization decision.
            </li>
            <li>
             <b>•	  Customized Strategies:</b>Tailored CRO plans designed to meet your specific business goals.
            </li>
            <li>
              <b>•	Continuous Testing:</b>Extensive A/B and multivariate testing ensure optimal performance and results.
            </li>
            <li>
              <b>•	Experienced Team:</b> Skilled specialists with proven success across a variety of industries.
            </li>
            <li>
              <b>•	Transparent Reporting:</b> Clear metrics and reports that demonstrate progress and ROI.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies for expert CRO services that enhance every aspect of your website’s performance.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CroServices;
