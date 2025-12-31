import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const EmailMarketing  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Email Marketing Experts to Drive Customer Engagement</title>
        <meta
          name="description"
          content="Drive more sales and build lasting customer relationships with our tailored email marketing services designed to engage and convert your audience."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/email-marketing-services-header.jpg"
          alt="Email Marketing services tailored globally with accuracy and reach."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Professional Email Marketing Services by a Leading UGC Content Agency</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we specialize in delivering comprehensive email marketing services designed to connect your brand with your audience in meaningful ways. As a trusted UGC content agency, we understand the power of authentic, engaging content—whether crafted by your customers or expertly created by our team—to drive conversions and foster lasting relationships.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Our end-to-end email marketing approach covers everything from auditing your current campaigns to designing custom templates and managing ongoing communications, ensuring your emails stand out and deliver measurable results.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Email Marketing Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.email_marketing_services.map((card) => (
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
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>
         
      <div>
        <Ourpages cards={digital_marketing.digital_marketing_card} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our Email Marketing Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Increased Engagement:</b> Customized, targeted emails increase open rates and CTR.
            </li>
            <li>
             <b>•	Enhanced Customer Connections:</b>Timely and relevant communication fosters loyalty.
            </li>
            <li>
              <b>•	Higher Conversion Rates:</b> Persuasive, well-crafted email content guides recipients toward action.
            </li>
            <li>
              <b>•	Improved Deliverability:</b>Strategic auditing and list management reduce bounce rates.
            </li>
            <li>
              <b>•	Cost-Effective Marketing:</b> Email offers one of the highest ROIs among digital channels.
            </li>
            <li>
              <b>•	Integrated UGC:</b>Including user-generated content boosts authenticity and builds trust.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies as Your UGC Content Agency?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Expertise in Authentic Content:</b> We leverage user-generated content alongside professional copy to build trust and engagement.
            </li>
            <li>
             <b>•	  Customized Email Strategies:</b>Tailored email marketing plans that resonate with your unique audience.
            </li>
            <li>
              <b>•	Data-Driven Approach:</b> Continuous optimization through detailed analytics and reporting.
            </li>
            <li>
              <b>•	Creative Design:</b> Stunning templates crafted to boost clicks and conversions.
            </li>
            <li>
              <b>•	Comprehensive Management:</b> Full-service support from strategy development to flawless execution.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies, your reliable UGC content agency, to craft and manage impactful email campaigns that deliver real results.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
