"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

import { Magnetic } from "@/components/ui/Magnetic";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
      ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 py-2",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <Magnetic strength={20}>
        <motion.button
          ref={ref}
          whileTap={{ scale: 0.95 }}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center">{children as React.ReactNode}</span>
        </motion.button>
      </Magnetic>
    );
  }
);

Button.displayName = "Button";
