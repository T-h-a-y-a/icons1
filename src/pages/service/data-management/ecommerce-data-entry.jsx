import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const EcommerceDataEntry  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>eCommerce Data Entry Services by I-Cons Technologies</title>
        <meta
          name="description"
          content="Boost your eCommerce business with I-Cons Technologies' accurate and efficient data entry services. Streamline product listings and drive growth."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ecommerce-data-entry-header.jpg"
          alt="i-Cons Technologies – eCommerce data entry for global online businesses"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Optimize Your eCommerce Store with Expert Product Data Entry Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">For an eCommerce business to thrive, efficient information management is crucial. Online retail stores handle vast amounts of data, and hiring an in-house team to sort and manage that data can be costly. Training and maintaining such a team can deplete your resources, diverting your focus from your core business activities.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">To streamline and enhance your data entry processes, outsource your eCommerce product data entry to a reliable partner. I Cons Technologies provides strong support to help your online business thrive. We design customized processes to streamline product catalog management and ensure flawless data accuracy, driving upselling and cross-selling opportunities for your business.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our eCommerce Data Entry Services Include:</h3>
      <div>
        <Maincard main={DataManagementservices.ecommercedataentry} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process for eCommerce Product Data Entry
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.ecommercedataentry}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Outsourcing eCommerce Data Entry to Us
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Enhanced Product Visibility:</b>Our data entry services ensure your product listings are accurate and optimized, increasing your chances of ranking higher on search engines and eCommerce platforms.
            </li>
            <li>
             <b>•	Increased Sales & Conversions:</b>By managing your product catalog efficiently, we help boost customer engagement, improving upselling and cross-selling opportunities. Optimized listings lead to higher conversion rates.
            </li>
            <li>
              <b>•	Time & Resource Savings:</b>Outsource your data entry tasks to save time and resources, allowing your in-house team to focus on driving business growth, marketing, and improving customer service.
            </li>
            <li>
              <b>•	Consistent & Accurate Listings:</b>We ensure your product data is always current, consistent, and error-free, eliminating discrepancies and boosting customer trust and satisfaction.
            </li>
            <li>
              <b>•	Faster Time-to-Market:</b>By streamlining your data entry processes, we help you launch products faster, keeping you ahead of the competition and responsive to market demands.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us for eCommerce Data Entry
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Expertise in Multiple Platforms:</b>Whether you’re using Shopify, BigCommerce, or WooCommerce, our team has deep experience with each platform, ensuring that your product listings are optimized for maximum visibility and performance.
            </li>
            <li>
             <b>•	  Tailored Solutions for Your Business:</b>We understand that every eCommerce business is unique. Our services are customized to meet the specific needs of your product catalog, providing a personalized approach to every client.
            </li>
            <li>
              <b>•	Fast Turnaround & Scalability:</b>We ensure quick data entry, no matter the size of your catalog. Whether you're adding a handful of products or managing thousands, our scalable services can grow with your business.
            </li>
            <li>
              <b>•	Cost-Effective & Resource Efficient:</b>Outsourcing your eCommerce data entry to us can reduce your operational cost, giving you more budget to invest in other business areas like marketing and growth.
            </li>
            <li>
              <b>•	Experienced & Dedicated Team:</b>Our team of trained professionals handles your data entry with precision, ensuring error-free, up-to-date listings. We focus on quality, efficiency, and timely delivery to keep your business running smoothly.
            </li>
            <li>
              <b>•	24/7 Support & Continuous Improvement:</b>We provide ongoing support to make sure your product catalog stays accurate, up-to-date, and competitive. Our proactive team constantly seeks ways to optimize your listings for better performance.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Contact us today to learn how we can improve your product data management, increase your online visibility, and drive more sales.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDataEntry;
