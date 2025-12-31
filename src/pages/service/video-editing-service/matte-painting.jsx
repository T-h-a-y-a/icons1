import React from "react";
import { Helmet } from "react-helmet-async";
import vfx_composting from "../../../data/Home/vfx-composting-services.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const MattePainting = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional Matte Painting Services | Outsource Globally</title>
        <meta
          name="description"
          content="Get expert Matte Painting services by outsourcing to skilled artists. Create realistic and immersive scenes with detailed digital paintings."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/matte-painting-services-header.jpg"
          alt="Matte Painting services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Stunning Matte Painting Services for Immersive Digital Environments
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we offer professional matte painting services that create stunning and realistic digital backgrounds for your projects. Our talented team of digital matte artists specializes in producing highly detailed digital matte paintings that enhance the visual impact of films, television shows, commercials, and video games. Whether you need expansive landscapes, futuristic cityscapes, or fantasy environments, our matte painting services provide the perfect solution to create immersive and breathtaking visuals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Stunning Matte Painting Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {vfx_composting.matte_painting.map((card) => (
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
          Benefits of Choosing Icons Technologies for Matte Painting Services.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            <b>•	High-Quality Digital Art:</b>Our digital matte painting services guarantee the creation of photorealistic and artistically crafted environments that enhance the overall visual appeal of your project.
          </li>
          <li>
            <b>•	Expert Digital Matte Artists:</b>With years of experience, our digital matte artists bring a deep understanding of lighting, perspective, and color to ensure your matte paintings feel authentic and immersive.
          </li>
          <li>
            <b>•	Seamless Integration:</b>We integrate our matte painting with live-action footage and visual effects, ensuring a flawless combination of digital and practical elements.
          </li>
          <li>
            <b>•	Creative Freedom:</b>From fantasy realms to realistic cityscapes, our digital matte painting services provide creative freedom to design any environment, no matter how complex or imaginative.
          </li>
          <li>
            <b>•	Tailored Solutions:</b>Whether for films, commercials, or video games, we offer custom matte painting services that meet the unique needs of your project, ensuring you get exactly what you envision.
          </li>
          <li>
            <b>•	Cost-Effective:</b>By outsourcing matte painting to us, you can achieve highly detailed, expansive environments without the expense of building physical sets or traveling to remote locations.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Matte Painting Services?
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
            Outsource your matte painting needs to us and experience the highest standard of digital artistry in every scene.
          </h3>
         <Sample />
        </div>
      </div>
    </div>
  );
};

export default MattePainting;
