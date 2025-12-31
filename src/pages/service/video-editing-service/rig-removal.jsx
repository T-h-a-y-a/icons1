import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const RigRemoval = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional Rig Removal Services | Outsource Globally</title>
        <meta
          name="description"
          content="Reliable Rig Removal Services by skilled professionals. Perfect for post-production cleanup to ensure flawless, distraction-free visuals."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/rig-removal-services-header.jpg"
          alt="Rig Removal services tailored globally with accuracy and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Advanced Rig Removal Techniques for Polished Videos
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we specialize in offering professional rig removal services to remove unwanted rigs, wires, and support structures from your footage, creating a clean and seamless final visual. Whether you're shooting on location or in the studio, our rig removal experts use cutting-edge techniques to ensure that your footage appears as if no rigs were ever used. Our team employs the latest VFX and compositing programs to seamlessly remove these elements, ensuring that your final video looks polished and professional.At Icons Technologies, we specialize in offering professional rig removal services to remove unwanted rigs, wires, and support structures from your footage, creating a clean and seamless final visual. Whether you're shooting on location or in the studio, our rig removal experts use cutting-edge techniques to ensure that your footage appears as if no rigs were ever used. Our team employs the latest VFX and compositing programs to seamlessly remove these elements, ensuring that your final video looks polished and professional.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Rig Removal services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.rig_removal.map((card) => (
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
          Benefits of Choosing Icons Technologies for Rig Removal Services.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>•	Seamless Integration:</b>Our rig removal services ensure that your footage appears clean and natural without any traces of wires or support structures.
          </li>
          <li>
            <b>•	Advanced VFX Techniques:</b>We use cutting-edge VFX and compositing tools to ensure that the removal process is flawless, preserving the quality of your footage.
          </li>
          <li>
            <b>•	High-Quality Results:</b>Our team delivers high-quality results with meticulous attention to detail, ensuring that the final product is polished and free of distractions.
          </li>
          <li>
            <b>•	Expertise in Complex Rigs:</b>Whether dealing with simple or complex rigs, our team has the expertise to remove them seamlessly from any footage.
          </li>
          <li>
            <b>•	Wire and Crane Removal:</b>We offer specialized services for removing wires, cranes, and other support structures used during shooting, making your scenes appear professional and clean.
          </li>
          <li>
            <b>•	Preservation of Visual Integrity:</b>We ensure that the rig removal process does not affect the surrounding elements, maintaining the realism and continuity of the shot.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Rig Removal services?
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
            Outsource your rig removal needs to us and let our experts ensure your final video is clean, polished, and professional.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default RigRemoval;
