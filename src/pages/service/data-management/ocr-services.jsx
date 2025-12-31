import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const OcrServices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global OCR Services for Accurate Text Recognition</title>
        <meta
          name="description"
          content="I-Cons Technologies offers global OCR services for accurate text recognition, streamlining your document processing with cutting-edge technology."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ocr-services-header.jpg"
          alt="i-Cons Technologies – OCR services for text recognition and digital accuracy"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Transform visual files into actionable, valuable data with I Cons Technologies advanced OCR services.</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">When it comes to OCR (Optical Character Recognition), don't settle for anything less than excellence. Your business needs an OCR service that combines precision and intelligence in every scan, going beyond mere data extraction. At I Cons Technologies, we offer OCR services that do more than just scan – we enhance, correct, and perfect the data.</p>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Manual data entry can be tedious, but with I Cons Technologies OCR technology, your documents are processed 40 times faster than manual retyping. Bid farewell to inefficiency and embrace faster, more accurate, and highly productive workflows.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our OCR Service</h3>
      <div>
        <Maincard main={DataManagementservices.ocrservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our OCR Process
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.ocrservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our OCR Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Speed & Efficiency:</b>Our OCR technology processes documents 40 times faster than manual data entry, saving you valuable time and boosting operational productivity.
            </li>
            <li>
             <b>•	Enhanced Accuracy:</b>With an accuracy rate of over 98%, our OCR solutions minimize errors, ensuring precise data extraction and reducing the risk of inaccuracies.
            </li>
            <li>
              <b>•	Cost Savings:</b>We provide continuous support 24/7, ensuring that your business runs smoothly across different time zones without any disruptions.
            </li>
            <li>
              <b>•	Cost Savings:</b>By automating manual tasks, our OCR services significantly reduce operational costs, allowing you to allocate resources to more value-driven activities.
            </li>
            <li>
              <b>•	Improved Accessibility & Searchability:</b>We transform scanned documents into editable, searchable formats, making it easier to store, retrieve, and analyze your data.
            </li>
            <li>
              <b>•	Seamless Integration:</b>Our OCR solutions can be seamlessly integrated into your existing workflow, enhancing your document processing without disrupting your current systems.
            </li>
            <li>
              <b>•	Increased Compliance & Security:</b>With OCR document verification and data validation, you ensure compliance, reduce fraud risks, and have trusted, verified documents for decision-making.
            </li>
            <li>
              <b>•	Time-to-Insight:</b>Our OCR-powered solutions deliver actionable insights in real-time, giving your team the information they need to act quickly and make informed decisions.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose i-Cons Technologies for OCR Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Industry-Leading Expertise:</b>Our OCR solutions combine cutting-edge technology with years of experience to deliver unmatched results.
            </li>
            <li>
             <b>•	  Tailored Solutions:</b>We understand that each business has unique needs, so we provide customized OCR services that align with your specific requirements.
            </li>
            <li>
              <b>•	Speed and Accuracy:</b>With our advanced OCR technology, documents are processed at lightning speed with over with accuracy, ensuring efficiency and precision in every project.
            </li>
            <li>
              <b>•	Cost-Effective:</b>Save both time and money by automating your document processing with our OCR solutions. Enjoy substantial cost savings and reduce manual labor.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Revolutionize your operations, enhance productivity, and unlock new opportunities for growth.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcrServices;
