import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";

const ProductPackagingDesign = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Custom Product Packaging Design for Global Brands</title>
        <meta
          name="description"
          content="Creative product packaging and label design services that tell your brand’s story, enhance shelf appeal, and boost sales across global markets."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/product-packaging-design-header.jpg"
          alt="Product Packaging Design services globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Creative Product Packaging Design Services to Make Your Brand Stand Out
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our packaging design agency, we specialize in creating innovative and visually appealing product packaging that not only protects your products but also tells your brand's unique story. We understand the importance of great packaging—it's the first thing your customers will notice and the key to making a memorable first impression. Our expert label designers are here to craft packaging that aligns with your brand's values while ensuring functionality, aesthetic appeal, and market competitiveness.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Product Packaging Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.ProductPackagingDesign.map((card) => (
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
          Our Product Packaging Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.ProductPackagingDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Product Packaging Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Increased Brand Visibility:</b>Great packaging grabs attention and helps your product stand out, increasing visibility in crowded markets.
            </li>
            <li>
              <b>• Enhanced Customer Experience:</b>Well-designed packaging enhances the overall customer experience, providing a more enjoyable interaction with your product.
            </li>
            <li>
              <b>• Stronger Brand Identity:</b>Our label designers ensure your packaging aligns with your brand’s messaging, reinforcing your brand identity every time customers interact with your product.
            </li>
            <li>
              <b>• Improved Sales & Marketability:</b>Attractive and functional packaging has a direct impact on sales, making your product more desirable and appealing to consumers.
            </li>
            <li>
              <b>• Better Product Protection:</b>We design packaging that not only looks great but also serves its primary function—protecting your product and ensuring it arrives safely.
            </li>
            <li>
              <b>• Consistency Across Product Lines:</b>We ensure that all your products have a cohesive look and feel, reinforcing your brand’s identity across all your packaging.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Product Packaging Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored Designs for Your Brand:</b>We create label design packaging that aligns with your brand’s values and identity, ensuring it stands out and connects with your target audience.
            </li>
            <li>
              • <b>Expert Designers with Industry Experience:</b>Our team of expert designers has extensive experience working with packaging design companies and understands the intricacies of designing for various industries.
            </li>
            <li>
              • <b>Creative & Innovative Solutions:</b>As a leading package design agency, we offer fresh and creative packaging concepts that set your product apart from the competition.
            </li>
            <li>
              • <b>Attention to Detail:</b>We ensure that every aspect of the packaging design, from graphics to materials, is executed with precision, creating packaging that looks and feels premium.
            </li>
            <li>
              • <b>Competitive Pricing:</b>We offer high-quality packaging design services at affordable rates, ensuring you get the best value for your investment.
            </li>
            <li>
              • <b>End-to-End Support:</b>We provide comprehensive support throughout the packaging design process, from concept to final production, ensuring a smooth and seamless experience.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Transform Your Product with Stunning Packaging Design — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPackagingDesign;
