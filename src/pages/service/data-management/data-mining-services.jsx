import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import DataManagementservices from "../../../components/Our-pages/maincard.json";
import DataManagementcard from "../../../components/Our-pages/dotcard.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";

const DataMiningServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Outsource Data Mining Services</title>
        <meta
          name="description"
          content="Unlock global insights with our expert data mining services. Discover patterns, trends, and opportunities to make smarter, data-driven decisions."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-mining-services-header.jpg"
          alt="i-Cons Technologies – Global data mining services solutions and services for busi..."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Trusted Data Mining Services for Global Businesses
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          In a globally connected economy, data holds the key to strategic
          growth. Our world-class data mining services help organizations across
          industries and regions extract meaningful insights from vast datasets.
          Using advanced algorithms, machine learning, and scalable techniques,
          we uncover hidden patterns, customer behavior, and market trends to
          support smarter decision-making. Whether you're a startup or an
          enterprise, we deliver powerful data solutions tailored to your global
          business needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Data Mining Services We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {DataManagementservices.dataminingservices.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <div className="flex gap-3 pb-3 items-center">
                <img src={card.image} className="w-10 " alt={card.alt} />
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
              <div>
                
              </div>
              <p className="text-gray-600 text-justify pb-4">{card.description}</p>
              <Link
                to={card.link}
                className="relative overflow-hidden p-2 m-2 group border tracking-[2px] text-[13px] text-black font-semibold  transition-allisolation-auto border-gray-150 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Approach to Data Mining Solutions.
        </h3>
      </div>
      <div>
        <Ourpage cards={DataManagementcard.dataminingservices} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Key Benefits of Our Data Mining Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Discover Hidden Patterns and Trends:</b>Identify meaningful relationships in large datasets that can inform strategy, marketing, and customer engagement.

            </li>
            <li>
              <b>• Make Smarter Business Decisions:</b>Use data-driven insights to improve forecasting, reduce risks, and optimize resource allocation.
            </li>
            <li>
              <b>• Enhance Customer Understanding:</b>Gain deep insights into customer behavior, preferences, and lifetime value to improve targeting and personalization.
            </li>
            <li>
              <b>• Boost Operational Efficiency:</b>Identify inefficiencies and opportunities for automation, helping streamline processes and reduce costs.
            </li>
            <li>
              <b>• Gain Competitive Advantage:</b>Stay ahead of market trends and competitors with timely, insight-rich intelligence from your data.
            </li>
            <li>
              <b>• Support Innovation and Growth:</b>Leverage mined data to identify new markets, products, or service opportunities that align with evolving customer needs.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Data Mining Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>• Global Reach, Local Understanding:</b> We work with clients across continents, combining global data mining expertise with localized market insights for more relevant and impactful outcomes.
            </li>
            <li>
              <b>• Cutting-Edge Technology:</b>Our team uses the latest data mining tools, machine learning models, and AI-driven algorithms to extract the most valuable insights from your data.

            </li>
            <li>
              <b>• Industry-Specific Expertise:</b> From finance and healthcare to retail and manufacturing, we tailor our data mining solutions to meet the unique demands of your industry.
            </li>
            <li>
              <b>• Scalable Solutions:</b>Whether you're a growing startup or a multinational enterprise, our services scale with your data and business goals—without compromising quality.
            </li>
            <li>
              <b>• Data Security & Compliance:</b>We prioritize data protection, ensuring full compliance with international standards like GDPR, HIPAA, and CCPA for peace of mind.
            </li>
             <li>
              <b>• Insight-Driven Approach:</b>Our focus is not just on mining data but on delivering meaningful, actionable insights that drive real business value and performance.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Outsource data mining to I Cons Technologies to boost data
              quality, gain better insights, and drive efficient business
              growth.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMiningServices;
