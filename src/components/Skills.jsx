import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Professional skillset</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {skills.professional.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 bg-primary mr-2"></div>
            <span>{skill}</span>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.languages.map((lang, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 bg-primary mr-2"></div>
            <span>{lang.language} ({lang.level})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;