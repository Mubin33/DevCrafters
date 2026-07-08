"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-20 pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* Orb 1: Primary Color */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[100px]"
      />

      {/* Orb 2: Blue Accent */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -120, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-blue-500/20 rounded-full blur-[120px]"
      />

      {/* Orb 3: Purple Accent */}
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[100px]"
      />
    </div>
  );
}
