import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const VideoEditingService = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Video Editing Services | Icons Technologie</title>
        <meta
          name="description"
          content="Outsourced Video Editing services to help your business gain insights, optimize operations, and make smarter decisions with Icons Technologies."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/video-editing-service-header.jpg"
          alt="i-Cons Technologies – Creative global video editing services"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Elevate Your Brand with Professional Video Editing Services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At i-Cons Technologies, we specialize in delivering high-quality video
          editing solutions tailored to your business goals. Our expert team
          transforms raw footage into compelling visual stories that capture
          attention and drive engagement. Whether you need promotional videos,
          corporate presentations, social media content, or training videos, our
          editing services ensure every frame aligns with your brand identity
          and message. With our advanced tools and creative expertise, you can
          enhance viewer experience, boost marketing impact, and communicate
          your story with clarity and style.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Video Editing Services Include:
        </h3>
      </div>

      <div className="relative max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/icons.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            backgroundPosition: "center top",
            filter: "blur(2px)",
            opacity: 0.5,
          }}
        ></div>

        {/* Content above background */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {video_editing_service.video_editing_service_slides.map(
            (card, index) => (
              <div
                key={index}
                className="group w-full min-h-[360px] perspective-[1000px]"
              >
                <div className="relative w-full h-full transition-transform duration-[1500ms] transform-style preserve-3d group-hover:rotate-y-180 rounded-2xl">
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] overflow-hidden">
                    <p className="playfont text-base sm:text-[15px] md:text-[18px] font-semibold leading-snug">
                      {card.title}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] transform rotate-y-180 overflow-hidden">
                    <p className="playfont text-sm md:text-[10px] lg:text-[14px] font-medium leading-relaxed">
                      {card.description}
                    </p>
                    <Link
                      to={card.link}
                      className="relative overflow-hidden group mt-4 px-5 py-3 border tracking-wide text-[12px] text-black font-semibold transition-all isolation-auto border-[#b89f81] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-[#B19777] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 rounded"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Raw Footage Into Powerful Visual Stories
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
            Why Choose i-Cons Technologies for Outsourced Video Editing
            Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Skilled & Creative Editors:</b> Our team combines technical
              expertise with creativity to craft videos that captivate and
              communicate your brand story effectively.
            </li>
            <li>
              • <b>Customized Video Solutions:</b> We tailor every edit to your
              specific goals, whether it’s marketing, training, or social media,
              ensuring your message resonates with your audience.
            </li>
            <li>
              • <b>Fast Turnaround Times:</b> We understand deadlines matter.
              Our streamlined process guarantees timely delivery without
              compromising quality.
            </li>
            <li>
              • <b>Advanced Editing Tools:</b> Using the latest software and
              techniques, we enhance your footage with professional color
              correction, motion graphics, sound design, and more.
            </li>
            <li>
              • <b>Collaborative Approach:</b> Your feedback shapes the final
              product. We maintain open communication throughout the editing
              process for a video you’ll love.
            </li>
            <li>
              • <b>Affordable & Transparent Pricing:</b> Get premium video
              editing without breaking your budget. We offer clear pricing and
              no hidden fees.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Let’s bring your vision to life. Reach out and get started with
              our expert editors!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingService;
