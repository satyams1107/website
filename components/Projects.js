"use client";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const project = [
  {
    id: 1,
    logo: "../images/content.png",
    name: "Content Factory",
    description:
      "An automated content creation tool that fetches trending Reddit posts via API, overlays them on top of gameplay footage, and uses AI-powered text-to-speech to narrate the content. The app seamlessly edits and formats the final video, then uploads it directly to YouTube and Instagram — providing a fully hands-off solution for creators to generate engaging, viral-ready content with zero manual effort.",
    skills: [
      "Golang",
      "Python",
      "Microsoft Azure",
      "Selenium",
      "Rest API",
      "Git",
    ],
    link: "https://github.com/SatyamS17/contentFactory",
    workingOn: true,
  },
  {
    id: 2,
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
    link: "https://github.com/SatyamS17/FinalScore",
    workingOn: false,
  },
  {
    id: 3,
    logo: "../images/stream.png",
    name: "Distributed Stream Processing",
    description:
      "A scalable streaming framework inspired by RainStorm, using a hybrid distributed file system based on Cassandra’s architecture to ensure fault tolerance and high availability. Deployed across 10 remote Linux VMs, achieving sustained processing of 120+ records per second with optimized partitioning and multi-threaded pipelines.",
    skills: [
      "Golang",
      "Distribted Systems",
      "RPC",
      "TCP",
      "UDP",
      "HTTP",
    ],
    link: "https://github.com/SatyamS17/Website",
    workingOn: false,
  },
  {
    id: 4,
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
    link: "https://github.com/SatyamS17/OS",
    workingOn: false,
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Full-protection-shackle-frwiki.svg/1446px-Full-protection-shackle-frwiki.svg.png",
    name: "PassSafe",
    description:
      "Designed a user-friendly web interface for managing passwords that implements the RSA encryption algorithm along with MySQL database to securely store and manage password data. Integrated the Flask framework to handle routing and template rendering with HTML, CSS, and the Bootstrap front-end framework.",
    skills: [
      "Python",
      "MySQL",
      "Flask",
      "HTML",
      "CSS",
      "Full-stack",
      "Encryption",
    ],
    link: "https://github.com/SatyamS17/passsafe",
    workingOn: false,
  },
  {
    id: 6,
    logo: "../images/ufit.png",
    name: "U-Fit",
    description:
      "Developed the UI layout using Figma and translated it over to a Flutter application using Dart to create an app responsible for scheduling daily workouts and facilitated machine-learning capabilities into the app. Implemented Google Firebase as the primary backend and database for user authentication and data storage.",
    skills: ["Flutter", "Firebase", "Dart", "Authentication", "App-dev"],
    link: "https://github.com/SatyamS17/ufit",
    workingOn: false,
  },
  {
    id: 7,
    logo: "../images/web-logo.png",
    name: "Portfolio Website",
    description:
      "Explored web development by building a personal website to share past projects I developed during my classes or in my free time, experiences gained through internships and RSOs, and contact information to enable people to connect with me. I used the Next.js framework alongside Tailwind CSS to create an appealing website to showcase my profile.",
    skills: [
      "Nextjs",
      "Tailwind",
      "Css",
      "Javascript",
      "Full-stack",
      "Web-dev",
    ],
    link: "https://github.com/SatyamS17/Website",
    workingOn: true,
  },
];

const Projects = () => {
  return (
    <>
      {/* Section Header */}
      <div
        className="px-10 py-3 text-4xl font-bold text-white text-center"
        style={{ backgroundColor: "#262626" }}
      >
        PROJECTS
      </div>

      {/* Background Container */}
      <div
        className="py-10 px-5 flex flex-wrap justify-center gap-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        {project.map((item) => (
          <div
            key={item.id}
            className="relative group w-full md:w-[48%] max-w-[800px] cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* "Currently Working On" badge */}
            {item.workingOn && (
              <div className="absolute top-4 left-4 px-4 py-2 rounded-xl text-white font-bold text-sm z-20 bg-gradient-to-r from-[#41988f] to-[#a01823] bg-[length:300%_300%] animate-borderMove shadow-md">
                Currently Working On
              </div>
            )}
            {/* Animated border only on hover */}
            <div className="absolute -inset-[6px] rounded-[22px] bg-gradient-to-r from-[#41988f] via-[#a01823] to-[#41988f] bg-[length:400%_400%] z-0 opacity-0 group-hover:opacity-100 group-hover:animate-borderMove transition-all duration-500 pointer-events-none" />

            {/* Card Content */}
            <div className="relative z-10 w-full h-full bg-[#1f1f1fb3] backdrop-blur-md rounded-[20px] shadow-xl p-8 overflow-hidden border border-white/10 text-white">
              <a href={item.link}>
                <div className="flex flex-col justify-between items-center h-full">
                  {/* Logo */}
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-24 h-24 object-contain mb-4"
                    />
                  )}

                  {/* Title */}
                  <p className="text-3xl text-center font-bold mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#41988f] group-hover:to-[#a01823] group-hover:bg-clip-text group-hover:text-transparent">
                    {item.name}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-center mb-6 line-clamp-5">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-3 mt-auto px-2 py-3">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full px-4 py-2 text-base font-semibold text-white bg-[#262626] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
