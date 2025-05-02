import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <Router>
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