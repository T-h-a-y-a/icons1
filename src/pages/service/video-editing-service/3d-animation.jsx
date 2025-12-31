import React from "react";
import { Helmet } from "react-helmet-async";
import animations from "../../../data/Home/animations.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const ThreedAnimation = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional 3D Animation Services | Icons Technologies</title>
        <meta
          name="description"
          content="Transform your ideas into stunning visuals with Icons Technologies’ expert 3D animation services. Ideal for films, commercials, games, and product demos that captivate and engage your audience."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/3d-animation-services-header.jpg"
          alt="3D Animation services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          High-Quality 3D Animation Services to Bring Your Vision to Life
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we provide professional 3D animation services designed to bring your concepts to life in a dynamic and engaging way. Whether you're looking for 3D product modeling, 3D animation for advertisements, or complex 3D visualizations, our expert team is dedicated to delivering stunning animations that elevate your brand’s storytelling and visual appeal. Our 3D animation company specializes in creating realistic and immersive animations that capture your audience’s attention and communicate your message clearly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced 3D Animation Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {animations.threed_animation.map((card) => (
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
                   Why Choose Icons Technologies for 3D Animation Services?
                  </h4>
                  <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>High-Quality 3D Product Modelling:</b>We offer professional 3D product modelling to ensure your product looks realistic and polished in every animation.
                    </li>
                    <li>
                      • <b>Expert 3D Character Animation:</b>Our 3D character animation services create lifelike characters that connect with audiences through engaging visuals and movements.
                    </li>
                    <li>
                      • <b>Detailed 3D Visualizations and Simulations:</b>We bring your designs to life with realistic 3D visualizations and simulations that provide detailed, immersive experiences.
                    </li>
                    <li>
                      • <b>Immersive VR & AR Animation:</b>We specialize in creating 3D animations for VR and augmented reality animation that engage and captivate your audience.
                    </li>
                    <li>
                      • <b>Creative 3D Motion Graphics:</b>Our 3D motion graphics elevate your content by blending creative visuals with impactful storytelling.
                    </li>
                    <li>
                      • <b>Professional 3D Animation for Advertising:</b>: From animated commercials to animated ads, we provide high-quality 3D animation for advertisements that capture attention and drive engagement.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Our team is here to bring your ideas to life with stunning visuals and engaging storytelling.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default ThreedAnimation;
