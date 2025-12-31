import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const RealEstateDroneVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Creative Real Estate Drone Video Editing Services</title>
        <meta
          name="description"
          content="Professional Real Estate Drone Video Editing to produce visually stunning property tours and aerial shots that boost listings and sales."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/real-estate-drone-header.jpg"
          alt="Showcase properties from new heights with i Cons Technologies' real estate drone video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Real Estate Drone Video Editing Services to Showcase Properties from a New Perspective
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Take your real estate listings to the next level with Icons Technologies’ real estate drone video editing services. Drone footage offers a stunning bird’s-eye view of properties, landscapes, and neighbourhoods, and our team of expert video editors ensures that every aerial shot is optimized to showcase the beauty and scale of your real estate offering. Whether you need high-end residential or commercial property videos, our outsourced video editing services will provide the professional polish your drone footage deserves.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.real_estate_drone.map((card) => (
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
          Benefits of Outsourcing Real Estate Drone Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save on in-house editing costs by outsourcing video editing to our professional team, ensuring top-quality results without the overhead.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors skilled in real estate drone video editing, ensuring that your footage is enhanced to its full potential.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on selling properties while we handle all aspects of editing, delivering polished and engaging drone videos on time.
          </li>
          <li>
            • <b>High-Quality Content:</b>Get professionally edited, visually stunning drone videos that highlight the best features of your properties.
          </li>
          <li>
            • <b>Scalability:</b>Whether you need a single drone video or multiple property listings edited, outsourcing video editing allows for scalable solutions.
          </li>
          <li>
            • <b>Consistency:</b>Ensure your real estate videos maintain a professional and cohesive look, helping your brand remain recognizable and trustworthy.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings creative editing techniques and fresh ideas to your real estate drone footage, ensuring your videos stand out in the competitive market.
          </li>
          <li>
            • <b>Enhanced Buyer Engagement:</b>High-quality, visually captivating drone videos increase the likelihood of engagement, attracting more potential buyers and clients.
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
            Outsource video editing services to create captivating, high-quality videos that elevate your real estate marketing and attract more buyers.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default RealEstateDroneVideoEditing;
