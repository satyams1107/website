import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-light">
      
      <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4">
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
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="h-auto h-10 w-10 mr-2 invert"
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
                href="https://drive.google.com/file/d/1hQQbWoo957_SsHdv54ZqR0Qxw-G1O9zw/view?usp=sharing"
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
