/* ============================================================
   data.js — Centralised portfolio data for Rishit Madireddy
   ============================================================ */

const DATA = {

  /* ── Profile ─────────────────────────────────────────────── */
  profile: {
    name: "Rishit Madireddy",
    aboutLead: "Third-year Mechanical Engineering student at UCL and 2022 Arkwright Engineering Scholar with experience at Boeing as an Aerodynamics Engineering Intern and a virtual internship at GE Aerospace.",
    aboutBody: "Skilled in CAD, CFD, MATLAB/Simulink and Python, demonstrated in industry and projects such as a PID-tuned quadcopter, EV charging device and wind turbine. Currently serving as Lead Drone Engineer at UCL Rover Team for aerodynamics and autonomous subsystems with further expertise in mechanical design, testing and systems engineering.",
    email: "rmadireddy05@gmail.com",
    phone: "+44 7459 110597",
    location: "London, UK",
    clearance: "UK BPSS Cleared",
    cvPath: "Rishit_Madireddy_CV.pdf",
    github: "https://github.com/rishitm05",
    linkedin: "https://www.linkedin.com/in/rishit-madireddy/"
  },

  /* ── Education ───────────────────────────────────────────── */
  education: {
    course: "3rd Year – MEng Mechanical Engineering with Year in Industry, Minor in Robotics",
    institution: "University College London (UCL)",
    period: "2024 – 2029 (Expected)",
    grade: "First Class with Honours (On Track)",
    scholarship: "2022 Arkwright Engineering Scholar",
    modules: [
      "Dynamics and Control",
      "Mathematical Modelling and Analysis",
      "Thermodynamics and Fluid Mechanics",
      "Mechanics of Solids",
      "Manufacturing and Design",
      "Engineering Materials",
      "Instrumentation",
      "Design and Professional Skills",
      "Robotics and Machine Learning"
    ]
  },

  /* ── Professional Experience ─────────────────────────────── */
  experience: [
    {
      id: "boeing",
      title: "Aerodynamics Engineering Intern",
      organization: "Boeing Commercial Airplanes",
      location: "Farnborough, UK",
      period: "June 2026 – September 2026",
      bullets: [
        "Contributed to development of SPOD/DMD Python package for post-processing of URANS simulations on NASA CRM model.",
        "Conducted ground-plane (GP) characterisation study to investigate the effect of GP size on ground effect in wind-tunnel.",
        "Modelled watertight aircraft and GP geometries in CATIA V5, prepared HeldenMesh meshes and used automated CFD solver.",
        "Participated in technical design reviews with Chief Engineers and presented findings on transonic buffet and SBLI seen in Tecplot.",
        "Supported wind tunnel testing of Check Standard Model, validating results up to M0.32 at 3 bar for increased Reynolds number."
      ],
      skills: ["CATIA V5", "HeldenMesh", "CFD", "Tecplot", "Git", "Linux", "Python", "SPOD / DMD", "Wind Tunnel Testing"]
    },
    {
      id: "ucl-rover",
      title: "Lead Drone Engineer and Team Manager",
      organization: "UCL Rover Team",
      location: "London, UK",
      period: "February 2025 – Present",
      bullets: [
        "Designing autonomous drone to fly in Martian environment, modelling frame in Fusion and conducting CFD on props in ANSYS.",
        "Modelling control systems in Simulink, integrating ArUco marker detection to achieve landings on 1 x 1 m pad with Raspberry Pi.",
        "Increased accuracy of robotic arm by 25% by programming calibration sequence on microcontrollers (ESP32 and Arduino Mega)."
      ],
      skills: ["Fusion 360", "ANSYS", "CFD", "MATLAB", "Simulink", "Raspberry Pi", "ArUco Vision", "ESP32", "Arduino Mega"]
    },
    {
      id: "ge-aerospace",
      title: "Virtual Internship – Explore Engineering Programme",
      organization: "GE Aerospace, Inc.",
      location: "Virtual",
      period: "July 2025 – September 2025",
      bullets: [
        "Compared energy sources for propulsion systems (SAF, LH2, LNG, etc.) by calculating cost, energy density and emissions per MJ.",
        "Calculated and plotted fan tip velocities up to M1.5 for engines with compression ratios of 50:1 using MATLAB.",
        "Prepared presentation on limitations of bypass / compression ratios in turbofan engines (e.g. fan diameter, noise, material stress)."
      ],
      skills: ["MATLAB", "Energy Systems", "Thermodynamics", "Propulsion Cycles", "Compressible Flow"]
    }
  ],

  /* ── Projects (No Dates, Direct GitHub Links) ─────────────── */
  projects: [
    {
      id: "quadcopter",
      title: "PID-Tuned Quadcopter",
      subtitle: null,
      category: "Robotics & Controls",
      shortDesc: "High-performance custom 5-inch aerobatic quadcopter with CNC-machined CFRP airframe, dynamic Simulink modelling, and toroidal propeller CFD.",
      bullets: [
        "Designed and assembled 5-inch quadcopter using CNC-machined CFRP plates and 1750KV motors to achieve T/W ratio of 8:1.",
        "Reduced oscillations by 40% by modelling PID control loops in Simulink and tuned in Betaflight to achieve stable flight dynamics.",
        "Minimised form drag by performing CFD on varying pitch angles of 3/4-blade toroidal propellers in Fusion 360 and Ansys Fluent."
      ],
      skills: ["Simulink", "Betaflight", "Ansys Fluent", "Fusion 360", "CNC CFRP", "PID Tuning"],
      iconClass: "fa-solid fa-drone",
      image: "images/projects/quadcopter.png",
      githubUrl: "https://github.com/rishitm05/PID-Tuned-Quadcopter"
    },
    {
      id: "imeche-ev",
      title: "Automated EV Charging Device",
      subtitle: "IMechE Design Challenge",
      category: "Mechanical & CAD",
      shortDesc: "Autonomous wall-detecting docking vehicle engineered with FEA-tested chassis and Python spring compression mechanics for the IMechE Design Challenge.",
      bullets: [
        "Co-led a team of 5 to build a device that travels forward, detects a wall and returns using mechanisms and analogue circuitry.",
        "Modelled chassis and powertrain using Fusion 360, producing engineering drawings and evaluated using FEA (Safety Factor > 6).",
        "Developed numerical model in Python to measure spring compressions under load, giving an ideal spring constant of 560 N/m.",
        "Underwent design review, clarifying material choices for frame and design process behind spring-lead-screw mechanism."
      ],
      skills: ["Fusion 360", "FEA", "Python 3", "Analogue Circuitry", "Mechanism Design", "Prototyping"],
      iconClass: "fa-solid fa-charging-station",
      image: "images/projects/imeche-ev.png",
      githubUrl: "https://github.com/rishitm05/IMechE-Design-Challenge-Automated-EV-Charging-Device"
    },
    {
      id: "wind-turbine",
      title: "Portable High-Efficiency Wind Turbine",
      subtitle: "UCL Autodesk Mechathon",
      category: "Aerodynamics & CFD",
      shortDesc: "UCL Autodesk Mechathon (4th Place overall) — custom aerodynamic blade profiling, RPM and power output CFD simulations, and automated G-code manufacturing.",
      bullets: [
        "Competed in a multidisciplinary team of 7 to build a portable wind turbine optimised for power output, coming 4th overall.",
        "Modelled blade profiles in Fusion 360 and used Ansys Fluent to simulate maximum RPM and estimate power output.",
        "3D-printed turbine blades and modified G-code to automate the process and laser-cut an acrylic-plywood base."
      ],
      skills: ["Fusion 360", "Ansys Fluent", "3D Printing", "G-Code", "Laser Cutting", "Aerodynamics"],
      iconClass: "fa-solid fa-wind",
      image: "images/projects/wind-turbine.png",
      githubUrl: "https://github.com/rishitm05/UCL-Autodesk-Mechathon-Portable-Wind-Turbine"
    },
    {
      id: "cricket-scoreboard",
      title: "Electronic Cricket Scoreboard",
      subtitle: null,
      category: "Electronics & PCB Design",
      shortDesc: "Designed and built an electronic cricket scoreboard to track runs and wickets for cricket matches with cascading 4026 decade counters and custom PCB layout.",
      bullets: [
        "Designed and built an electronic cricket scoreboard to track runs and wickets for cricket matches.",
        "Used astable and monostable circuits to increment values on 7-segment displays with cascading 4026s.",
        "Tested circuit on breadboards and effectively documented the entire design process.",
        "Converted CircuitWizard Schematic to Fusion 360 and designed a functioning PCB for easy scoring."
      ],
      skills: ["Fusion 360", "PCB Design", "CircuitWizard", "4026 ICs", "Analogue Circuitry", "Prototyping"],
      iconClass: "fa-solid fa-microchip",
      image: "images/projects/cricket-scoreboard.png",
      githubUrl: "https://github.com/rishitm05/Electronic-Scoreboard"
    },
    {
      id: "lap-counter",
      title: "Lap Counter for Scalextric Racetrack",
      subtitle: null,
      category: "Embedded Systems & Assembly",
      shortDesc: "Programmed a PIC16F84A microcontroller in Assembly (ASM) to deliver accurate motion-sensing lap counting, countdown sequencing, and completion indicators.",
      bullets: [
        "Programmed a PIC16F84A microcontroller in Assembly (ASM) to count laps for an RC car Scalextric track.",
        "Implemented a countdown sequence with LEDs and monitored input signals to track lap progress.",
        "Designed the system to increment the lap count and update memory upon detecting motion in sensors.",
        "Configured the display of lap counts on a 7-segment display and incorporated a flashing LED to indicate race completion.",
        "Created a reliable race system with internal logic to handle signal delays and accurate lap counting."
      ],
      skills: ["Assembly (ASM)", "PIC16F84A", "Microcontrollers", "Embedded Systems", "Sensor Integration", "Logic Design"],
      iconClass: "fa-solid fa-stopwatch",
      image: "images/projects/lap-counter.png",
      githubUrl: "https://github.com/rishitm05/RC-Car-Lap-Counter"
    },
    {
      id: "plant-watering",
      title: "Automated Plant Watering System",
      subtitle: "Arkwright Engineering Scholarship 2022",
      category: "Mechatronics & Embedded Systems",
      shortDesc: "Developed an autonomous plant irrigation system leveraging soil moisture and thermal telemetry with dynamic negative feedback op-amp control.",
      bullets: [
        "Developed an automatic watering system using soil moisture and temperature sensors to maintain optimal conditions for the plant.",
        "Designed op-amp comparator circuits to adjust water levels dynamically, using negative feedback.",
        "Prototyped the system on breadboards and CAD tools (Fusion 360, SketchUp, CircuitWizard, Altium CircuitMaker 2) to design a housing and PCB.",
        "Ensured system reliability by extensively testing each subsystem against calibrated values."
      ],
      skills: ["Fusion 360", "PCB Design", "Op-Amp Comparators", "Sensors", "Altium CircuitMaker", "CircuitWizard", "Prototyping"],
      iconClass: "fa-solid fa-seedling",
      image: "images/projects/plant-watering.png",
      githubUrl: "https://github.com/rishitm05/Automatic-Plant-Watering-System"
    }
  ],

  /* ── Technical Skills (Exact CV format) ──────────────────── */
  skillsCategories: [
    {
      category: "Engineering & Analysis",
      skills: ["CAD", "CFD", "FEA", "Meshing", "Thermodynamics", "Fluid Mechanics", "Control Systems", "Mechanical Design"]
    },
    {
      category: "Manufacturing & Prototyping",
      skills: ["CNC Machining", "3D Printing", "Laser Cutting", "RoboDK", "Prototyping", "Manufacturing Processes"]
    },
    {
      category: "Software & Tools",
      skills: ["CATIA V5", "Fusion 360", "ANSYS", "HeldenMesh", "Tecplot", "Git", "Linux", "Python", "MATLAB", "Simulink", "MS Office"]
    }
  ]
};
