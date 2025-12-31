import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../../../components/hoz_contact";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const EmergencyRadiology = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Emergency Radiology 24/7 | I-Cons Technologies</title>
        <meta
          name="description"
          content="Get expert 24/7 emergency radiology reports with fast, accurate readings by subspecialty radiologists. Trusted, secure, and reliable at I-Cons Technologies."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/emergency-radiology-report-header.jpg"
          alt="i-Cons Technologies – Emergency radiology reporting worldwide"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Rapid, Accurate Emergency Radiology Services — Available 24/7 at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we provide comprehensive emergency radiology interpretation services with a focus on speed, accuracy, and clinical impact. Designed to support emergency departments, urgent care centers, and trauma units, our services cover a wide range of modalities. All reports are interpreted by experienced radiologists trained to handle acute, time-sensitive cases—ensuring prompt diagnosis and optimal patient outcomes.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Emergency Radiology Interpretation Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.emergency_radiology.map((card) => (
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
          Our Emergency Radiology Workflow
        </h3>
      </div>
        
         <div>
            <Ourpages cards={healthcare.emergency_radiology_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Key Benefits of Our Emergency Radiology Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              •	24/7 availability for all imaging modalities.
            </li>
            <li>
              •	Rapid turnaround to support critical care decisions.
            </li>
            <li>
              •	Subspecialty reads ensure diagnostic precision.
            </li>
            <li>
              •	Real-time consultations for urgent cases.
            </li>
            <li>
              •	HIPAA-compliant and system-integrated workflows.
            </li>
             <li>
              •	Nationwide trust and reliability.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for Emergency Radiology?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• 24/7 Availability:</b>Available 24/7—our emergency radiologists are ready at any time to provide urgent readings and fast report delivery.
            </li>
            <li>
              <b>• Subspecialist Expertise:</b>Reviewed by radiologists specializing in trauma, neuro, cardiac, vascular, and general emergency imaging.
            </li>
            <li>
              <b>• Fast Turnaround Times:</b>STAT reads delivered in under 30–60 minutes; routine emergency reports in 1–2 hours depending on modality.
            </li>
            <li>
              <b>• Advanced Imaging Protocols:</b>Our evidence-based workflows and advanced software tools guarantee consistent, accurate results with a fast turnaround.
            </li>
            <li>
              <b>• Secure, Seamless Access:</b>Our platform integrates easily with hospital PACS, RIS, and EHR systems, streamlining clinical workflows.
            </li>
            <li>
              <b>• Trusted by Emergency Teams Nationwide:</b>We are the preferred radiology partner for EDs, trauma centers, and urgent care providers across the country.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Need Fast, Accurate Emergency Imaging Interpretation?
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyRadiology;
