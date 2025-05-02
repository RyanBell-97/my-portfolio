import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;