/* ============================================================
   data.js — Centralised portfolio data for Rishit Madireddy
   Tailored to Updated CV: Aero + Mechanical + General Engineering
   ============================================================ */

const DATA = {

  /* ── Profile ─────────────────────────────────────────────── */
  profile: {
    name: "Rishit Madireddy",
    title: "Mechanical, Aerospace & Systems Engineering",
    tagline: "Mechanical, Aerospace & Robotics Systems Engineer.",
    aboutLead: "Third-year Mechanical Engineering student at UCL and 2022 Arkwright Engineering Scholar with experience at Boeing as an Aerodynamics Engineering Intern and a virtual internship at GE Aerospace.",
    aboutBody: "Skilled in CAD, CFD, FEA, MATLAB/Simulink and Python, demonstrated across industry and hands-on projects including a PID-tuned quadcopter, automated EV charging device, and high-efficiency wind turbine. Currently serving as Lead Drone Engineer at UCL Rover Team for aerodynamics and autonomous subsystems with further expertise in mechanical design, testing and systems engineering.",
    email: "rmadireddy05@gmail.com",
    phone: "+44 7459 110597",
    location: "London, UK",
    clearance: "UK BPSS Cleared",
    github: "https://github.com/rishitm05",
    linkedin: "https://www.linkedin.com/in/rishit-madireddy/",
    driveFolder: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw"
  },

  /* ── Education ───────────────────────────────────────────── */
  education: {
    degree: "MEng Mechanical Engineering with Year in Industry",
    minor: "Minor in Robotics",
    institution: "University College London (UCL)",
    year: "3rd Year",
    period: "2024 – 2029 (Expected)",
    grade: "First Class with Honours (On Track)",
    scholarship: "2022 Arkwright Engineering Scholar",
    clearance: "UK BPSS Cleared",
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
      id: "ucl-rover",
      title: "Lead Drone Engineer",
      company: "UCL Rover Team",
      location: "London, UK",
      period: "February 2025 – Present",
      bullets: [
        "Designing autonomous drone to fly in Martian environment, modelling frame in Fusion and conducting CFD on props in ANSYS.",
        "Modelling control systems in Simulink, integrating ArUco marker detection to achieve landings on 1 x 1 m pad with Raspberry Pi.",
        "Increased accuracy of robotic arm by 25% by programming calibration sequence on microcontrollers (ESP32 and Arduino Mega)."
      ],
      skills: ["Fusion 360", "ANSYS CFD", "Simulink", "Raspberry Pi", "ArUco Vision", "ESP32", "Arduino Mega"]
    },
    {
      id: "boeing",
      title: "Aerodynamics Engineering Intern",
      company: "Boeing Commercial Airplanes",
      location: "Farnborough, UK",
      period: "June 2026 – September 2026",
      bullets: [
        "Contributed to development of SPOD/DMD Python package for post-processing of URANS simulations on NASA CRM model.",
        "Conducted ground-plane (GP) characterisation study to investigate the effect of GP size on ground effect in wind-tunnel.",
        "Modelled watertight aircraft and GP geometries in CATIA V5, prepared HeldenMesh meshes and used automated CFD solver.",
        "Participated in technical design reviews with Chief Engineers and presented findings on transonic buffet and SBLI seen in Tecplot.",
        "Supported wind tunnel testing of Check Standard Model, validating results up to M0.32 at 3 bar for increased Reynolds number."
      ],
      skills: ["CATIA V5", "HeldenMesh", "Tecplot", "Python", "SPOD / DMD", "Wind Tunnel Testing", "URANS CFD"]
    },
    {
      id: "ge-aerospace",
      title: "Virtual Internship – Explore Engineering Programme",
      company: "GE Aerospace, Inc.",
      location: "Virtual",
      period: "July 2025 – September 2025",
      bullets: [
        "Compared energy sources for propulsion systems (SAF, LH2, LNG, etc.) by calculating cost, energy density and emissions per MJ.",
        "Calculated and plotted fan tip velocities up to M1.5 for engines with compression ratios of 50:1 using MATLAB.",
        "Prepared presentation on limitations of bypass / compression ratios in turbofan engines (e.g. fan diameter, noise, material stress)."
      ],
      skills: ["MATLAB", "Propulsion Thermodynamics", "Aviation Energy Systems", "Structural Boundaries"]
    }
  ],

  /* ── Selected Work & Technical Projects ──────────────────── */
  projects: [
    {
      id: "quadcopter",
      title: "PID-Tuned Quadcopter",
      date: "June 2025 – Present",
      category: "Robotics & Controls",
      shortDesc: "High-performance custom 5-inch aerobatic quadcopter with CNC CFRP airframe, dynamic Simulink modelling, and toroidal propeller CFD.",
      bullets: [
        "Designed and assembled 5-inch quadcopter using CNC-machined CFRP plates and 1750KV motors to achieve T/W ratio of 8:1.",
        "Reduced oscillations by 40% by modelling PID control loops in Simulink and tuned in Betaflight to achieve stable flight dynamics.",
        "Minimised form drag by performing CFD on varying pitch angles of 3/4-blade toroidal propellers in Fusion 360 and Ansys Fluent."
      ],
      skills: ["Simulink", "Betaflight", "Ansys Fluent", "Fusion 360", "CNC CFRP", "PID Control"],
      barClass: "pastel-terracotta",
      iconClass: "fa-solid fa-drone",
      image: "images/projects/quadcopter.png" // User can drop image here
    },
    {
      id: "imeche-ev",
      title: "Automated EV Charging Device",
      date: "January 2025 – March 2025",
      category: "Mechanical & CAD",
      shortDesc: "IMechE Design Challenge — Autonomous wall-detecting docking vehicle engineered with FEA-tested chassis and Python spring compression mechanics.",
      bullets: [
        "Co-led a team of 5 to build a device that travels forward, detects a wall and returns using mechanisms and analogue circuitry.",
        "Modelled chassis and powertrain using Fusion 360, producing engineering drawings and evaluated using FEA (Safety Factor > 6).",
        "Developed numerical model in Python to measure spring compressions under load, giving an ideal spring constant of 560 N/m."
      ],
      skills: ["Fusion 360", "FEA Analysis", "Python 3", "Analogue Circuitry", "Mechanism Design"],
      barClass: "pastel-sandstone",
      iconClass: "fa-solid fa-charging-station",
      image: "images/projects/imeche-ev.png" // User can drop image here
    },
    {
      id: "wind-turbine",
      title: "Portable High-Efficiency Wind Turbine",
      date: "January 2025",
      category: "Aerodynamics & CFD",
      shortDesc: "UCL Autodesk Mechathon — 4th Place overall for a high-output portable turbine combining aerodynamic blade profiling, CFD simulation, and automated G-code manufacturing.",
      bullets: [
        "Competed in a multidisciplinary team of 7 to build a portable wind turbine optimised for power output, coming 4th overall.",
        "Modelled blade profiles in Fusion 360 and used Ansys Fluent to simulate maximum RPM and estimate power output.",
        "3D-printed turbine blades and modified G-code to automate the process and laser-cut an acrylic-plywood base."
      ],
      skills: ["Fusion 360", "Ansys Fluent", "3D Printing", "G-Code Automation", "Laser Cutting"],
      barClass: "pastel-sage",
      iconClass: "fa-solid fa-wind",
      image: "images/projects/wind-turbine.png" // User can drop image here
    },
    {
      id: "mars-drone-system",
      title: "Mars Autonomous Exploration Drone",
      date: "February 2025 – Present",
      category: "Robotics & Autonomous Systems",
      shortDesc: "UCL Rover Team — Planetary aerial scout with low-density propeller CFD, ArUco vision precision landing, and dual microcontroller architecture.",
      bullets: [
        "Engineered structural airframe in Fusion 360 and performed CFD in ANSYS on rotor performance in simulated Martian low-density atmosphere.",
        "Integrated ArUco computer vision marker recognition with Raspberry Pi camera to achieve autonomous precision landings on 1 x 1 m rover pad.",
        "Programmed microcontroller calibration sequences (ESP32 / Arduino Mega), boosting robotic arm positioning precision by 25%."
      ],
      skills: ["ANSYS CFD", "Raspberry Pi", "OpenCV / ArUco", "ESP32", "Arduino Mega", "Simulink"],
      barClass: "pastel-slate",
      iconClass: "fa-solid fa-satellite",
      image: "images/projects/mars-drone.png" // User can drop image here
    }
  ],

  /* ── Skills & Tools (Categorised exactly as CV) ──────────── */
  skillsCategories: [
    {
      category: "Engineering & Analysis",
      skills: [
        "CAD Modelling", "CFD Analysis", "FEA Stress Analysis",
        "Meshing", "Thermodynamics", "Fluid Mechanics",
        "Control Systems", "Mechanical Design"
      ]
    },
    {
      category: "Manufacturing & Prototyping",
      skills: [
        "CNC Machining", "3D Printing (Additive)", "Laser Cutting",
        "RoboDK", "Prototyping", "Manufacturing Processes"
      ]
    },
    {
      category: "Software & Tools",
      skills: [
        "CATIA V5", "Fusion 360", "ANSYS Fluent", "HeldenMesh",
        "Tecplot", "Git", "Linux", "Python", "MATLAB", "Simulink", "MS Office"
      ]
    },
    {
      category: "Aerodynamics & Control",
      skills: [
        "SPOD / DMD Analysis", "Wind Tunnel Testing", "URANS Simulations",
        "ArUco Vision", "PID Tuning", "Betaflight", "Microcontrollers (ESP32/Mega)"
      ]
    }
  ]
};
