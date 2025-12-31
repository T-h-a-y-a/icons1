import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const Threedvisualeffects = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Creative 3D Visual Effects Services | Outsource Worldwide</title>
        <meta
          name="description"
          content="Outsource creative 3D Visual Effects Services globally. Bring your stories to life with cutting-edge CGI and realistic animations at competitive rates."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/3d-visual-header.jpg"
          alt="3D Visual services tailored globally with creativity and accuracy."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          High-End 3D Visual Effects Services to Bring Your Vision to Life.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we specialize in providing top-tier 3D visual effects services to elevate your project with stunning and realistic digital elements. Whether you're working on a feature film, television series, or commercial, our expert team offers visual fx & 3D animation solutions that enhance storytelling and create unforgettable visual experiences. We combine cutting-edge technology with years of experience to deliver high-quality vfx services that meet your specific project needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our High-End 3D Visual Effects Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.threed_visual.map((card) => (
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
          Benefits of Choosing Icons Technologies for 3D Visual Effects Services
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>•	Expertise in VFX:</b>As one of the top visual fx companies, we have extensive experience delivering high-quality vfx services across various media platforms.
          </li>
          <li>
            <b>•	Realistic Integration:</b>Our 3D visual effects services ensure seamless integration of digital elements into live-action or animated content, enhancing the overall visual experience.
          </li>
          <li>
            <b>•	Creative Innovation:</b>We offer fresh, creative approaches to every project, ensuring your visual fx & 3D animation stand out and leave a lasting impact on your audience.
          </li>
          <li>
            <b>•	High-Quality Results:</b>We deliver top-tier vfx services that exceed industry standards, guaranteeing a polished, professional final product.
          </li>
          <li>
            <b>•	Scalability:</b>Whether you need a few 3D visual effects or an entire VFX sequence, our services can be scaled to fit projects of any size and complexity.
          </li>
          <li>
            <b>•	Time-Efficient:</b>By outsourcing your vfx services to us, you free up valuable time while still receiving expert results on schedule and within budget.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced 3D Visual Effects Services?
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
            Outsource your visual effects to us and experience a seamless process from concept to final rendering.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default Threedvisualeffects;
