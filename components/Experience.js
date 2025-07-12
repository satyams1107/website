import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    id: 1,
    title: "BLUE ORIGIN",
    role: "Software Engineer Intern",
    location: "Kent, Washington",
    date: "May 2025 - June 2025",
    skills: ["Python", "Machine Learning", "TensorFlow", "Avionics", "Automation"],
    link: "https://www.blueorigin.com/",
    backgroundImage: "../images/blue_background.jpg",
    imagePostion: "center bottom 20%",
    side: "left",
    details: [
      "Leveraged the TensorFlow decision tree classifier machine learning model to develop a root cause analysis tool trained on 70+ simulated flight datasets, identifying the cause of signal failures.",
      "Built an automated testing framework on top of 200+ existing manual procedures for the New Glenn rocket, enabling overnight test execution and guiding the future direction of launch automation.",
    ],
    textColor: "#0033A0",
  },
  {
    id: 2,
    title: "GARMIN",
    role: "Software Engineer Intern",
    location: "Olathe, Kansas",
    date: "May 2024 - June 2024",
    skills: ["C/C++", "UART", "Python", "C#", "audio", ".NET", "WPF MMVM"],
    link: "https://www.garmin.com/en-US/c/aviation/general/",
    backgroundImage: "../images/garmin_background.jpg",
    imagePostion: "center bottom 30%",
    side: "right",
    details: [
      "Engineered a UART communication protocol for controlling Bluetooth features on an ARM processor, prototyped and tested over TCP/IP, enabling external devices to manage 21+ Bluetooth features.",
      "Implemented a packet parsing and filtering feature for an internal tool, which accelerated debugging and packet visualization processes, using the WPF .NET Framework and MVVM architecture.",
      "Created and tested 10+ refutation tests for a Bluetooth security feature to comply with DO-178B certification.",
    ],
    textColor: "black",
  },
  {
    id: 3,
    title: "ILLINI EV CONCEPT",
    role: "Embedded Project Lead",
    location: "Champaign, Illinois",
    date: "August 2022 - Present",
    skills: ["C", "Microcontrollers", "CAN", "CubeIDE", "STM32", "Python"],
    link: "https://evconcept.engr.illinois.edu/",
    backgroundImage: "../images/ev_background.jpg",
    imagePostion: "center bottom 40%",
    side: "right",
    details: [
      "Spearheaded the development of a USB to CAN converter, resulting in an increase in communication speed between the autonomous computer program and the vehicle’s microcontrollers.",
      "Crafted Python scripts and utilized serial monitors for rigorous testing of low-level UART programs specifically tailored for STM32 microcontrollers, resulting in a decrease in debugging time.",
    ],
    textColor: "#d9881e",
  },
  {
    id: 4,
    title: "ILLINOIS SPACE SOCIETY",
    role: "Avionics Software Engineer",
    location: "Champaign, Illinois",
    date: "August 2023 - May 2024",
    skills: ["Avionics", "RTOS", "C++", "Embedded", "SILSIM/HILSIM"],
    link: "https://www.illinoisspacesociety.org/",
    backgroundImage: "../images/iss_background.jpg",
    imagePostion: "center bottom 55%",
    side: "left",
    details: [
      "Designed a Staging Finite State Machine (FSM) for a two-stage rocket with a rapid self-correction feature ensuring optimal rocket functionality.",
      "Leveraged hardware-in-the-loop (HILSIM) to rigorously test and validate real-time embedded system responses, enhancing the rocket's reliability and reducing in pre-launch anomalies.",
    ],
    textColor: "#7b141cff",
  },
];
const Experience = () => {
  return (
    <div className="w-screen" style={{ backgroundColor: "#262626" }}>
      <div className="text-4xl font-bold text-white px-10 pt-3 text-center">
        <h1>EXPERIENCE</h1>
      </div>
      {experience.map((exp) => (
        <ExperienceCard key={exp.id} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
