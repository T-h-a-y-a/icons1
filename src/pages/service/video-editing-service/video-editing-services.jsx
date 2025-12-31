import React from "react";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const VideoEditingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Video Editing Services | I Cons Technologies</title>
        <meta
          name="description"
          content="Enhance your content with I Cons Technologies' expert outsourcing video editing services. High-quality, efficient, and tailored to your needs."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/video-editing-service-header.jpg"
          alt="Video Editing"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Video Editing Services
        </h1>
        <p className=" poppins-regular text-justify text-[#9f9f9f] text-lg md:text-[20px]  max-w-[58%] mx-auto mt-4 leading-relaxed ">
          As a professional video editing company, we specialize in outsourced
          video editing that aligns precisely with our clients’ vision. Our
          expert team transforms raw footage into high-quality content through
          color grading, visual effects, and graphic enhancements, creating
          seamless and engaging videos tailored to target audiences. We handle
          everything from wedding and corporate videos to reels and creative
          projects, ensuring each edit flows smoothly and communicates
          effectively. Our collaborative approach incorporates client feedback
          at every stage, resulting in polished videos that exceed expectations.
          By outsourcing your video
        </p>
        <p className=" poppins-regular text-[#9f9f9f] text-lg md:text-[20px] text-justify max-w-[58%] mx-auto mt-4 leading-relaxed ">
         By outsourcing your video editing to us, you gain access to top-tier service, creative problem-solving, and a commitment to 100% satisfaction—enhancing both the quality and impact of your content.
        </p>
        
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {video_editing_service.video_editing_service.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
                {item.heading}
              </h1>
              <Link
                to={item.link}
                className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
     

      
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>

      <div>
              <Ourpages cards={video_editing_service.video_editing_service_card} />
            </div>
<div>
                <ContactForm />
              </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose i-Cons Technologies for Outsourced Video Editing Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Skilled & Creative Editors:</b> Our team combines technical expertise with creativity to craft videos that captivate and communicate your brand story effectively.
            </li>
            <li>
              • <b>Customized Video Solutions:</b> We tailor every edit to your specific goals, whether it’s marketing, training, or social media, ensuring your message resonates with your audience.
            </li>
            <li>
              • <b>Fast Turnaround Times:</b> We understand deadlines matter. Our streamlined process guarantees timely delivery without compromising quality.
            </li>
            <li>
              • <b>Advanced Editing Tools:</b> Using the latest software and techniques, we enhance your footage with professional color correction, motion graphics, sound design, and more.
            </li>
            <li>
              • <b>Collaborative Approach:</b> Your feedback shapes the final product. We maintain open communication throughout the editing process for a video you’ll love.
            </li>
            <li>
              • <b>Affordable & Transparent Pricing:</b> Get premium video editing without breaking your budget. We offer clear pricing and no hidden fees.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Let’s bring your vision to life. Reach out and get started with our expert editors!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingServices;
