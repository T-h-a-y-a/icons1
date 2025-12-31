import React, { useState } from "react";
import contact from "../../data/Home/contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    solutions: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="relative w-full">
      {/* Section 1: Map and Image */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-10 relative z-0">
        {contact.contacts.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row w-full">
            {/* Map */}
            <div className="w-full h-[400px] lg:h-[800px]">
              <iframe
                src={item.mapframe}
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Image (only for desktop) */}
            <img
              src={item.contact_img}
              alt=""
              className="hidden lg:block w-[60%] h-[800px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Section 2: Form */}
      <div
        data-aos="fade-down"
        className="lg:absolute lg:top-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 w-full px-4 lg:px-6 max-w-2xl bg-white bg-opacity-95 shadow-lg rounded-xl p-6 sm:p-8"
      >
        <h6 className="text-sm text-gray-500 uppercase tracking-wide mb-1">
          Contact Us
        </h6>
        <h2 className="text-3xl font-serif font-semibold mb-8">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullname"
            required
            placeholder="Full Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
            value={formData.fullname}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Business Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            pattern="\d*"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
          >
            <option value="" disabled hidden>
              Country
            </option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="solutions"
            required
            value={formData.solutions}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
          >
            <option value="">Solutions of Interest</option>
            <option value="Data Management">Data Management</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Video Editing Service">Video Editing Service</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Creative Services">Creative Services</option>
            <option value="Software Development">Software Development</option>
            <option value="Others">Others</option>
          </select>

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#041A2F]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="relative overflow-hidden group mt-6 px-7 py-4 border tracking-[2px] text-[13px] text-gray-600 font-semibold transition-all border-[#041A2F] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-[#041A2F] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 rounded group"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
