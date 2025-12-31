import React from "react";
import { Helmet } from "react-helmet-async";
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";
import ContactForm from "../../../components/hoz_contact";

const DataProcessing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Data Processing Services Worldwide</title>
        <meta
          name="description"
          content="Professional data processing services for businesses worldwide. Accurate, efficient, and secure solutions tailored to your data management needs."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-processing-header.jpg"
          alt="i-Cons Technologies – Secure and scalable data processing services"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Reliable & Scalable Data Processing Services to Optimize Your Business Performance
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          As the volume of data continues to increase from various sources, businesses face the challenges of data duplication and inconsistencies. Managing and processing large datasets under time constraints adds significant pressure, often impeding swift decision-making. Furthermore, the rising costs of infrastructure and the limited capabilities of in-house teams to handle this growing data burden threaten long-term profitability. However, these challenges can be effectively managed with professional data processing services, enabling businesses to extract actionable insights within the desired timeframe and budget for informed decision-making.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          As one of the leading data processing companies, I Cons Technologies provides comprehensive data processing solutions. We handle every step of the process, from data collection and cleaning to entry, conversion, and in-depth analysis. We assist clients in gathering raw data from multiple sources, converting it into organized and compatible database formats, rectifying errors, and ensuring consistency across different data structures. All data is validated for accuracy and verified for compliance with industry regulations. We also employ machine learning-powered tools to deliver business-critical insights through custom charts, dashboards, and reports.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Data Processing Solutions We Offer:
        </h3>
      </div>

      <div className="relative max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/icons.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            backgroundPosition: "center top",
            filter: "blur(2px)",
            opacity: 0.5,
          }}
        ></div>

        {/* Content above background */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DataManagementservices.Dataprocessingservices.slice(0, 6).map(
            (card, index) => (
              <div
                key={index}
                className="group w-full min-h-[360px] perspective-[1000px]"
              >
                <div className="relative w-full h-full transition-transform duration-[1500ms] transform-style preserve-3d group-hover:rotate-y-180 rounded-2xl">
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] overflow-hidden">
                    <p className="playfont text-base sm:text-[15px] md:text-[18px] font-semibold leading-snug">
                      {card.title}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] transform rotate-y-180 overflow-hidden">
                    <p className="playfont text-sm md:text-[10px] lg:text-[14px] font-medium leading-relaxed">
                      {card.description}
                    </p>
                    <Link
                      to={card.link}
                      className="relative overflow-hidden group mt-4 px-5 py-3 border tracking-wide text-[12px] text-black font-semibold transition-all isolation-auto border-[#b89f81] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-[#B19777] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 rounded"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process
        </h3>
      </div>
      <div>
          <Ourpages  cards={DataManagementcard.Dataprocessingservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefit of Outsourcing the Data Processing at I Cons Technologies
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Improved Decision-Making:</b>Data processing solutions help analyze large volumes of data quickly and accurately, allowing for better-informed business decisions and strategic planning.
            </li>
            <li>
              • <b>Enhanced Efficiency:</b>Automating data collection, transformation, and analysis reduces manual tasks, which leads to higher operational efficiency and lower human error.
            </li>
            <li>
              • <b>Real-Time Insights:</b>Data processing solutions often offer real-time data analysis, enabling businesses to respond to changing conditions or trends promptly.
            </li>
            <li>
              • <b>Cost Reduction:</b>By streamlining operations and reducing the need for manual labor, data processing can help cut costs associated with data management, storage, and labor.
            </li>
            <li>
              • <b>Scalability:</b>As businesses grow, data processing solutions can scale to handle larger volumes of data, ensuring the system remains efficient even as demands increase.
            </li>
            <li>
              • <b>Better Customer Understanding:</b>Analyzing customer data enables businesses to gain insights into customer behavior, preferences, and needs, leading to improved products and services.
            </li>
            <li>
              • <b>Data Quality and Accuracy:</b>Data processing solutions improve the accuracy of data by cleaning, validating, and transforming raw data into useful formats, ensuring high-quality output for analysis.
            </li>
            <li>
              • <b>Compliance and Security:</b>A robust data processing system helps maintain regulatory compliance by managing sensitive data securely, reducing risks associated with data breaches and ensuring proper handling of information.
            </li>
          </ul>

          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose pt-5">
           Why Choose Us for the Data Processing Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expertise & Experience:</b>With over 21 years in the industry, we bring deep expertise to deliver customized, high-quality data processing services. Our experienced team ensures accurate and efficient results tailored to your business.
            </li>
            <li>
              • <b>Cutting-Edge Technology:</b>We leverage the latest tools like machine learning and AI to ensure scalable, efficient, and precise data processing. This enables us to provide advanced solutions that support your evolving business needs.
            </li>
            <li>
              • <b>Accuracy & Reliability:</b>Our multi-step validation and data cleaning processes guarantee accuracy and consistency. We focus on delivering high-quality data that you can trust for informed decision-making.
            </li>
            <li>
              • <b>Comprehensive Services:</b>We handle all aspects of data processing—from collection and cleaning to analysis and reporting. This comprehensive approach helps you focus on your core business activities.
            </li>
            <li>
              • <b>Cost-Effective Solutions:</b>Our data processing services are designed to maximize efficiency while reducing operational costs. We provide affordable, scalable solutions that grow with your business.
            </li>
            <li>
              • <b>24/7 Dedicated Support:</b>Our team offers continuous support to address your data needs around the clock. We ensure smooth, uninterrupted service to help your business thrive.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Transform raw data into actionable insights quickly and accurately with I-Cons Technologies’ data processing expertise.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessing;
