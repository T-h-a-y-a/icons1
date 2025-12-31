import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const PodcastVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Podcast Video Editing Services - I-cons Technologies</title>
        <meta
          name="description"
          content="Professional Podcast Video Editing Services to create seamless, high-quality videos perfect for YouTube, social media, and streaming platforms."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/podcast-header.jpg"
          alt="Polish your podcast content with i Cons Technologies' professional video editing services"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Enhance the quality and engagement of your podcast with Icons Technologies’ podcast video editing services.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you're recording an interview, a solo episode, or a panel discussion, our professional video editing services transform raw footage into polished, compelling content that keeps your audience engaged. Our team specializes in editing podcasts to flow seamlessly, improve audio-visual quality, and highlight the key moments that resonate with your listeners and viewers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.podcast.map((card) => (
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
          Benefits of Outsourcing Podcast Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save time and money by outsourcing video editing instead of hiring an in-house editing team for your podcast production.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors who specialize in podcast content and know how to create engaging, polished videos.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on creating great content while we handle the time-consuming editing process and deliver polished results quickly.
          </li>
          <li>
            • <b>High-Quality Content:</b>Benefit from video editing services that elevate your podcast’s audio-visual quality, ensuring a professional finished product.
          </li>
          <li>
            • <b>Scalability:</b>Whether you need a single episode or a series, video editing outsourcing offers flexibility to handle projects of any size.
          </li>
          <li>
            • <b>Consistency:</b>Ensure every episode of your podcast is edited to the same high standards, creating a consistent and professional experience for your audience.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings fresh, creative editing solutions to each episode, helping your podcast stand out and engage your audience.
          </li>
          <li>
            • <b>Social Media Optimization:</b>We tailor your podcast videos for social media platforms, helping you grow your audience and drive engagement.
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
            Let Icons Technologies handle all your podcast video editing needs, from editing intros and outros to creating engaging highlight clips for social media. With our professional video editing services, you can focus on creating great podcast content while we manage the editing process. Outsource video editing services to ensure your podcasts reach their full potential and captivate your audience across multiple platforms.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default PodcastVideoEditing;
