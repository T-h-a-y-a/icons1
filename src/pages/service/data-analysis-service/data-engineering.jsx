import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataEngineering = () => {
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
          src="/assets/data-engineering-header.jpg"
          alt="i-Cons Technologies – Data engineering services for scalable solutions"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Power Your Data Initiatives with Expert Data Engineering Services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At i-Cons Technologies, we offer comprehensive data engineering
          services that help organizations build robust data architectures,
          efficiently process large volumes of data, and unlock actionable
          insights through advanced analytics. As leading data engineering
          consultants, we work with you to design scalable, high-performance
          systems that transform raw data into valuable business intelligence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Data Engineering Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {Data_Analysis.data_engineering_card.map((card) => (
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
            Why Choose i-Cons Technologies for Data Engineering?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Expert Data Engineering Consultants: Our team of data
              engineering consultants brings years of experience in building
              robust data systems. We provide custom solutions that are
              perfectly aligned with your business objectives and growth
              strategies.
            </li>
            <li>
              • Comprehensive Data Engineering Solutions: From data architecture
              design to data processing outsourcing and analytics, we offer
              end-to-end solutions that support the entire data lifecycle.
            </li>
            <li>
              • Scalable and Efficient Infrastructure: Our solutions are
              designed to scale with your business. We create flexible data
              architectures and processing systems that can handle your data
              needs today and in the future.
            </li>
            <li>
              • Outsource Data Processing Services: We offer outsource data
              processing services, enabling your business to focus on core
              operations while we take care of data preparation, processing, and
              transformation.
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

export default DataEngineering;
