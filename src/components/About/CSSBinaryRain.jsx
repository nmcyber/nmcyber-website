import React, { useState, useEffect } from 'react';

const BinaryColumn = ({ columnIndex }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const columnHeight = Math.floor(Math.random() * 10) + 15; // Random height between 15 and 25
    const newCharacters = Array.from({ length: columnHeight }, () => Math.random() > 0.5 ? '1' : '0');
    setCharacters(newCharacters);
  }, []);

  return (
    <div 
      className="binary-column absolute top-0 text-[#64cdf6] text-opacity-20 text-xs sm:text-sm md:text-base"
      style={{
        left: `${columnIndex * 2}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    >
      {characters.map((char, index) => (
        <div 
          key={index} 
          className="binary-char"
          style={{
            opacity: 1 - (index / characters.length),
            animationDelay: `${index * 0.1}s`
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

const CSSBinaryRain = () => {
  const columnCount = 50;

  return (
    <div className="css-binary-rain relative w-3/5 aspect-square hh-3/5 rounded-full overflow-hidden">
      {Array.from({ length: columnCount }).map((_, index) => (
        <BinaryColumn key={index} columnIndex={index} />
      ))}
    </div>
  );
};

export default CSSBinaryRain;