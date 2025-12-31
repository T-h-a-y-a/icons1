import React from "react";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataAnalysis = () => {
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
          src="/assets/data-analytics-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Data Analytics
        </h1>
        <p className=" poppins-regular text-[#9f9f9f] text-lg md:text-[20px] text-center max-w-[54%] mx-auto mt-4 leading-relaxed ">
          At I-Cons Technologies, we specialize in providing robust data
          analysis services that help you transform data into strategic assets.
          Whether you are looking to enhance your data operations, improve
          decision-making, or gain predictive insights, we’ve got you covered.
        </p>
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {Data_Analysis.service.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
                {item.heading}
              </h1>
              <Link
                to={item.link}
                className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Business Analytics Services
        </h1>
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {Data_Analysis.service2.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
                {item.heading}
              </h2>
              <Link
                to={item.link}
                className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
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
            Why Choose Us?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Expertise & Experience: Our team of skilled data scientists,
              analysts, and engineers brings years of experience to deliver
              results.
            </li>
            <li>
              • Tailored Solutions: We offer customized solutions designed to
              meet your unique business needs.
            </li>
            <li>
              • Cutting-Edge Tools: We leverage the latest tools and
              technologies to ensure you get the best data analysis services
              available.
            </li>
            <li>
              • Data Security & Compliance: We prioritize the security and
              compliance of your data, ensuring that it is handled responsibly
              and ethically.
            </li>
            <li>
              • Actionable Insights: We provide insights that drive real
              business impact, helping you make data-driven decisions with
              confidence.
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

export default DataAnalysis;
