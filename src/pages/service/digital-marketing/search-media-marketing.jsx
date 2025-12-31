import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const SearchMediaMarketing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Social Media Marketing Services for Global</title>
        <meta
          name="description"
          content="Boost online presence with expert Social Media Marketing Services by i-cons. Targeted campaigns that connect and convert."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/social-media-marketing-services-header.jpg"
          alt="Social Media Marketing services globally with creativity and reach."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Grow Your Brand with Expert Social Media Strategies from a Leading SMM Agency</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we specialize in delivering results-driven social media marketing services tailored for businesses across the USA. Whether you’re a startup, SME, or enterprise, our expert team combines creativity, data, and strategy to help you build a strong social media presence, engage your audience, and drive conversions.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">As a trusted SMM agency, we understand the nuances of each platform and create customized campaigns that resonate with your target market—delivering measurable growth and brand loyalty.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Social Media Marketing Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.search_media_marketing.map((card) => (
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
           Benefits of Our Social Media Marketing Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Accelerated Brand Awareness:</b> Reach a wider audience quickly with targeted social media campaigns that increase your brand visibility across multiple platforms.
            </li>
            <li>
             <b>•	  Highly Targeted Engagement:</b> Connect with the right customers by leveraging precise audience targeting based on demographics, interests, and behaviors for meaningful interactions.
            </li>
            <li>
              <b>•	Measurable Results and Insights:</b> With detailed analytics and performance tracking, you get clear visibility into what’s working, allowing for data-driven improvements.
            </li>
            <li>
              <b>•	Time and Resource Efficiency:</b> Outsourcing your social media management to experts frees your internal team to focus on core business priorities while ensuring consistent online presence.
            </li>
            <li>
              <b>•	Competitive Advantage:</b> Gain insights from competitor analysis to craft smarter strategies that position your brand ahead in your industry.
            </li>
            <li>
              <b>•	Improved ROI on Marketing Spend:</b> Optimize your paid social campaigns and organic efforts for maximum return, ensuring your investment delivers real business growth.
            </li>
            <li>
              <b>•	Scalable Solutions:</b> Whether you’re just starting out or scaling your business, our social media marketing services grow with you, adapting strategies as your needs evolve.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Social Media Marketing Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Proven Expertise:</b> Vast experience delivering successful social media campaigns across diverse industries.
            </li>
            <li>
             <b>•	  Tailored Strategies:</b> Customized social media plans crafted to reflect your brand identity and meet your unique business goals.
            </li>
            <li>
              <b>•	End-to-End Management:</b> From setup and content creation to paid ads and performance tracking.
            </li>
            <li>
              <b>•	Data-Driven Approach:</b> Informed decisions backed by analytics and competitive insights.
            </li>
            <li>
              <b>•	Dedicated Support:</b> Transparent communication and ongoing optimization to maximize your social ROI.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies, a leading SMM agency, to transform your social media channels into powerful business growth engines.
            </h3>
           <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMediaMarketing;
