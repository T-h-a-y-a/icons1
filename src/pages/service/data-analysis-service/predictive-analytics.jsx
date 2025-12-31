import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const PredictiveAnalytics  = () => {
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
          src="/assets/predictive-analytics-header.jpg"
          alt="i-Cons Technologies – Predictive analytics for business intelligence"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Transform Your Business with Predictive Analytics Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we specialize in offering cutting-edge predictive analytics services designed to help businesses forecast future outcomes, identify potential risks, and make data-driven decisions. Our predictive data analytics services utilize advanced machine learning algorithms and statistical models to analyze historical data and predict future trends. With our prediction models as a service, we empower businesses to stay ahead of the curve and make proactive, informed decisions.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Predictive Analytics Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.predictive_analytics.map((card) => (
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
           Why Choose i-Cons Technologies for Data Mining and Visual Analytics?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             •	Comprehensive Predictive Solutions: We offer a wide range of predictive analytics services, from churn analysis to demand forecasting solutions, all designed to help your business forecast the future with precision.
            </li>
            <li>
            •	Advanced Prediction Models: Our prediction models as a service utilize the latest machine learning and statistical techniques to give you accurate, actionable insights.
            </li>
            <li>
              •	Customized Solutions: We understand that each business is unique, so we tailor our predictive analytics solutions to meet your specific needs and goals, whether it's fraud monitoring, survey analysis, or benchmarking survey solutions.
            </li>
            <li>
              •	End-to-End Services: From data collection and analysis to delivering actionable insights, we provide end-to-end predictive analytics services that help you drive better decision-making and improve business outcomes.
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

export default PredictiveAnalytics;
