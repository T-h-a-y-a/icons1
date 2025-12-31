import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const MotionGraphicsServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Creative Motion Graphic Design Services | Outsource Globally</title>
        <meta
          name="description"
          content="Outsource Motion Graphic Design Services to experts worldwide. Get engaging, high-quality animations that enhance your brand and marketing campaigns."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/motion-grarphic-design-services-header.jpg"
          alt="Motion Graphic Design services globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Creative Motion Graphics Design Services to Elevate Your Brand.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Elevate your brand’s visual storytelling with Icons Technologies’ motion graphics design services. Our team of expert designers specializes in creating captivating, dynamic motion graphics that bring your ideas to life. Whether you're looking to enhance a corporate video, an advertisement, or a social media campaign, we combine creativity with cutting-edge techniques to deliver stunning visuals. From animated logos to full-length explainer videos, our motion graphics design services provide the perfect blend of artistry and functionality to engage your audience and strengthen your brand.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Motion Graphics Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.Motion_Graphics.map((card) => (
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
           Our Process: Bringing Your Vision to Life with Stunning VFX and Composting Services
        </h3>
      </div>

      
       <div>
        <Ourpages cards={vfx_composting.vfx_composting_card} />
      </div>
      <div>
                      <ContactForm />
                    </div>
      <div className="py-12 px-4">
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Benefits of Choosing Icons Technologies for Motion Graphics Design Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>•	Creative Excellence:</b>Our team of expert designers brings fresh, innovative ideas to every project, ensuring unique and engaging motion graphics.
          </li>
          <li>
            <b>•	Brand Consistency:</b>We ensure your motion graphics align with your brand identity, enhancing brand recognition and delivering a consistent visual message.
          </li>
          <li>
            <b>•	High-Quality Content:</b>Our motion graphics design services focus on delivering polished, professional-grade animations that capture the attention of your target audience.
          </li>
          <li>
            <b>•	Time-Saving:</b>Let us handle the complex design and animation work, giving you more time to focus on your core business operations.
          </li>
          <li>
            <b>•	Scalability:</b>Whether you need a single animation or a series of videos, our services are scalable to fit your project needs.
          </li>
          <li>
            <b>•	Enhanced Engagement:</b>Engaging, visually dynamic motion graphics help improve viewer retention, interaction, and overall content performance.
          </li>
          <li>
            <b>•	Cost-Effective:</b>Save on in-house design costs by outsourcing motion graphics design to our professional team, offering high-quality results without the overhead.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Motion Graphics Design Services?
                  </h4>
                  <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>Expert Artists:</b>Our team blends technical expertise with artistic creativity to create stunning visual effects that elevate your project, whether it’s for films, commercials, or digital content.
                    </li>
                    <li>
                      • <b>Customized Solutions:</b>We tailor each to your specific vision and needs, ensuring the effects integrate seamlessly into your story and resonate with your audience.
                    </li>
                    <li>
                      • <b>Fast Turnaround Times:</b> We understand the importance of deadlines. Our efficient process ensures timely delivery of high-quality without compromising on detail or creativity.
                    </li>
                    <li>
                      • <b>State of the Art Tools:</b>Using the latest software and industry-standard techniques, we craft photorealistic and imaginative visual effects, including 3D modeling, compositing, and motion tracking, among others.
                    </li>
                    <li>
                      • <b>Collaborative Approach:</b>We work closely with you throughout the process. Your feedback is key in refining the visuals to ensure the final product aligns perfectly with your expectations.
                    </li>
                    <li>
                      • <b>Affordable & Transparent Pricing:</b>Get premium services without exceeding your budget. We offer clear, upfront pricing with no hidden fees, ensuring you receive great value for your investment.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Outsource motion graphics design to us and ensure your visuals stand out with creativity, precision, and professionalism.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default MotionGraphicsServices;
