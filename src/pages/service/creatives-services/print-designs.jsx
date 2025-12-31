import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Ourpage from "../../../components/Our-pages/ourpages";
import creativeServices from "../../../components/Our-pages/maincard.json";
import ContactForm from "../../../components/hoz_contact";
import creativeServicesCards from "../../../components/Our-pages/dotcard.json";

const PrintDesigns = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Custom Print Design Services for Global Brands</title>
        <meta
          name="description"
          content="We create custom print designs—from brochures to large-format banners—that reflect your brand identity and deliver stunning, print-ready results worldwide."
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/print-design-header.jpg"
          alt="Print Design services tailored globally with creativity and reliability."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Professional Print Design Services to Make Your Brand Stand Out
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At our print design agency, we specialize in creating visually captivating designs that bring your brand to life across all printed materials. From brochures and business cards to posters and banners, our print design services are tailored to meet your specific needs and help you make a lasting impression. Whether you're looking to promote a new product, advertise a service, or enhance your brand’s presence, we create print designs that communicate your message clearly and effectively.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          We focus on crafting high-quality, professional designs that not only look amazing but are also optimized for printing. Our team of experienced graphic design print experts ensures that every detail is perfect—from layout and typography to color schemes and imagery. We aim to produce designs that both look great and print seamlessly, offering you the best results every time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
         Our Print Design Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {creativeServices.PrintDesign.map((card) => (
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
          Our Print Design Process:
        </h3>
      </div>
      <div>
        <Ourpage cards={creativeServicesCards.PrintDesign} />
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Benefits of Our Print Design Services:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>• Improved Brand Visibility:</b>Well-designed print materials make a lasting impression, helping to increase brand awareness and recognition.
            </li>
            <li>
              <b>• Increased Engagement:</b>Professionally designed print materials engage your audience, making your message more memorable and effective.
            </li>
            <li>
              <b>• Enhanced Brand Consistency:</b>We ensure that all your print designs reflect your brand’s identity, offering cohesive marketing materials across all platforms.
            </li>
            <li>
              <b>• Targeted Marketing Impact:</b>Whether for an event, product launch, or business promotion, our print design services help you effectively target and reach your audience.
            </li>
            <li>
              <b>• Affordable and High-Quality Output:</b>We provide top-tier designs that meet your budget, ensuring you get exceptional value for your investment in printing designing company services.
            </li>
            <li>
              <b>• Long-Lasting Impact:</b>Printed materials like brochures and business cards stay with potential customers, providing ongoing exposure for your brand.
            </li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
            Why Choose Us for Your Print Design Needs:
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored to Your Brand Identity:</b>Our print design agency crafts custom designs that reflect your unique brand, ensuring consistency across all your printed materials.
            </li>
            <li>
              • <b>Expert Design Team:</b>Our experienced printing designing company team ensures that every project is handled professionally, with attention to detail and a commitment to quality.
            </li>
            <li>
              • <b>High-Quality Results:</b>We guarantee high-quality designs and printing, delivering materials that are visually stunning and print perfectly.
            </li>
            <li>
              • <b>Fast Turnaround Time:</b>We value your time and work quickly to deliver high-quality print designs within agreed-upon timelines, without compromising on quality.
            </li>
            <li>
              • <b>Affordable & Transparent Pricing:</b>Our graphic design print services offer excellent value for the quality you receive, with competitive pricing and no hidden fees.
            </li>
            <li>
              • <b>End-to-End Print Services:</b>From design to print, we handle everything, ensuring a seamless process and consistent results across all your printed materials.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
               Bring Your Ideas to Life with Our Custom Print Design Services — Get Started Today!
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintDesigns;
