import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const BoneDensityScanning = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>DEXA Bone Density Testing | Low Radiation & Fast</title>
        <meta
          name="description"
          content="I-Cons Technologies offers precise, safe bone density scans with minimal radiation. Fast results to support early osteoporosis detection worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/bone-density-scanning-header.jpg"
          alt="i-Cons Technologies – Bone density scanning solutions for healthcare"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Accurate, Low-Radiation Bone Density Scanning at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we offer advanced bone density scanning services that support early detection and effective management of osteoporosis and other bone-related conditions. Utilizing state-of-the-art DEXA (Dual-Energy X-ray Absorptiometry) technology, we provide precise bone density measurements with minimal radiation exposure—ensuring accurate diagnostics and patient safety.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Bone Density Scan Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.bone_density_scan.map((card) => (
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
          Our Bone Density Scanning Process 
        </h3>
      </div>
       
      <div>
            <Ourpages cards={healthcare.bone_density_scan_cards} />
          </div>
      <div>
          <ContactForm />
        </div>

      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Choosing I-Cons Technologies for Bone Density Scans.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Advanced DEXA Technology:</b>Get precise, high-resolution bone density measurements using the latest low-dose DEXA systems.
            </li>
            <li>
              <b>• Expert Interpretation:</b>Certified radiologists deliver accurate, clinically-relevant reports every time.
            </li>
            <li>
              <b>• Low Radiation Exposure:</b>Our scans are safe for all patients with minimal radiation levels.
            </li>
            <li>
              <b>• Fast Turnaround Time:</b>Receive detailed scan reports quickly, often within 24 hours.
            </li>
            <li>
              <b>• Customized Scanning Solutions:</b>Each scan is tailored to the patient’s age, gender, and clinical risk factors for more accurate and relevant results.
            </li>
             <li>
              <b>• Seamless EHR Integration:</b>Easily access reports through compatibility with your clinic’s digital systems.
            </li>
             <li>
              <b>• Regulatory Compliance:</b>We strictly follow HIPAA and AERB standards to ensure safety and data security.
            </li>
             <li>
              <b>• Trusted by Specialists:</b>Preferred by doctors across specialties for reliable and consistent diagnostic support.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for Dental Imaging?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Advanced DEXA Imaging Technology:</b>We use modern, FDA-approved DEXA scanners that provide high-precision bone density data with extremely low radiation exposure.
            </li>
            <li>
              <b>• Accurate & Reliable Reports:</b>Our scans are analyzed and reported by experienced radiologists who specialize in bone health diagnostics, ensuring dependable and clinically relevant results.
            </li>
            <li>
              <b>• Safe, Patient-Friendly Procedures:</b>We prioritize your comfort and safety with quick, non-invasive, and painless procedures, thoughtfully designed for patients of all ages.
            </li>
            <li>
              <b>• Rapid Turnaround Time:</b>Receive your detailed scan reports promptly—ideal for early diagnosis and timely clinical decisions.
            </li>
            <li>
              <b>• Seamless Integration with Healthcare Providers:</b>Our systems are designed for easy report sharing and integration with hospitals, specialty clinics, and electronic health record (EHR) platforms.
            </li>
            <li>
              <b>• Tailored Screening Programs:</b>We offer customized screening and monitoring programs for individuals at risk of osteoporosis, including post-menopausal women, elderly patients, and individuals with chronic conditions.
            </li>
            <li>
              <b>• Regulatory Compliance & Data Security:</b>We adhere strictly to HIPAA and AERB guidelines, ensuring secure data handling and fully compliant diagnostic practices.
            </li>
            <li>
              <b>• Trusted by Specialists:</b>Orthopedic surgeons, rheumatologists, endocrinologists, and general practitioners trust our bone density services for accurate, timely support in patient management.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Experience the Future of Bone Density Scanning Today.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoneDensityScanning;
