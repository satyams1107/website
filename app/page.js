"use client";

import React from "react";

const Home = () => {
  return (
    <div
      className="pt-24 gap-6 flex flex-col md:flex-row justify-center items-center h-auto md:h-[425px] w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Profile Image */}
      <div className="px-10 drop-shadow-lg -mt-5">
        <img
          src="/images/profile.jpg"
          className="rounded-full h-auto w-48 sm:w-56 md:w-64 mx-auto border-4 border-white"
          alt="Self Picture"
        />
      </div>

      {/* Text Block */}
      <div className="drop-shadow-lg flex flex-col justify-center items-center space-y-4 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
          SATYAM SINGH
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold pt-4 md:pt-10 text-white">
          Computer Engineering @ UIUC
        </p>
        <p className="text-lg sm:text-xl md:text-3xl text-white">
          Hoeft Technology and Management Minor
        </p>
      </div>
    </div>
  );
};

export default Home;
