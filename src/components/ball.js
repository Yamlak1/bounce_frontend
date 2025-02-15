import React from "react";

const Ball = ({ y, speed }) => {
  return (
    <div
      className="absolute w-8 h-8 bg-red-500 rounded-full"
      style={{
        left: "5%",
        transform: `translateX(-50%) rotate(${speed * 10}deg)`,
        bottom: `${y + 140}px`,
        transition: "transform 0.1s linear",
      }}
    ></div>
  );
};

export default Ball;
