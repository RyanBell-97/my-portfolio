import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import Education from './Education';
import ThemeToggle from './ThemeToggle';

const Resume = () => {
  
  const [showDropdown, setShowDropdown] = useState(false);
  
  
  const experienceData = [
    {
      period: "March 2025 - Present",
      position: "Student Project Developer",
      company: "Friedrich Schiller University Jena",
      location: "Jena, Germany",
      description: "SFK Tutoring App: Building a multi-tenant web and mobile application that matches volunteer tutors with underprivileged pupils. Using Ionic, Angular, Docker, Node.js with CakePHP and Swagger. Designed role & permission model and set up GitLab CI/CD in an agile 4-person team."
    },
    {
      period: "March 2024 - July 2024",
      position: "Student Project Developer",
      company: "Friedrich Schiller University Jena",
      location: "Jena, Germany",
      description: "Ticket System - Integrative Project Management 2.0: Developed a web-based ticket system in a team of four using Vue.js & TypeScript. Implemented roles, ticket states, and comments. Used GitLab for CI/CD, issues, and reviews."
    },
    {
      period: "2023",
      position: "Developer",
      company: "Personal Project",
      location: "Jena, Germany",
      description: "EmailApp_Mile - Java Desktop Email Client: Developed using JavaMail API and Swing, implemented secure SMTP/POP3 with configurable login, and open-sourced the project."
    },
    {
      period: "2022",
      position: "Developer",
      company: "Personal Project",
      location: "Jena, Germany",
      description: "Mill Game - Java Desktop App: Implemented \"Nine Men's Morris\" with Java & Swing, created full game logic and GUI."
    }
  ];
  
  
  const educationData = [
    {
      period: "2020 - Present",
      institution: "FRIEDRICH SCHILLER UNIVERSITY JENA",
      degree: "B.Sc. Computer Science",
      location: "Jena, Germany",
      description: "Focusing on software development and computer science fundamentals."
    },
    {
      period: "2019 - 2020",
      institution: "FRIEDRICH SCHILLER UNIVERSITY JENA",
      degree: "DSH Language Course (German B2/C1)",
      location: "Jena, Germany",
      description: "Intensive German language program."
    },
    {
      period: "2018 - 2019",
      institution: "UNIVERSITY OF BATNA 2",
      degree: "Master (2 semesters) - Industrial Risk Control",
      location: "Batna, Algeria",
      description: "Advanced studies in Industrial Risk Control."
    },
    {
      period: "2015 - 2018",
      institution: "UNIVERSITY OF BATNA 2",
      degree: "B.Sc. Health, Safety & Environment",
      location: "Batna, Algeria",
      description: "Comprehensive study of health, safety, and environmental principles and practices."
    }
  ];
  
  
  const skillsData = {
    professional: [
      "Java Development",
      "Web Development",
      "Software Architecture",
      "Backend Development",
      "Frontend Development",
      "Project Management",
      "CI/CD Pipelines",
      "Version Control"
    ],
    languages: [
      { language: "German", level: "C1" },
      { language: "English", level: "C1" },
      { language: "French", level: "Native" },
      { language: "Arabic", level: "Native" }
    ],
    technical: [
      "Programming: C, C++, Java, JavaScript",
      "Frameworks: Angular, Ionic, .NET MAUI, CakePHP",
      "Web: HTML, CSS, REST APIs",
      "Databases: MySQL, SQLite",
      "Version Control & CI/CD: Git, GitLab, Docker",
      "IDEs & Editors: Visual Studio, VS Code"
    ]
  };

  
  const handleClickOutside = (e) => {
    if (showDropdown) setShowDropdown(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary dark:bg-gray-900" onClick={handleClickOutside}>
      {/* header nav wth togle */}
      <header className="p-4 flex justify-between items-center">
        <div>
          {/* epty layout blance */}
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
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="w-6 h-6 bg-primary inline-block mr-2"></span>
            Resume
          </h1>
          
          {/* CV drpdown */}
          <div className="relative">
            <button 
              className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
            >
              DOWNLOAD CV
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                <ul>
                  <li>
                    <a 
                      href={`${process.env.PUBLIC_URL}/Ahmed_Bellagoun_EN_CV.pdf`}
                      download 
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      English Version
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`${process.env.PUBLIC_URL}/Ahmed_Bellagoun_DE_CV.pdf`} 
                      download 
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      German Version
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Exp Sec */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          {experienceData.map((job, index) => (
            <Experience 
              key={index}
              period={job.period}
              position={job.position}
              company={job.company}
              location={job.location}
              description={job.description}
            />
          ))}
        </div>
        
        {/*Edc Sec */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          {educationData.map((edu, index) => (
            <Education 
              key={index}
              period={edu.period}
              institution={edu.institution}
              degree={edu.degree}
              location={edu.location}
              description={edu.description}
            />
          ))}
        </div>
        
        {/*SKL SEC */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Professional skillset</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {skillsData.professional.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-primary mr-2"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {skillsData.languages.map((lang, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-primary mr-2"></div>
                <span>{lang.language} ({lang.level})</span>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            {skillsData.technical.map((skill, index) => (
              <div key={index} className="flex items-start">
                <div className="w-4 h-4 bg-primary mr-2 mt-1"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/*Footer */}
      <footer className="py-4 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Ahmed Bellagoun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;