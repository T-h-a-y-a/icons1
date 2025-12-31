import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const VideoReTouchingVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Video Re-Touching Video Editing Service</title>
        <meta
          name="description"
          content=" Get top Video Re-Touching Video Editing Services to improve your footage with advanced color correction, noise removal, and seamless enhancements."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/video-retouching-header.jpg"
          alt="Enhance your visuals with i Cons Technologies' professional video retouching services"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Video Retouching Services to Transform Your Footage into
          Visually Stunning Content.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Enhance the quality and appeal of your video content with Icons
          Technologies’ video re-touching services. Whether you’re looking to
          fix lighting, adjust colors, remove imperfections, or add creative
          effects, our professional video editing services ensure your footage
          looks polished and visually stunning. Our expert editors specialize in
          re-touching videos to enhance their aesthetic, making them more
          captivating and aligned with your vision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.re_touching.map((card) => (
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
          Benefits of Outsourcing Video Re-Touching at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save money and time by outsourcing video
            editing rather than investing in expensive in-house equipment and
            software.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors who
            specialize in video re-touching and can refine your footage to
            perfection.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on your project while we handle all the
            re-touching and post-production tasks, ensuring fast and
            high-quality results.
          </li>
          <li>
            • <b>High-Quality Content:</b>Get polished, visually stunning videos
            with enhanced color, lighting, and audio that elevate your content.
          </li>
          <li>
            • <b>Scalability:</b>Whether you have a single video or a large
            volume of footage, video editing outsourcing can handle projects of
            all sizes.
          </li>
          <li>
            • <b>Consistency:</b>Ensure all your videos have a consistent,
            professional look and feel, enhancing your brand’s reputation.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings fresh, creative ideas
            to each project, providing unique re-touching solutions that stand
            out.
          </li>
          <li>
            • <b>Social Media Optimization:</b>Ensure your videos are edited to
            fit the requirements of social media platforms, improving engagement
            and reach.
          </li>
          <li>
            • <b>Detail-Oriented:</b>Our team focuses on the small details,
            making sure every element of your video is refined to create a
            seamless and professional result.
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
            Outsource video editing services to ensure your videos stand out and
            captivate your audience across all platforms.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default VideoReTouchingVideoEditing;
