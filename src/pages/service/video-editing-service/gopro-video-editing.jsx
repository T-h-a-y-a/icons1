import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const GoProVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>GoPro Video Editing Services | Expert Outsourcing</title>
        <meta
          name="description"
          content="Outsource GoPro video editing services globally. Get expert edits, cinematic effects, and fast delivery for your adventure and action footage."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/gopro-header.jpg"
          alt="Transform your GoPro footage into stunning content with i Cons Technologies' editing expertise"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional GoPro Video Editing Services to Elevate Your Adventure, Travel, and Sports Footage.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Capture every thrilling moment with Icons Technologies’ GoPro video editing services. Whether you’re documenting an action-packed adventure, a sports event, or a travel journey, our professional video editing services help transform your GoPro footage into dynamic, high-energy content. Our expert team specializes in editing GoPro videos to highlight key moments, improve visual quality, and create fast-paced, engaging content that tells your story in the best possible way.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.gopro.map((card) => (
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
          Benefits of Outsourcing GoPro Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save time and money by outsourcing video editing instead of handling post-production in-house.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors who specialize in GoPro footage and know how to make your videos shine.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on capturing more moments while we handle the editing process, ensuring your footage is polished and ready for sharing.
          </li>
          <li>
            • <b>High-Quality Content:</b>Get access to professional video editing services that enhance the visual appeal and impact of your GoPro videos.
          </li>
          <li>
            • <b>Scalability:</b>Whether you have a single adventure or an entire series, video editing outsourcing can accommodate your project’s needs.
          </li>
          <li>
            • <b>Consistency:</b>Enjoy a consistent editing style across all your GoPro videos, creating a professional and recognizable brand presence.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings fresh ideas to each video, adding creative edits, effects, and transitions to enhance your content.
          </li>
          <li>
            • <b>Social Media Optimization:</b>We optimize your GoPro videos for social media platforms, helping you engage and grow your audience effectively.
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
          <h3 className="font-medium text-2xl playfont">Outsource video editing services to ensure you get top-quality, edited videos that capture the true excitement of your adventures.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default GoProVideoEditing;
