import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const RetailAnalytics = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Data Analytics Services | Icons Technologie</title>
        <meta
          name="description"
          content="Outsourced data analytics services to help your business gain insights, optimize operations, and make smarter decisions with Icons Technologies."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/retail-analytics-header.jpg"
          alt="i-Cons Technologies – Retail analytics solutions for business growth"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Drive Retail Success with Advanced Retail Analytics Solutions</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we provide innovative retail analytics solutions that empower retail businesses to make data-driven decisions that optimize operations, enhance customer experiences, and maximize profitability. Our comprehensive retail analytics platform is designed to transform your data into actionable insights, helping you stay ahead of the competition in a fast-paced retail environment.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Retail Analytics Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.retail_analytics.map((card) => (
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
        <Ourpages cards={Data_Analysis.cards} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Retail Analytics?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             •	Comprehensive Analytics Platform: Our retail analytics platform combines all aspects of your business—from pricing and inventory management to customer behaviour analysis—into one easy-to-use solution.
            </li>
            <li>
            •	Data-Driven Insights: We provide retail data analytics that deliver actionable insights to help you optimize your operations and make informed decisions across your entire retail ecosystem.
            </li>
            <li>
              •	Tailored Solutions: Whether you're a small boutique or a global retail chain, we offer customized retail analytics solutions designed to meet your specific business goals and challenges.
            </li>
            <li>
         •	Maximized Profitability: By using retail pricing analytics, inventory optimization, and sales performance analysis, we help you maximize profitability while maintaining customer satisfaction.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Start Your Journey to Data-Driven Success Today!
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailAnalytics;
