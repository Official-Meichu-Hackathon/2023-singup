'use client'
import React, { useState } from 'react';

const Team_intro = ({ imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative overflow-hidden w-64 h-64 border border-gray-300 rounded shadow-md"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
        <div className = 'w-auto h-auto relative'>
            <img
                src={imageSrc}
                alt="Transforming"
                className={`w-auto h-auto object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-0' : 'opacity-100'
                }`}
            />
            {isHovered && (
            <div className = 'absolute w-full h-full  top-0  bg-gray-200  bg-opacity-80 transition-opacity duration-500'>
                <h3>黑客組</h3>
            </div>
        )}
            
        </div>
        {/* {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-80 text-white text-center transition-opacity duration-500">
            {description}
            </div>
        )} */}
    </div>
  );
};

export default Team_intro;