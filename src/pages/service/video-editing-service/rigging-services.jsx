import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const RiggingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert 3D Rigging Services | Outsource Globally</title>
        <meta
          name="description"
          content="Outsource 3D Rigging Services for smooth character animation. Skilled professionals deliver efficient rigs tailored to your animation and gaming needs."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/rigging-services-header.jpg"
          alt="Rigging services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          3D Rigging Services for Realistic Animation and Seamless Character
          Movement.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we offer expert rigging services through our
          professional rigging studio to ensure smooth, realistic movements for
          your 3D models. Our team specializes in creating custom rigs for a
          wide range of applications, including character animation, mechanical
          objects, and complex creatures. With our cutting-edge 3D rigging
          techniques, we deliver flexible and scalable rigging solutions that
          provide the perfect foundation for high-quality animations. Whether
          it’s for films, video games, or virtual reality, our rigging services
          ensure that every movement is natural and dynamic.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Rigging Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.rigging.map((card) => (
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
          Benefits of Choosing Icons Technologies for Rigging Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>• Precision & Quality:</b>Our team of expert designers brings
            fresh, innovative ideas to every project, ensuring unique and
            engaging motion graphics.
          </li>
          <li>
            <b>• Efficiency:</b>We create 3D rigging that is efficient and
            flexible, allowing for smooth animation workflows and quicker
            turnarounds.
          </li>
          <li>
            <b>• Tailored Rigging Solutions:</b>Our rigging solutions are
            customized to suit your specific project needs, whether for
            characters, creatures, or mechanical objects.
          </li>
          <li>
            <b>• Game-Ready Rigs:</b>Our rigging services are optimized for game
            engines, ensuring seamless integration and real-time interactions in
            video games.
          </li>
          <li>
            <b>• Expertise:</b>As a leading rigging studio, we bring years of
            experience in 3D rigging, delivering flawless results for a variety
            of media applications.
          </li>
          <li>
            <b>• Scalability:</b>We can scale our rigging solutions to meet the
            needs of both small and large projects, ensuring your animation is
            perfectly executed.
          </li>
          <li>
            <b>• Realism:</b>Our rigging services provide lifelike, realistic
            movements that enhance the visual quality of your animations and VFX
            projects.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced Rigging Services?
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
            Outsource rigging services to us for seamless integration and
            superior quality in every project.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default RiggingServices;
