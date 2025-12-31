import React from "react";
import { Helmet } from "react-helmet-async";
import Sample from "../../../components/Sample/sample";
import Maincard from "../../../components/Our-pages/maincard";
import Ourpage from '../../../components/Our-pages/ourpages'
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import ContactForm from "../../../components/hoz_contact";

const EbookandePub  = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Top Data Management Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="Discover top-notch data management services by I-Cons Technologies. Optimize, secure, and manage your data efficiently for business growth and success!"
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/ebook-conversion-services-header.jpg"
          alt="i-Cons Technologies – Global ebook conversion services solutions and service..."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
          <h1 className=" pt-10 playfont font-bold text-2xl">eBook Creation and Conversion Services at I Cons Technologies</h1>
          <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">Unlock the potential of your digital content with I Cons Technologies' comprehensive eBook creation and conversion services. We offer bespoke solutions to simplify the complexities of eBook design and publishing, helping authors, publishers, universities, and corporate organizations achieve exceptional results. With our advanced eBook formatting and design services, you can create and convert eBooks efficiently, ensuring productivity, profitability, and a seamless reading experience for your audience.</p>
      </div>
      
        <div className="max-w-6xl mx-auto p-4">
          <h3 className="playfont text-xl font-semibold text-center pb-10">Comprehensive Range of eBook Creation and Conversion Services</h3>
      <div>
        <Maincard main={DataManagementservices.ebook} />
      </div>
    </div>
        <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Approach to eBook Creation & Conversion
        </h3>
      </div>
          <div>
          <Ourpage  cards={DataManagementcard.ebook}/>
      </div>
<div>
          <ContactForm />
        </div>
      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           eBook Formatting & Conversion Features:
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8">
            <li>
              <b>•	Formats Supported:</b>
                <ul className="pl-7">
                  <li>•	ePub, PDF, AZW, Microsoft LIT, KF8, Mobi, Sony Reader, Kindle, iBook, Nook, and many more.</li>
                </ul>
            </li>
            <li>
             <b>•	Interactive Features:</b>
              <ul className="pl-7">
                <li>•	Cover Design</li>
                <li>•	Audio, Video, and Multimedia Elements</li>
                <li>•	Puzzles, Games, and Quizzes</li>
                <li>•	Day/Night Reading Modes</li>
                <li>•	Notes, Headers, and Footers</li>
                <li>•	Clickable Table of Contents</li>
                <li>•	Universal Search and Bookmarks</li>
                <li>•	DRM Protection</li>
                <li>•	Embedded Fonts</li>
                <li>•	Slideshow Integration</li>
              </ul>
            </li>
          </ul>
            <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
          Types of eBooks We Create
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f] pb-8 ">
                <li>•	Interactive eBooks for Children</li>
                <li>•	Travel Books & Guides</li>
                <li>•	Educational eBooks (Higher-Ed, K12)</li>
                <li>•	Cook Books</li>
                <li>•	Scientific, Technical, and Medical (STM) Books</li>
                <li>•	Magazines</li>
                <li>•	Read-Aloud Books</li>
                <li>•	Reflowable eBooks</li>
                <li>•	Fixed-Layout eBooks</li>
                <li>•	Enhanced eBooks</li>
                <li>•	Flipbooks</li>
          </ul>
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Why Choose Us I-cons Technologies for Data Conversion Services?
          </h4>
          <ul className="poppins-regular max-w-[90%] px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              <b>•	Proven Expertise:</b>Leveraging extensive experience, we provide data conversion solutions to clients worldwide across a variety of industries.
            </li>
            <li>
             <b>•	  Quality First Approach:</b>Our focus is on ensuring precision, consistency, and complete adherence to international quality standards.
            </li>
            <li>
              <b>•	Customized Solutions:</b>Services are tailored to meet the specific formats, volumes, and timelines of your project.
            </li>
            <li>
              <b>•	Data Security & Confidentiality:</b>We maintain strict data security protocols to ensure your information is protected at every stage.
            </li>
            <li>
              <b>•	Cost-Effective Pricing:</b>Our services are competitively priced without compromising service quality.
            </li>
             <li>
              <b>•	24/7 Support:</b>Our dedicated customer support team is available 24/7 to support you throughout every stage of the project.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Transform raw data into actionable insights quickly and accurately with I-Cons Technologies’ data processing expertise.
            </h3>
              <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookandePub;
