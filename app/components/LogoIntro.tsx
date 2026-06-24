"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    // Logo drawing takes 2.5s, then we hold for 0.5s before completing transition
    const timer = setTimeout(() => {
      setIsDrawing(false);
      const transitionTimer = setTimeout(() => {
        onComplete();
      }, 800); // time to scale/fade out
      return () => clearTimeout(transitionTimer);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full relative z-20">
      <motion.div
        animate={
          isDrawing
            ? { scale: 1, opacity: 1 }
            : { 
                scale: [1, 1.1, 0.4], 
                opacity: [1, 1, 0], 
                y: [0, 0, -100] 
              }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <svg
          width="480"
          height="480"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_0_35px_rgba(222,96,66,0.3)]"
        >
          <defs>
            {/* Logo Gradient */}
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#de6042" />   {/* Orange-Red */}
              <stop offset="50%" stopColor="#7a3a8f" />  {/* Purple */}
              <stop offset="100%" stopColor="#e11d48" /> {/* Magenta */}
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Abstract Circuit "AI" Path - Outer Flow */}
          <motion.path
            d="M 30,140 L 30,50 L 100,20 L 170,50 L 170,140 M 100,20 L 100,70"
            stroke="url(#logoGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />

          {/* Abstract "AI" - Inner Circuit Connections */}
          <motion.path
            d="M 50,130 L 50,80 L 100,55 L 150,80 L 150,130"
            stroke="url(#logoGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Central Portal Gate (Triangular doorway suggesting new possibilities) */}
          <motion.polygon
            points="100,75 70,130 130,130"
            stroke="#f59e0b" /* Golden Accent */
            strokeWidth="4"
            fill="rgba(245, 158, 11, 0.05)"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Glowing circuit nodes / connector dots */}
          <motion.circle
            cx="30"
            cy="50"
            r="5"
            fill="#f59e0b"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.circle
            cx="170"
            cy="50"
            r="5"
            fill="#f59e0b"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.circle
            cx="100"
            cy="75"
            r="4"
            fill="#de6042"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.circle
            cx="70"
            cy="130"
            r="4.5"
            fill="#e11d48"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
          <motion.circle
            cx="130"
            cy="130"
            r="4.5"
            fill="#e11d48"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </svg>

        {/* Dynamic loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <h2 className="text-xl font-light tracking-[0.25em] uppercase text-white">
            AI Brand Exhibit
          </h2>
          <p className="text-xs font-light tracking-[0.15em] text-zinc-500 mt-2">
            Loading Brand Experience
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
