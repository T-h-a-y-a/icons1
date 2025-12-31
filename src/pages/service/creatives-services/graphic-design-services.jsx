import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";
import { Link } from "react-router-dom";

const GraphicDesignServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Designing Services for Global Brands</title>
        <meta
          name="description"
          content="Outsourcing designing services for branding, graphics, and marketing—delivering creative, high-quality designs to clients across the globe."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/graphic-design-services-header.jpg"
          alt="Graphic Design services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Comprehensive Graphic Designing Services to Elevate Your Brand Identity
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          We specialize in a wide range of graphic design services that enhance your brand's identity and engagement. Our professional graphic design services cover everything from logo creation to full-scale branding solutions. With a focus on creativity and innovation, we deliver unique graphic design tailored to your business needs, ensuring your brand stands out in a crowded market.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Graphic Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.GraphicDesignServices.map((card) => (
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
        <Ourpage cards={creativeServicesCards.GraphicDesignServices} />
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
              <b>• Expertise:</b>Specialized designers bring technical understanding of control systems and user interfaces to create intuitive, effective designs.

            </li>
            <li>
              <b>• Cost Efficiency:</b>Outsourcing reduces the need for hiring full-time graphic designers, cutting overhead costs.
            </li>
            <li>
              <b>• Time Savings:</b>Experienced outsourcing partners can quickly produce high-quality designs, speeding up the overall development timeline.
            </li>
            <li>
              <b>• Focus on Core Operations:</b>Allows your team to concentrate on developing and improving the underlying technology while design is handled by specialists.
            </li>
            <li>
              <b>• Access to Latest Trends:</b>Outsourcing gives you access to designers who are up-to-date with current design trends, ensuring modern and user-friendly interfaces.
            </li>
            <li>
              <b>• Scalability:</b>You can scale the amount of design work based on project requirements without committing to long-term contracts or hires.
            </li>
            <li>
              <b>• Global Talent Pool:</b>Outsourcing opens the door to a wide range of global design talent with diverse perspectives and skills.
            </li>
            <li>
              <b>• Quality Assurance:</b>Professional graphic design firms often have established processes for ensuring high-quality results that meet your specific needs and standards.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Graphic Design Services?
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
              Outsource your graphic designing services to I Cons Technologies and get world-class design at a fraction of the cost.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignServices;
