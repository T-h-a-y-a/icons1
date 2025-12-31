import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const SocialMediaVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Social Media Video Editing Services</title>
        <meta
          name="description"
          content="Boost your social media presence by outsourcing video editing services. Save time, enhance content quality, and engage your audience effectively."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/social-media-header.jpg"
          alt="Social Enhance your videos with i Cons Technologies’ expert editing services for stunning results!"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Elevate Your Brand with Expert Outsourced Video Editing Services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At i-Cons Technologies, we specialize in providing high-quality
          outsourced video editing services tailored to meet the unique needs of
          businesses, content creators, and marketing teams. Our experienced
          editors work as an extension of your creative team to deliver
          compelling videos that captivate audiences and drive engagement across
          platforms.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.social_media.map((card) => (
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
          Benefits of Outsourcing social media video editing Services at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b> Outsourcing video production eliminates the need for expensive in-house equipment and staff, making it a budget-friendly solution.
          </li>
          <li>
            • <b>Expertise:</b> Access to highly skilled video professionals ensures high-quality content, leveraging their industry-specific knowledge and experience.
          </li>
          <li>
            • <b>Time-Saving:</b>By outsourcing, businesses can focus on their core operations while leaving video production in the hands of experts, saving valuable time.
          </li>
          <li>
            • <b>High-Quality Content:</b>Professional video production guarantees visually appealing and engaging content that resonates with the target audience.
          </li>
          <li>
            • <b>Scalability:</b> Outsourcing allows for flexible video production, enabling businesses to scale their video needs up or down based on campaigns and requirements.
          </li>
          <li>
            • <b>Consistency:</b>Maintaining a consistent video posting schedule becomes easy with outsourcing, ensuring content is delivered regularly without delays.
          </li>
          <li>
            • <b>Creative Innovation:</b>Outsourcing gives access to new creative ideas and innovative video concepts, helping businesses stand out in a crowded social media space.
          </li>
          <li>
            • <b>Analytics Integration:</b>Social media video outsourcing allows the integration of performance analytics, helping refine strategies and improve video content over time.
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
            Let’s bring your vision to life. Reach out and get started with our
            expert editors!
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaVideoEditing;
