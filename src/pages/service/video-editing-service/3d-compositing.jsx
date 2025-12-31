import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const Threedcompositing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional 3D Compositing Services | Outsource World</title>
        <meta
          name="description"
          content="Get dependable 3D compositing services by outsourcing internationally. Perfect for films, commercials, and digital content with fast delivery."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/3d-compositing-services-header.jpg"
          alt="3D Compositing services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Bring your vision to life with Icons Technologies’ expert 3D
          compositing services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we offer professional 3D compositing services
          that seamlessly blend 3D elements with live-action footage, creating
          immersive, photorealistic visuals for your project. Using cutting-edge
          compositing programs and advanced techniques, our team of experts
          brings together CGI models, visual effects, and live-action scenes to
          create stunning, believable environments. Whether it's for film, TV,
          commercials, or video games, our 3D compositing services ensure that
          every scene is polished and realistic.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our 3D Compositing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.threed_compositing.map((card) => (
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
          Benefits of Choosing Icons Technologies for 3D Compositing Services.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>• Advanced Compositing Programs:</b>Our team uses the latest
            compositing programs to integrate 3D models and live-action footage
            with precision and efficiency.
          </li>
          <li>
            <b>• Seamless Visual Integration:</b>We ensure that 3D elements,
            such as models and effects, blend seamlessly into live-action
            footage for a realistic and cohesive final product.
          </li>
          <li>
            <b>• Expert Visual FX Integration:</b>We provide visual FX and 3D
            animation integration to bring dynamic effects to life, ensuring
            they interact naturally within the scene.
          </li>
          <li>
            <b>• High-Quality Character Compositing:</b>Our composite character
            services ensure that digital characters and creatures interact
            realistically with their environments, regardless of complexity.
          </li>
          <li>
            <b>• Real-Time Efficiency:</b>We specialize in real-time compositing
            for gaming and VR, optimizing visual elements for smooth performance
            and engagement.
          </li>
          <li>
            <b>• Creative Solutions for VFX Productions:</b>: Whether it’s for
            film, TV, or commercial production, our 3D compositing services
            provide creative solutions to meet the visual demands of any
            project.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced 3D Compositing Services?
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
            Outsource your 3D compositing needs to us, and let us help you
            create a truly immersive and polished final product.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default Threedcompositing;
