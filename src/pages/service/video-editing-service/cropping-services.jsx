import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const CroppingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Video cropping Services | I Cons Technologies</title>
        <meta
          name="description"
          content="Outsource video cropping services to I Cons Technologies for fast, affordable, and professional editing tailored to your needs. Quality guaranteed!"
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/cropping-services-heade.jpg"
          alt="Cropping services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Transform Your Visual Content with Our Professional Video Cropping Services.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At I-Cons Technologies, we specialize in delivering high-quality video cropping services designed to enhance your video content for various platforms, devices, and audiences. Backed by years of experience in video post-production, our expert team leverages advanced tools and creative techniques to deliver footage that is clean, focused, and visually impactful.
        </p>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you’re looking for cropping to enhance cinematic appeal, tailor content for specific platforms, or improve viewer experience, our comprehensive video editing and cropping services are designed to perfectly suit your unique content requirements.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Video Cropping Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.cropping_services.map((card) => (
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
           Our Process: Seamless and Efficient Video Cropping
        </h3>
      </div>

      
      <div>
        <Ourpages cards={video_editing_service.cropping_services_card} />
      </div>
      <div>
                      <ContactForm />
                    </div>
      <div className="py-12 px-4">
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Benefits of Our Video Cropping Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Platform Optimization:</b>We tailor each video crop for its intended platform—be it Instagram, YouTube, TikTok, or broadcast. This ensures your content retains a clean, professional appearance and displays flawlessly—without any distortion or distracting black bars.
          </li>
          <li>
            • <b>Enhanced Viewer Experience:</b>By focusing the frame on the main subject and removing any distractions, we improve visual clarity and help maintain your audience’s attention. This way, viewers experience exactly the message you intend to convey.
          </li>
          <li>
            • <b>Faster Turnaround Time:</b>Our skilled editors and optimized workflow let us deliver high-quality projects rapidly, catering specifically to agencies and creators with demanding timelines.
          </li>
          <li>
            • <b>Increased Content Reusability:</b>Transform and tailor one piece of content for use across various platforms or campaigns. Maximize the value of your footage without reshooting.
          </li>
          <li>
            • <b>Professional-Grade Output:</b>Using advanced software and quality checks, we deliver broadcast-ready output suitable for commercial use, social ads, brand reels, and more.
          </li>
          <li>
            • <b>Cost-Effective Editing Solution:</b>Avoid the expense of full re-edits or re-shoots. Our cropping services help you stretch your content budget while delivering polished, professional visuals.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose I-Cons Technologies for Video Cropping?
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>Experienced Video Editors:</b>Our team includes professionals with deep knowledge in video formatting, cinematic editing, and platform-specific requirements.
                    </li>
                    <li>
                      • <b>Platform-Optimized Solutions:</b>We understand the technical and creative standards for YouTube, Instagram, TikTok, Vimeo, and more.
                    </li>
                    <li>
                      • <b>Detail-Oriented Workflow:</b> Each project is handled with precision to ensure high-quality output and visual storytelling excellence..
                    </li>
                    <li>
                      • <b>Scalable for All Business Sizes:</b>From startups to large media agencies, our services scale with your needs.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Whether you need to enhance your marketing videos, repurpose social media content, or clean up your visuals for better storytelling, I-Cons Technologies is here to help.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default CroppingServices;
