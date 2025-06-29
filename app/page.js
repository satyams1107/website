import React from "react";

const Home = () => {
  return (
<div
  className="pt-24 gap-6 flex flex-row justify-center items-center h-[425px] w-full bg-no-repeat bg-cover"
  style={{ backgroundImage: "url('/images/background.jpg')" }}
>
      <div className="px-10 drop-shadow-lg -mt-5">
        <img
          src="../images/profile.jpg"
          className="rounded-full h-auto max-w-xs mx-auto border-4 border-white"
          alt="Self Picture"
        />
      </div>

      <div className="drop-shadow-lg flex flex-col justify-center space-y-4">
        <h1 className="text-center text-7xl font-bold leading-9 tracking-tight text-white">
          SATYAM SINGH
        </h1>
        <p className="text-3xl text-center font-bold pt-10">
          Computer Engineering @ UIUC
        </p>
        <p className="text-3xl text-center">Hoeft Technology and Management Minor</p>
      </div>
    </div>
  );
};

export default Home;
