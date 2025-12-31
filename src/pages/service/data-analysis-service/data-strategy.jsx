import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataStrategy = () => {
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
          src="/assets/data-strategy-header.jpg"
          alt="i-Cons Technologies – Smart data strategy services for global businesses"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Transform Your Business with Expert Data Strategy Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we understand that a well-defined data strategy is essential for businesses seeking to harness the full potential of their data. Our data strategy consulting services are designed to help organizations build robust data frameworks that drive growth, innovation, and efficiency. Whether you're looking to enhance data governance, improve analytics capabilities, or align your data with business objectives, our team of expert data strategy consultants is here to guide you every step of the way.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Data Strategy Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.data_strategy_card.map((card) => (
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
            Why Choose i-Cons Technologies for Data Strategy Consulting?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              •	Expert Consultants: Our data strategy consultants bring deep expertise across various industries, helping businesses of all sizes develop customized data strategies.
            </li>
            <li>
             •	Comprehensive Approach: Our data strategy consulting services cover all aspects of data management, from governance and compliance to advanced analytics and data transformation.
            </li>
            <li>
              •	Personalized Solutions: We understand that every business has its own distinct needs. That's why our data consultancy services are crafted to align with your unique data challenges and business goals.
            </li>
            <li>
              •	Proven Track Record: As a leading provider of data consulting services, we have successfully helped numerous organizations transform their data into strategic assets that drive business growth.
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

export default DataStrategy;
