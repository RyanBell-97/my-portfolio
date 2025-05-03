// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './index.css';

/**
 *  Router gets a basename equal to "/my-portfolio" at runtime
 *  because CRA injects process.env.PUBLIC_URL from the "homepage"
 *  field in package.json.  This lets paths like "/resume" match
 *  correctly when the app is hosted at /my-portfolio/.
 */
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-secondary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
