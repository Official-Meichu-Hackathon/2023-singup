'use client'
import React, { useState } from 'react';

const TransformComponent = ({ imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative overflow-hidden w-64 h-64 border border-gray-300 rounded shadow-md transition-transform duration-300"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={imageSrc} alt="Transforming" className="w-full h-full object-cover" />
      <div
        className={`${
          isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
        } transition-transform duration-300 absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-center`}
      >
        {description}
      </div>
    </div>
  );
};

export default TransformComponent;