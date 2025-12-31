import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataTransformation = () => {
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
          src="/assets/data-transformation-header.jpg"
          alt="i-Cons Technologies – Data transformation solutions for all industries."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Transform Your Business with Our Expert Data Analysis Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we specialize in delivering comprehensive data transformation services that help businesses unlock the true potential of their data. Our team of experienced professionals leverages cutting-edge data analysis services to provide tailored solutions, empowering you to make data-driven decisions. Whether you're looking for data cleansing, data annotation, or business intelligence and data visualization, we are here to support your journey toward enhanced operational efficiency and business growth.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Data Transformation Services Include:</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {Data_Analysis.data_transformation_card.map((card) => (
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
            Why Choose Us?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Expertise in Data Transformation: As a leading data analytics company, we offer data analysis outsourcing services that include data cleaning, data tagging, and data annotation to ensure your datasets are of the highest quality.
            </li>
            <li>
             •	Comprehensive Data Solutions: From data analysis consulting to business intelligence services, we cover all aspects of data transformation to improve your business operations.
            </li>
            <li>
              •	Tailored Data Analytical Services: Our data analytical services are customized to fit your business needs, ensuring that we deliver actionable insights that lead to real business outcomes.
            </li>
            <li>
              •	Cost-Effective Outsourcing: By partnering with us, you can outsource data cleansing services and other data-related tasks, saving both time and resources while enhancing the quality of your data.
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

export default DataTransformation;
