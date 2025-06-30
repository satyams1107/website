"use client";
import React, { useState } from "react";

const ExperienceCard = ({
  title,
  role,
  location,
  date,
  skills,
  link,
  backgroundImage,
  imagePostion,
  side,
  details,
  textColor = "white",
}) => {
  const [expanded, setExpanded] = useState(false);

  // Base side classes (for desktop)
  const justifyClass = side === "left" ? "md:justify-start" : "md:justify-end";
  const marginClass = side === "left" ? "md:ml-10" : "md:mr-10";

  // For the DETAILS button, we will always push from the right on mobile
  const buttonStyle = {
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: textColor,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    borderRadius: "12px 0 0 12px", // Always right side on mobile
    minHeight: "120px",
    minWidth: "50px",
  };

  const isLeft = side === "left";

  return (
    <div
      className={`relative w-screen bg-cover bg-center min-h-[400px] flex items-center ${justifyClass} mt-3 overflow-hidden flex-col md:flex-row`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: imagePostion,
      }}
    >
      {/* Main card content */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="z-10">
        <div
          className={`backdrop-blur-md bg-white/20 rounded-xl p-6 ${marginClass} max-w-2xl transition-transform duration-300 hover:scale-105`}
          style={{ color: "white" }}
        >
          <div className="text-3xl mb-2 font-bold" style={{ color: textColor }}>
            {title}
          </div>
          <p className="mb-2 text-2xl font-medium italic text-white">{role}</p>
          <div className="text-2xl text-white">
            <p>{location}</p>
            <p>{date}</p>
          </div>
          <div className="mt-3 flex flex-wrap max-w-full">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block rounded-full px-3 py-1 font-semibold text-white mr-2 mb-2 shadow-sm"
                style={{ backgroundColor: textColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* DETAILS Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
        className={`absolute z-20 shadow-lg font-bold flex items-center justify-center text-lg px-4 py-12 text-white transition-all duration-200
        hidden md:flex`}
        style={{
          ...buttonStyle,
          right: isLeft ? "5px" : "auto",
          left: isLeft ? "auto" : "-10px",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = textColor + "DD";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = textColor;
        }}
      >
        {expanded ? "HIDE" : "DETAILS"}
      </button>

      {/* Mobile DETAILS Button (always on right) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
        className="absolute right-2 top-4 z-20 flex md:hidden px-3 py-2 text-sm font-semibold rounded-md shadow-md"
        style={{
          backgroundColor: textColor,
          color: "white",
        }}
      >
        {expanded ? "Hide" : "Details"}
      </button>

      {/* Slide-out Details Panel */}
      <div
        className={`absolute top-0 h-full bg-white text-black shadow-lg transition-all duration-300 ease-in-out z-10`}
        style={{
          width: expanded ? "450px" : "0px",
          right: 0, // Always open from right
          transform: expanded ? "translateX(0)" : "translateX(100%)",
          opacity: expanded ? 1 : 0,
          overflowY: expanded ? "auto" : "hidden",
          overflowX: "hidden",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 8px;
          }
          div::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}</style>
        <div className="p-6 w-full min-w-[300px] h-full pr-8">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
