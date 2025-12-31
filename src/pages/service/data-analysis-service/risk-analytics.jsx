import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const RiskAnalytics  = () => {
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
          src="/assets/risk-analytics-header.jpg"
          alt="i-Cons Technologies – Risk analytics services for secure decision-making"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Empower Your Business with Risk Analytics Solutions</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we specialize in providing innovative risk analytics solutions that help organizations navigate the complexities of risk management. Our tailored services are designed to deliver comprehensive insights into your risk landscape, allowing businesses to anticipate and mitigate potential risks effectively. With our analytics risk solutions, you can make informed decisions that safeguard your operations and support long-term success.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Risk Analytics Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.risk_analytics.map((card) => (
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
         Why Choose i-Cons Technologies for Risk Analytics Solutions?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             •	Tailored Risk Solutions: We understand that each business faces unique risks. Our risk analytics solutions are customized to meet the specific challenges and needs of your industry.
            </li>
            <li>
            •	Comprehensive Risk Insights: Our advanced analytics tools provide a holistic view of all potential risks, enabling you to make informed decisions that protect your business.
            </li>
            <li>
              •	Real-Time Risk Monitoring: With our risk management analytics, you’ll have access to real-time data that empowers you to track and mitigate risks as they emerge.
            </li>
            <li>
              •	User-Friendly Dashboards: We create intuitive, easy-to-navigate dashboards that make it simple to visualize and manage complex risk data, no matter your technical expertise.
            </li>
            <li>
              •	Enhanced Risk Mitigation: By leveraging data-driven insights, we help you proactively address risks, minimizing their impact on your operations and bottom line.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
         The Risk Analytics Process at i-Cons Technologies
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             1.	Consultation and Discovery: We begin by understanding your business’s risk profile, objectives, and specific challenges. This helps us tailor our analytics risk solutions to meet your unique needs.
            </li>
            <li>
              2.	Data Integration: We integrate data from your existing systems to provide a comprehensive view of potential risks across your business functions.
            </li>
            <li>
              3.	Design and Customization: Our team designs dashboards and analytics tools that highlight the most critical risk metrics and key performance indicators (KPIs) for your organization.
            </li>
            <li>
              4.	Implementation and Training: Once developed, we implement the risk management analytics solutions within your business systems and train your teams to use them effectively.
            </li>
            <li>
               5.	Ongoing Support and Optimization: We offer continuous support, ensuring that your risk data analytics tools remain relevant and evolve with your business.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Unlock the Power of Risk Analytics Today.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalytics;
