import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const VideoClippingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Video clipping Services | I Cons Technologies</title>
        <meta
          name="description"
          content="Outsource video clippingservices to I Cons Technologies for fast, affordable, and professional editing tailored to your needs. Quality guaranteed!"
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/clipping-services-header.jpg"
          alt="Clipping services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Video Clipping Services to Elevate Your Content
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At I-Cons Technologies, we specialize in precise and impactful video clipping services designed to meet the diverse needs of businesses, media professionals, and content creators. Our expert team uses advanced editing tools and AI-powered technology to transform your raw footage into polished, engaging clips that are optimized for every platform and audience.
        </p>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you require corporate communication highlights, interview snippets, or live event recaps, our tailored video clipping solutions ensure your content is clear, concise, and compelling.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Video Clipping Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.clipping_services.map((card) => (
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
           Our Video Clipping Process
        </h3>
      </div>

      
      <div>
              <Ourpages cards={video_editing_service.clipping_services_card} />
            </div>
      <div>
                      <ContactForm />
                    </div>
      <div className="py-12 px-4">
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Benefits of Choosing Our Video Clipping Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Industry-Leading Expertise:</b>Our experienced editors ensure high-quality, creative, and precise video clips.
          </li>
          <li>
            • <b>Scalable Solutions:</b>We handle projects of any size efficiently, from single clips to large volumes.
          </li>
          <li>
            • <b>Secure Cloud Workflow:</b>Your footage is managed with strict confidentiality and secure cloud storage.
          </li>
          <li>
            • <b>Cutting-Edge AI Integration:</b>AI accelerates content recognition and clipping accuracy.
          </li>
          <li>
            • <b>Platform Optimization:</b>Videos are formatted to perform perfectly on social media, corporate channels, and broadcast.
          </li>
          <li>
            • <b>Cost & Time Efficiency:</b>Save time and reduce costs with fast turnaround and streamlined workflows.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose I-Cons Technologies for Video Clipping Services?
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>Skilled Video Editors:</b>With extensive experience, our editors produce polished and engaging video clips tailored to your specific requirements.
                    </li>
                    <li>
                      • <b>Cutting-Edge AI Technology:</b>We utilize AI-powered content recognition for faster, more accurate clipping and content analysis.
                    </li>
                    <li>
                      • <b>Custom Solutions for Every Project:</b> We personalize our services to align with your business goals and audience preferences.
                    </li>
                    <li>
                      • <b>Multi-Platform Video Optimization:</b>Clips are optimized for seamless viewing on social media, corporate platforms, websites, and broadcast channels.
                    </li>
                    <li>
                      • <b>Secure Cloud-Based Workflow:</b>Your footage and data remain safe with encrypted storage and strict confidentiality measures.
                    </li>
                    <li>
                      • <b>Fast Turnaround Times:</b>We deliver high-quality video clips on schedule to keep your campaigns and projects on track.
                    </li>
                    <li>
                      • <b>Scalable Services:</b>Whether it’s a single clip or bulk video processing, we scale our services to match your volume requirements.
                    </li>
                    <li>
                      • <b>Dedicated Customer Support:</b>From consultation to delivery and beyond, our team is committed to providing responsive, helpful assistance.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Enhance your video content with professional clipping services that highlight the best of your footage.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default VideoClippingServices;
