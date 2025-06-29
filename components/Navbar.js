import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-blue-200/30 dark:bg-blue-900/30 border-b border-blue-300/50">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <div className="flex flex-row space-x-20 items-center">
          {/* Social Icons */}
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
      </div>
    </nav>
  );
};

export default Navbar;
