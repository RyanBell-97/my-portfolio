import React from 'react';

const Experience = ({ period, position, company, location, description }) => {
  return (
    <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <h3 className="text-primary font-bold">{period}</h3>
          <p className="font-bold uppercase mt-2">{position}</p>
          <p className="text-gray-600 dark:text-gray-400">{company}</p>
          <p className="text-gray-600 dark:text-gray-400">{location}</p>
        </div>
        <div className="md:col-span-2">
          <p className="dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;