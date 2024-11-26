import React from 'react'
import { technologies } from '../constants';

const TechnologyIcons = () => {
  return (
    <div className="mx-5 relative w-40 h-40">
    {technologies.map((tech, index) => (
      <div
        key={index}
        className="absolute top-0 left-0 flex justify-center items-center"
        style={{
          zIndex: technologies.length - index, // Ensures the last icon is on top
          transform: `translate(${index * -10}px, ${index * -10}px)`, // Creates the overlapping effect
        }}
      >
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex justify-center items-center overflow-hidden">
          <img src={tech.icon} alt={`Technology Icon ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      </div>
    ))}
  </div>
  );
};

export default TechnologyIcons;