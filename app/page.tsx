"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { TestimonialMarquee } from "@/components/ui/TestimonialMarquee";
import { services, technologies, reasons, projects } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion"; 

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
        <AnimatedBackground />
        
        <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ opacity: opacityText }}>
          <FadeIn direction="up" className="max-w-4xl mx-auto text-center">
            <AnimatedTitle 
              text="Crafting Digital <br/> Experiences that Matter"
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
              gradientWords={["Experiences", "that", "Matter"]}
            />
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We are an independent team of developers and designers building modern, scalable, and beautiful software solutions for forward-thinking brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="w-full sm:w-auto relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  <span className="group-hover:text-primary transition-colors">Start a Project</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software development services tailored to your specific needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.1} direction="up">
                  <div className="relative p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  As a boutique development agency, we offer the technical expertise of a large corporation with the agility, personal touch, and dedication of an in-house team.
                </p>
                <div className="space-y-6">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{reason.title}</h4>
                          <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                    alt="Team Brainstorming"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Satisfaction</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our partners say about working with us.
              </p>
            </div>
          </FadeIn>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y border-border bg-background overflow-hidden">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-2xl font-semibold opacity-90">Powered by Modern Technologies</h2>
          </FadeIn>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex space-x-4 md:space-x-8 px-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {/* Double the array for seamless looping */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="inline-flex px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 font-medium text-sm md:text-base hover:bg-primary-foreground/20 transition-colors"
              >
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                <p className="text-muted-foreground max-w-xl">
                  A selection of our recent projects showcasing our technical capabilities and design approach.
                </p>
              </div>
              <Link href="/portfolio" className="hidden md:inline-flex items-center text-primary font-medium hover:underline">
                View All Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-background border border-border">
                  <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-secondary rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" className="w-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something amazing?</h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss your idea and see how our team can help bring it to life with modern technology and elegant design.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Start the Conversation
                </Button>
              </Link>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
