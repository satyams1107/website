'use client';
import React from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
export const experience = [
  {
    id: 1,
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-garmin-3628786-3030148.png",
    name: "Garmin",
    role: "Software Engineer Intern",
    location: "Olathe, Kansas",
    date: "May 2024 - June 2024",
    skills: ["swe", "avionics", "embedded", "C/C#", "Python", "audio systems"],
    link: "https://www.garmin.com/en-US/c/aviation/general/",
  },
  {
    id: 2,
    logo: "../images/illini_ev_concept.png",
    name: "Illini EV Concept",
    role: "Embedded Project Lead",
    location: "Champaign, Illinois",
    date: "August 2022 - Present",
    skills: ["C", "microcontrollers", "CAN", "CubeIDE", "STM32", "Python"],
    link: "https://evconcept.engr.illinois.edu/",
  },
  {
    id: 3,
    logo: "../images/iss.png",
    name: "Illinois Space Society",
    role: "Avionic Software Engineer",
    location: "Champaign, Illinois",
    date: "August 2023 - Present",
    skills: ["avionics", "RTOS", "C++", "embedded", "SILSIM/HILSIM"],
    link: "https://www.illinoisspacesociety.org/",
  },
  {
    id: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcMf1wCjte6pX_MvN88oyO0TH1jvtG0l1AHZD3Ta3Sw&s",
    name: "Sylvan Learning Center",
    role: "Tutor / STEM Instructor",
    location: "Lake Zurich, Illinois",
    date: "May 2023 - August 2023",
    skills: ["math", "Python", "SAT/ACT prep", "tutoring", "communication"],
    link: "https://www.sylvanlearning.com/locations/us/il/lake-zurich-tutoring/lake-zurich/",
  }
];

const Experience = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="bg-dark px-10 pt-5 text-5xl font-bold">
        <h>Experience</h>
      </div>
      <div className="relative flex items-center content-center bg-dark py-5">
        <MdChevronLeft className="opacity-75 hover:opacity-100 bg-silver bg-opacity-50" onClick={slideLeft} size={100} />
        <div
          id="slider"
          className="w-auto h-[auto] items-center content-center soverflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-10"
        >
          {experience.map((item) => (
            <div
              className="w-[600px] h-[300px] inline-block cursor-pointer scale-90 hover:scale-95 ease-in-out duration-300 shadow-lg bg-white rounded-xl p-2 shadow-2xl hover:shadow-[0_0_2px_#fff,inset_0_0_5px_#fff,0_0_5px_#08f,0_0_10px_#08f,0_0_10px_#08f]
             "
             key={item.id}
            >
              <a href={item.link}>
                <div className=" w-auto">
                  <div className=" text-3xl mb-2 text-center">
                    <p className="text-black font-bold">{item.name}</p>
                    <p className="text-black">{item.role}</p>
                  </div>
                  <div className="flex flex-row">
                    <img
                      className="w-[200px] h-[200px] p-5"
                      src={item.logo}
                      alt="/"
                    />
                    <div className="flex flex-col w-[400px]">
                      <div className="text-2xl text-right pr-10">
                        <p className="text-black">{item.location}</p>
                        <p className="text-black">{item.date}</p>
                      </div>
                      <div className="pl-12 pt-7 pb-2 flex flex-wrap text-l ">
                        {item.skills.map((skill, index) => (
                          <span key={index}
                          className="inline-block bg-beige rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
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
        <MdChevronRight className="opacity-75 hover:opacity-100 bg-silver bg-opacity-50" onClick={slideRight} size={100} />
      </div>
    </>
  );
};

export default Experience;
