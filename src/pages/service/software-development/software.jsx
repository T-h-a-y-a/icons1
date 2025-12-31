import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import software from "../../../data/Home/software.json"
import software_card from "../../../components/Our-pages/dotcard.json"
import Ourpages from "../../../components/Our-pages/ourpages";
import ContactForm from "../../../components/hoz_contact";

const Softwaredevelopment = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Global Software Development Services for All Industries</title>
        <meta
          name="description"
          content="Global software development services offering custom solutions to enhance performance, drive innovation, and support business growth worldwide."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/software-development-services-header.jpg"
          alt="Video Editing"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Software Development Services
        </h1>
        <p className=" poppins-regular text-justify text-[#9f9f9f] text-lg md:text-[20px]  max-w-[58%] mx-auto mt-4 leading-relaxed ">
          At I-Cons Technologies, we specialize in delivering end-to-end software development services crafted to meet the unique needs of your business. From building custom applications to deploying complete e-commerce solutions, our expert team is committed to creating scalable, secure, and innovative digital products that accelerate business growth.
        </p>
        <p className=" poppins-regular text-justify text-[#9f9f9f] text-lg md:text-[20px]  max-w-[58%] mx-auto mt-4 leading-relaxed ">
          Whether you're developing a solution from the ground up or looking to enhance an existing platform, we ensure your digital presence is optimized for long-term success. Partner with us for cutting-edge software solutions that empower your business.
        </p>
      </div>

      {/* Responsive Grid of Services */}
 <div className="w-full">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div
      className="
        grid gap-6 pb-12
        justify-center justify-items-center
        [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
      "
    >
      {software.software.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[360px] relative group overflow-hidden rounded-lg shadow-lg"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300">
            <h1 className="text-white text-2xl font-semibold mb-2 tracking-wide text-center">
              {item.heading}
            </h1>
            <Link
              to={item.link}
              className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-white font-semibold transition-all isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-white hover:text-[#B19777] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 rounded"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Process of Sotware Development
        </h3>
      </div>

      <div>
          <Ourpages cards={software_card.software_card}/>
      </div>
 <div>
                <ContactForm />
              </div>
      <div>
        <div className="py-12 px-4">
           <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Key Benefits of Our Software Development Services.
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Tailored Customization:</b>Off-the-shelf software rarely fits all. Our solutions are built around your specific needs—whether that means creating custom workflows, integrating with legacy systems, or delivering specialized features that enhance your operations.
            </li>
            <li>
              • <b>Improved Operational Efficiency:</b>Through automation, smart system integration, and streamlined workflows, we help you reduce errors, save time, and enable your team to focus on what matters most.
            </li>
            <li>
              • <b>Cost-Effective Results:</b>Investing in tailored software means eliminating unnecessary features, reducing operational inefficiencies, and gaining a long-term solution that grows with your business.
            </li>
            <li>
              • <b>A Competitive Edge:</b>Custom-built software and e-commerce platforms allow your business to quickly adapt to market trends and customer expectations—helping you stay ahead of the competition.
            </li>
            <li>
              • <b>Future-Ready Technology:</b>We stay on top of the latest technologies so your solution remains up-to-date, ensuring reliable performance and adaptability as the tech landscape evolves.
            </li>
          </ul>

          <h4 className="pt-5 playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose I-Cons Technologies?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Expertise You Can Trust:</b>We bring together a team of highly skilled professionals with a proven track record in software and e-commerce technology.
            </li>
            <li>
              • <b>Solutions Built for You:</b>We don’t offer one-size-fits-all products. Every solution is purpose-built to meet your goals and overcome your unique challenges.
            </li>
            <li>
              • <b>End-to-End Services:</b>From discovery to post-launch support, we guide you through every stage of the software development lifecycle.
            </li>
            <li>
              • <b>Robust Security & Compliance:</b>Your data is safe with us. We implement strong security protocols and follow industry best practices to protect sensitive business and customer information.
            </li>
            <li>
              • <b>Transparent Collaboration:</b>We believe in clear, consistent communication. You’ll always know where your project stands.
            </li>
            <li>
              • <b>Reliable Ongoing Support:</b>Our relationship doesn’t end at launch. We offer regular updates and proactive maintenance to help your solution scale with your business.  
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              At I-Cons Technologies, we don’t just build software—we create digital solutions that fuel your business success. Ready to turn your vision into reality?
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Softwaredevelopment;
