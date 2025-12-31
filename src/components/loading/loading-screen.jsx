import React from "react";

const LoadingScreen = () => {
  const letters = [
    "I", "C", "O", "N", "S", "T", "E", "C", "H", "N", "O", "L", "O", "G", "I", "E", "S"
  ];

  const blockWidth = 30; // in px
  const gap = 10;         // in px

  return (
    <div className="flex items-center justify-center h-screen bg-[#001A2F] px-4">
      <div
        className="relative"
        style={{
          width: `${letters.length * (blockWidth + gap)}px`,
          maxWidth: "100%",
          height: '80px',
        }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            className="absolute top-0 w-[30px] h-[80px] bg-[#566674] text-white font-semibold text-base md:text-lg flex items-center justify-center rounded origin-bottom animate-move"
            style={{
              animationDelay: `-${(i + 1) * 0.1}s`,
              left: `${i * (blockWidth + gap)}px`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
