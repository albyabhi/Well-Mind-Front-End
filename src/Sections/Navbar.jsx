import React, { useState } from "react";
import Logo from "./Assets/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-gradient-to-b from-[#fce8f3] to-[#fdf5f9] px-6 py-4 ">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="WellMind Logo" className="h-20 md:h-28" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#about"
              className="text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              Contact
            </a>
            <a
              href="#book"
              className="bg-[#f57ac0] text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition"
            >
              Book a Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
  className="text-[#5c5c8a] text-3xl p-2 rounded-md hover:bg-[#fce8f3] transition-transform duration-300 ease-in-out"
>
  <span
    key={menuOpen ? 'close' : 'menu'}
    className="inline-block transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade"
  >
    {menuOpen ? (
      <FiX className="transition-transform duration-300 rotate-0 scale-100" />
    ) : (
      <FiMenu className="transition-transform duration-300 rotate-0 scale-100" />
    )}
  </span>
</button>



          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-450 ease-in-out transform ${
            menuOpen
              ? "max-h-96 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          } mt-4 px-4`}
        >
          <div className="space-y-4">
            <a
              href="#about"
              className="block text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-[#5c5c8a] font-medium hover:text-[#3f3fc7] transition"
            >
              Contact
            </a>
            <a
              href="#book"
              className="block bg-[#f57ac0] text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition text-center"
            >
              Book a Session
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
