import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const BrandingVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Branding Video Editing Services for Businesses</title>
        <meta
          name="description"
          content="Get tailor-made Branding Video Editing Services that highlight your brand’s story and values through captivating video content."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/branding-header.jpg"
          alt="Boost your brand’s identity with i Cons Technologies' expert branding video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Strategic Branding Video Editing Services to Tell Your Story and Strengthen Your Brand Identity.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Elevate your brand with Icons Technologies’ branding video editing services. Whether you’re launching a new product, rebranding, or simply want to create compelling content that reflects your company’s values and vision, our professional video editing services help craft videos that tell your brand’s story. From concept to final edit, we specialize in creating high-impact branding videos that resonate with your target audience and leave a lasting impression.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.branding.map((card) => (
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
          Benefits of Outsourcing Branding Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save money by outsourcing video editing instead of investing in an in-house team and equipment.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors who specialize in branding and corporate videos to ensure your content is high-quality and impactful.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on growing your brand while we handle the entire video editing process, delivering polished videos on time.
          </li>
          <li>
            • <b>High-Quality Content:</b>Get professionally edited branding videos that reflect your brand’s identity and message, enhancing your market presence.
          </li>
          <li>
            • <b>Scalability:</b>Whether you need a single branding video or a full series, video editing outsourcing can accommodate projects of any size.
          </li>
          <li>
            • <b>Consistency:</b>Ensure consistent, professional video quality across all your branding videos, helping you maintain a cohesive brand image.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings fresh, creative ideas to your branding videos, making sure they stand out and engage your target audience.
          </li>
          <li>
            • <b>Audience Engagement:</b>We create videos that not only showcase your brand but also engage your audience, driving more visibility and awareness.
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
            Outsource video editing services to achieve stunning results that resonate with your audience and elevate your brand’s presence in the market.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default BrandingVideoEditing;
