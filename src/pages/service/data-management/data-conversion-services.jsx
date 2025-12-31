import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const DataConversionServices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourced Data conversion Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="I-Cons Technologies offers reliable outsourced data conversion services to streamline your data management and ensure seamless business operations. "
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-conversion-services-header.jpg"
          alt="data-conversion-services"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Data Conversion Services: Unlocking the Power of Your Data</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">I-Cons Technologies is a pioneer in data processing and conversion services, offering cost-effective solutions without compromising quality. As a trusted partner for global organizations, we specialize in efficient data entry, processing, and conversion, enabling businesses to streamline operations and enhance productivity. With our expertise, we deliver high-quality, reliable services that meet the evolving needs of our clients, making us a preferred choice for outsourcing data solutions.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Services We offer</h3>
      <div>
        <Maincard main={DataManagementservices.Dataconversionservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.Dataconversionservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our Data Conversion Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Improved Operational Efficiency:</b>Optimize your document management process and free up valuable internal resources.
            </li>
            <li>
             <b>•	Enhanced Data Accessibility:</b>Transform your data into a searchable, editable, and easily accessible format across all platforms and systems.
            </li>
            <li>
              <b>•	Accurate & Error-Free Output:</b>Reduce the risk of data loss or misinterpretation with our quality-focused approach.
            </li>
            <li>
              <b>•	Scalable for Any Volume:</b>Whether you're dealing with small volumes or large-scale projects, our services are designed to scale according to your needs.
            </li>
            <li>
              <b>•	Faster Turnaround Times:</b>Our efficient workflow and talented team guarantee prompt and consistent delivery.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us I-cons Technologies for Data Conversion Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Proven Expertise:</b>Leveraging extensive experience, we provide data conversion solutions to clients worldwide across a variety of industries.
            </li>
            <li>
             <b>•	  Quality First Approach:</b>Our focus is on ensuring precision, consistency, and complete adherence to international quality standards.
            </li>
            <li>
              <b>•	Customized Solutions:</b>Services are tailored to meet the specific formats, volumes, and timelines of your project.
            </li>
            <li>
              <b>•	Data Security & Confidentiality:</b>We maintain strict data security protocols to ensure your information is protected at every stage.
            </li>
            <li>
              <b>•	Cost-Effective Pricing:</b>Our services are competitively priced without compromising service quality.
            </li>
             <li>
              <b>•	24/7 Support:</b>Our dedicated customer support team is available 24/7 to support you throughout every stage of the project.
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

export default DataConversionServices;
