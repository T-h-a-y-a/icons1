import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const StatisticalAnalytics   = () => {
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
          src="/assets/statistical-analytics-header.jpg"
          alt="i-Cons Technologies – Statistical analytics for global businesses"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Unlock Insights with Our Statistical Analytics Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At i-Cons Technologies, we specialize in providing statistical analytics services that help businesses extract actionable insights from complex data sets. Our statistical analysis solutions are designed to support data-driven decision-making, identify patterns, and predict future trends with precision. By leveraging advanced statistical techniques, we empower organizations to make informed decisions that enhance business performance and drive growth.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Statistical Analytics Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.statistical_analytics.map((card) => (
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
         Why Choose i-Cons Technologies for Statistical Analytics Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
            •	Expert Statistical Techniques: Our team is skilled in applying advanced statistical methods and models to ensure that your analysis delivers accurate and meaningful results.
            </li>
            <li>
            •	Customized Solutions: We tailor our statistical analytics services to meet the specific needs of your business, providing you with insights that are directly relevant to your goals and challenges.
            </li>
            <li>
              •	Data-Driven Decision-Making: Our solutions empower businesses to make well-informed, data-driven decisions that enhance operational efficiency, improve customer experience, and drive growth.
            </li>
            <li>
             •	Comprehensive Reporting: We offer detailed, actionable reports that help you understand the implications of your statistical analysis and how to apply the findings to achieve business success.
            </li>
            <li>
              •	Advanced Data Visualization: Our visualizations transform complex statistical data into clear, actionable insights, helping you communicate findings effectively to stakeholders and decision-makers.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
         The Statistical Analytics Process at i-Cons Technologies
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
            1.	Consultation and Discovery: We begin by understanding your business’s objectives, data sources, and challenges, allowing us to design a customized statistical analysis approach.
            </li>
            <li>
              2.	Data Collection and Integration: We gather and integrate data from various sources to ensure that the analysis covers all relevant aspects of your business.
            </li>
            <li>
              3.	Statistical Modelling and Analysis: Our team applies appropriate statistical techniques to your data, analysing trends, correlations, and predicting outcomes.
            </li>
            <li>
             4.	Data Visualization and Reporting: We present the results of the analysis in easy-to-understand visualizations and comprehensive reports that highlight key findings and actionable insights.
            </li>
            <li>
              5.	Ongoing Support and Optimization: We provide continuous support and optimization, ensuring that our statistical solutions evolve with your business and continue to provide valuable insights.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Unlock the Power of Statistical Analytics Today.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticalAnalytics;
