import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const SearchEngineMarketing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>SEM Services to Grow Your Business | I-Cons Technologies</title>
        <meta
          name="description"
          content="Power your growth with SEM Services from I-Cons Technologies. Optimize ad spend and see real, measurable results."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/sem-services-header.jpg"
          alt="SEM services tailored globally with accuracy and reliable results."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Drive Qualified Traffic with Expert Search Engine Marketing (SEM) Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we offer performance-driven Search Engine Marketing (SEM) services that help businesses maximize ROI through strategic paid advertising. As a trusted search engine marketing consultant, we craft data-backed campaigns that deliver instant visibility and measurable results.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Our SEM marketing services are tailored to suit your industry, audience, and goals—helping you dominate paid search and convert clicks into customers. Whether you're launching a new product, promoting a service, or scaling an e-commerce store, we have the expertise to turn your ad spend into profit.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Comprehensive SEM Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.search_engine_marketing.map((card) => (
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
           Benefits of Our SEM Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Immediate Visibility:</b> Unlike SEO, SEM provides instant exposure on search engines—putting your business in front of potential customers exactly when they’re searching.
            </li>
            <li>
             <b>•	  Targeted Advertising:</b> Target your ideal audience using demographics, location, interests, and search behavior. 
            </li>
            <li>
              <b>•	Measurable ROI:</b> Everything is trackable. From clicks and impressions to conversions and cost-per-acquisition, we give you full transparency into your campaign’s performance.
            </li>
            <li>
              <b>•	Continuous Optimization:</b> With real-time data, we fine-tune your campaigns for better performance. Our strategies evolve with your audience’s behavior and Google’s algorithm changes.
            </li>
            <li>
              <b>•	Cost Control:</b> You set the budget, we manage it. With strategic bidding and optimized keyword targeting, we ensure you get the most value from every dollar spent.
            </li>
            <li>
              <b>•	Expert Management:</b> As a seasoned search engine marketing consultant, we manage the technical and creative aspects of your campaigns—so you can focus on running your business.
            </li>
            <li>
              <b>•	Scalable Growth:</b> Whether you're a local startup or an international brand, our SEM campaigns scale with your business—ensuring consistent lead flow and revenue growth.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies as Your Search Engine Marketing Consultant?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Certified Experts in Google & Bing Ads:</b> Our team stays ahead of the latest trends, algorithm changes, and advertising best practices.
            </li>
            <li>
             <b>•	  Custom Strategy for Every Business:</b> No generic templates—just results-focused, tailored campaigns.
            </li>
            <li>
              <b>•	Full-Funnel Marketing Expertise:</b> From click to conversion, we optimize every stage of your paid search funnel.
            </li>
            <li>
              <b>•	Transparent Reporting:</b> Real-time dashboards and monthly reports keep you informed and in control.
            </li>
            <li>
              <b>•	ROI-Focused Execution:</b> Our primary goal: lower cost-per-acquisition, higher ROI, and sustainable growth.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies for strategic SEM services that bring visibility, leads, and measurable ROI.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineMarketing;
