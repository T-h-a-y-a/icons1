import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const Seo = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsource SEO Services Globally with i-cons Technologies</title>
        <meta
          name="description"
          content="Outsource SEO Services to i-cons Technologies and enhance your global search rankings. Tailored strategies for measurable business success."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/seo-header.jpg"
          alt="Outsource SEO services tailored globally with accuracy and results."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Expand Your Online Presence with I-Cons Technologies’ All-in-One SEO Solutions</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Need a trusted and experienced partner to handle your SEO strategy? At I-Cons Technologies, we specialize in providing full-spectrum SEO outsourcing services tailored to meet the diverse needs of businesses across industries. Our team of SEO experts uses ethical, data-driven strategies that align with Google’s best practices, ensuring your website not only ranks higher but also delivers a meaningful user experience.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">We’re a reliable SEO outsourcing partner dedicated to boosting your long-term search visibility, driving more organic traffic, and increasing conversion rates.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Core SEO Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.seo.map((card) => (
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
            Why Outsource SEO to I-Cons Technologies?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Experienced SEO Professionals:</b> Our team includes industry experts with hands-on experience in delivering successful SEO campaigns across multiple verticals.
            </li>
            <li>
             <b>•	Data-Driven Strategies:</b> Every decision is backed by in-depth analytics, keyword research, and market trends.
            </li>
            <li>
              <b>•	Cost-Effective SEO Outsourcing Services:</b> Reduce overhead costs while gaining access to premium SEO services at scale.
            </li>
            <li>
              <b>•	White-Label SEO Solutions:</b> From strategy development to execution, we provide full support in the process of monetizing your data, ensuring you see a return on investment.
            </li>
            <li>
              <b>•	Transparent Reporting:</b> Monthly reports and KPIs ensure you're always in the loop about your campaign’s performance.
            </li>
            <li>
              <b>•	Scalable Solutions:</b> Whether you’re a startup or a multi-location enterprise, our SEO strategies grow with your business.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies for SEO solutions that are transparent, ethical, and results-focused.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
