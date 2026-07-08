"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "DevCrafters completely transformed our digital presence. Their attention to detail and technical expertise is unmatched. They delivered a highly scalable product that exceeded all our expectations.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "TechNova Solutions",
  },
  {
    id: 2,
    content: "The level of professionalism and the speed of delivery was incredible. They truly act as an extension of your own team. Highly recommended for any complex web applications.",
    author: "David Chen",
    role: "Founder",
    company: "GrowthX",
  },
  {
    id: 3,
    content: "Working with DevCrafters was a seamless experience. They took our vague requirements and built a stunning, user-friendly platform that our customers absolutely love.",
    author: "Elena Rodriguez",
    role: "Product Manager",
    company: "Lumina Retail",
  },
  {
    id: 4,
    content: "From the initial consultation to the final deployment, they demonstrated deep technical knowledge and a true commitment to quality. The best agency we've ever partnered with.",
    author: "Michael Chang",
    role: "Director of Engineering",
    company: "FinServe Global",
  },
];

export function TestimonialMarquee() {
  return (
    <div className="relative flex overflow-x-hidden group py-10 w-full bg-secondary/10">
      {/* Left/Right Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex space-x-6 md:space-x-8 px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
        // Pause on hover
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* Double the array for seamless looping */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="w-[300px] md:w-[450px] shrink-0 p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* 5-Star Rating */}
            <div className="flex gap-1 mb-4 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Star className="w-5 h-5 fill-current" />
                </motion.div>
              ))}
            </div>
            
            <p className="text-foreground/90 text-lg mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>
            
            <div>
              <div className="font-bold text-foreground">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}, <span className="text-primary">{testimonial.company}</span></div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
