import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";

const MenuDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Professional Menu Design for Restaurants & Hospitality</title>
        <meta
          name="description"
          content="Tailored menu design services for restaurants, cafés, and hotels—crafted to reflect your brand, improve navigation, and encourage customer purchases."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/menu-design-header.jpg"
          alt="Menu Design services tailored globally with creativity and quality."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Custom Menu Design Services to Elevate Your Restaurant’s Brand
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Your menu is not just a list of items—it’s an integral part of your restaurant or café's branding. At our menu design services, we specialize in creating visually appealing, easy-to-read menus that reflect your restaurant’s atmosphere and help enhance the dining experience. Whether you're launching a new restaurant or refreshing your current menu, our professional menu design services are tailored to help your brand stand out and captivate your customers.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          We work closely with you to understand your restaurant’s personality, offerings, and target audience to create a menu design that is functional, attractive, and aligned with your brand’s identity. Our team of menu designers ensures your menu is not only stylish but also strategically organized for ease of use, increasing customer satisfaction and ultimately driving sales.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Menu Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.MenuDesign.map((card) => (
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
          Our Menu Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.MenuDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Menu Design Needs:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Enhanced Customer Experience:</b>A well-designed menu makes it easier for customers to navigate, leading to a better dining experience.
            </li>
            <li>
              <b>• Increased Sales & Upselling:</b>Strategic layout and design can highlight high-profit items, encouraging upsells and driving higher sales.
            </li>
            <li>
              <b>• Brand Consistency:</b>Our custom designs ensure your menu reflects your restaurant’s branding, providing a cohesive look across all marketing materials.
            </li>
            <li>
              <b>• Streamlined Operations:</b>Our resto menu design ensures the layout is organized, making it easier for your staff to take orders efficiently
            </li>
            <li>
              <b>• Long-Term Value:</b>We design menus with durability in mind, so they maintain their visual appeal and functionality over time, even with regular use.
            </li>
            <li>
              <b>• Improved Visual Appeal:</b>A professional, creative menu can elevate your restaurant's overall atmosphere, impressing your guests and reinforcing your brand’s image.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us for Your Menu Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored Designs for Your Brand:</b>Our menu designers craft custom designs that align with your restaurant’s identity and appeal to your target audience.
            </li>
            <li>
              • <b>Creative & Strategic Menu Layouts:</b>We combine creativity with functionality, ensuring your menu design is visually appealing while making it easy for customers to navigate and find their desired items.
            </li>
            <li>
              • <b>Quality & Consistency:</b>We ensure high-quality design and print materials, delivering a menu that maintains its professional appearance, whether printed or viewed digitally.
            </li>
            <li>
              • <b>Affordable Pricing:</b>Our menu design services offer competitive pricing without compromising on quality, providing excellent value for your investment.
            </li>
            <li>
              • <b>Fast & Reliable Turnaround:</b>We understand the importance of time, and our team ensures quick, reliable delivery of your custom menu design, without sacrificing attention to detail.
            </li>
            <li>
              • <b>Comprehensive Design Services:</b>We offer both print and digital menu design, making sure your menu is versatile and can be displayed across different platforms, whether in your restaurant or online.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Enhance Your Dining Experience with Our Professional Menu Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDesigns;
