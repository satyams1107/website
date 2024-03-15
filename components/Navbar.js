import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-light">
      
      <div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4">
        <div className="flex flex-row space-x-12 ">
        <img
              src="../images/web-logo-white.png"
              className="h-auto h-10 w-10 mr-2 scale-150 align-left" 
              alt="Logo"
            />

          <a
            target="_blank"
            className="flex items-center space-x-3 rtl:space-x-reverse px-5 hover:scale-125 ease-in-out duration-200 hover:drop-shadow-lg"
            href="https://www.linkedin.com/in/satyamsingh7/"
          >
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
              className="h-auto h-10 w-10 mr-2"
              alt="LinkedIn"
            />
          </a>
          <a
            target="_blank"
            className="flex items-center space-x-3 rtl:space-x-reverse px-5 hover:scale-125 ease-in-out duration-200 hover:drop-shadow-lg"
            href="https://github.com/satyams1107"
          >
            <img
              src="https://png2.cleanpng.com/sh/dcaa84daee2a9ad9ecef29f927ecfbcd/L0KzQYm3WMA4N6ttiZH0aYP2gLBuTfdqfJl6ep95YXfog37zjBdwNaNqiNH8aYTygsq0hv9zc15sgeZxdXKwfLFuj70yNZ5mf9d3dIn2PYbpVsllbWg2eqc6Mka4Pom8WMYxP2c7Sac8M0a5RImBUcc1OWgziNDw/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png"
              className="h-auto h-10 w-10 mr-2"
              alt="Github"
            />
          </a>
          <a
            target="_blank"
            className="flex items-center space-x-3 rtl:space-x-reverse px-5 hover:scale-125 ease-in-out duration-200 hover:drop-shadow-lg"
            href="https://www.instagram.com/satyams1107/"
          >
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
              className="h-auto h-10 w-10 mr-2"
              alt="Instagram"
            />
          </a>
          <a
            target="_blank"
            className="flex items-center space-x-3 rtl:space-x-reverse px-5 hover:scale-125 ease-in-out duration-200 hover:drop-shadow-lg"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=singh.satyam0617@gmail.com"
          >
            <img
              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_White_512px.png"
              className="h-auto h-10 w-10 mr-2"
              alt="Email"
            />
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        ></button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col  p-5 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-2xl bg-opacity-60">
            <li>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1q8AObve7Di_mKBGlMzJ2uEyZLu7s6E5h/view?usp=sharing"
                className="block py-2 px-5 text-gray-900 rounded-xl w-[110px] h-[40px] flex items-center justify-center hover:bg-dark md:hover:bg-dark md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-dark bg-opacity-60 hover:scale-105 ease-in-out duration-200"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
