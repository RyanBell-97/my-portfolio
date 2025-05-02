import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div>
        {/*logo to put on later*/}
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
  );
};

export default Header;