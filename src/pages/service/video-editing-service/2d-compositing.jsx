import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const Twodcompositing = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional Compositing Services | Outsource World</title>
        <meta
          name="description"
          content="Outsource compositing services to experts globally. Seamlessly blend visual elements for films, ads, and animations with fast, high-quality results."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/2d-compositing-services-header.jpg"
          alt="2D Compositing services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional 2D Compositing Services to Bring Your Vision to Life
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we specialize in offering professional 2D compositing services that seamlessly blend multiple visual elements into a single, cohesive scene. Our expert team uses advanced compositing programs to integrate live-action footage, CGI elements, and special effects, ensuring that each frame appears polished and natural. Whether you need creative compositing for a commercial, film, or music video, our compositing services bring your vision to life with precision and artistry.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our 2D Compositing Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.twod_compositing.map((card) => (
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
          Benefits of Choosing Icons Technologies for 2D Compositing Services.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>•	Expertise in Compositing Programs:</b>Our team is proficient in using the latest compositing programs to achieve flawless visual integration for any project.
          </li>
          <li>
            <b>•	Creative Compositing Solutions:</b>We offer creative compositing that enhances your storytelling, making sure the visual effects seamlessly support the narrative.
          </li>
          <li>
            <b>•	High-Quality Compositing FX:</b>Our compositing FX services ensure your project has dynamic, engaging effects that enhance the overall visual experience.
          </li>
          <li>
            <b>•	Realistic Composite Character Integration:</b>We excel at integrating composite characters into live-action footage, ensuring that digital characters interact seamlessly with their environment.
          </li>
          <li>
            <b>•	Compositing for Any Media:</b>Whether you're producing a film, commercial, or music video, our compositing videos services can be tailored to meet your specific needs.
          </li>
          <li>
            <b>•	Advanced Animation Compositing:</b>We provide high-quality animation compositing for both 2D and 3D animation, ensuring your digital characters and environments fit naturally within your scenes.
          </li>
          <li>
            <b>•	Attention to Detail:</b>Our visual compositing approach ensures that each scene is meticulously crafted, blending every element with precision.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced 2D Compositing Services?
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
            Outsource your compositing needs to us and experience the difference in quality and detail.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default Twodcompositing;
