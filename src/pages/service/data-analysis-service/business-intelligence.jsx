import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const BusinessIntelligence = () => {
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
          src="/assets/business-intelligence-header.jpg"
          alt="i-Cons Technologies – Business intelligence solutions worldwide"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Empower Your Business with Business Intelligence Dashboard Creation</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we specialize in providing cutting-edge business intelligence and dashboard solutions that empower organizations to make data-driven decisions with ease. Our custom dashboard development process is designed to deliver tailored business intelligence dashboards that bring key metrics, performance indicators, and actionable insights right to your fingertips. With our dash boarding services, you can optimize operations, monitor marketing efforts, and drive business growth efficiently.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Business Intelligence Dashboard Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.business_intelligence.map((card) => (
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
         Why Choose i-Cons Technologies for Business Intelligence Dashboard Creation?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             •	Tailored Dashboard Solutions: We understand that every business is unique. Our dashboard business intelligence services are customized to meet your specific needs, ensuring that you get the insights that matter most for your business operations.
            </li>
            <li>
            •	Comprehensive Reporting: Our reporting business intelligence solutions give you detailed, actionable reports at your fingertips. Whether you’re tracking operations, sales, or marketing performance, our dashboards provide real-time data that helps you stay ahead of the curve.
            </li>
            <li>
              •	Real-Time Data Visualization: Our business intelligence dashboards are designed to display real-time data, ensuring you have the most up-to-date information available for decision-making.
            </li>
            <li>
              •	Easy-to-Use Interfaces: We focus on creating dashboards with user-friendly interfaces, making it easy for your teams to interact with and understand data, regardless of their technical expertise.
            </li>
            <li>
               •	Improved Decision-Making: By consolidating data into intuitive, actionable dashboards, we empower your organization to make smarter, data-driven decisions that drive growth and profitability.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
         The Dashboard Development Process at i-Cons Technologies
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             1.	Consultation and Discovery: We begin by understanding your business needs, goals, and objectives. This allows us to determine which dashboard in business intelligence would be most beneficial for your organization.
            </li>
            <li>
           2.	Data Integration: We integrate data from your existing systems, ensuring that your dashboards pull from all necessary data sources, including sales, marketing, operations, and more.
            </li>
            <li>
              3.	Design and Customization: Our team designs visually engaging, user-friendly dashboards that focus on presenting the most relevant KPIs and metrics. Whether it's an operations dashboard, sales dashboard, or executive dashboard, each dashboard is customized to your specific needs.
            </li>
            <li>
              4.	Implementation and Training: After the dashboards are developed, we implement them into your business systems and provide training for your teams on how to leverage them effectively.
            </li>
            <li>
               5.	Ongoing Support and Optimization: We offer continuous support and optimization services, ensuring your dashboards evolve with your business and continue to provide valuable insights as your needs change.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Unlock the Power of Business Intelligence Dashboards Today.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence;
