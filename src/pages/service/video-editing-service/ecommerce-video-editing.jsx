import React from "react";
import { Helmet } from "react-helmet-async";
import video_editing_service from "../../../data/Home/video-editng-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const EcommerceVideoEditing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Ecommerce Video Editing Services | Expert Outsourcing</title>
        <meta
          name="description"
          content="Boost your online sales with expert ecommerce video editing. Outsource product videos, ads, and promos that captivate and convert customers."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ecommerce-header.jpg"
          alt="Showcase your products in style with i Cons Technologies' expert eCommerce video editing"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Expert E-Commerce Product Video Editing Services to Boost Engagement and Sales.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Enhance your online store with Icons Technologies’ e-commerce product video editing services. Whether you're looking to improve existing footage, refine product demonstrations, or optimize promotional content, our professional video editing services ensure your product videos are visually appealing, engaging, and perfectly aligned with your brand. We specialize in editing product videos to highlight key features, improve audio-visual quality, and create seamless, polished content that drives sales.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Corporate Video Editing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {video_editing_service.ecommerce.map((card) => (
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
          Benefits of Outsourcing E-Commerce Product Video Editing at Icons Technologies
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Cost-Effective:</b>Save on in-house production costs by outsourcing video editing and leveraging our expert services.
          </li>
          <li>
            • <b>Expertise:</b>Work with professional video editors skilled in e-commerce product video editing to enhance your content.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on your business while we handle the video editing process, ensuring fast, high-quality results.
          </li>
          <li>
            • <b>High-Quality Content:</b>Get polished, professional product videos that improve your brand’s image and attract potential buyers.
          </li>
          <li>
            • <b>Scalability:</b>Whether you need editing for a single product video or an entire series, video editing outsourcing can handle any project size.
          </li>
          <li>
            • <b>Consistency:</b>Enjoy consistent, high-quality edits across all your product videos, maintaining a professional and cohesive brand identity.
          </li>
          <li>
            • <b>Creative Innovation:</b>Our team brings fresh, creative editing techniques to enhance your product footage and make it stand out.
          </li>
          <li>
            • <b>Social Media Optimization:</b>Ensure your videos are edited to fit the requirements of social media platforms, improving engagement and reach.
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
            Outsource video editing services to receive high-quality, efficient edits that elevate your products and boost your e-commerce sales.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default EcommerceVideoEditing;
