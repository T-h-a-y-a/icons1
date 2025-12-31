import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import ContactForm from "../../../components/hoz_contact";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataMining = () => {
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
          src="/assets/data-mining-services-header.jpg"
          alt="i-Cons Technologies – Data mining & visual analytics solutions"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Unlock Insights with Data Mining and Visual Analytics Services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At i-Cons Technologies, we specialize in transforming raw data into
          actionable insights through our advanced data mining and visual
          analytics services. We help businesses uncover hidden patterns,
          trends, and relationships in their data, providing them with powerful
          visual tools to understand complex data sets and make informed
          decisions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Data Mining and Visual Analytics Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {Data_Analysis.data_mining_and_visual_analytics.map((card) => (
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
              • Expert Data Mining Consultants: Our team of experienced data
              mining consultants applies advanced algorithms and techniques to
              uncover valuable insights in your data.
            </li>
            <li>
              • Custom Visual Analytics Solutions: We create tailored visual
              analytics solutions that help you quickly interpret complex data,
              spot trends, and make informed decisions.
            </li>
            <li>
              • End-to-End Service: From initial data mining consulting to the
              design and implementation of interactive dashboards, we provide
              end-to-end solutions to meet your data analytics needs.
            </li>
            <li>
              • Scalable and Actionable Insights: Our data mining and visual
              analytics services are designed to scale with your business,
              providing actionable insights that evolve with your changing
              business environment.
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

export default DataMining;
