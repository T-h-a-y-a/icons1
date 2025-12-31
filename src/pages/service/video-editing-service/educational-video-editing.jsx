import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const EducationalVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top educational Video Editing Services </title>
        <meta
          name="description"
          content="Top outsourced video editing for education—engage students with high-quality, customized edits tailored for online learning and training."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/educational-header.jpg"
          alt="Make learning engaging with i Cons Technologies' professional educational video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Educational Video Editing Services at Icons Technologies
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Elevate your educational content with Icons Technologies’ video
          editing services. Whether you’re working on online courses, e-learning
          modules, or instructional videos, our professional video editing
          services are designed to enhance the learning experience. Our video
          editing company specializes in turning raw footage into polished,
          engaging content that captures your audience’s attention and
          effectively communicates your message.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.educational.map((card) => (
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
          Our Process: Turning Raw Footage Into Powerful Visual Stories
        </h3>
      </div>

      <div>
              <Ourpages cards={video_editing_service.video_editing_service_card} />
       </div>
      <div>
                      <ContactForm />
                    </div>
      <div className="py-12 px-4">
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Benefits of Outsourcing Educational Video Editing at Icons
          Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save money by outsourcing video editing and
            eliminating the need for an in-house production team.
          </li>
          <li>
            • <b>Expertise:</b> Get access to experienced professional video
            editors who specialize in educational content.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on your core content creation while our
            video editing agency handles all the post-production work.
          </li>
          <li>
            • <b>High-Quality Content:</b>Benefit from professional video
            editing services that enhance the quality of your educational
            material.
          </li>
          <li>
            • <b>Scalability:</b>From individual lessons to entire course
            series, video editing outsourcing can meet any project scope.
          </li>
          <li>
            • <b>Consistency:</b>Ensure all your educational videos are
            professionally edited and align with your brand’s tone.
          </li>
          <li>
            • <b>Creative Innovation:</b>Stand out with fresh ideas and creative
            video solutions from our video editing company.
          </li>
          <li>
            • <b>Analytics Integration:</b>Optimize your videos based on
            insights, enhancing viewer engagement and content effectiveness.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced Video Editing Services?
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
            • <b>Fast Turnaround Times:</b> We understand deadlines matter. Our
            streamlined process guarantees timely delivery without compromising
            quality.
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
            • <b>Affordable & Transparent Pricing:</b> Get premium video editing
            without breaking your budget. We offer clear pricing and no hidden
            fees.
          </li>
        </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            At Icons Technologies, we offer video editing outsourcing that
            caters to all your educational needs, whether it’s for a detailed
            online course, a simple instructional video, or a marketing
            campaign. Let us handle the technical editing while you focus on
            delivering high-quality learning experiences. Outsource video
            editing today to get professionally crafted content that speaks to
            your audience and supports your educational goals.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default EducationalVideoEditing;
