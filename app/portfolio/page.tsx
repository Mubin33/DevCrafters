"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";

export default function PortfolioPage() {
  return (
    <div className="py-20 md:py-32 bg-secondary/20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of our recent work. From intuitive mobile apps to complex web platforms, see how we bring ideas to life.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <FadeIn key={project.id} direction="up" delay={0.1}>
                <div className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="w-full lg:w-3/5 perspective-1000">
                    <TiltCard>
                      <div className="group relative rounded-3xl overflow-hidden bg-background shadow-lg border border-border aspect-[16/10]">
                        <div className="absolute inset-0 bg-muted">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Desktop Overlay */}
                        <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 backdrop-blur-sm">
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <Button variant="secondary" className="gap-2">
                              <ExternalLink className="w-4 h-4" /> Live Demo
                            </Button>
                          </a>
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black gap-2">
                              <Github className="w-4 h-4" /> Source Code
                            </Button>
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                  
                  <div className="w-full lg:w-2/5">
                    <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">{project.category}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description} This project challenged us to think outside the box and deliver a seamless experience that scales effortlessly.
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Mobile Only Buttons */}
                    <div className="flex lg:hidden gap-4 mt-8">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1">
                        <Button className="w-full gap-2">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full gap-2">
                          <Github className="w-4 h-4" /> Source
                        </Button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
