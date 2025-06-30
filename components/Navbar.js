"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-blue-200/30 dark:bg-blue-900/30 border-b border-blue-300/50">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        {/* Left: Social Icons (unchanged from your original) */}
        <div className="flex flex-row space-x-20 items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/satyamsingh7/"
            className="text-3xl text-white hover:text-4xl transition-all duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/SatyamS17"
            className="text-3xl text-white hover:text-4xl transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/satyams1107/"
            className="text-3xl text-white hover:text-4xl transition-all duration-200"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            href="mailto:singh.satyam0617@gmail.com"
            className="text-3xl text-white hover:text-4xl transition-all duration-200"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Desktop Resume Link */}
        <div className="hidden md:block" id="navbar-default">
          <ul className="flex flex-row space-x-8 text-2xl">
            <li>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1AHJ1UzAjBHhya1bMKPSFReGgXxNYvkIb/view?usp=sharing"
                className="text-white transition-all duration-200 hover:font-bold hover:text-[1.75rem]"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-blue-200/40 dark:bg-blue-900/40 backdrop-blur-lg">
          <div className="flex flex-col items-start space-y-4">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1AHJ1UzAjBHhya1bMKPSFReGgXxNYvkIb/view?usp=sharing"
              className="text-white text-2xl font-semibold"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
