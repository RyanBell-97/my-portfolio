import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary dark:bg-gray-900">
      {/* Header navigation with theme toggle */}
      <header className="p-4 flex justify-between items-center">
        <div>
          {/* Empty for layout balance */}
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
      
      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row">
          {/* Left section with profile photo and name */}
          <div className="w-full md:w-1/3 bg-secondary dark:bg-gray-900 p-8 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
              {/* Porfile photo */}
              <img 
                src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} 
                alt="Ahmed Bellagoun" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log("Profile image failed to load");
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('bg-gray-200', 'dark:bg-gray-700', 'flex', 'items-center', 'justify-center');
                  
                  // Create and append the initials element
                  const initialsDiv = document.createElement('div');
                  initialsDiv.className = "text-5xl font-bold text-gray-500 dark:text-gray-400";
                  initialsDiv.innerText = "AB";
                  e.target.parentNode.appendChild(initialsDiv);
                }}
              />
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-2">Ahmed Bellagoun</h1>
            <div className="w-12 h-1 bg-primary my-4"></div>
            <h2 className="text-lg text-center uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-8">COMPUTER SCIENCE STUDENT</h2>
            
            {/* Social links */}
            <div className="flex space-x-6 mt-4">
              <a href="mailto:reyanbellaggoune@gmail.com" className="text-black dark:text-white hover:text-primary dark:hover:text-primary">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://github.com/RyanBell-97" className="text-black dark:text-white hover:text-primary dark:hover:text-primary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/ahmedbellagoun/" className="text-black dark:text-white hover:text-primary dark:hover:text-primary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          {/*right sec wth intro*/}
          <div className="w-full md:w-2/3 p-8">
            <h1 className="text-6xl font-bold mb-4">Hello</h1>
            <h2 className="text-2xl mb-8">Here's who I am & what I do</h2>
            
            {/*buttons*/}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                to="/resume" 
                className="px-8 py-3 bg-primary text-white rounded hover:bg-blue-700 transition-colors uppercase font-medium"
              >
                RESUME
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-3 border-2 border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors uppercase font-medium dark:text-white"
              >
                PROJECTS
              </Link>
            </div>
            
            {/*intro*/}
            <p className="mb-4">
              Motivated Computer Science student at Friedrich Schiller University Jena with an international academic background and hands-on experience in software projects.
            </p>
            
            <p className="mb-4">
              Curious, adaptable and eager to master new technologies, I thrive on learning from experienced colleagues, mentors and challenging real-world projects.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-4 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Ahmed Bellagoun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;