/* ============================================================
   data.js — Centralised portfolio data for Rishit Madireddy
   Update this file to change all website content.
   ============================================================ */

const DATA = {

  /* ── Profile ─────────────────────────────────────────────── */
  profile: {
    name: "Rishit Madireddy",
    title: "Mechanical & Aerospace Engineering",
    disciplines: ["Aerodynamics", "CFD", "Autonomous Robotics", "CAD & FEA"],
    about: "Third-year Mechanical Engineering student at UCL and 2022 Arkwright Engineering Scholar with expertise in aerodynamics, mechanical design and systems engineering. Skilled in CAD, CFD, MATLAB/Simulink and Python, demonstrated through projects including a PID-tuned quadcopter, EV charging device and wind turbine. Currently serving as Lead Drone Engineer at UCL Rover Team for performance and autonomous sub-systems with further industrial experience gained at internships with Boeing and GE Aerospace.",
    email: "rmadireddy05@gmail.com",
    phone: "+44 7459 110597",
    location: "London, UK",
    github: "https://github.com/rishitm05",
    linkedin: "https://www.linkedin.com/in/rishit-madireddy/",
    driveFolder: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw"
  },

  /* ── Education ───────────────────────────────────────────── */
  education: {
    degree: "MEng Mechanical Engineering",
    minor: "Minor in Robotics",
    institution: "University College London (UCL)",
    year: "3rd Year",
    period: "2024 – 2028 (Expected)",
    grade: "Predicted First Class with Honours",
    scholarship: "2022 Arkwright Engineering Scholar",
    modules: [
      "Dynamics & Control",
      "Mathematical Modelling & Analysis",
      "Introduction to Robotics",
      "Instrumentation",
      "Thermodynamics & Fluid Mechanics",
      "Manufacturing & Design",
      "Design & Professional Skills",
      "Mechanics of Solids",
      "Engineering Materials"
    ]
  },

  /* ── Professional Experience ─────────────────────────────── */
  experience: [
    {
      title: "Aerodynamics Engineering Intern",
      company: "Boeing Commercial Airplanes",
      division: "HiLACC, Cody Technology Park",
      location: "Farnborough, UK",
      period: "June 2026 – September 2026",
      highlights: [
        "Ran DMD (Dynamic Mode Decomposition) and SPOD (Spectral Proper Orthogonal Decomposition) analysis on unsteady CRM model simulation results to measure dominant flow structures and shedding frequencies.",
        "Completed ground plane characterisation study on the impact of ground plane dimensions on ground effect aerodynamics and high-lift flight characteristics.",
        "Modelled wind tunnel ground plane board, fairings, and model installations in CATIA v5 and ran CFD in FE lite.",
        "Supported research into high-lift aerodynamics, buffet boundaries, aircraft wake analysis, and wind tunnel data interpretation at the 5-metre wind tunnel facility."
      ]
    },
    {
      title: "Lead Drone Engineer",
      company: "UCL Rover Team",
      division: null,
      location: "London, UK",
      period: "February 2025 – Present",
      highlights: [
        "Designing an autonomous drone to fly in simulated Martian planetary environments; modelled structural airframe in Fusion 360 and conducted aerodynamic CFD on 3-blade props in Ansys Fluent.",
        "Modelled flight control systems in MATLAB/Simulink; integrated ArUco computer vision marker recognition on Raspberry Pi to execute autonomous precision landings on a 1×1 m rover deck.",
        "Programmed microcontroller calibration sequences (ESP32 and Arduino Mega), increasing robotic arm positioning precision by 25%."
      ]
    },
    {
      title: "Virtual Internship – Explore Engineering Programme",
      company: "GE Aerospace, Inc.",
      division: null,
      location: "Virtual",
      period: "July 2025 – September 2025",
      highlights: [
        "Conducted propulsion comparative analysis for next-gen aviation fuels (SAF, Liquid Hydrogen, LNG) calculating cost, gravimetric energy density, and emissions per MJ.",
        "Modelled and plotted supersonic fan tip velocities up to Mach 1.5 for ultra-high bypass engines (50:1 pressure ratio) in MATLAB.",
        "Prepared technical presentation on high-bypass turbofan structural, aerodynamic, and acoustic boundaries (fan diameter constraints, flutter, material stress)."
      ]
    }
  ],

  /* ── Projects ────────────────────────────────────────────── */
  projects: [
    {
      id: "quadcopter",
      title: "PID-Tuned Aerobatic Quadcopter",
      category: "Robotics & Control",
      period: "June 2025 – Present",
      summary: "5-inch aerobatic quadcopter with CNC-machined CFRP airframe and 1750 KV brushless motors achieving an 8 : 1 thrust-to-weight ratio.",
      highlights: [
        "Designed and assembled 5-inch quadcopter using CNC-machined CFRP plates and 1750 KV motors to maintain T/W ratio of 8 : 1.",
        "Reduced oscillations by 40 % by modelling PID control loops in Simulink and tuning in Betaflight to achieve stable flight dynamics.",
        "Minimised parasitic / form drag by performing CFD on varying pitch angles of 3 / 4-blade props with Fusion 360 and Ansys Fluent."
      ],
      technologies: ["MATLAB / Simulink", "Ansys Fluent", "Fusion 360", "Betaflight", "CNC Machining", "CFRP"],
      driveDocs: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw",
      github: "https://github.com/rishitm05"
    },
    {
      id: "mars-drone",
      title: "Mars Autonomous Exploration Drone",
      category: "Robotics & Control",
      period: "February 2025 – Present",
      summary: "Autonomous aerial scout designed for simulated Martian environments with low-density propeller CFD and computer-vision precision landing.",
      highlights: [
        "Modelled structural airframe in Fusion 360 and conducted aerodynamic CFD on 3-blade propellers in Ansys Fluent for low-density Martian atmosphere.",
        "Integrated ArUco computer vision marker recognition on Raspberry Pi to execute autonomous precision landings on a 1×1 m rover deck.",
        "Programmed ESP32 firmware for autonomous flight control and sensor integration in simulated planetary environments."
      ],
      technologies: ["Ansys Fluent", "Fusion 360", "Raspberry Pi", "ESP32", "ArUco", "Python", "MATLAB / Simulink"],
      driveDocs: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw",
      github: "https://github.com/rishitm05"
    },
    {
      id: "ev-charging",
      title: "IMechE Automated EV Charging Mechanism",
      category: "Mechanical & CAD",
      period: "January 2025 – March 2025",
      summary: "Autonomous docking vehicle for the IMechE Design Challenge with FEA-validated chassis and Python-modelled spring mechanics.",
      highlights: [
        "Co-led a team of 5 to build a device that travels forward, detects a wall and returns using mechanisms and analogue circuitry.",
        "Modelled chassis and powertrain in Fusion 360, producing engineering drawings and stress-tested with FEA (Safety Factor > 6).",
        "Developed numerical model in Python to measure spring compressions under load, giving an ideal spring constant of 560 N/m.",
        "Underwent design review, clarifying material choices for frame and design process behind spring-lead-screw mechanism."
      ],
      technologies: ["Fusion 360", "FEA", "Python 3", "Engineering Drawings", "Analogue Circuitry"],
      driveDocs: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw",
      github: "https://github.com/rishitm05"
    },
    {
      id: "wind-turbine",
      title: "Portable High-Efficiency Wind Turbine",
      category: "Aerodynamics & CFD",
      period: "January 2025",
      summary: "Ranked 4th overall at UCL Autodesk Mechathon — custom airfoil blade design with CFD-optimised RPM and power output.",
      highlights: [
        "Competed in a multidisciplinary team of 7 to build a portable wind turbine generating the highest power, placing 4th overall.",
        "Modelled blade profiles with optimised airfoil curvature in Fusion 360 and used Ansys Fluent to simulate maximum RPM and estimate power output.",
        "3D-printed turbine blades with modified G-code to automate the process and laser-cut an acrylic-plywood base."
      ],
      technologies: ["Fusion 360", "Ansys Fluent", "3D Printing", "G-Code", "Laser Cutting"],
      driveDocs: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw",
      github: "https://github.com/rishitm05"
    },
    {
      id: "turbofan",
      title: "GE Aerospace Turbofan Propulsion Analysis",
      category: "Propulsion & Energy",
      period: "July 2025 – September 2025",
      summary: "MATLAB thermodynamic engine cycle modelling with supersonic fan tip analysis and alternative fuel lifecycle assessment.",
      highlights: [
        "Conducted propulsion comparative analysis for next-gen aviation fuels (SAF, LH₂, LNG) calculating cost, energy density, and emissions per MJ.",
        "Modelled and plotted supersonic fan tip velocities up to Mach 1.5 for ultra-high bypass engines (50 : 1 OPR) in MATLAB.",
        "Prepared technical presentation on high-bypass turbofan structural, aerodynamic, and acoustic boundaries."
      ],
      technologies: ["MATLAB", "Thermodynamics", "Propulsion Systems", "Alternative Fuels"],
      driveDocs: "https://drive.google.com/drive/folders/1i_qHLcf9Rqz36Fu3xkGmKzsKSOUM1kZw",
      github: "https://github.com/rishitm05"
    }
  ],

  /* ── Technical Skills ────────────────────────────────────── */
  skills: {
    "Engineering & Analysis": [
      "CAD Modelling", "FEA Stress Analysis", "CFD (Fluid Dynamics)",
      "Thermodynamics", "Fluid Mechanics", "Control Systems",
      "PCB Design", "Materials Selection"
    ],
    "Software & Tools": [
      "Ansys Fluent", "Autodesk Fusion 360", "CATIA v5", "FE lite",
      "MATLAB", "Simulink", "Python 3", "KiCad", "Betaflight", "G-Code"
    ],
    "Aerodynamics & Propulsion": [
      "DMD & SPOD Analysis", "High-Lift Aerodynamics", "Ground Effect Analysis",
      "Wind Tunnel Testing", "Airfoil / Propeller Optimisation",
      "Gas Turbines", "SAF & Hydrogen"
    ],
    "Manufacturing & Prototyping": [
      "CNC Machining (CFRP)", "3D Printing / Additive Mfg", "Laser Cutting",
      "Rapid Prototyping", "Embedded Systems (RPi, ESP32, Arduino)", "ArUco Vision"
    ]
  },

  /* ── Filter Categories ───────────────────────────────────── */
  categories: [
    "All",
    "Robotics & Control",
    "Aerodynamics & CFD",
    "Mechanical & CAD",
    "Propulsion & Energy"
  ]
};
