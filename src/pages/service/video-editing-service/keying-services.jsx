import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const Keyingservices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>
          Expert Keying Services for Clean Green Screen | Outsourcing
        </title>
        <meta
          name="description"
          content="Outsource expert Keying Services worldwide. Achieve perfect background removal and seamless compositing for your video projects."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/keying-services-header.jpg"
          alt="Keying services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Seamless Keying and Background Replacement Services
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we offer professional keying services that
          allow you to seamlessly integrate actors, objects, and other elements
          into any background or scene. Our expert team uses advanced keying
          techniques such as chroma keying to remove backgrounds and merge
          elements with precision, creating a flawless final composite. Whether
          you're working on a film, television show, commercial, or any visual
          media, our keying services ensure that your project achieves a
          polished and professional look.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Keying services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.keying.map((card) => (
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
          Benefits of Choosing Icons Technologies for Keying Services.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>• Precision in Keying:</b>We deliver highly accurate keying with
            clean edges and smooth background removal, ensuring that your
            footage seamlessly integrates with any scene.
          </li>
          <li>
            <b>• Advanced Keying Techniques:</b>Our team uses advanced keying
            programs and methods to handle even the most complex shots with
            ease.
          </li>
          <li>
            <b>• High-Quality Compositing Integration:</b>After keying, we
            seamlessly integrate your subject with backgrounds, effects, and
            other elements for a flawless visual result.
          </li>
          <li>
            <b>• Multilayer Keying Expertise:</b>We are skilled at multilayer
            keying to ensure precision in more complex scenes with multiple
            moving elements or intricate compositions.
          </li>
          <li>
            <b>• Green and Blue Screen Mastery:</b>Our keying services are
            perfect for green screen and blue screen footage, giving your
            project a professional, polished look.
          </li>
          <li>
            <b>• Seamless Special Effects Integration:</b>Our keying services
            allow for smooth integration of visual effects, helping create
            dynamic, engaging scenes.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose i-Cons Technologies for Outsourced Keying services?
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
            Outsource your keying services to us and let our experts bring your
            creative vision to life with precision and quality.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default Keyingservices;
