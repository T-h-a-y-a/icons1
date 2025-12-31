import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataGovernance = () => {
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
          src="/assets/data-governance-header.jpg"
          alt="i-Cons Technologies – Data governance services for compliance & security"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Secure and Optimize Your Data with Expert Data Governance Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we recognize that data governance is a critical aspect of managing and protecting your organization's most valuable asset—its data. Our data governance consulting services help businesses create robust frameworks to ensure their data is accurate, secure, compliant, and accessible. Whether you're starting from scratch or looking to optimize your existing practices, our team of experienced data governance consultants is here to guide you through every step of the process.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Data Governance Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.data_governance_card.map((card) => (
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
            Why Choose i-Cons Technologies for Data Governance?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              •	Expert Consultants: Our data governance consulting team brings extensive experience in data management and governance, providing you with the expertise needed to optimize your data processes.
            </li>
            <li>
             •	Comprehensive Services: We offer end-to-end data governance services, including strategy development, data quality management, security, compliance, and privacy management.
            </li>
            <li>
              •	Personalized Solutions: We understand that every business has its own distinct needs. That's why our data consultancy services are crafted to align with your unique data challenges and business goals.
            </li>
            <li>
              •	Proven Success: As a trusted partner among data governance consulting firms, we have a proven track record of helping businesses manage their data more effectively, ensuring compliance and maximizing data value.
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

export default DataGovernance;
