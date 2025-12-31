import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const CTInterpretationServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert CT Interpretation | I-Cons Technologies</title>
        <meta
          name="description"
          content="Accurate CT interpretation by expert radiologists for head, liver, heart, abdomen, and fractures. Fast, secure, and clinically actionable reports."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ct-interoretation-services-header.jpg"
          alt="i-Cons Technologies – CT interpretation services for radiology"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Comprehensive CT Interpretation Services — Expert Insights from I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we provide specialized CT interpretation services that empower clinicians with precise, clinically actionable insights for the diagnosis and management of diverse medical conditions. Our reports are prepared by experienced radiologists using advanced imaging protocols to ensure diagnostic accuracy and improved patient care across multiple clinical domains.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our CT Interpretation Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.ct_interpretation.map((card) => (
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
          Our CT Interpretation Workflow 
        </h3>
      </div>
          
       <div>
            <Ourpages cards={healthcare.ct_interpretation_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our CT Interpretation Services.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              •	Expert subspecialist readings that improve diagnostic confidence.
            </li>
            <li>
              •	Use of advanced image processing and analytic tools.
            </li>
            <li>
              •	Clear, structured reporting for easy interpretation.
            </li>
            <li>
              •	Rapid turnaround supporting urgent clinical needs.
            </li>
            <li>
              •	Full security and compliance for patient information.
            </li>
             <li>
              •	Trusted by healthcare providers nationwide.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for CT Interpretation?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Subspecialty Expertise:</b>Our radiologists possess focused experience in head, liver, cardiac, abdominal, and musculoskeletal imaging.
            </li>
            <li>
              <b>• Advanced Imaging Protocols:</b>Consistent protocols help ensure accurate and reproducible interpretations every time.
            </li>
            <li>
              <b>• Clinically Actionable Reports:</b>Reports highlight critical findings with clear diagnostic impressions and suggested clinical pathways.
            </li>
            <li>
              <b>• Fast, Reliable Turnaround:</b>Receive high-quality interpretations within 1–2 days, facilitating prompt clinical decisions.
            </li>
            <li>
              <b>• Secure & Compliant:</b>We maintain strict HIPAA compliance and follow national imaging guidelines for patient data security.
            </li>
            <li>
              <b>• Seamless Integration:</b>Our system supports integration with PACS, RIS, and EHR platforms for smooth clinical workflows.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Need expert CT interpretation for head, liver, heart, abdomen, or fractures?
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTInterpretationServices;
