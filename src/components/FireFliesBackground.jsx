"use client";
import React, { useEffect, useState } from "react";

const createZenParticle = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 10 + 6}s`, // Slightly faster animations
  size: `${Math.random() * 10 + 4}px`, // Larger particles (4-14px vs 2-8px)
  delay: `${Math.random() * 3}s`, // Shorter delays for more frequent appearance
  type: Math.floor(Math.random() * 4), // Different particle types
});

const ZenEnergyBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initializeParticles = () => {
      // Increased initial particles from 15 to 25
      const initialParticles = Array.from({ length: 25 }, createZenParticle);
      setParticles(initialParticles);
    };

    initializeParticles();

    // More frequent particle generation (800ms vs 1200ms)
    const interval = setInterval(() => {
      setParticles(current => {
        const newParticle = createZenParticle();
        // Keep more particles on screen (20 vs 14)
        return [...current.slice(-19), newParticle];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const getParticleStyle = (type) => {
    const styles = [
      "bg-gradient-to-br from-stone-300/60 to-stone-400/50", // Stone - brighter
      "bg-gradient-to-br from-green-300/50 to-emerald-400/40", // Leaf - brighter
      "bg-gradient-to-br from-blue-300/60 to-cyan-400/50", // Water - brighter
      "bg-gradient-to-br from-amber-300/50 to-yellow-300/40", // Light - brighter
    ];
    return styles[type] || styles[0];
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${getParticleStyle(particle.type)}`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: `zenFloat ${particle.animationDuration} ease-in-out ${particle.delay} infinite both`,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${parseInt(particle.size) * 0.5}px currentColor`, // Added glow effect
          }}
        />
      ))}
      
      <style jsx global>{`
        @keyframes zenFloat {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8; // Increased opacity
            transform: translateY(80vh) translateX(10px) rotate(45deg) scale(1);
          }
          30% {
            opacity: 1; // Full opacity at peak
            transform: translateY(60vh) translateX(-5px) rotate(90deg) scale(1.2); // Slightly larger scale
          }
          70% {
            opacity: 0.9; // Maintain higher opacity
            transform: translateY(30vh) translateX(8px) rotate(180deg) scale(1);
          }
          100% {
            transform: translateY(-50px) translateX(0) rotate(270deg) scale(0.9); // Less shrink at end
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ZenEnergyBackground;