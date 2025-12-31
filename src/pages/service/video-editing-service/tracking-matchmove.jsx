import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const TrackingMatchmoveServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Tracking & Matchmove Services for VFX Projects</title>
        <meta
          name="description"
          content="Outsource Tracking & Matchmove Services globally. Get precise camera tracking and seamless integration for VFX, films, and animations."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/tracking-matchmove-services-header.jpg"
          alt="Tracking and Matchmove services tailored globally with accuracy."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Tracking & Matchmove Services for Seamless 3D Integration
          with Live Footage.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we specialize in high-quality tracking &
          matchmove services that ensure seamless integration of 3D elements
          with live-action footage. Our expert team uses the latest software and
          techniques to track camera movements, objects, and markers, providing
          accurate matchmoving solutions for your projects. Whether it's for
          visual effects, animation, or gaming, our matchmove company ensures
          that digital objects match the perspective and motion of the filmed
          scene, creating realistic, believable results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Tracking & Matchmove Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.tracking_matchmove.map((card) => (
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
          Our Process: Bringing Your Vision to Life with Stunning VFX and
          Composting Services
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
          Benefits of Choosing Icons Technologies for Tracking & Matchmove
          Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>• Accurate Tracking:</b>Our matchmove experts use advanced
            software and techniques to deliver precise tracking for seamless
            integration with live-action footage.
          </li>
          <li>
            <b>• Expertise:</b>With years of experience in matchmove services,
            we provide professional solutions for films, commercials, and video
            games.
          </li>
          <li>
            <b>• High-Quality Integration:</b>Our tracking & matchmove services
            ensure that digital elements are perfectly aligned with the filmed
            environment, enhancing realism and visual quality.
          </li>
          <li>
            <b>• Time-Saving:</b>By outsourcing your matchmove needs to us, you
            save valuable time while still receiving high-quality, accurate
            tracking results.
          </li>
          <li>
            <b>• Advanced Tools:</b>We use the latest matchmoving software to
            provide accurate and efficient tracking data for every shot.
          </li>
          <li>
            <b>• Versatility:</b>Whether for visual effects, 3D animation, or
            gaming, our matchmove services are adaptable to a variety of project
            types and industries.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced Tracking & Matchmove
          Services?
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
          <li>
            • <b>Expert Artists:</b>Our team blends technical expertise with
            artistic creativity to create stunning visual effects that elevate
            your project, whether it’s for films, commercials, or digital
            content.
          </li>
          <li>
            • <b>Customized Solutions:</b>We tailor each to your specific vision
            and needs, ensuring the effects integrate seamlessly into your story
            and resonate with your audience.
          </li>
          <li>
            • <b>Fast Turnaround Times:</b> We understand the importance of
            deadlines. Our efficient process ensures timely delivery of
            high-quality without compromising on detail or creativity.
          </li>
          <li>
            • <b>State of the Art Tools:</b>Using the latest software and
            industry-standard techniques, we craft photorealistic and
            imaginative visual effects, including 3D modeling, compositing, and
            motion tracking, among others.
          </li>
          <li>
            • <b>Collaborative Approach:</b>We work closely with you throughout
            the process. Your feedback is key in refining the visuals to ensure
            the final product aligns perfectly with your expectations.
          </li>
          <li>
            • <b>Affordable & Transparent Pricing:</b>Get premium services
            without exceeding your budget. We offer clear, upfront pricing with
            no hidden fees, ensuring you receive great value for your
            investment.
          </li>
        </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Outsource matchmove services to us for professional, accurate, and
            high-quality results.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default TrackingMatchmoveServices;
