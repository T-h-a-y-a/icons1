import React from "react";
import { Helmet } from "react-helmet-async";
import animations from "../../../data/Home/animations.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";

const MotionGraphicDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>
          Professional Motion Graphics Design Services | Icons Technologies
        </title>
        <meta
          name="description"
          content="Bring your ideas to life with Icons Technologies’ expert motion graphics design services. We create dynamic, engaging visuals for videos, commercials, presentations, and more to captivate your audience."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/motion-grarphic-design-services-header.jpg"
          alt="Motion Graphic Design services globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Creative Motion Graphics Design Services to Elevate Your Brand.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Our motion graphics design services are crafted to elevate your
          brand's visual storytelling. Our skilled motion graphics designers
          create captivating, dynamic visuals that bring your ideas to life
          through animation, video effects, and engaging designs. Whether you
          need motion graphics for websites, promotional videos, or social media
          campaigns, we provide high-quality, customized solutions tailored to
          your needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Outsourced Motion Graphic Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {animations.motion_graphic.map((card) => (
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
            • <b>Expert Effects Painting:</b>We add intricate, eye-catching
            visual effects through detailed effects painting, enhancing the
            depth and beauty of your animation.
          </li>
          <li>
            • <b>Flawless Cloning & Touch-Ups:</b>Our cloning and touch-ups
            refine animated elements, ensuring a polished final look for your
            project.
          </li>
          <li>
            • <b>Precise Stereo Conversion:</b>We provide accurate stereo
            conversion for 3D animation, ensuring that depth and dimensions are
            effectively rendered.
          </li>
          <li>
            • <b>Detailed Matte Creation:</b>Our team creates precise mattes to
            isolate and manipulate elements in your animation, allowing for
            seamless integration with backgrounds or other scenes.
          </li>
          <li>
            • <b>Efficient Stereo Workflow:</b>Our stereo workflow ensures that
            3D animated elements are rendered with proper depth and alignment,
            giving your animation a dynamic, engaging feel.
          </li>
          <li>
            • <b>Accurate Motion Tracking:</b>We integrate motion tracking to
            make sure animated elements sync perfectly with their surroundings,
            creating smooth, natural animations.
          </li>
        </ul>
        <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Why Choose Icons Technologies for Motion Graphics Design?
        </h4>
        <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
          <li>
            • <b>Customized Motion Graphics for Websites:</b>We create motion
            graphics on websites that enhance user interaction and increase
            engagement.
          </li>
          <li>
            • <b>Creative Excellence from Motion Design Studios:</b>Our motion
            design studio produces innovative animations tailored to your unique
            needs.
          </li>
          <li>
            • <b>Professional Motion Graphics Designer:</b>Our team of skilled
            motion graphics designers brings your ideas to life with precision
            and creativity.
          </li>
          <li>
            • <b>Engaging Text Motion Graphics:</b>We craft compelling text
            motion graphics that enhance your message and captivate your
            audience.
          </li>
          <li>
            • <b>Collaboration with Top Motion Design Companies:</b>Through
            strategic partnerships, we ensure your project benefits from the
            combined expertise of leading motion design companies.
          </li>
        </ul>
        <div className="text-center mt-7  ">
          <h3 className="font-medium text-2xl playfont">
            Let us help you stand out with engaging animations that captivate
            your audience and elevate your brand.
          </h3>
          <Sample />
        </div>
      </div>
    </div>
  );
};

export default MotionGraphicDesign;
