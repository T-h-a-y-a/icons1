import React from "react";
import { Helmet } from "react-helmet-async";
import software from "../../../data/Home/software.json"
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const ECommerceDevelopment  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Ecommerce Development Services for Global Brands</title>
        <meta
          name="description"
          content="Delivering expert ecommerce development services worldwide. Custom solutions to build, scale, and optimize your online store for global success."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ecommerce-development-services-header.jpg"
          alt="Ecommerce Development services globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">Accelerate Sales & Scale Your Business with I-Cons Technologies’ E-Commerce Development & Growth Services</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">At I-Cons Technologies, we design and build high-performance, scalable e-commerce solutions that captivate customers, increase conversions, and fuel sustainable growth. Whether you're launching a new online store or enhancing an existing marketplace, our comprehensive services cover every step of your e-commerce journey.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Our E-Commerce Development & Growth Solutions</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {software.e_commerce_development.map((card) => (
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
          Our Software Development Process at I-Cons Technologies
        </h3>
      </div>
        
      <div>
        <Ourpages cards={software.e_commerce_development_card} />
      </div>
 <div>
                <ContactForm />
              </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           What You Gain with I-Cons Technologies.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Built for Your Business Model:</b>Whether B2B, B2C, D2C, or multi-vendor, we tailor every solution to your exact needs.
            </li>
            <li>
              • <b>Speed & Performance Optimized:</b>Our websites are fast, SEO-friendly, and built for seamless checkout.
            </li>
            <li>
              • <b>Multichannel Integration:</b>Easily connect your store with marketplaces, social platforms, and physical point-of-sale systems.
            </li>
            <li>
              • <b>Smart Insights & Analytics:</b>Access real-time data and actionable reports to enhance customer journeys and boost conversions.
            </li>
            <li>
              • <b>Enterprise-Grade Security:</b>Rest easy with GDPR- and PCI-compliant systems that protect your customers and your business.
            </li>
          </ul>

          <h4 className="pt-5 playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Partner with I-Cons Technologies?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Deep E-Commerce Experience:</b>We bring end-to-end expertise, helping businesses launch and scale digital commerce operations across various industries.
            </li>
            <li>
              • <b>UX-Focused Design:</b>Our approach centers on intuitive, conversion-optimized user experiences that build trust and encourage repeat business.
            </li>
            <li>
              • <b>Scalable & Secure Architecture:</b>We develop secure, high-performing platforms that grow with your business and comply with global data standards (PCI-DSS, GDPR).
            </li>
            <li>
              • <b>Complete Growth Enablement:</b>From technical development to digital marketing, we provide an all-in-one solution that focuses on sales, ROI, and customer retention.
            </li>
            <li>
              • <b>Long-Term Collaboration:</b>We view ourselves as partners in your success—offering continuous support long after the project is live.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
             Whether you're just getting started or scaling to the next level, we're here to turn your e-commerce vision into reality.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceDevelopment;
