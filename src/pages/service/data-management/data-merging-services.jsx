import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const DataMergingServices  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Data Merging Solutions for Global</title>
        <meta
          name="description"
          content="Outsource data merging globally with scalable, accurate, and secure solutions tailored for enterprises across industries and regions."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-merging-header.jpg"
          alt="Data Merging services tailored for a global audience with accuracy worldwide."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Merge Purge Service Inclusions at I Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Creating a master database involves various steps, all of which are part of the merging and purging process. Some of the outsourcing merge purge services offered at I Cons Technologies are as follows:</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our data merging services include:</h3>
      <div>
        <Maincard main={DataManagementservices.datamergingservices} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process for Data Merging Services
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.datamergingservices}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
             Key Benefits of Our Global Data Merging Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Cost Efficiency:</b>Reduce overhead by outsourcing complex data merging tasks to skilled offshore teams—saving time, resources, and infrastructure costs.
            </li>
            <li>
             <b>•	High Accuracy & Consistency:</b>Ensure clean, de-duplicated, and properly matched data across systems and regions, eliminating errors and inconsistencies.
            </li>
            <li>
              <b>•	Scalability:</b>Handle data merging at any volume—from thousands to millions of records—without compromising speed or quality.
            </li>
            <li>
              <b>•	Faster Turnaround:</b>Our 24/7 global delivery model accelerates project timelines and supports time-critical business operations.
            </li>
            <li>
              <b>•	Regulatory Compliance:</b>Stay compliant with international data standards, including GDPR, HIPAA, and regional privacy laws.
            </li>
            <li>
              <b>•	Advanced Technology:</b>Leverage AI-enhanced matching, automated workflows, and secure cloud infrastructure for smarter data integration.
            </li>
            <li>
              <b>•	Centralized, Unified Data:</b>Combine data from multiple geographies, departments, or platforms into a single source of truth for better decision-making.
            </li>
            <li>
              <b>•	Expert Support:</b>Gain access to experienced data professionals who understand both technical and business aspects of global data consolidation.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Outsource Merge and Purge Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Increased Work Efficiency:</b>Removing duplicates from your database enhances data quality, which improves operational efficiency. This ensures smoother workflows and less time spent on managing errors.
            </li>
            <li>
             <b>•	  Expertise at Your Service:</b>By outsourcing, you gain access to the specialized skills of our experts. They act as an extension of your team, handling the complexities of merge and purge tasks with precision.
            </li>
            <li>
              <b>•	Cost-Effective:</b>Hiring professionals to handle merge and purge services can be expensive. Outsourcing to I Cons Technologies helps you cut operational costs while maintaining high-quality results.
            </li>
            <li>
              <b>•	Brand Reputation:</b>Sending relevant, accurate communications to customers through a clean database boosts your brand image. A well-maintained database reflects professionalism and builds trust with your audience.
            </li>
            <li>
              <b>•	Effective Marketing:</b>With a properly merged and purged database, you can target the right audience more effectively. This improves the performance of your marketing campaigns and keeps your product/service competitive.
            </li>
             <li>
              <b>•	Time, Money, and Resource Savings:</b>Outsourcing merge and purge services saves you valuable time and resources. You can focus on core business activities while we take care of your database management needs.
            </li>
             <li>
              <b>•	Easy Management of Mailing Lists:</b>A master database organizes and categorizes your mailing lists efficiently. This allows you to manage communication efforts and target specific groups with ease.
            </li>
             <li>
              <b>•	Cost-Effective Solutions:</b>We provide affordable outsourcing solutions that are customized for your business needs. Our services are designed to give you maximum value without compromising on quality.
            </li>
             <li>
              <b>•	Focus on Core Operations:</b>Outsourcing merge/purge services frees up time for your team to focus on more strategic business tasks. You can stay focused on growth while we handle the database management.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Outsource data Merging to I Cons Technologies to boost data quality, gain better insights, and drive efficient business growth.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMergingServices;
