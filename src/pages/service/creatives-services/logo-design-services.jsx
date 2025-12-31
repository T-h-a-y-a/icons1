import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import { Link } from "react-router-dom";

const LogoDesignServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Creative Logo Design Services Worldwide</title>
        <meta
          name="description"
          content="Outsourcing creative logo design for global clients—delivering impactful, high-quality logos that define and elevate your brand."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/logo-design-services-header.jpg"
          alt="Logo Design services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Logo Design Services to Elevate Your Brand Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our logo design agency, we specialize in crafting memorable and distinctive logos that communicate your brand’s unique identity. Whether you're looking to establish a fresh look or refresh your existing logo, our team of expert designers is here to help. We provide a range of logo design services tailored to your business goals, ensuring your brand makes a lasting impression.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Graphic Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.logoDesignService.map((card) => (
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
              <Link
                to={card.link}
                className="relative overflow-hidden p-2 m-2 group border tracking-[2px] text-[13px] text-black font-semibold  transition-allisolation-auto border-gray-150 before:absolute before:w-full before:transition-all before:duration-700  before:hover:left-0  hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
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
        <Ourpage cards={creativeServicesCards.logoDesignService} />
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
              <b>• Experienced Designers:</b>Our team of industry professionals brings years of expertise, creativity, and innovation to every logo we design, ensuring your brand stands out.
            </li>
            <li>
              <b>• Creative Edge:</b>We don’t just design logos; we craft visual identities that reflect your brand’s personality, values, and vision.
            </li>
            <li>
              <b>• Fast Delivery:</b>We understand the importance of time, which is why we guarantee quick turnaround times, delivering high-quality logos within agreed timelines.
            </li>
            <li>
              <b>• Affordable Pricing:</b>Get the best value for your investment with our competitively priced services that ensure quality without breaking the bank.
            </li>
            <li>
              <b>• Tailored to Your Brand:</b>Each logo we create is customized to align perfectly with your business objectives, ensuring that your logo resonates with your target audience.
            </li>
            <li>
              <b>• Customer-Centric Approach:</b>We prioritize your satisfaction by keeping communication clear and transparent, working closely with you to ensure your vision is realized.
            </li>
            <li>
              <b>• Multiple Revisions:</b>We offer revisions throughout the design process, making sure the final logo is exactly what you envisioned and meets your expectations.
            </li>
            <li>
              <b>• Long-Term Partnership:</b>We don’t just deliver logos; we aim to build lasting relationships, offering ongoing design support as your business grows and evolves.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Our Logo Design Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Experienced Team:</b> Our team of designers is equipped with the expertise to redefine your visual strategy and deliver the highest quality graphic design services.
            </li>
            <li>
              • <b>Fast Turnaround Time:</b>We understand the urgency of your projects. Expect quick turnaround times, depending on complexity.
            </li>
            <li>
              • <b>Cutting-Edge Tools and Technologies:</b>We use the latest industry-standard design software like Photoshop, Illustrator, and Indesgin to create outstanding visuals that elevate your brand.
            </li>
            <li>
              • <b>Global Infrastructure:</b>Our state-of-the-art facilities across global delivery centers ensure that we provide top-notch designs while maintaining international quality standards.
            </li>
            <li>
              • <b>High-Quality Standards:</b>We deliver only the highest quality designs, ensuring that your brand image is in good hands.
            </li>
            <li>
              • <b>Data Security:</b>We prioritize your privacy and ensure all sensitive data is securely handled and never shared with third parties.
            </li>
            <li>
              • <b>Affordable Pricing:</b>Our custom graphic design services are designed to offer you top-quality results at cost-effective prices, ensuring the best value for your investment.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              With our logo design service, you’re not just getting a logo—you’re getting a symbol of your brand’s success. 
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignServices;
