import React from "react";
import { Helmet } from "react-helmet-async";
import DataManagementservices from "../../../components/Our-pages/maincard.json"
import DataManagementcard from "../../../components/Our-pages/dotcard.json"
import { Link } from "react-router-dom";
import Sample from "../../../components/Sample/sample";
import Ourpages from "../../../components/Our-pages/ourpages";
import ContactForm from "../../../components/hoz_contact";

const DataCleansingServices = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Data Cleaning Services | I-Cons Technologies</title>
        <meta
          name="description"
          content="I-Cons Technologies offers expert data cleaning services to enhance data quality, accuracy, and reliability for better decision-making and efficiency. "
        />
      </Helmet>
      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/data-cleaning-services-header.jpg"
          alt="i-Cons Technologies – Global data cleaning services solutions and services for..."
          className="w-full h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className=" pt-10 playfont font-bold text-2xl">
          Outsource Data Cleansing Services to I Cons Technologies: Your Trusted Expert.
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          With over two decades of experience, I Cons Technologies has built a reputation for providing high-quality data solutions to businesses worldwide. Our Data Cleansing Outsourcing Services ensure that organizations can focus on the data that truly matters, cutting through the noise. Our expert data cleansing services empower businesses to improve customer acquisition, streamline decision-making, and ultimately drive revenue growth using advanced tools and technologies.
        </p>
         <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          By ensuring that your data is clean, accurate, and reliable, we enhance the effectiveness of your visualizations, models, and reports. This helps to avoid costly mistakes while boosting your brand's image and credibility in the marketplace.
        </p>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          At I Cons Technologies, we follow a rigorous, proven data cleansing process that includes removing irrelevant data, deduplicating entries, correcting structural errors, addressing missing data, filtering out outliers, and validating data integrity. We work closely with our clients to understand their unique workflow and implement systemized steps that focus on delivering high-quality, actionable data.
        </p>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[18px]  max-w-[63%] mx-auto m-6 leading-relaxed">
          Trust I Cons Technologies to handle your data cleansing needs with unmatched professionalism, ensuring your data is not only clean but also optimized for business success.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h3 className="playfont text-xl font-semibold text-center pb-10">
          Our Data Cleansing Services:
        </h3>
      </div>

      <div className="relative max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/icons.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            backgroundPosition: "center top",
            filter: "blur(2px)",
            opacity: 0.5,
          }}
        ></div>

        {/* Content above background */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DataManagementservices.Datacleansingservices.map(
            (card, index) => (
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
            )
          )}
        </div>
      </div>

      <div className="py-12 px-4">
        <h3 className="playfont tracking-widest text-3xl md:text-3xl font-bold text-center">
          Our Data Cleansing Process
        </h3>
      </div>
      <div>
          <Ourpages  cards={DataManagementcard.Datacleansingservices}/>
      </div>
      <div>
                <ContactForm />
              </div>

      <div>
        <div className="py-12 px-4">
          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose">
           Benefits of Our Data Cleansing Services
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Guaranteed Data Quality:</b>With our proactive data governance policies, efficient validation process, and rigorous quality control, we eliminate outliers, correct errors, and address data gaps to ensure top-notch, reliable data.
            </li>
            <li>
              • <b>Well-Defined Cleaning Steps:</b>Our experience working with global businesses has refined our data cleansing process, ensuring efficient and clear steps that transform raw, unstructured data into clean, actionable insights.
            </li>
            <li>
              • <b>Meet Business Objectives:</b>Our data cleansing services provide structured data that drives key business outcomes, including improved decision-making, increased revenue, cost savings, time efficiency, enhanced reputation, and reduced compliance risks.
            </li>
            
            <li>
              • <b>Expert Professionals:</b>Our team of seasoned data experts brings years of experience in managing data from collection to storage, transforming organizational data into actionable insights that deliver greater ROI.
            </li>
          </ul>

          <h4 className="playfont tracking-widest text-[20px] md:text-[25px] font-bold text-left px-[11%] leading-loose pt-5">
           Why Choose I Cons Technologies for Data Cleansing Services?
          </h4>
          <ul className="poppins-regular px-[14%] leading-loose text-[#9f9f9f]">
            <li>
              • <b>Proven Industry Expertise:</b>We bring decades of hands-on experience and domain knowledge to every data project. Our team has helped organizations across industries turn cluttered data into actionable intelligence, consistently delivering accurate, high-quality results.
            </li>
            <li>
              • <b>End-to-End, Customized Solutions:</b>We don’t believe in a one-size-fits-all approach. Our tailored data cleansing strategies align with your unique business processes and objectives—whether it's deduplication, validation, merging, or enhancement—ensuring the highest impact and relevance.

            </li>
            <li>
              • <b>Data You Can Trust:</b>With a rigorous cleansing methodology that includes data assessment, anomaly detection, standardization, and validation, we ensure your data is accurate, consistent, and ready for confident decision-making.

            </li>
            <li>
              • <b>Business-Centric Outcomes:</b>Our services go beyond cleaning data—we focus on helping you meet your business goals. From boosting revenue and customer acquisition to streamlining compliance and reducing risk, our clean data drives measurable value.

            </li>
            <li>
              • <b>Global Experience, Local Support:</b>Having served clients worldwide, we bring a global perspective with the flexibility to adapt to local needs. We work as an extension of your team, providing responsive, professional support throughout the project lifecycle.
            </li>
            <li>
              • <b>Dedicated Data Experts:</b>Our skilled professionals are not just data processors—they are data strategists. With deep expertise in data management, mining, and quality governance, they ensure your data becomes a reliable foundation for business success.
            </li>
          </ul>
          <div className="text-center mt-7  ">
            <h3 className="font-medium text-2xl playfont">
              Outsource data enhancement to I Cons Technologies to boost data quality, gain better insights, and drive efficient business growth.
            </h3>
            <Sample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCleansingServices;
