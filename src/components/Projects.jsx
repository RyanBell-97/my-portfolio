import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  
  const projectsData = [
    {
      title: "SFK Tutoring App",
      description: "A multi-tenant web and mobile application that matches volunteer tutors with underprivileged pupils. Built with Ionic, Angular, Docker, Node.js, and CakePHP + Swagger. I designed the role & permission model and set up GitLab CI/CD in an agile 4-person team.",
      imageUrl: `${process.env.PUBLIC_URL}/sfk-tutoring-app.png`,
      technologies: ["Ionic", "Angular", "Docker", "Node.js", "CakePHP", "Swagger", "GitLab CI/CD"],
      detailedDescription: (
        <div>
          <h3 className="text-xl font-bold mb-2">📚 SFK Tutoring App</h3>
          <p className="mb-4 italic">A multi-tenant web and mobile platform that connects volunteer tutors with underprivileged students.</p>
          
          <p className="mb-4"><strong>Overview:</strong> This project is part of a student initiative at Friedrich Schiller University Jena in collaboration with Studenteninitiative für Kinder e.V. The app enables educational support for disadvantaged children by offering secure and structured management of tutoring sessions. It supports multiple user roles (students, tutors, admins, and partners) and is designed for long-term use across institutions.</p>
          
          <h4 className="font-bold mb-2">My Role:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Designing the role & permission system with scalability and clarity in mind</li>
            <li>Integrating CI/CD pipelines using GitLab to streamline development and deployment</li>
            <li>Contributing to both front-end and backend development using Angular, Ionic, and CakePHP</li>
            <li>Collaborating in a small, agile 4-person team with continuous feedback and task sharing</li>
            <li>Participating in sprint planning, feature discussions, and regular code reviews</li>
          </ul>
          
          <p className="mb-4"><strong>Tech Stack:</strong> Ionic • Angular • Docker • Node.js • CakePHP • Swagger • GitLab CI/CD</p>
        </div>
      )
    },
    {
      title: "Ticket System",
      description: "A web-based ticket system developed in a team of four as part of Integrative Project Management 2.0. Used Vue.js & TypeScript for the front-end, implemented roles, ticket states, and comments. GitLab was used for CI/CD, issues, and reviews.",
      imageUrl: `${process.env.PUBLIC_URL}/ticket-system.png`,
      technologies: ["Vue.js", "TypeScript", "GitLab", "CI/CD"],
      detailedDescription: (
        <div>
          <h3 className="text-xl font-bold mb-2">Software Development Project – Ticket System</h3>
          <p className="mb-4 italic">A simple ticket tracking tool for support and communication management, built in an academic setting.</p>
          
          <p className="mb-4"><strong>Overview:</strong> This project is developed during the <strong>"Software Development Project"</strong> module at Friedrich Schiller University Jena (officially part of "Integrative Project Management 2.0"). It simulates a small-scale helpdesk system, including ticket creation, user role management, and workflow states.</p>
          
          <h4 className="font-bold mb-2">My Role:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Implementing basic front-end features using Vue.js and TypeScript</li>
            <li>Contributing to UI components such as ticket status controls, comments, and interactive forms</li>
            <li>Supporting backend adjustments tied to routes, inputs, and mock data</li>
            <li>Participating in GitLab issue tracking, commits, and simple testing</li>
            <li>Collaborating in a 4-person agile student team</li>
          </ul>
          
          <p className="mb-4"><strong>Tech Stack:</strong> Vue.js • TypeScript • GitLab • Git • Basic CI/CD</p>
        </div>
      )
    },
    {
      title: "Experimental Hardware Projects",
      description: "A multi-part academic project focused on digital logic design, hardware description, and system-level architecture. Implemented various digital components from combinational logic to a full single-cycle processor simulation using SystemVerilog and FPGA toolchains.",
      imageUrl: `${process.env.PUBLIC_URL}/ticket-system.png`, 
      technologies: ["Verilog", "SystemVerilog", "FPGA", "Quartus", "GTKWave", "ARM AArch64"],
      detailedDescription: (
        <div>
          <h3 className="text-xl font-bold mb-2">🛠️ Experimental Hardware Projects (FSU Jena)</h3>
          <p className="mb-4 italic">A multi-part academic project focused on digital logic design, hardware description, and system-level architecture.</p>
          
          <p className="mb-4"><strong>Overview:</strong> A series of 10 progressively complex labs covering combinational logic, finite state machines, SystemVerilog, FPGA programming, arithmetic units, and processor design. Each project builds on the previous, culminating in a full single-cycle processor simulation.</p>
          
          <p className="mb-4"><strong>Tools & Technologies:</strong> Verilog, SystemVerilog, FPGA toolchains, Quartus, GTKWave, ARM AArch64, logic simulators</p>
          
          <h4 className="font-bold mb-2">Topics Covered:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>🧠 Combinational & Sequential Logic</li>
            <li>🧩 Finite State Machines & ALUs</li>
            <li>⚙️ SystemVerilog modeling</li>
            <li>🔁 Stopwatch circuit design</li>
            <li>🧮 AArch64 & Single-Cycle Processor architecture</li>
            <li>🧾 Karnaugh Maps, Bubble Pushing, Timing</li>
          </ul>
          
          <h4 className="font-bold mb-2">What I Did:</h4>
          <ul className="list-disc pl-5">
            <li>Implemented and simulated digital logic blocks (FSMs, ALUs, Stopwatches)</li>
            <li>Modeled hardware using SystemVerilog</li>
            <li>Used FPGA toolchains to prepare logic for physical deployment</li>
            <li>Wrote modular, testable Verilog/SystemVerilog components</li>
            <li>Debugged circuit behavior using waveform tools (e.g., GTKWave)</li>
          </ul>
        </div>
      )
    },
    {
      title: "EmailApp_Mile",
      description: "A Java desktop email client built using JavaMail API and Swing. Features secure SMTP/POP3 protocols with configurable login options. The project is open-sourced.",
      imageUrl: `${process.env.PUBLIC_URL}/email-app-mile.png`,
      technologies: ["Java", "JavaMail API", "Swing", "SMTP/POP3"],
      detailedDescription: (
        <div>
          <h3 className="text-xl font-bold mb-2">EmailApp_Mile – Java Desktop Email Client</h3>
          <p className="mb-4 italic">A fully functional desktop email client built in Java, implementing secure POP3 and SMTP communication.</p>
          
          <p className="mb-4"><strong>Overview:</strong> Developed across three milestones, this project evolves from low-level socket-based email communication into a full-featured desktop email client with a graphical interface. The app allows users to securely send and receive emails, store them locally, and manage multiple accounts. Inspired by real-world tools like Thunderbird, the application emphasizes both technical depth and user-friendly design.</p>
          
          <h4 className="font-bold mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Support for <strong>POP3</strong> and <strong>SMTP</strong> protocols with optional <strong>SSL/TLS encryption</strong></li>
            <li>Configurable email account management with persistent credential storage</li>
            <li>Compose, send, receive, and delete emails within a simple GUI</li>
            <li>Persistent local storage of downloaded emails with duplication checks</li>
            <li>Visual interface for browsing inbox, previewing messages, and composing replies</li>
          </ul>
          
          <h4 className="font-bold mb-2">My Role:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Built core communication logic with JavaMail API and raw socket interfaces</li>
            <li>Designed and implemented the main GUI using Swing</li>
            <li>Developed a secure login flow and credential configuration system</li>
            <li>Added functionality for offline storage and incremental email syncing</li>
            <li>Worked independently from spec to implementation and testing</li>
          </ul>
          
          <p className="mb-4"><strong>Tech Stack:</strong> Java • Swing • JavaMail API • POP3/POP3S • SMTP/SMTPS • Local file storage</p>
        </div>
      )
    },
    {
      title: "Mill Game",
      description: "Implementation of \"Nine Men's Morris\" board game with Java & Swing. Includes full game logic and graphical user interface.",
      imageUrl: `${process.env.PUBLIC_URL}/mill-game.png`,
      technologies: ["Java", "Swing", "Game Development"],
      detailedDescription: (
        <div>
          <h3 className="text-xl font-bold mb-2">Mill Game – Java Multiplayer Board Game</h3>
          <p className="mb-4 italic">A classic strategy board game (Nine Men's Morris) reimagined with offline, online, and "Deluxe" multiplayer modes.</p>
          
          <p className="mb-4"><strong>Overview:</strong> Developed as part of an advanced programming lab at FSU Jena, this project begins with an offline two-player version and gradually evolves into an online multiplayer game with user authentication, matchmaking, and persistent account management. The app supports full gameplay rules, including all three game phases and special cases (mill blocking, flying phase, etc.).</p>
          
          <h4 className="font-bold mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Interactive <strong>graphical board</strong> and two-player local gameplay</li>
            <li><strong>Online multiplayer</strong> support via <strong>client-server architecture</strong> (Java Sockets)</li>
            <li>Turn-based communication with real-time updates</li>
            <li>Deluxe version adds <strong>login system</strong>, <strong>user registration</strong>, and <strong>active user lobby</strong></li>
            <li>Player list management, session handling, and connection control</li>
          </ul>
          
          <h4 className="font-bold mb-2">My Role:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Implemented game logic (stone placement, mills, moving, flying phase)</li>
            <li>Developed and refined the board GUI with interactive click handling</li>
            <li>Integrated socket-based networking for online play</li>
            <li>Built authentication dialogs and persistent user registry</li>
            <li>Applied exception handling for session drops, disconnects, and client exits</li>
          </ul>
          
          <p className="mb-4"><strong>Tech Stack:</strong> Java • Swing • Java.net Sockets • Multi-threaded Server • File-based persistence</p>
        </div>
      )
    }
  ];

  const toggleProjectDetails = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary dark:bg-gray-900">
      {/* */}
      <header className="p-4 flex justify-between items-center">
        <div>
          {/* */}
        </div>
        <div className="flex items-center">
          <nav className="mr-4">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/resume" className="hover:text-primary">Resume</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      
      <div className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="w-6 h-6 bg-primary inline-block mr-2"></span>
            Projects
          </h1>
          <p className="mt-4">Here are some of my recent software development projects.</p>
        </div>
        
        {/* */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded shadow-sm overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-contain p-4 cursor-pointer"
                onClick={() => project.detailedDescription && toggleProjectDetails(index)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/600x400?text=${project.title.replace(/\s+/g, '+')}`;
                }}
              />
              <div className="p-6">
                <h3 
                  className={`text-xl font-bold mb-2 ${project.detailedDescription ? 'cursor-pointer hover:text-primary' : ''}`}
                  onClick={() => project.detailedDescription && toggleProjectDetails(index)}
                >
                  {project.title} {project.detailedDescription && <span className="text-sm text-primary">(click for details)</span>}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* */}
                {expandedProject === index && project.detailedDescription && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.detailedDescription}
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/**/}
      <footer className="py-4 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Ahmed Bellagoun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;