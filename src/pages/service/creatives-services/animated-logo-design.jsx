import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/hoz_contact";

const AnimatedLogoDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Logo Animation Services Worldwide</title>
        <meta
          name="description"
          content="Outsourcing logo animation services for global brands. Delivering high-quality, creative animated logos that captivate audiences worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/animated-logo-header.jpg"
          alt="Data Analysis"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Logo Animation Services That Make Your Brand Unforgettable
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          we specialize in creating animated logos that bring your brand to life and leave a lasting impression on your audience. Whether you’re looking for a subtle motion to enhance your logo or a more dynamic animation to captivate your viewers, we offer a variety of animation styles tailored to suit your brand. Our animated logos are crafted to stand out and help you create a memorable brand presence across digital platforms and beyond.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Animated Logo Styles:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.AnimatedlogoDesignService.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <div className="flex gap-3 pb-3 items-center">
                <img src={card.image} className="w-10 " alt={card.alt} />
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
              <div>
                
              </div>
              <p className="text-gray-600 text-justify pb-4">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process.
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.AnimatedlogoDesignService} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Outsource Graphic Design Services at the I Cons Technologies.
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Experienced Designers:</b>Our team of expert designers is well-versed in creating high-quality animated logos that elevate your brand’s visual identity.
            </li>
            <li>
              <b>• Tailored to Your Brand:</b>Every animation logo we create is personalized to ensure it reflects your brand’s unique identity and message.
            </li>
            <li>
              <b>• Quick Turnaround:</b>We value your time and strive to deliver your animated logo quickly without compromising on quality.
            </li>
            <li>
              <b>• Affordable Pricing:</b>Our logo for animation services are competitively priced, offering great value while maintaining the highest standard of design.
            </li>
            <li>
              <b>• Customer-Centric Approach:</b>We work closely with you throughout the process, ensuring your vision comes to life in the final animated logo.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our Animated Logo Design Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Engagement & Creativity:</b>Whether you’re looking for 2D, 3D, or Flash animations, we create animated logos that boost engagement and make your brand stand out in a crowded marketplace.
            </li>
            <li>
              • <b>Versatility Across Platforms:</b>Our animation logos are designed for easy integration across various media, including websites, social media, commercials, presentations, and more.
            </li>
            <li>
              • <b>Enhanced Brand Recognition:</b>Adding motion to your logo makes it more memorable and impactful. Your brand will resonate with customers long after they’ve seen it in action.
            </li>
            <li>
              • <b>Customization:</b>Each logo for animation is tailored specifically to your brand’s message, style, and vision, ensuring a unique and custom design that aligns with your business goals.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Ready to bring your brand’s identity to life? Let us help you create an animated logo that not only captures attention but also reflects your brand’s unique personality. 
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoDesign;
