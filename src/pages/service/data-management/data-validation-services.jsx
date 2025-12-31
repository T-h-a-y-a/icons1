import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const DataValidationServices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Outsourced Data Validation Services</title>
        <meta
          name="description"
          content="Ensure data accuracy with global, outsourced data validation services. Reliable, secure, and scalable solutions for clean business data."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-validation-header.jpg"
          alt="i-Cons Technologies – Global data validation solutions and services for businesses wo..."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Global Outsourced Data Validation Services for Clean, Accurate, and Reliable Data</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">I Cons Technologies is a leading data validation agency and has provided exceptional data validation and verification services for over two decades. Our data validation process eliminates duplicate records from your database and helps you enhance your marketing and sales goals. We provide accurate and valid databases that guarantee enhanced open rates and minimal bounce rates to help you enhance your global brand presence.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our data validation services include:</h3>
      <div>
        <Maincard main={DataManagementservices.datavalidationservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Approach to Provide Data Validation Solutions
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.datavalidationservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of outsourcing Data Validation Services at I Cons Technologies
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Improved Data Accuracy:</b>Our rigorous data validation process eliminates errors, ensuring that the data used for marketing and sales is correct, complete, and reliable. This allows you to make better-informed business decisions.
            </li>
            <li>
             <b>•	Enhanced Customer Engagement:</b>With validated and accurate data, you can target the right audience effectively, increasing the success of your campaigns, reducing bounce rates, and boosting customer retention.
            </li>
            <li>
              <b>•	Cost and Time Efficiency:</b>By identifying and removing duplicate, incorrect, or incomplete data early on, you reduce wasted time and resources spent on invalid contacts, leading to more cost-effective marketing and operations.
            </li>
            <li>
              <b>•	Compliance with Data Regulations:</b>Our services ensure that your data complies with local and global data protection regulations, such as GDPR, helping you avoid potential legal issues.
            </li>
            <li>
              <b>•	Higher Conversion Rates:</b>With cleaner, validated data, you can expect more meaningful engagement with your target audience, which translates into improved conversion rates and higher ROI from marketing efforts.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us for Data Validation
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Accuracy First:</b>We prioritize precision in every data point. Our validation methods ensure your data is clean, consistent, and error-free, reducing costly mistakes downstream.
            </li>
            <li>
             <b>•	  Custom Solutions:</b> No two datasets are the same. We tailor our validation rules and workflows to your unique business requirements, industry standards, and compliance needs.
            </li>
            <li>
              <b>•	Scalable & Efficient:</b>Whether you’re validating thousands or millions of records, our automated tools and human-in-the-loop review scale with your operations.
            </li>
            <li>
              <b>•	Compliance & Security:</b>We follow strict data governance protocols and comply with industry regulations (GDPR, HIPAA, etc.), so your data is always secure and audit-ready.
            </li>
            <li>
              <b>•	Expert Team:</b>Our experienced data analysts and engineers are committed to delivering high-integrity data you can trust for critical decision-making.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Outsource data Validation to I Cons Technologies to boost data quality, gain better insights, and drive efficient business growth.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataValidationServices;
