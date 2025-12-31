import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const services = [
    { path: "/services/data-management-services", label: "Data Management" },
    { path: "/services/healthcare", label: "Healthcare" },
    { path: "/service/video-editing-services", label: "Video Editing Services" },
    { path: "/service/data-analysis-services", label: "Data Analysis" },
    { path: "/service/digital-marketing-services", label: "Digital Marketing" },
    { path: "/services/creatives-services", label: "Creative Services" },
    { path: "/services/software-development-services", label: "Software Development" },
  ];

  const dropdownTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [isHome]);

  const handleMobileClose = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDesktopDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDesktopDropdown(false);
    }, 150);
  };

  return (
    <nav
      className={`font-montserrat fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-[#e4e8ec] shadow-md text-black"
            : "bg-transparent text-white"
          : "bg-[#041A2F] shadow-md text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 lg:px-10">
        <NavLink to="/" className="flex items-center text-2xl font-bold tracking-tight hover:scale-105 transition-all">
          <img
            src={
              isHome
                ? scrolled
                  ? "/assets/logo6.png"
                  : "/assets/Logo4.png"
                : "/assets/Logo4.png"
            }
            alt="Logo"
            className="h-10 transition-all duration-300"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <NavLink to="/" className="transition">Home</NavLink>
          <NavLink to="/about" className="transition">About</NavLink>

          {/* Desktop Dropdown with hover */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 transition">
              Services
              <svg className={`w-4 h-4 transition-transform ${showDesktopDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDesktopDropdown && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-white text-gray-900 rounded shadow-xl z-50">
                {services.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setShowDesktopDropdown(false)}
                    className="block px-4 py-2 hover:bg-blue-50 transition"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/careers" className="transition">Careers</NavLink>
          <NavLink to="/contact" className="transition">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden">
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMobileClose}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 bg-white text-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button onClick={handleMobileClose} className="p-2 hover:bg-gray-200 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2 px-6 pb-6 font-medium">
            <NavLink to="/" onClick={handleMobileClose} className="hover:bg-blue-50 px-3 py-2 rounded">Home</NavLink>
            <NavLink to="/about" onClick={handleMobileClose} className="hover:bg-blue-50 px-3 py-2 rounded">About</NavLink>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex justify-between items-center w-full px-3 py-2 hover:bg-blue-50 rounded"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${mobileDropdownOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="pl-6 pt-1 space-y-1">
                  {services.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={handleMobileClose}
                      className="block py-1.5"
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/careers" onClick={handleMobileClose} className="hover:bg-blue-50 px-3 py-2 rounded">Careers</NavLink>
            <NavLink to="/contact" onClick={handleMobileClose} className="hover:bg-blue-50 px-3 py-2 rounded">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
