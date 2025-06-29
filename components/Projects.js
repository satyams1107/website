"use client";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export const project = [
  {
    id: 1,
    logo: "../images/nba.png",
    name: "Final Score",
    description:
      "Developed a real-time web application using MySQL and Google Cloud Platform (GCP) to display the last two minutes of NBA data, enabling users to compare players, teams, and referees. Created API endpoints with MySQL, GCP, and REST to service and query 80k+ data entries across various tables in SQL database.",
    skills: [
      "MySQL",
      "Google Cloud Platform",
      "Javascript",
      "Next",
      "Node.js",
      "Git",
    ],
  },
  {
    id: 2,
    logo: "https://seeklogo.com/images/L/linux-logo-76B2B1C6AD-seeklogo.com.png",
    name: "391OS",
    description:
      "Constructed an operating system based on the IA-32 Intel Architecture, incorporating features such as file systems, segmentation, paging, context switching, system calls, interrupt handling, real-time clock, programmable interval timer and scheduling. Allows users to execute various basic commands in a terminal.",
    skills: [
      "C",
      "x86 Assembly",
      "OS",
      "IA-32 Intel Architecture",
      "GDB",
      "Git",
    ],
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Full-protection-shackle-frwiki.svg/1446px-Full-protection-shackle-frwiki.svg.png",
    name: "PassSafe",
    description:
      "Designed a user-friendly web interface for managing passwords that implements the RSA encryption algorithm along with MySQL database to securely store and manage password data. Integrated the Flask framework to handle routing and template rendering with HTML, CSS, and the Bootstrap front-end framework.",
    skills: [
      "python",
      "MySQL",
      "flask",
      "HTML",
      "CSS",
      "full-stack",
      "encryption",
    ],
  },
  {
    id: 4,
    logo: "../images/ufit.png",
    name: "U-Fit",
    description:
      "Developed the UI layout using Figma and translated it over to a Flutter application using Dart to create an app responsible for scheduling daily workouts and facilitated machine-learning capabilities into the app. Implemented Google Firebase as the primary backend and database for user authentication and data storage",
    skills: ["flutter", "firebase", "dart", "authentication", "app-dev"],
  },
  {
    id: 5,
    logo: "../images/web-logo.png",
    name: "Portfolio Website",
    description:
      "Explored web development by building a personal website to share past projects I developed during my classes or in my free time, experiences gained through internships and RSOs, and contact information to enable people to connect with me. I used the Next.js framework alongside Tailwind CSS to create an appealing website to showcase my profile.",
    skills: [
      "nextjs",
      "tailwind",
      "css",
      "javascript",
      "full-stack",
      "web-dev",
    ],
  },
];

const Projects = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider_projects");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider_projects");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div
        className="px-10 pt-5 pb-2 text-4xl font-bold text-white text-center"
        style={{ backgroundColor: "#262626" }}
      >
        <h>PROJECTS</h>
      </div>
      <div
        className="relative flex items-center content-center py-5"
        style={{ backgroundColor: "#262626" }}
      >
        <MdChevronLeft
          className="opacity-75 hover:opacity-100 bg-silver bg-opacity-50"
          onClick={slideLeft}
          size={100}
        />
        <div
          id="slider_projects"
          className="w-auto h-[auto] items-center content-center soverflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-10"
        >
          {project.map((item) => (
            <div
              key={item.id}
              className="w-[650px] h-[400px] inline-block cursor-pointer scale-90 hover:scale-95 ease-in-out duration-300 shadow-lg bg-white rounded-xl p-2 shadow-2xl overflow-hidden hover:shadow-[0_0_2px_#fff,inset_0_0_5px_#fff,0_0_5px_#418d7d,0_0_10px_#418d7d,0_0_10px_#418d7d]"
            >
              <a href={item.link}>
                <div className=" w-auto">
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className="w-auto h-[200px] p-5"
                      src={item.logo}
                      alt="/"
                    />
                    <div className="flex flex-col w-[400px]">
                      <div className=" text-3xl mb-2 text-center">
                        <p className="text-black font-bold">{item.name}</p>
                      </div>
                      <div className="text-lg text-center text-black text-wrap">
                        {item.description}
                      </div>
                      <div className="pl-12 pt-7 pb-2 flex flex-wrap text-l ">
                        {item.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block bg-beige rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-75 hover:opacity-100 bg-silver bg-opacity-50"
          onClick={slideRight}
          size={100}
        />
      </div>
    </>
  );
};

export default Projects;
