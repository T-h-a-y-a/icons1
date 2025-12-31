import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const SurveyAnalytics  = () => {
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
          src="/assets/survey-analytics-header.jpg"
          alt="i-Cons Technologies – Survey analytics solutions for global industries"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Unlock Actionable Insights with Survey Analytics Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we provide expert survey analytics services designed to help businesses extract valuable insights from their surveys, allowing them to make data-driven decisions. Whether it's analyzing customer feedback, identifying trends, or segmenting your audience, our survey analysis solutions deliver actionable intelligence to optimize your operations and enhance customer engagement.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Survey Analytics Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.survey_analytics.map((card) => (
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
           Why Choose i-Cons Technologies for Survey Analytics?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
             •	Expert Analysis: Our team of experienced analysts uses advanced techniques like PCA analysis, pattern recognition, and trend monitoring to deliver deep, actionable insights from your survey data.
            </li>
            <li>
             •	Customized Solutions: We tailor our survey analysis services to meet your specific business needs, whether you're conducting a benchmarking survey, exit interview analysis, or analysing customer sentiment from social media surveys.
            </li>
            <li>
              •	Data Quality Assurance: We ensure that your survey data is clean, accurate, and structured for meaningful analysis through our data quality services and rigorous quality checks.
            </li>
            <li>
              •	Actionable Insights: We go beyond just reporting numbers; we provide actionable insights that help you improve business strategies, customer engagement, and operational efficiency.
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

export default SurveyAnalytics;
