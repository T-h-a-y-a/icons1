import React from "react";
import { Helmet } from "react-helmet-async";
import healthcare from "../../../data/Home/healthcare.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const DentalXRayImaging = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Advanced Dental Imaging Solutions | I-cons Technologies</title>
        <meta
          name="description"
          content="High-tech dental imaging solutions by I-cons Technologies to boost accuracy and efficiency in dental care worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/dental-imaging-solutions-header.jpg"
          alt="i-Cons Technologies – Dental imaging solutions for healthcare needs"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Experience Precision & Safety with Advanced Dental Imaging at I-Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we offer advanced dental imaging services that support precise diagnosis and effective treatment planning. Using cutting-edge technologies such as digital X-rays, Cone Beam 3D imaging, and intraoral cameras, we deliver high-resolution images with minimal radiation exposure—ensuring both patient safety and clinical excellence.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Dental Imaging Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {healthcare.dental_imaging_service.map((card) => (
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
          Our Dental Imaging Process at I-Cons Technologies
        </h3>
      </div>
      <div>
            <Ourpages cards={healthcare.dental_imaging_service_cards} />
          </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Choosing I-Cons Technologies for Dental Imaging.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Advanced Technology:</b>We use the latest digital X-rays, Cone Beam 3D imaging, and intraoral cameras to provide precise, high-resolution images.
            </li>
            <li>
              <b>• Low Radiation Exposure:</b>Our low-dose imaging protocols ensure patient safety without compromising image clarity or diagnostic quality.
            </li>
            <li>
              <b>• Expert Imaging Team:</b>Our experienced radiologists and imaging technicians specialize in dental diagnostics, offering reliable interpretations and support.
            </li>
            <li>
              <b>• Faster Diagnosis:</b>Get instant access to images and rapid turnaround on reports—ideal for urgent or time-sensitive treatments.
            </li>
            <li>
              <b>• Customized Imaging Solutions:</b>From simple dental X-rays to complex 3D scans for implants or orthodontics, we tailor our services to your specific clinical needs.
            </li>
             <li>
              <b>• Clinic-Friendly Integration:</b>Seamless integration with your existing dental software and EHR systems improves efficiency and workflow.
            </li>
             <li>
              <b>• Regulatory Compliance:</b>We strictly follow HIPAA, AERB, and other healthcare regulations, ensuring full data protection and operational transparency.
            </li>
             <li>
              <b>• Trusted by Professionals:</b>Leading dentists, orthodontists, and oral surgeons rely on us for dependable, high-quality imaging and responsive service.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose I-Cons Technologies for Dental Imaging?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Advanced Dental Imaging Technology:</b>We utilize the latest in digital X-rays, Cone Beam 3D imaging, and intraoral cameras to deliver crystal-clear, diagnostic-quality images.
            </li>
            <li>
              <b>• Expertise You Can Trust:</b>Our team includes highly trained radiologists and imaging technicians with extensive experience in dental 3D imaging and interpretation.
            </li>
            <li>
              <b>• Safe & Low-Radiation Procedures:</b>We prioritize patient safety by using low-dose radiation protocols without compromising image quality, ensuring a comfortable and safe experience.
            </li>
            <li>
              <b>• Fast Turnaround Times:</b>Receive your imaging results promptly with our efficient workflow and cloud-powered systems—perfect for urgent and time-critical situations.
            </li>
            <li>
              <b>• Seamless Integration with Clinics:</b>Our dental imaging solutions are designed for seamless integration with your dental practice management systems and EHRs.
            </li>
            <li>
              <b>• Custom Imaging for Every Case:</b>From routine X-rays to complex implant planning, we tailor our 3D dental imaging services to meet your specific diagnostic needs.
            </li>
            <li>
              <b>• Compliance & Quality Assurance:</b>We strictly follow regulatory standards, including HIPAA and AERB, to ensure your data is secure and your diagnostics are accurate and trustworthy.
            </li>
            <li>
              <b>• Trusted by Leading Dental Professionals:</b>Dental clinics, orthodontists, and oral surgeons trust us for consistent quality, expert support, and responsive service in dent imaging.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Experience the Future of Dental Imaging Today.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalXRayImaging;
