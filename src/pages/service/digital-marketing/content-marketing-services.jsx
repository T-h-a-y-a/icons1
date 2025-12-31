import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample"
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const ContentMarketingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Content Creation Services to Elevate Your Brand</title>
        <meta
          name="description"
          content="Boost your brand with expert content creation services that drive traffic, engage audiences, and improve SEO for lasting growth and success."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/content-creation-services-header.jpg"
          alt="Content Creation services tailored globally with creativity and reach."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Comprehensive Content Marketing Services by a Trusted Content Marketing Agency</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we are a leading content marketing agency dedicated to delivering strategic, data-driven content marketing services that help your brand connect with the right audience and achieve measurable results. Our holistic approach covers every stage of the content lifecycle—from strategy development and creation to auditing and performance analysis.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Whether you need a tailored SEO content strategy, ongoing content creation services, or detailed analytics to guide decision-making, our expert team works closely with you to craft impactful content that drives growth and boosts your online presence.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Content Marketing Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.content_marketing_services.map((card) => (
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
           Benefits of Our Content Marketing Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Improved Search Rankings:</b> Strategic SEO content enhances your visibility on search engines.
            </li>
            <li>
             <b>•	  Consistent Brand Messaging:</b>Coordinated content calendars keep your messaging unified and timely.
            </li>
            <li>
              <b>•	Data-Backed Decisions:</b> Analytics help optimize content based on real user engagement and trends.
            </li>
            <li>
              <b>•	Increased Audience Engagement:</b>Relevant, well-crafted content fosters stronger connections with your customers.
            </li>
            <li>
              <b>•	Higher Conversion Rates:</b> Persuasive and informative content guides prospects along the buyer journey.
            </li>
            <li>
              <b>•	Long-Term Growth:</b> Sustainable content strategies that build authority and drive ongoing traffic.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies for Social Media Marketing Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Experienced Professionals:</b> Years of expertise in developing and executing successful content marketing strategies.
            </li>
            <li>
             <b>•	  Tailored Solutions:</b>Customized strategies and content that reflect your unique brand and audience.
            </li>
            <li>
              <b>•	SEO-Driven Content:</b> Proven techniques in SEO content writing to improve organic visibility.
            </li>
            <li>
              <b>•	Comprehensive Service Suite:</b> From strategy and planning to creation and analytics, we cover all your content needs.
            </li>
            <li>
              <b>•	Transparent Communication:</b> Regular updates and clear reporting for full visibility into campaign performance.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies—your trusted content marketing agency—to develop and execute comprehensive content solutions tailored to your business goals.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingServices;
