import React from "react";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";
import Healthcare2 from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const Healthcare = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourced BPO Healthcare Service | I Cons Technologies</title>
        <meta
          name="description"
          content="Get expert healthcare BPO services from I Cons Technologies—maximize productivity and focus on patient care while we handle the rest."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/healthcare-services-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Healthcare Services
        </h1>
        <p className=" poppins-regular text-[#9f9f9f] text-lg md:text-[20px] text-center max-w-[54%] mx-auto mt-4 leading-relaxed ">
          At I-Cons Technologies, we deliver high-precision radiology and imaging solutions that empower healthcare providers with timely, accurate diagnostic insights. From emergency radiology to advanced PET/CT reporting, our services are designed to enhance clinical outcomes and streamline your diagnostic workflow.
        </p>
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {healthcare.healthcare.map((item) => (
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
          Our Imaging & Reporting Workflow
        </h3>
      </div>
  
          <div>
            <Ourpages cards={Healthcare2.healthcare2} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Expert Radiology Team</b>: Fellowship-trained radiologists with subspecialty expertise.
            </li>
            <li>
              <b>• Rapid Turnaround</b>: Reliable reporting timelines with emergency coverage.
            </li>
            <li>
              <b>• Technology-Driven</b>: Leveraging AI-powered workflows and secure, cloud-based PACS systems.
            </li>
            <li>
              <b>• Custom Solutions</b>: Imaging services tailored to your facility’s needs.
            </li>
            <li>
              <b>• Data Security & Compliance</b>: Full adherence to HIPAA, ACR, and international standards.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Empower your diagnostics with accurate, fast, and expert radiology services.
            </h3>
           <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
