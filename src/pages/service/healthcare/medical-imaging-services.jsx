import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const MedicalImagingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Medical Imaging Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Advanced medical imaging with expert radiologists at I-Cons Technologies. Fast, accurate diagnostics across X-ray, CT, MRI, ultrasound, and more."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/medical-imaging-services-header.jpg"
          alt="i-Cons Technologies – Medical imaging solutions for global clients"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Comprehensive Medical Imaging Services — Precision Diagnostics at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we provide a full spectrum of advanced medical imaging services to support accurate diagnosis, treatment planning, and ongoing patient care. Utilizing the latest imaging technologies and interpreted by expert radiologists, our services ensure high-quality images and clinically actionable reports across multiple specialties.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Medical Imaging Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.medical_imaging.map((card) => (
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
          Workflow of Medical Imaging Services at I-Cons Technologies
        </h3>
      </div>
       
      <div>
            <Ourpages cards={healthcare.medical_imaging_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Medical Imaging Services at I-Cons Technologies
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Advanced Technology:</b>Utilization of the latest digital and 3D imaging technologies ensures high-resolution, accurate diagnostics across a wide range of conditions.
            </li>
            <li>
              <b>• Reduced Radiation Exposure:</b>Techniques like digital X-rays and DEXA scans minimize radiation dose without compromising image quality, enhancing patient safety.
            </li>
            <li>
              <b>• Multispecialty Expertise:</b>Experienced radiologists with subspecialty training provide precise interpretations, supporting complex diagnostic and treatment decisions.
            </li>
            <li>
              <b>• Comprehensive Modalities:</b>A full spectrum of imaging services—from ultrasound and CT to MRI and specialized dental imaging—covers diverse clinical needs.
            </li>
            <li>
              <b>• Patient-Centered Care:</b>Emphasis on patient comfort, clear instructions, and timely reporting improves the overall diagnostic experience.
            </li>
             <li>
              <b>• Enhanced Diagnostic Confidence:</b>Detailed, clinically relevant reports aid physicians in accurate diagnosis, treatment planning, and monitoring outcomes.
            </li>
             <li>
              <b>• Efficient Workflow:</b>Streamlined processes from scheduling to reporting reduce wait times and improve access to critical imaging services.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for Medical Imaging?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• State-of-the-Art Equipment:</b>We use cutting-edge imaging technology to deliver superior image quality and patient safety.
            </li>
            <li>
              <b>• Expert Radiologists:</b>Our subspecialty-trained radiologists provide accurate readings and trustworthy reports.
            </li>
            <li>
              <b>• Patient-Centered Care:</b>Minimized radiation, comfortable procedures, and clear communication make your experience smooth and reassuring.
            </li>
            <li>
              <b>• Quick Turnaround:</b>Efficient workflows deliver timely reports to support prompt clinical decisions.
            </li>
            <li>
              <b>• Seamless Integration:</b>Our systems integrate with hospital PACS, RIS, and EHR for streamlined access and management of imaging data.
            </li>
            <li>
              <b>• Secure & Compliant:</b>We uphold the highest standards of data security and patient privacy in full compliance with HIPAA and regulatory guidelines.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Discover the power of precision imaging with I-Cons Technologies — your partner in advanced diagnostics and superior patient care.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalImagingServices;
