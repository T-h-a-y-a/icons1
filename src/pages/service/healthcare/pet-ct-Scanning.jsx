import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import ContactForm from "../../../components/hoz_contact";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const PETCTScanning = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Precision PET/CT Reporting Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Accurate PET/CT reports by subspecialty radiologists for neuro, oncology, and cardiac care. Fast, reliable, and secure diagnostics at I-Cons Technologies."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/pet-ct-reporting-header.jpg"
          alt="i-Cons Technologies – PET CT reporting services for healthcare providers"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Empower Bone Health with Precision Diagnostics—Only at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we offer expert PET/CT reporting services that empower clinicians with accurate, clinically actionable insights for the diagnosis and management of neurological, oncological, and cardiac conditions. Our reports are crafted by subspecialty-trained radiologists using advanced PET/CT imaging protocols to ensure diagnostic confidence and superior patient outcomes.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our PET/CT Scanning Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.pet_ct_scanning.map((card) => (
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
          Our PET/CT Reporting Workflow 
        </h3>
      </div>
          
       <div>
            <Ourpages cards={healthcare.pet_ct_scanning_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our PET/CT Reporting Services.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Domain-Specific Expertise:</b>Subspecialist reports improve diagnostic accuracy and treatment decisions.
            </li>
            <li>
              <b>• Advanced Imaging Tools:</b>Use of quantitative software and AI-supported workflows.
            </li>
            <li>
              <b>• Structured, Clear Reports:</b>Easy-to-read format with key findings and interpretations.
            </li>
            <li>
              <b>• Fast Turnaround:</b>Rapid delivery of reports to support clinical timelines.
            </li>
            <li>
              <b>• Secure & Compliant:</b>Full data protection under HIPAA and imaging best practices.
            </li>
             <li>
              <b>• Nationwide Trust:</b>Preferred by specialists and hospitals across the country.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for PET/CT Reporting?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Subspecialty Expertise:</b>Reports are interpreted by board-certified radiologists with focused expertise in neurology, oncology, and cardiology imaging.
            </li>
            <li>
              <b>• Advanced Imaging Protocols:</b>We employ standardized, evidence-based imaging protocols that enhance accuracy, reproducibility, and clinical relevance.
            </li>
            <li>
              <b>• Clinically Actionable Reports:</b>Each report includes clear diagnostic impressions, staging (where applicable), and treatment response assessments.
            </li>
            <li>
              <b>• Fast, Reliable Turnaround:</b>Receive prompt, high-quality reports—often within a 24-hour window, supporting timely treatment planning.
            </li>
            <li>
              <b>• Seamless Integration:</b>Our platform seamlessly integrates with PACS, RIS, and EHR systems, allowing easy access to reports and streamlined documentation.
            </li>
            <li>
              <b>• Regulatory Compliance & Security:</b>We strictly adhere to HIPAA and national imaging guidelines, ensuring secure, ethical, and compliant practices.
            </li>
            <li>
              <b>• Trusted by Clinicians Nationwide:</b>Our PET/CT reporting services are trusted by neurologists, oncologists, cardiologists, and diagnostic centers for their precision, reliability, and clarity.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Need Subspecialty PET/CT Reporting? We’re Ready to Support Your Diagnostic Needs.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PETCTScanning;
