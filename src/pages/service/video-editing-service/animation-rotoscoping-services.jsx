import React from "react";
import { Helmet } from "react-helmet-async";
import animations from "../../../data/Home/animations.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const AnimationRotoscopingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Rotoscope Animation Services | i-Cons Technologies</title>
        <meta
          name="description"
          content="Professional video animation services tailored to your brand. Engaging, high-quality, and cost-effective solutions by i-Cons Technologies."
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
          Professional Rotoscoping Services for Flawless Visual Effects.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, our rotoscoping services play a pivotal role in the animation industry, enabling seamless integration of live-action and animated elements, as well as enhancing the overall visual appeal of animated projects. Our team of experts works meticulously frame-by-frame, ensuring every detail is captured and refined. Whether it’s for creating dynamic animation sequences or adding visual effects to live-action footage, our rotoscoping services help bring your animation visions to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Rotoscoping Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {animations.rotoscoping.map((card) => (
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
           Our Process: Turning Ideas Into Powerful Animated Visual Stories.
        </h3>
      </div>

      <div>
              <Ourpages cards={animations.animations_card} />
            </div>
      <div>
                      <ContactForm />
                    </div>
      <div className="py-12 px-4">
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Benefits of Choosing Icons Technologies for Rotoscoping in Animation.
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f] pb-12">
          <li>
            • <b>Expert Effects Painting:</b>We add intricate, eye-catching visual effects through detailed effects painting, enhancing the depth and beauty of your animation.
          </li>
          <li>
            • <b>Flawless Cloning & Touch-Ups:</b>Our cloning and touch-ups refine animated elements, ensuring a polished final look for your project.
          </li>
          <li>
            • <b>Precise Stereo Conversion:</b>We provide accurate stereo conversion for 3D animation, ensuring that depth and dimensions are effectively rendered.
          </li>
          <li>
            • <b>Detailed Matte Creation:</b>Our team creates precise mattes to isolate and manipulate elements in your animation, allowing for seamless integration with backgrounds or other scenes.
          </li>
          <li>
            • <b>Efficient Stereo Workflow:</b>Our stereo workflow ensures that 3D animated elements are rendered with proper depth and alignment, giving your animation a dynamic, engaging feel.
          </li>
          <li>
            • <b>Accurate Motion Tracking:</b>We integrate motion tracking to make sure animated elements sync perfectly with their surroundings, creating smooth, natural animations.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Rotoscoping in Animation Services?
                  </h4>
                  <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>Experienced & Imaginative Animators:</b>Our team blends artistic creativity with technical skill to produce animations that engage, inform, and inspire your audience.
                    </li>
                    <li>
                      • <b>Custom Animation Solutions:</b>Every project is built from the ground up to align with your goals—whether it’s for marketing, explainer videos, eLearning, or social media.
                    </li>
                    <li>
                      • <b>Quick Turnaround Times:</b>We value your deadlines. Our efficient workflow ensures your animations are delivered on time without sacrificing quality.
                    </li>
                    <li>
                      • <b>Cutting-Edge Tools & Techniques:</b>From 2D to motion graphics and character animation, we use the latest animation software and methods to bring your story to life.
                    </li>
                    <li>
                      • <b>Collaborative Workflow:</b>Your input matters. We involve you at key stages of the process to ensure the final animation reflects your vision.
                    </li>
                    <li>
                      • <b>Budget-Friendly & Transparent Pricing:</b>High-quality animation doesn’t have to come with a high price tag. We offer clear, upfront pricing with no hidden costs.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Let us help you bring your animation projects to life with the expertise and precision they deserve.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default AnimationRotoscopingServices;
