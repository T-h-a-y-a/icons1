import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [buttonState, setButtonState] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const buttonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setButtonState("sending");

    const formData = new FormData(e.target);
    // Convert to URLSearchParams to match PHP's x-www-form-urlencoded
    const body = new URLSearchParams();
    for (const [k, v] of formData.entries()) body.append(k, v);

    try {
      const res = await fetch("/mail/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setButtonState("sent");
        e.target.reset();
        setTimeout(() => setButtonState("idle"), 3000);
      } else {
        throw new Error(data.error || "Failed to send");
      }
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong");
      setButtonState("error");
      setTimeout(() => setButtonState("idle"), 4000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".animate-fadeInUp, .animate-slideInLeft, .animate-slideInRight")
      .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
      });
  }, []);

  const getButtonText = () => {
    if (buttonState === "sending") return "Sending...";
    if (buttonState === "sent") {
      return (
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Message Sent!
        </span>
      );
    }
    if (buttonState === "error") return "Retry Send";
    return "Send Message";
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
        <img src="/assets/contact-us.jpg" alt="contact" className="w-full h-auto" />
      </div>

      <div
        className="min-h-screen px-4 py-16"
        style={{ background: "linear-gradient(135deg, #041A2F 0%, #0A2A4A 50%, #041A2F 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white pt-8">Get In Touch</h1>
            <p className="text-gray-300 mt-4">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-transparent rounded-xl p-8 space-y-6 shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-4xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-white font-semibold text-lg border-l-4 border-purple-500 pl-3">Send Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="transition-transform duration-200 hover:scale-[1.02]">
                    <label className="block text-sm text-white mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                    />
                  </div>
                  <div className="transition-transform duration-200 hover:scale-[1.02]">
                    <label className="block text-sm text-white mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="transition-transform duration-200 hover:scale-[1.02]">
                    <label className="block text-sm text-white mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      pattern="[\d\s()+-]{7,}"
                      className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                    />
                  </div>
                  <div className="transition-transform duration-200 hover:scale-[1.02]">
                    <label className="block text-sm text-white mb-1">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="transition-transform duration-200 hover:scale-[1.02]">
                  <label className="block text-sm text-white mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                  />
                </div>

                <div className="transition-transform duration-200 hover:scale-[1.02]">
                  <label className="block text-sm text-white mb-1">Business email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                  />
                </div>

                <div className="transition-transform duration-200 hover:scale-[1.02]">
                  <label className="block text-sm text-white mb-1">Solutions of Interest</label>
                  <select
                    name="interest"
                    className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Data Management">Data Management</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Video Editing Service">Video Editing Service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Creative Services">Creative Services</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="transition-transform duration-200 hover:scale-[1.02]">
                  <label className="block text-sm text-white mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="rounded-md border border-gray-500 bg-[#1c293a] text-white px-4 py-2 w-full focus:outline-none"
                  />
                </div>

                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex="-1"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  ref={buttonRef}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-60"
                  disabled={buttonState === "sending"}
                >
                  <span className="flex items-center justify-center">{getButtonText()}</span>
                </button>

                {buttonState === "sent" && (
                  <p className="text-green-400 text-sm font-medium text-center mt-2 animate-fadeIn">
                    Your message has been successfully sent.
                  </p>
                )}
                {buttonState === "error" && (
                  <p className="text-red-400 text-sm font-medium text-center mt-2 animate-fadeIn">
                    Error: {errorMsg}
                  </p>
                )}
              </form>
            </div>

            {/* Right Side Contact Info */}
            <div className="space-y-4 pt-20">
              <div className="transition duration-300 hover:scale-[1.02] bg-[#1f2a40] rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-300">info@i-constech.com</p>
                  <p className="text-gray-300">careers@i-constech.com</p>
                </div>
              </div>

              <div className="transition duration-300 hover:scale-[1.02] bg-[#1f2a40] rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.502 1.21l-2.26 1.13a11.042 11.042 0 005.516 5.516l1.13-2.26a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-300"><span className="text">India:</span> +91 422 4374377 &amp; +91 422 4504219</p>
                  <p className="text-gray-300"><span className="text">USA:</span> +1 (813) 548-3536</p>
                </div>
              </div>

              <div className="transition duration-300 hover:scale-[1.02] bg-[#1f2a40] rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <span className="text">India</span>
                  <p className="text-gray-300">
                    #247, Shiv Chambers, Alagesan Road
                    <br /> Saibaba Mission Post, Coimbatore.
                  </p>
                  <span className="text">USA</span>
                  <p className="text-gray-300">
                    30239 Emmetts CT, Wesley Chapel
                    <br /> Florida, USA - 33543.
                  </p>
                </div>
              </div>

              <div className="transition duration-300 hover:scale-[1.02] bg-[#1f2a40] rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/i-constech/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0e76a8] hover:scale-110 transition-transform duration-200"
                  >
                    <span className="text-white font-bold">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/i_constechnologies/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition-transform duration-200"
                  >
                    <span className="text-white font-bold">
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/i-constech"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1877F2] hover:scale-110 transition-transform duration-200"
                  >
                    <span className="text-white font-bold">
                      <i className="fa-brands fa-facebook"></i>
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/iconstechs"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-black hover:scale-110 transition-transform duration-200"
                  >
                    <span className="text-white font-bold">
                      <i class="fa-brands fa-x-twitter"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End of Right Side */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
