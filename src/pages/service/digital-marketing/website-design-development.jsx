import React from "react";
import { Helmet } from "react-helmet-async";
import digital_marketing from "../../../data/Home/digital-marketing.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const WebsiteDesignDevelopment  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Web Development Services for Your Business</title>
        <meta
          name="description"
          content="Hire expert web development services worldwide. We build custom, responsive websites to boost your brand and drive growth in any market."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/web-development-services-header.jpg"
          alt="Web Development services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Professional Website Development Services by a Leading Website Development Company</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we offer comprehensive web development services that empower your brand with a powerful, user-friendly online presence. As a trusted website development company, we specialize in crafting custom digital experiences that not only look stunning but also perform seamlessly across all devices.</p>
           <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Whether you need a sleek brochure site or a robust dynamic website, our expert team combines creativity and technical expertise to deliver tailored website design services that align perfectly with your business goals.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our Website Development Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {digital_marketing.website_development_services.map((card) => (
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
           Benefits of Our Website Development Services
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Enhanced Brand Credibility:</b>Professional, custom designs build trust with your visitors.
            </li>
            <li>
             <b>•	Improved User Experience:</b>Timely and relevant communication fosters loyalty.
            </li>
            <li>
              <b>•	Higher Search Engine Rankings:</b>SEO-optimized sites attract more organic traffic.
            </li>
            <li>
              <b>•	Scalability and Flexibility:</b>Websites built to grow with your business needs.
            </li>
            <li>
              <b>•	Better Conversion Rates:</b> Effective design and functionality encourage visitor actions.
            </li>
            <li>
              <b>•	Ongoing Support:</b>Reliable maintenance and updates keep your site running smoothly.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies Among Web Design Agencies?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Experienced Developers and Designers:</b> Skilled professionals delivering innovative and reliable web solutions.
            </li>
            <li>
             <b>•	  Customized Approach:</b>Every website is uniquely crafted to fit your brand and audience.
            </li>
            <li>
              <b>•	SEO-Focused Development:</b> Optimized websites designed to improve search engine rankings and drive traffic.
            </li>
            <li>
              <b>•	Responsive and Mobile-Friendly:</b> Delivering a smooth and consistent experience on desktops, tablets, and smartphones.
            </li>
            <li>
              <b>•	End-to-End Support:</b> From initial concept through launch and ongoing maintenance, we are your full-service partner.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Partner with I-Cons Technologies, a leading website development company, to create a stunning, functional website that elevates your brand online.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesignDevelopment;
