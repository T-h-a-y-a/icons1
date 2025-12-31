import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const DataCleanup  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Global Outsource Data Clean Up services</title>
        <meta
          name="description"
          content="Delivering high-quality data clean up solutions globally. Fix inconsistencies, remove duplicates, and maintain accurate business data."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-clean-up-header.jpg"
          alt="i-Cons Technologies – Global data clean up solutions and services for businesses worldwide"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Global Data Clean Up Services for Accurate, Reliable Information</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Ensure your data is clean, accurate, and actionable with our expert data Clean Up services. We help remove duplicates, correct errors, and standardize information, improving the quality of your data. With our advanced techniques and tools, we enhance your business decision-making by providing reliable, high-quality data for seamless operations. Let us optimize your data today!</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">As a leading provider of data Clean Up services, we specialize in cleaning and transforming raw data into accurate, reliable, and actionable insights. Our services include:</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Data Clean-up Services Include:</h3>
      <div>
        <Maincard main={DataManagementservices.datacleanup} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Approach to Provide Data Clean Up Solutions
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.datacleanup}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Key Benefits of Our Data Clean Up Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Improved Data Accuracy:</b> Eliminate errors and inconsistencies to ensure your business decisions are based on reliable, factual data.
            </li>
            <li>
             <b>•	Enhanced Operational Efficiency:</b>Clean data reduces processing time, minimizes system slowdowns, and improves overall workflow efficiency.
            </li>
            <li>
              <b>•	Better Business Insights:</b> Accurate and enriched data enables more precise analytics, reporting, and forecasting.
            </li>
            <li>
              <b>•	Reduced Costs and Redundancy:</b>By removing duplicates and outdated records, you save storage costs and avoid unnecessary data maintenance.
            </li>
            <li>
              <b>•	Regulatory Compliance:</b>Our services help align your data with regulatory and compliance requirements across global markets.
            </li>
            <li>
              <b>•	Optimized Customer Experience:</b>Clean customer data leads to better personalization, improved communication, and higher satisfaction.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us for Data Clean Up Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Global Expertise:</b>We serve clients across the globe, delivering high-quality data clean up solutions tailored to international standards and regional requirements.
            </li>
            <li>
             <b>•	  Advanced Tools & Techniques:</b>Our team leverages cutting-edge tools, AI-driven algorithms, and proven methodologies to ensure your data is accurate, clean, and consistent.
            </li>
            <li>
              <b>•	Experienced Data Specialists:</b>With years of experience in data quality management, our professionals understand the nuances of complex, large-scale datasets.
            </li>
            <li>
              <b>•	Custom-Tailored Solutions:</b>We don’t believe in one-size-fits-all. Our services are customized to match your industry, data structure, and unique business goals.
            </li>
            <li>
              <b>•	End-to-End Support:</b>From data assessment to delivery, we provide full-cycle data clean up support, ensuring ongoing quality and reliability.
            </li>
            <li>
              <b>•	Secure and Confidential:</b>We follow strict data privacy protocols and industry compliance standards to ensure your data is handled securely and responsibly.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Outsource data clean-up to I Cons Technologies to boost data quality, gain better insights, and drive efficient business growth.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCleanup;
