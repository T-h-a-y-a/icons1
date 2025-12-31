import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const ThoracicImaging = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Advanced Thoracic Imaging Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Precise thoracic imaging with expert radiologists at I-Cons Technologies. Fast, safe diagnostics using X-ray, CT, MRI, ultrasound, and PET/CT."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/thoracic-imaging-services-header.jpg"
          alt="i-Cons Technologies – Thoracic imaging services for global care."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Advanced Thoracic Imaging Services — Precision Care at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, our thoracic imaging services provide detailed, high-quality diagnostics for conditions affecting the lungs, heart, chest wall, and surrounding structures. Using state-of-the-art imaging modalities and expert interpretation, we support accurate diagnosis and effective treatment planning for a wide range of thoracic diseases.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Thoracic Imaging Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.thoracic_imaging.map((card) => (
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
          Our Thoracic Imaging Process
        </h3>
      </div>
        <div>
            <Ourpages cards={healthcare.thoracic_imaging_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Thoracic Imaging Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Accurate Diagnosis:</b>Advanced imaging and expert interpretation ensure precise detection of thoracic conditions.
            </li>
            <li>
              <b>• Minimized Radiation Exposure:</b>Use of low-dose imaging protocols enhances patient safety.
            </li>
            <li>
              <b>• Comprehensive Modalities:</b>Access to X-ray, CT, MRI, Ultrasound, and PET/CT for a complete thoracic assessment.
            </li>
            <li>
              <b>• Timely Results:</b>Fast report turnaround supports urgent clinical decision-making.
            </li>
            <li>
              <b>• Patient Comfort:</b>Non-invasive, quick procedures designed to maximize patient comfort.
            </li>
             <li>
              <b>• Seamless Integration:</b>Seamless access to images and reports through integration with your existing hospital systems.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for Thoracic Imaging?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Comprehensive Modalities:</b>From X-rays to advanced CT, MRI, and PET/CT, we cover all thoracic imaging needs.
            </li>
            <li>
              <b>• Expert Interpretation:</b>Our radiologists specialize in thoracic imaging, delivering precise diagnoses and actionable reports.
            </li>
            <li>
              <b>• Patient Safety:</b>Utilizing non-invasive approaches and low-dose protocols to minimize radiation and discomfort.
            </li>
            <li>
              <b>• Timely Reporting:</b>Fast turnaround times ensure your clinicians receive critical information promptly.
            </li>
            <li>
              <b>• Seamless Workflow Integration:</b>Effortless access to images and reports through seamless integration with existing hospital systems.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Schedule your advanced diagnostic scan with I-Cons Technologies and ensure accurate, timely insights for your chest health.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoracicImaging;
