import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const SportsVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Sports Video Editing Services</title>
        <meta
          name="description"
          content="Outsource top sports video editing services for highlight reels, training videos, and game analysis with expert editors and fast delivery."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/sports-header.jpg"
          alt="Relive the action with dynamic sports highlight video editing by i Cons Technologies"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Elevate your sports Videos with Icons Technologies’ sports highlight video editing services.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Whether you're capturing the intensity of a game, a thrilling match, or a memorable season, our professional video editing services help transform raw footage into dynamic, action-packed highlight reels. Our video editing company specializes in creating videos that showcase key moments, dramatic plays, and unforgettable performances to engage your audience and build excitement.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.sports.map((card) => (
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
          Benefits of Outsourcing Sports Highlight Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save resources by outsourcing video editing instead of building an in-house team for sports video production.
          </li>
          <li>
            • <b>Expertise:</b>Work with experienced editors who specialize in sports highlight video editing and understand what makes an exciting video.
          </li>
          <li>
            • <b>Time-Saving:</b>Let our team handle the editing process while you focus on creating the next big play.
          </li>
          <li>
            • <b>High-Quality Content:</b>Receive professional video editing services that enhance the thrill and excitement of your sports footage.
          </li>
          <li>
            • <b>Scalability:</b>Whether it’s a single match or an entire season’s worth of footage, outsourced video editing can accommodate projects of any size.
          </li>
          <li>
            • <b>Consistency:</b>Get consistent, polished highlight videos that maintain a high standard for every piece of content you produce.
          </li>
          <li>
            • <b>Creative Innovation:</b>We bring fresh ideas to your highlight videos, ensuring each one stands out and grabs attention.
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
            Let Icons Technologies handle all your sports video editing needs, from highlight reels to season recaps and player profiles. With our professional video editing services, your sports content will capture the attention it deserves. Outsource video editing services to create compelling videos that leave a lasting impact and drive engagement with fans, sponsors, and followers.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default SportsVideoEditing;
