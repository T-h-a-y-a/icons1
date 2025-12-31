import React from "react";
import { NavLink } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-300 bg-cover bg-center  bg-no-repeat text-[#333] overflow-hidden">
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

      {/* Watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <p className="font-extrabold text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-none text-[#042240] opacity-[7%] whitespace-nowrap">
          i-Cons Technologies
        </p>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-base">
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Address</h4>
          <p className="mb-2">
            #247, Shiv Chambers, Alagesan Road, Saibaba Mission Post,
            Coimbatore.
          </p>
          <p>30239 Emmetts CT, Wesley Chapel, Florida, USA - 33543.</p>
        </div>

        {/* General Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>info@i-constech.com</p>
          <p>+91 422 4374377</p>
          <p>+91 422 4504219</p>
          <p>+1 (813) 548-3536</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services/data-management-services" className="hover:underline">
                Data Management
              </a>
            </li>
            <li>
              <a href="/services/healthcare" className="hover:underline">
                Healthcare
              </a>
            </li>
            <li>
              <a
                href="/service/video-editing-services"
                className="hover:underline"
              >
                Video Editing Services
              </a>
            </li>
            <li>
              <a href="/services/digital-marketing" className="hover:underline">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="/service/data-analysis-services" className="hover:underline">
                Data Analysis
              </a>
            </li>
            <li>
              <a href="/services/creatives-services" className="hover:underline">
                Creative Services
              </a>
            </li>
            <li>
              <a href="/services/software-development-services" className="hover:underline">
                Software Development
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          {/* <h4 >I-Cons Technologies</h4> */}
          <NavLink to="/">
            <img
              className="text-lg font-semibold mb-3"
              src="/assets/logo5.png"
              alt="Logo"
            />
          </NavLink>
          <p>
            IT professionals, we work closely with you to understand your
            objectives and challenges, and develop tailor-made solutions.
          </p>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="relative z-10 border-t border-gray-300 py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © 2025{" "}
          <a href="/" className="hover:underline">
            I-Cons Technologies
          </a>{" "}
          – IT Services. All rights reserved.
        </p>
        <div className="space-x-4 flex flex-wrap justify-center md:justify-end">
          <a
            href="https://www.instagram.com/i_constechnologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           <FaInstagram className="w-6 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/i-constech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FaLinkedinIn className="w-6 h-5" />
          </a>
          <a
            href="https://twitter.com/iconstechs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <BsTwitterX className="w-6 h-5" />
          </a>
          <a
            href="https://www.facebook.com/i-constech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           <FaFacebookSquare className="w-6 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// old

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#15276A] text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Section 1 - About (spans 2 columns) */}
//         <section className="md:col-span-2">
//           <img src="../assets/logo.png" alt="Logo" className="mb-4 w-[40%]" />
//           <p className="mb-4">
//             IT professionals, we work closely with you to understand your objectives and challenges, and develop tailor-made solutions.
//           </p>
//           <ul className="flex space-x-4 text-lg mb-4">
//             <li>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-facebook border p-3 rounded-full"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter border p-3 rounded-full"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
//                 <i className="fab fa-instagram border p-3 rounded-full"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-linkedin border p-3 rounded-full"></i>
//               </a>
//             </li>
//           </ul>
//           <p className="text-m text-gray-400">
//             © 2025 <a href="/" className="hover:underline">I-cons Technologies</a> - IT Services. All rights reserved.
//           </p>
//         </section>

//         {/* Section 2 - Services */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Services</h3>
//           <ul className="space-y-2">
//             <li><a href="/services/web-development" className="hover:underline">BPO</a></li>
//             <li><a href="/services/mobile-development" className="hover:underline">Data Entry</a></li>
//             <li><a href="/services/seo" className="hover:underline">Software Development</a></li>
//             <li><a href="/services/digital-marketing" className="hover:underline">Digital Marketing</a></li>
//             <li><a href="/services/it-consulting" className="hover:underline">Editing Service</a></li>
//           </ul>
//         </section>

//         {/* Section 3 - Contact Us */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//           <div className="mb-4">
//             <h5 className="font-medium">Official Address</h5>
//             <p className='text-gray-400'>#247, Shiv Chambers, Alagesan Road, Saibaba Mission Post, Coimbatore</p>
//           </div>
//           <div className="mb-4">
//             <h5 className="font-medium">Email Us</h5>
//             <p className='text-gray-400'>info@i-constech.com</p>
//           </div>
//           <div>
//             <h5 className="font-medium">Call Us</h5>
//             <p className='text-gray-400'>+91 422 4504219</p>
//             <p className='text-gray-400'>+91 422 4374377</p>
//           </div>
//         </section>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
