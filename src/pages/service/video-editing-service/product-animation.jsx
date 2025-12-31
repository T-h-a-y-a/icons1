import React from "react";
import { Helmet } from "react-helmet-async";
import animations from "../../../data/Home/animations.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const ProductAnimation = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Expert Product Animation Services for Impactful Visuals</title>
        <meta
          name="description"
          content="Showcase your products with stunning, realistic product animation from Icons Technologies. Our animations highlight features, functionality, and design to engage customers and boost sales."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/product-animation-services-header.jpg"
          alt="Product Animation services tailored globally with creativity and accuracy."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Engaging Product Animation to Showcase Your Brand and Boost Sales.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At Icons Technologies, we specialize in creating captivating and informative product animation that showcases your products in the most engaging way. Our team of experts combines creativity with cutting-edge technology to deliver high-quality animations that effectively communicate your product's features, benefits, and functionality. Whether you're looking for 2D product demos, 3D product demos, or animations for advertising and product briefings, we ensure your product story is told in a visually compelling way.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Product Animation Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {animations.product_animation.map((card) => (
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
                   Why Choose Icons Technologies for Product Animation?
                  </h4>
                  <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
                    <li>
                      • <b>Expert 3D Product Modelling:</b>Our 3D product modelling services create high-quality, detailed product visuals to showcase your product in the best light.
                    </li>
                    <li>
                      • <b>Interactive Product Demonstration:</b>We offer interactive product demonstration options that allow users to explore your product in a more engaging and hands-on manner.
                    </li>
                    <li>
                      • <b>Professional 3D Product Rendering:</b>With 3D product rendering, we ensure that every angle of your product is represented with photorealistic quality, enhancing the visual appeal.
                    </li>
                    <li>
                      • <b>Effective Product Explanation Videos:</b>Our product explanation video services provide clear and concise animations that break down complex product features.
                    </li>
                    <li>
                      • <b>High-Quality 3D Product Visualization:</b>We offer top-tier 3D product visualization services, ensuring your product is displayed in a realistic and appealing manner.
                    </li>
                    <li>
                      • <b>Engaging Animated Demo Videos:</b>Our animated demo videos present your product in an engaging way, simplifying its features for your audience.
                    </li>
                     <li>
                      • <b>Comprehensive Product Demo Animations:</b>Whether it’s a 2D product demo or a 3D demo, we ensure your product’s features are presented with clarity and precision.
                    </li>
                  </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Let us turn your product into a compelling visual story that resonates with customers and drives results. Whether you're seeking a product demonstration animation or 3D product modeling, we’re here to make your product stand out.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default ProductAnimation;
