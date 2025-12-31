import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const WeddingVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing wedding Video Editing Services </title>
        <meta
          name="description"
          content="Professional outsourcing wedding video editing services that turn raw footage into stunning, seamless wedding films with attention to every detail."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/wedding-header.jpg"
          alt="Capture your love story beautifully with i Cons Technologies' expert wedding video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Wedding Video Editing Services at Icons Technologies
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Capture the beauty and emotion of your special day with Icons
          Technologies' wedding video editing services. Whether you need a
          highlight reel, full documentary edit, or cinematic masterpiece, we
          specialize in bringing your wedding memories to life through expert
          wedding videography editing. Our team of professional wedding video
          editors works with you to ensure your wedding video tells the perfect
          story.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.wedding.map((card) => (
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
          Benefits of Outsourcing Wedding Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b> Outsource wedding video editing and save on
            expensive in-house production equipment and staff.
          </li>
          <li>
            • <b>Expertise:</b> Our team of wedding video editors brings years
            of experience to ensure your video is professionally edited and
            visually stunning.
          </li>
          <li>
            • <b>Time-Saving:</b>By outsourcing your wedding video editing, you
            free up time to enjoy your wedding day while we take care of the
            post-production process.
          </li>
          <li>
            • <b>High-Quality Content:</b>We guarantee high-quality edits,
            creating visually appealing and emotional wedding videos that
            capture every moment.
          </li>
          <li>
            • <b>Scalability:</b> Whether you need a short highlight video or a
            full-length documentary, our services are flexible to suit your
            specific needs.
          </li>
          <li>
            • <b>Consistency:</b>You’ll receive timely, consistent edits with
            professional-quality results every time.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our creative team brings fresh,
            innovative ideas to make your wedding video stand out, helping you
            preserve your memories in a unique way.
          </li>
          <li>
            • <b>Analytics Integration:</b>We help optimize your wedding video
            with analytics-driven insights, ensuring your video resonates and
            engages with viewers.
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
            Let us help you turn your wedding day into an unforgettable
            cinematic experience with our expert wedding video editing services.
            Whether you're looking to outsource wedding video editing or need a
            personal wedding video editor, we are here to bring your vision to
            life.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default WeddingVideoEditing;
