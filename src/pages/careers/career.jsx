import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import careers from "../../data/Home/careers.json";
import { FaPlus, FaMinus } from "react-icons/fa";

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleJob = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-4">
      <Helmet>
        <title>Outsourced BPO Healthcare Service | I Cons Technologies</title>
        <meta
          name="description"
          content="Get expert healthcare BPO services from I Cons Technologies—maximize productivity and focus on patient care while we handle the rest."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img
          src="/assets/Test2.jpg"
          alt="careers"
          className="w-full h-auto"
        />
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4">
        <h1 className="playfont tracking-widest text-5xl md:text-6xl font-bold text-center">
          Join Our Team at i-Cons Technologies
        </h1>
        <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[20px] text-center max-w-[54%] mx-auto mt-4 leading-relaxed">
          At i-Cons Technologies, we believe our people are our greatest asset.
          We're looking for passionate, innovative, and driven professionals who
          are ready to shape the future of technology with us. Whether you're
          just starting your career or an experienced expert, explore exciting
          opportunities to grow, collaborate, and make an impact.
        </p>
      </div>

      {/* Job List */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Explore our Jobs
        </h1>
        {careers.career.map((job, index) => (
          <div key={index} className="border-b border-gray-300 py-6">
            <div className="flex justify-between items-start">
              <div className="block">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-[#071D37]">
                    {job.title}
                  </h2>
                  <p className="text-base text-gray-600">{job.Experience}</p>
                </div>
                <span className="text-sm">{job.Location}</span>
                <p className="text-sm text-gray-500">{job.Shift}</p>
              </div>

              <div className="text-right space-y-1">
                <p className="text-sm font-semibold">{job.type}</p>
                <p className="text-sm text-gray-400">{job.date}</p>
                <button
                  onClick={() => toggleJob(index)}
                  className="text-lg text-[#071D37] focus:outline-none"
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            </div>

            {/* Job Details */}
            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-700 whitespace-pre-line">
                <h3 className="text-[16px] font-semibold pb-2">
                  Job Description
                </h3>
                {job.description}
                <div className="pt-5">
                  <h3 className="text-[16px] font-semibold pb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {job.responsibilities.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5">
                  <h3 className="text-[16px] font-semibold pb-2">
                    Qualifications & Skills
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {job.Requirements.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className="pt-5">
                  <h3 className="text-[16px] font-semibold pb-2">
                    Who Can Apply
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {job.benefits.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div> */}
                <div className="pt-5 font-semibold">{job.short_description}</div>

                {/* Apply Button with Dynamic Subject */}
                <div className="mt-4">
                  <a
                    href={`mailto:careers@i-constech.com?subject=Job Application - ${encodeURIComponent(
                      job.title
                    )}`}
                    className="inline-block px-4 py-2 bg-[#071D37] text-white text-sm rounded hover:bg-[#071D68] transition"
                  >
                    Apply
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
