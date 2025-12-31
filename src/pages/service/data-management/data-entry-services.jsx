import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const Dataentryservices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourced Data Entry Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Boost efficiency with I-Cons Technologies' reliable outsourced data entry services. Accurate, cost-effective, and fast solutions for your business. "
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-entry-services-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Accurate & Efficient Data Entry Services to Streamline Your Business Operations</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">I-Cons Technologies helps streamline these processes by taking over your time-intensive data entry tasks, allowing your business to focus on its core activities. Our team operates 24/7, offering flexible, remote services to meet your data management needs. By outsourcing your data entry to I-Cons Technologies, you can ensure fast, accurate, and reliable results, improving your overall efficiency and productivity.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Services We offer</h3>
      <div>
        <Maincard main={DataManagementservices.Dataentryservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.Dataentryservices}/>
      </div>
        <div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our Data Entry Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Increased Efficiency & Productivity:</b>By outsourcing your data entry tasks to us, your team can focus on core activities, leading to faster decision-making and improved overall productivity.
            </li>
            <li>
             <b>•	Enhanced Accuracy:</b>Our double-keyed entry and multi-step validation processes ensure that your data is accurate, minimizing the risk of errors and improving data integrity.
            </li>
            <li>
              <b>•	Round-the-Clock Support:</b>We provide continuous support 24/7, ensuring that your business runs smoothly across different time zones without any disruptions.
            </li>
            <li>
              <b>•	Cost Savings:</b>Our efficient data entry processes, combined with cutting-edge technologies, result in significant cost reductions while maintaining high-quality service.
            </li>
            <li>
              <b>•	Data Security & Confidentiality:</b>We implement strict data security protocols, safeguarding your sensitive information with advanced encryption and non-disclosure agreements.
            </li>
            <li>
              <b>•	Scalable Solutions:</b>Whether your data entry requirements are small or large-scale, our services are flexible and scalable, catering to businesses of all sizes.
            </li>
            <li>
              <b>•	Quick Turnaround Time:</b>We prioritize client deadlines, ensuring timely delivery without sacrificing quality or accuracy.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for CRO Solutions?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Quick Turn Around Time:</b>We prioritize client needs, ensuring timely delivery without compromising quality, achieving an average turnaround time reduction.
            </li>
            <li>
             <b>•	  Dedicated 24/7 Service and Support:</b>Our team works around the clock, ensuring constant availability for clients across all time zones, providing continuous support.
            </li>
            <li>
              <b>•	Quick but Smart Work Culture:</b>We combine machine and manpower in a flexible workflow, resulting in an accuracy rate in all processes.
            </li>
            <li>
              <b>•	Data Security and Non-Disclosure Compliance:</b>We protect your data with robust security measures and strict confidentiality protocols, ensuring the highest levels of safety.
            </li>
            <li>
              <b>•	Free Sampling:</b>We offer free sampling to better understand your requirements, allowing us to provide accurate pricing and value-added services that meet your needs.
            </li>
             <li>
              <b>•	Bridging the Technology Gap:</b>We embrace the latest technologies, adapting quickly to ensure the most efficient and effective solutions, backed by our 20+ years of expertise in the field.
            </li>
             <li>
              <b>•	Cost Reduction:</b>By optimizing processes and leveraging technology, we help clients achieve cost reductions, delivering more value for your investment.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies for accurate, efficient data entry services that keep your business running smoothly.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataentryservices;
