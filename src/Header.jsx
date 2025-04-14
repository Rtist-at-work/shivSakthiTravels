import { useState } from "react";
import headerBanner from "./assets/banner.jpeg";
import logo from "./assets/logo__1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-20 w-full absolute top-0 bg-black/30 backdrop-blur-md z-50 text-white text-sm sm:text-xs flex justify-between items-center px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <div className="h-full w-28 sm:w-24">
          <img src={logo} className="h-full w-full object-contain" alt="Logo" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 flex-1 justify-around text-sm md:text-base lg:text-lg">

          <a href="#booking" className="hover:underline">Booking</a>
          <a href="#tarrifs" className="hover:underline">Tarrifs</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#vehicles" className="hover:underline">Vehicles</a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden mr-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-full bg-black/80 backdrop-blur-md text-white flex flex-col items-center py-4 md:hidden z-40 space-y-4 text-sm">
          <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
          <a href="#tarrifs" onClick={() => setMenuOpen(false)}>Tarrifs</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#vehicles" onClick={() => setMenuOpen(false)}>Vehicles</a>
        </div>
      )}

      {/* Background Image */}
      <img
        src={headerBanner}
        alt="Banner"
        className="h-full w-full object-cover"
      />

      {/* Text Overlay Section */}
      <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-black/40 backdrop-blur-sm p-6 md:p-10 flex flex-col justify-center md:items-end items-center text-center md:text-right lg:rounded-l-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          <span className="text-gray-200 animated-text">
            Explore the World with
          </span>
          <br />
          <span className="text-white animated-text animation-delay-300 mt-2">
            ShivSakthi Travels
          </span>{" "}
          <span className="text-white mt-2">🌍</span>
        </h1>
        <div className="text-white text-base sm:text-lg mt-4 space-y-2">
          <p className="animate-bounce">📞 +91 7695811933</p>
          <p>✉️ shivsakthitravels7@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
