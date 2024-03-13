import React from "react";
import image from "../images/profile.jpg";
const Home = () => {
  return (
    <div className="pt-10 gap-4 ">
      {/* <img
        src="https://media.licdn.com/dms/image/C4D03AQEh5TQYOVabFg/profile-displayphoto-shrink_400_400/0/1658277944683?e=1715817600&v=beta&t=6wJXkNsW_zn2-UwrWLKllZBJK_oglZziLGyoAbSV_Sc"
        class="rounded-full h-auto max-w-sm mx-auto border border-4 border-white"
        alt="Self Picture"
      /> */}

      <h1 className="mt-10 text-center text-6xl font-sans-bold leading-9 tracking-tight text-white">
        Satyam Singh
      </h1>
      <div className="flex items-center justify-center mt-10">
        <a href="https://grainger.illinois.edu/academics/undergraduate/majors-and-minors/computer-engineering">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Illinois_Block_I.png"
            class="h-auto h-10 w-10 mr-2"
            alt="Self Picture"
          />
        </a>
        <p className="text-3xl text-center"> Computer Engineering @ UIUC</p>
      </div>
    </div>
  );
};

export default Home;
