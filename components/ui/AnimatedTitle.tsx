"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
  gradientWords?: string[];
}

export function AnimatedTitle({ text, className = "", delay = 0, gradientWords = [] }: AnimatedTitleProps) {
  // Split text by lines (using <br/> equivalent) or just characters
  // For a title, splitting by words is safer.
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => {
        const isGradient = gradientWords.includes(word.replace(/[^a-zA-Z0-9]/g, ''));
        return (
          <motion.span 
            variants={child} 
            style={{ marginRight: "0.25em" }} 
            key={index}
            className={isGradient ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500" : ""}
          >
            {word === "<br/>" ? <div className="w-full h-0" /> : word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
