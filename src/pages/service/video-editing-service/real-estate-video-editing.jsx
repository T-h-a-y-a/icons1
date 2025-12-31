import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const RealEstateVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Best Real Estate Video Editing Services</title>
        <meta
          name="description"
          content="Top real estate video editing services that enhance property footage with professional editing, stunning visuals, and smooth transitions to attract buyers."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/real-estate-header.jpg"
          alt="Showcase properties with stunning visuals through i Cons Technologies' real estate video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Commercial Real Estate Video Editing Services at Icons Technologies
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Showcase your properties in the best light with Icons Technologies’
          commercial real estate video editing services. Whether you need a
          sleek promotional video, virtual tour, or cinematic property showcase,
          we specialize in transforming your raw footage into engaging,
          high-quality content that attracts potential buyers. Our team of
          expert real estate video editors works with you to create videos that
          highlight the best features of your property, making it stand out in a
          competitive market.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Commercial Real Estate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.real_estate.map((card) => (
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
          Benefits of Outsourcing Real Estate Video Editing at Icons
          Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b> Save money on in-house video editing
            equipment and staff by outsourcing your real estate video editing
            services to our expert team.
          </li>
          <li>
            • <b>Expertise:</b> With years of experience in commercial real
            estate video editing and marketing, we ensure your videos are
            polished, professional, and optimized for maximum viewer engagement.
          </li>
          <li>
            • <b>Time-Saving:</b>Outsource your video editing and free up time
            to focus on your business while we take care of all the
            post-production details.
          </li>
          <li>
            • <b>High-Quality Content:</b>We guarantee high-quality edits that
            showcase your property at its best, giving you videos that attract
            more buyers and generate interest.
          </li>
          <li>
            • <b>Scalability:</b> Whether you need a quick property walkthrough
            or a full commercial video, our real estate video marketing services
            are flexible to fit your specific needs. Consistency: Enjoy
            consistent, top-quality edits that maintain a professional standard,
            regardless of the size or number of videos you require.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our creative team brings fresh and
            innovative ideas to every project, ensuring your real estate videos
            stand out in a crowded market.
          </li>
          <li>
            • <b>Analytics Integration:</b>We optimize your real estate video
            content to perform better across various platforms, with
            analytics-driven insights to boost engagement and viewer retention.
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
            Let Icons Technologies help you create stunning real estate videos
            that capture the essence of your properties and engage potential
            buyers like never before. Whether you’re looking to outsource your
            real estate video editing services or need a personal real estate
            video editor for your business, we’re here to make your listings
            shine.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default RealEstateVideoEditing;
