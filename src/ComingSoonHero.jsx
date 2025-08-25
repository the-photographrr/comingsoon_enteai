import React, { useState } from "react";

export default function ComingSoonHero() {
  const [robotPos, setRobotPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const moveRobot = (e) => {
    let x, y;
    if (e.type === "touchstart") {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    setRobotPos({ x, y });
    // Optional: haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      onClick={moveRobot}
      onTouchStart={moveRobot}
    >
      {/* Background robot emoji */}
      <div
        className="absolute text-6xl transition-all duration-700 ease-in-out"
        style={{ left: robotPos.x - 24, top: robotPos.y - 24 }}
      >
        🤖
      </div>

      {/* Coming soon text */}
      <h1 className="text-white text-4xl sm:text-6xl font-bold animate-bounce z-10">
        Coming Soon...
      </h1>
    </div>
  );
}
