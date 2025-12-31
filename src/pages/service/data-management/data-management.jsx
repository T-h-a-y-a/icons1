import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import DataManagementServices_card from "../../../components/Our-pages/dotcard.json"
import DataManagementServices from '../../../data/Home/data-Management.json'
import Ourpage from '../../../components/Our-pages/ourpages'
import ContactForm from "../../../components/hoz_contact";

const Datamanagementservices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Data Management Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Discover top-notch data management services by I-Cons Technologies. Optimize, secure, and manage your data efficiently for business growth and success!"
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-management-services-header.jpg"
          alt="Video Editing"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Data Management Services
        </h1>
        <p className=" poppins-regular text-justify text-[#9f9f9f] text-lg md:text-[20px]  max-w-[58%] mx-auto mt-4 leading-relaxed ">
          As a trusted leader in data support and management services, we leverage cutting-edge tools, methodologies, and technologies to deliver world-class, 100% accurate solutions. For over 21 years, we have partnered with clients worldwide, including numerous companies, to meet their diverse data processing needs. Our extensive experience has equipped us with the expertise to handle any data-related challenge with efficiency and precision.
        </p>
      </div>
     

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {DataManagementServices.DataManagementServices.map((item) => (
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
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          What sets us apart from other data management companies?
        </h3>
      </div>

       <div>
          <Ourpage  cards={DataManagementServices_card.DataManagementServices_card}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
           <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Key Benefits of Our Data Management Services.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Centralized Data Access:</b>Efficiently organize and unify your business data from multiple sources—ensuring everyone on your team works with the most accurate, up-to-date information.
            </li>
            <li>
              • <b>Improved Data Quality:</b>We implement robust validation, cleansing, and governance practices to eliminate errors, reduce duplication, and enhance the reliability of your data.
            </li>
            <li>
              • <b>Scalable Storage Solutions:</b>From structured databases to cloud-based storage, we provide scalable solutions that grow with your data and your business.
            </li>
            <li>
              • <b>Actionable Insights:</b>Turn raw data into strategic decisions. Our data analytics and visualization tools help you uncover trends, monitor KPIs, and drive business performance.
            </li>
            <li>
              • <b>Enhanced Data Security & Compliance:</b>Your data is protected with industry-standard encryption, access controls, and compliance with regulations like GDPR, HIPAA, and more.
            </li>
            <li>
              • <b>Automated Workflows:</b>Streamline repetitive tasks and data processes to boost efficiency, reduce human error, and free up your team to focus on high-value work.
            </li>
          </ul>

          <h4 className="pt-5 playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Data Management?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Proven Data Expertise:</b>Our team specializes in managing complex data environments—structured or unstructured—with a focus on accuracy, integrity, and usability.
            </li>
            <li>
              • <b>Customized Data Strategies:</b>We don’t believe in one-size-fits-all. We design tailored data management plans that align with your business goals and operational workflows.
            </li>
            <li>
              • <b>Seamless Integration:</b>Whether you're using legacy systems or modern cloud platforms, we ensure smooth integration and interoperability across all data sources.
            </li>
            <li>
              • <b>Real-Time Data Access:</b>Empower your team with real-time access to critical data, enabling faster decision-making and greater business agility.
            </li>
            <li>
              • <b>Data Governance & Compliance:</b>We implement clear policies and advanced tools to ensure your data is secure, compliant, and audit-ready at all times.
            </li>
            <li>
              • <b>Ongoing Monitoring & Optimization:</b>Our support doesn’t stop after implementation. We continually monitor and optimize your data systems to keep them performing at their best.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
             Turn your data into a strategic asset with our end-to-end data management services.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datamanagementservices;
