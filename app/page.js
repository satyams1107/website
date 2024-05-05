import React from "react";
const Home = () => {
  return (
    <div
      className="py-10 gap-4 flex flex-row justify-center h-[550px] w-full h-full bg-no-repeat bg-cover
    bg-[url('https://images.unsplash.com/photo-1689718107045-513b35f1a356?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE0NzE4MTI0fA&ixlib=rb-4.0.3')]"
    >
      <div className="px-10 pt-10 drop-shadow-lg">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQEh5TQYOVabFg/profile-displayphoto-shrink_400_400/0/1658277944683?e=1715817600&v=beta&t=6wJXkNsW_zn2-UwrWLKllZBJK_oglZziLGyoAbSV_Sc"
          className="rounded-full h-auto max-w-sm mx-auto border border-4 border-white"
          alt="Self Picture"
        />
      </div>

      <div className="drop-shadow-lg">
        <h1 className="mt-10 text-center text-7xl font-bold leading-9 tracking-tight text-white">
          Satyam Singh
        </h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-3xl text-center font-bold"> Computer Engineering</p>
          <p className="text-3xl text-center py-5 ">
            {" "}
            Hoeft Technology and Management Minor
          </p>
          <p className="text-3xl text-center">
            Innovation, Leadership & Engineering Entrepreneurship
          </p>
          <div className="flex flex-row space-x-10">
            <a href="https://grainger.illinois.edu/academics/undergraduate/majors-and-minors/computer-engineering">
              <img
                className="w-[100px] pt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Illinois_Block_I.png"
                alt="UIUC"
              />
            </a>
            <a  href="https://tec.illinois.edu/academics/degree">
            <img
              className="w-[150px] pt-5"
              src="https://tec.illinois.edu/_sitemanager/viewphoto.aspx?id=56458&s=1920&h=1200"
              alt="ILEE"
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
