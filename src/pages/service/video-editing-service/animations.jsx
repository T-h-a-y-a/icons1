import React from "react";
import { Helmet } from "react-helmet-async";
import animations from "../../../data/Home/animations.json";
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import ContactForm from "../../../components/hoz_contact";
import Ourpages from "../../../components/Our-pages/ourpages";

const  Animations = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Video Animation Services | i-Cons Technologies</title>
        <meta
          name="description"
          content="Professional video animation services tailored to your brand. Engaging, high-quality, and cost-effective solutions by i-Cons Technologies."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/animations-header.jpg"
          alt="Animation services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Animations Services: Bringing Imagination to Reality
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At the heart of every stunning visual sequence lies the art of VFX Compositing — the process of seamlessly combining live-action footage, CGI, matte paintings, and other visual elements into a single, cohesive shot. Our VFX services specialize in delivering high-quality compositing that enhances storytelling, builds immersive worlds, and brings creative visions to life. Whether it's creating hyper-realistic environments or integrating complex visual effects, our team ensures every frame is polished, believable, and cinematic.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Animation Services Include:
        </h3>
      </div>

        
<div className="relative max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
  {/* Background image with blur */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/assets/icons.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70%',
      backgroundPosition: 'center top',
      filter: 'blur(2px)',
      opacity: 0.5,
    }}
  ></div>

  {/* Content above background */}
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {animations.animations.map((card, index) => (
      <div
        key={index}
        className="group w-full min-h-[360px] perspective-[1000px]"
      >
        <div className="relative w-full h-full transition-transform duration-[1500ms] transform-style preserve-3d group-hover:rotate-y-180 rounded-2xl">
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] overflow-hidden">
            <p className="playfont text-base sm:text-[15px] md:text-[18px] font-semibold leading-snug">
              {card.title}
            </p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center gap-4 p-4 text-center shadow-md text-black bg-gradient-to-br from-[#EBEBED] to-[#F5F7F9] transform rotate-y-180 overflow-hidden">
            <p className="playfont text-sm md:text-[10px] lg:text-[14px] font-medium leading-relaxed">
              {card.description}
            </p>
            <Link
              to={card.link}
              className="relative overflow-hidden group mt-4 px-5 py-3 border tracking-wide text-[12px] text-black font-semibold transition-all isolation-auto border-[#b89f81] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-[#B19777] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 rounded"
            >
              Learn More
            </Link>
          </div>
        </div>
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
      <div>
        <div className="py-12 px-4">
                  <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
                   Why Choose i-Cons Technologies for Outsourced Animation Services?
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
                      Let’s bring your vision to life. Reach out and get started with our expert editors!
                    </h3>
                    <Sample />
                  </div>
                </div>
      </div>
    </div>
  );
};

export default Animations;
