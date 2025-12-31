import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const RotoscopingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Rotoscoping Services | Outsource Worldwide</title>
        <meta
          name="description"
          content="Get high-quality Rotoscoping Services by outsourcing to skilled experts. Perfect for films, commercials, and animations with fast turnaround."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/rotoscoping-header.jpg"
          alt="Rotoscoping services tailored globally with creativity and accuracy."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Rotoscoping Services for Seamless Visual Effects and Precise VFX Integration.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we offer professional rotoscoping services to help create seamless visual effects for your project. Our expert team specializes in isolating elements from a live-action background and meticulously creating realistic animations or integrating visual effects. Whether you're working on a film, commercial, or video game, we ensure that your footage looks flawless by providing high-quality rotoscoping for all your visual effects needs. Our experienced artists are equipped to handle complex scenes with precision, delivering smooth, professional results every time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Rotoscoping Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.rotoscoping.map((card) => (
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
          Benefits of Choosing Icons Technologies for Rotoscoping Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Expertise:</b>With extensive experience in rotoscoping services, we guarantee seamless integration of visual effects into your footage.
          </li>
          <li>
            • <b>Precision:</b>Our team provides highly detailed rotoscoping that ensures every frame is clean, accurate, and professional.
          </li>
          <li>
            • <b>High-Quality Content:</b>Our expert artists deliver flawless results, ensuring your project stands out with the best visual effects.
          </li>
          <li>
            • <b>Time-Saving:</b>We handle all the tedious and time-consuming aspects of rotoscoping, so you can focus on your creative vision.
          </li>
          <li>
            • <b>Cost-Effective:</b>By outsourcing rotoscoping services to our professional team, you save money compared to in-house production costs.
          </li>
          <li>
            • <b>Seamless Integration:</b>We guarantee that your rotoscoped elements blend smoothly with your visual effects, providing realistic and believable results.
          </li>
          <li>
            • <b>Flexible & Scalable:</b>Whether you have a few simple shots or a large-scale project, our rotoscoping services can be customized to meet your needs.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Rotoscoping Services?
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
            Outsource rotoscoping services to us, and bring your project to life with precision and professionalism.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default RotoscopingServices;
