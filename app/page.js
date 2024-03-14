import React from "react";
const Home = () => {
  return (
    <div className="py-10 gap-4 flex flex-row justify-center h-[550px] w-full h-full bg-no-repeat bg-cover
    bg-[url('https://cdn.pixabay.com/photo/2024/01/30/14/02/road-8542123_1280.jpg')]"  >
      <div className="px-10 pt-10 drop-shadow-lg">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQEh5TQYOVabFg/profile-displayphoto-shrink_400_400/0/1658277944683?e=1715817600&v=beta&t=6wJXkNsW_zn2-UwrWLKllZBJK_oglZziLGyoAbSV_Sc"
          class="rounded-full h-auto max-w-sm mx-auto border border-4 border-white"
          alt="Self Picture"
        />
      </div>

      <div className="drop-shadow-lg">
        <h1 className="mt-10 text-center text-6xl font-sans-bold leading-9 tracking-tight text-white">
          Satyam Singh
        </h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-3xl text-center"> Computer Engineering</p>
          <p className="text-3xl text-center py-5">
            {" "}
            Innovation, Leadership & Engineering Entrepreneurship
          </p>
          <a href="https://grainger.illinois.edu/academics/undergraduate/majors-and-minors/computer-engineering">
          <img
            className="w-[100px] pt-5"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Illinois_Block_I.png"
            alt="UIUC"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
