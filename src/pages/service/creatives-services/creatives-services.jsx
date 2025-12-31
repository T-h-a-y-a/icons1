import React from "react";
import creatives_services from "../../../data/Home/creatives-services.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ourpages from "../../../components/Our-pages/ourpages";
import Card from "../../../components/Our-pages/dotcard.json";
import ContactForm from "../../../components/hoz_contact";
import Sample from "../../../components/Sample/sample";

const CreativesServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourcing Creative Services Worldwide | I Cons Technologies</title>
        <meta
          name="description"
          content="Outsourcing design, branding, and content creation globally—delivering innovative, high-quality creative solutions for every business need."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/creative-services-header.jpg"
          alt="creative-services"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Creative Graphic Design Services
        </h1>
        <p className=" poppins-regular text-[#9f9f9f] text-lg md:text-[20px] text-center max-w-[54%] mx-auto mt-4 leading-relaxed ">
          We specialize in providing high-quality graphic design services tailored to your brand’s unique needs. From stunning magazine layouts to eye-catching illustrations, our expert team ensures every design aligns with your vision. We combine creativity with precision to deliver visuals that captivate and communicate. Let us bring your ideas to life with professional, custom designs that leave a lasting impression.
        </p>
      </div>

      {/* Responsive Grid of Services */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {creatives_services.creatives_services.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
                {item.heading}
              </h1>
              <Link
                to={item.link}
                className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold  transition-allisolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10  rounded group"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process: Turning Data Into Actionable Insights
        </h3>
      </div>
  
          <div>
          <Ourpages cards={Card.cards} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Outsourcing Graphic Design Services.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Cost-Effective:</b>Outsourcing graphic design services saves you the cost of maintaining an in-house team and investing in design software.
            </li>
            <li>
              • <b>Expertise:</b>Gain access to skilled design professionals who have experience working with various industries and design styles.
            </li>
            <li>
              • <b>Time-Saving:</b>By outsourcing, you free up your time to focus on other core areas of your business, leaving the design work to the experts.
            </li>
            <li>
              • <b>High-Quality Results:</b>Outsourcing ensures that your design work is professionally executed with attention to detail, delivering high-quality results that align with your brand.
            </li>
            <li>
              • <b>Scalability:</b>Outsourcing allows for flexibility in your design needs, whether it's for a one-off project or ongoing design work.
            </li>
             <li>
              • <b>Fresh Creative Ideas:</b>By working with external designers, you bring in new perspectives and creative ideas that enhance your brand’s image.
            </li>
             <li>
              • <b>Consistency:</b>Outsourcing ensures that your design materials are consistent across all platforms and media, strengthening your brand identity.
            </li>
             <li>
              • <b>Faster Turnaround:</b>With a dedicated design team, you’ll have faster turnaround times, ensuring your materials are ready when you need them.
            </li>
          </ul>
        </div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Ctreative Services?
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
               Transform your ideas into captivating visuals — let’s design something unforgettable today!
            </h3>
            <div className="flex justify-center w-full pt-5">
              <Sample />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativesServices;
