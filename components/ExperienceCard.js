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
  side,
  details,
  textColor = "white",
}) => {
  const [expanded, setExpanded] = useState(false);

  const justifyClass = side === "left" ? "justify-start" : "justify-end";
  const marginClass = side === "left" ? "ml-10" : "mr-10";

  const buttonPosition =
    side === "left" ? "-right-10 rounded-l-md" : "-left-10 rounded-r-md";

  const buttonTextColor = side === "left" ? "text-white" : "text-black";

  return (
    <div
      className={`relative w-screen bg-cover bg-center min-h-[400px] flex items-center ${justifyClass} mt-3  overflow-hidden`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center 80%",
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
          <p
            className="mb-2 text-2xl font-medium italic"
            style={{ color: "white" }}
          >
            {role}
          </p>
          <div className="text-2xl" style={{ color: "white" }}>
            <p>{location}</p>
            <p>{date}</p>
          </div>
          <div className="mt-3 flex flex-wrap max-w-full">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block rounded-full px-3 py-1 font-semibold text-white mr-2 mb-2 shadow-sm"
                style={{
                  backgroundColor: textColor,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* Learn More button - Larger and better positioned */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
        className={`absolute top-1/2 transform -translate-y-1/2 text-white px-4 py-12 transition-all duration-200 z-50 shadow-lg font-bold flex items-center justify-center text-lg`}
        style={{
          [side === "left" ? "right" : "left"]:
            side === "left" ? "5px" : "-10px",
          backgroundColor: textColor,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          borderRadius: side === "left" ? "12px 0 0 12px" : "0 12px 12px 0",
          minHeight: "120px",
          minWidth: "50px",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = textColor + "DD"; // Slightly darker on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = textColor;
        }}
      >
        {expanded
          ? side === "left"
            ? "HIDE"
            : "HIDE"
          : side === "left"
          ? "DETAILS"
          : "DETAILS"}
      </button>

      {/* Sliding panel - comes from opposite side of the card */}
      <div
        className={`absolute top-0 h-full bg-white text-black shadow-lg transition-all duration-300 ease-in-out z-20`}
        style={{
          width: expanded ? "450px" : "0px",
          [side === "left" ? "right" : "left"]: "0px",
          transform: expanded
            ? "translateX(0)"
            : side === "left"
            ? "translateX(100%)"
            : "translateX(-100%)",
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
        <div
  className={`p-6 w-full min-w-[300px] h-full ${
    side === 'left' ? 'pr-20' : 'pl-20'
  }`}
>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="space-y-3">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
