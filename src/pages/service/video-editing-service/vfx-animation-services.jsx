import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const VFXAnimationServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsource VFX Animation Services | Worldwide</title>
        <meta
          name="description"
          content="Outsource VFX Animation Services worldwide. Get high-quality, cost-effective visual effects and animations crafted by skilled international professionals."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/vfx-animation-header.jpg"
          alt="VFX Animation services tailored globally with creativity and accuracy."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Cutting-Edge VFX Animation Services to Bring Your Creative Vision to
          Life.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Bring your creative vision to life with Icons Technologies’ VFX
          animation services. Whether you're working on a film, commercial, or
          game project, our team specializes in vfx compositing, seamlessly
          integrating visual effects with live-action footage. We provide
          high-quality, industry-standard vfx services to ensure your project
          stands out with stunning visual elements that captivate and engage
          your audience. As one of the leading visual effects companies, we
          deliver professional, cutting-edge vfx visual effects that elevate
          your production.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced VFX Animation Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.vfx_animation.map((card) => (
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
          Benefits of Choosing Icons Technologies for Your VFX Animation Needs
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Expertise:</b>With years of experience in the industry, our
            team of visual effects companies experts guarantees top-tier results
            for your project.
          </li>
          <li>
            • <b>Creative Innovation:</b>We bring unique and creative vfx
            compositing solutions to your project, ensuring a fresh and
            innovative approach.
          </li>
          <li>
            • <b>High-Quality Content:</b>Our vfx services deliver
            professional-quality results that elevate the look and feel of your
            production.
          </li>
          <li>
            • <b>Scalability:</b>Whether it’s a single visual effect or a
            complex animation sequence, we scale our services to match your
            project’s needs.
          </li>
          <li>
            • <b>Time-Saving:</b>Focus on your creative direction while we
            handle the technical aspects of visual effects, delivering polished
            results on schedule.
          </li>
          <li>
            • <b>Cost-Effective:</b>Save time and resources by working with our
            skilled team instead of building in-house VFX expertise.
          </li>
          <li>
            • <b>Seamless Integration:</b>We ensure that all visual effects
            blend seamlessly into your project, maintaining consistency and
            high-quality throughout.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced VFX Animation Services?
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
            Let us bring your vision to life with stunning vfx visual effects
            that elevate your project and engage your audience.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default VFXAnimationServices;
