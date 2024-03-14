import React from "react";
const Home = () => {
  return (
    <div className="pt-10 gap-4 flex flex-row justify-center">
      <div className="px-10">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQEh5TQYOVabFg/profile-displayphoto-shrink_400_400/0/1658277944683?e=1715817600&v=beta&t=6wJXkNsW_zn2-UwrWLKllZBJK_oglZziLGyoAbSV_Sc"
          class="rounded-full h-auto max-w-sm mx-auto border border-4 border-white"
          alt="Self Picture"
        />
      </div>

      <div className="pt-5">
        <h1 className="mt-10 text-center text-6xl font-sans-bold leading-9 tracking-tight text-white">
          Satyam Singh
        </h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-3xl text-center"> Computer Engineering @ UIUC</p>
          <p className="text-3xl text-center py-5"> Innovation, Leadership & Engineering Entrepreneurship @ UIUC</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
