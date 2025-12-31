import React from "react";
import { Helmet } from "react-helmet-async";
import Data_Analysis from "../../../data/Home/data_analysis.json";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const DataManagement = () => {
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
          src="/assets/data-management-header.jpg"
          alt="i-Cons Technologies – Data management services for global enterprises"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Streamline Your Business Operations with Expert Data Management
          Solutions
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At i-Cons Technologies, we understand that effective data management
          is critical to the success of any business. Our tailored data
          management services help organizations build efficient, scalable, and
          reliable data systems that support smarter decision-making, enhance
          productivity, and drive growth. Whether you're dealing with data
          silos, inconsistent data quality, or inefficient processes, our data
          management consulting team is here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Data Management Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {Data_Analysis.data_management_card.map((card) => (
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
            Why Choose i-Cons Technologies for Data Management?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • Expertise Across Industries: As one of the leading data
              management companies, we bring years of experience helping
              organizations across different industries manage and optimize
              their data. Our team is highly skilled in providing tailored
              solutions that meet your specific needs.
            </li>
            <li>
              • Comprehensive Data Solutions: From database management services
              to data deduplication, we offer a wide range of data management
              solutions that address every aspect of data management, ensuring
              that your data is structured, accurate, and easily accessible.
            </li>
            <li>
              • Scalable & Efficient: Our solutions are designed to scale with
              your business as it grows, ensuring that your data management
              practices remain efficient, regardless of the volume or complexity
              of your data.
            </li>
            <li>
              • Outsource Data Management Services: We provide the option to
              outsource data management services, allowing your team to focus on
              more strategic tasks while we take care of the day-to-day
              management of your data systems.
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

export default DataManagement;
