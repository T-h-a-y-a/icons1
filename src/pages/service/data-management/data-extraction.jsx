import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const DataExtraction  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Data Extraction Services by I-Cons Technologies</title>
        <meta
          name="description"
          content="Data extraction services by I-Cons Technologies offer reliable, fast, and precise solutions for businesses worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-extraction-header.jpg"
          alt="i-Cons Technologies – Global data extraction solutions for all industries"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Professional Data Extraction Services for Smarter Business Insights</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I Cons Technologies, we specialize in data extraction and management services that help businesses unlock valuable insights by obtaining clean, structured, and actionable data from various sources. With over 20+ years of experience serving clients worldwide, we ensure that your business stays compliant with evolving data protection regulations, enabling seamless data extraction with utmost accuracy.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Our automated data extraction solutions utilize advanced technology to extract data from websites, images, databases, documents, surveys, and more, enabling you to make informed decisions with ease. Let us expedite your data extraction process, reduce operational costs, and provide reliable data solutions.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Data Extraction Services Include:</h3>
      <div>
        <Maincard main={DataManagementservices.Dataextractionservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Data Extraction Process
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.Dataextractionservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Data Extraction Services at Icons Technologies
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Enhanced Data Accuracy:</b>Our advanced data extraction methods ensure that you receive accurate, reliable, and structured data. We minimize human error and provide data that is cleansed and organized, allowing you to make better business decisions.
            </li>
            <li>
             <b>•	Cost Efficiency:</b>Through automation of data extraction, we cut down on manual labor and lower operational costs. This enables your team to save time and resources, allowing them to prioritize strategic tasks over data collection.
            </li>
            <li>
              <b>•	Faster Data Processing:</b>Icons Technologies employs cutting-edge technologies and automated tools to expedite the data extraction process. This allows you to access valuable insights quickly, helping you stay ahead of the competition.
            </li>
            <li>
              <b>•	Scalability:</b>Our data extraction services are scalable to meet your business needs, no matter the size or complexity. Whether you need small datasets or large volumes of information, we can handle projects of any scale efficiently.
            </li>
            <li>
              <b>•	Comprehensive Data Sources:</b>We extract data from a wide range of sources—websites, databases, documents, surveys, and images—ensuring you get all the information you need in one place, helping you make well-rounded business decisions.
            </li>
            <li>
              <b>•	Improved Compliance and Security:</b>Icons Technologies is committed to ensuring that your data is extracted in accordance with the latest data protection regulations. Our secure processes help safeguard sensitive information and ensure full compliance with industry standards.
            </li>
            <li>
              <b>•	Customized Solutions:</b>We understand that each business has unique needs. Our team works with you to tailor data extraction solutions that fit your specific requirements, optimizing your data collection process and enhancing the value you derive from it.
            </li>
            <li>
              <b>•	Advanced Analytics:</b>With clean, structured, and timely data, you can leverage advanced analytics to uncover insights, identify trends, and gain a deeper understanding of your market, enabling data-driven decisions that drive growth and innovation.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us for Your Data Extraction Needs?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Cutting-Edge Technology:</b>We leverage the latest tools and technologies for automated data capture, ensuring accuracy, speed, and scalability.
            </li>
            <li>
             <b>•	  Experienced Professionals:</b>Our team consists of experts who understand the nuances of data extraction across various industries.
            </li>
            <li>
              <b>•	Compliance and Security:</b>We follow the latest data protection regulations to ensure your data remains secure and compliant.
            </li>
            <li>
              <b>•	Custom Solutions:</b>We offer tailored solutions based on your unique business needs, optimizing results and improving efficiency.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with us for your data extraction needs, and experience a hassle-free, streamlined process that accelerates your business performance.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExtraction;
