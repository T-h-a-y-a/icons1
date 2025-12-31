import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const CorporateVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top corporate Video Editing Services </title>
        <meta
          name="description"
          content="Top real estate video editing services that enhance property footage with professional editing, stunning visuals, and smooth transitions to attract buyers."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/corporate-header.jpg"
          alt="Elevate your brand with professional corporate video editing by i Cons Technologies!"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Corporate Video Editing Services at Icons Technologies
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Elevate your brand with Icons Technologies’ video editing services.
          Whether you need a company promotional video, training video, or event
          recap, our team of expert videographer editing professionals is here
          to bring your vision to life. We specialize in transforming raw
          footage into compelling content that aligns with your brand’s goals
          and communicates your message clearly and effectively. If you're
          looking to streamline your video production process, our outsourced
          video editing solutions provide top-notch edits with efficiency.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.corporate.map((card) => (
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
          Benefits of Outsourcing Corporate Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b> Save time and resources by outsourcing
            video editing needs, avoiding the costs of in-house production teams
            and equipment. With video editing outsourcing, you get access to a
            team of experts without the additional overhead.
          </li>
          <li>
            • <b>Expertise:</b> Our experienced video editing company brings
            years of industry knowledge to ensure your videos are polished,
            professional, and tailored to your brand’s voice.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on running your business while we handle
            the entire post-production process, delivering high-quality videos
            on time and within budget. Outsource video editing services to free
            up time and resources.
          </li>
          <li>
            • <b>High-Quality Content:</b>We guarantee professional-grade edits
            that reflect your brand’s values and message, enhancing your
            reputation and appeal in the marketplace. Scalability: Whether you
            need a quick promotional video or a full video series, our services
            can be customized to meet your specific needs and project scope.
          </li>
          <li>
            • <b>Consistency:</b>With our team handling your video editing,
            you’ll receive consistent, top-tier content that aligns with your
            brand’s messaging every time.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our creative team brings fresh ideas to
            each project, ensuring your corporate videos stand out and leave a
            lasting impression.
          </li>
          <li>
            • <b>Analytics Integration:</b>We can optimize your videos with
            analytics insights, ensuring your content resonates with viewers and
            drives engagement across platforms.
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
            Let Icons Technologies help you produce stunning corporate videos
            that showcase your brand in the best light. Whether you need a
            corporate training video, promotional content, or an event recap,
            our video editing agency is here to handle your video editing
            service needs and help your company stand out. Video editor
            outsourcing is the perfect way to ensure you get high-quality
            content while focusing on your core business.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default CorporateVideoEditing;
