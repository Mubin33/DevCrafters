"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { team } from "@/lib/data";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevCrafters</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a passionate team of developers, designers, and problem solvers dedicated to building exceptional digital products.
            </p>
          </FadeIn>
        </div>

        {/* Story & Mission */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="right">
            <div className="aspect-[4/3] bg-secondary rounded-3xl overflow-hidden flex items-center justify-center relative border border-border">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="DevCrafters Team Collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="mb-8">
              <TextReveal text="Founded in 2023, our mission is to empower businesses with cutting-edge technology and intuitive design. We believe that great software shouldn't just work—it should inspire." />
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Unlike large agencies where your project gets lost in the shuffle, we intentionally stay small. This allows us to partner deeply with our clients, moving fast and maintaining an uncompromising standard of quality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10 border-t border-border pt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-sm font-medium text-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-sm font-medium text-foreground">Client Satisfaction</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* The Team */}
        <div>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our successful projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1} direction="up">
                <div className="perspective-1000 h-full">
                  <TiltCard className="group rounded-2xl overflow-hidden bg-background border border-border h-full flex flex-col">
                    <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Desktop Interactive Slide-up Overlay */}
                      <div className="hidden lg:flex absolute inset-0 bg-black/60 backdrop-blur-sm flex-col items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-6 text-center">
                        <p className="text-white/90 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {member.bio}
                        </p>
                        <div className="flex gap-4">
                          <a href={member.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <Github className="w-5 h-5" />
                          </a>
                          <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <Twitter className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 relative bg-background z-10 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                      
                      {/* Mobile Only Bio & Socials */}
                      <div className="block lg:hidden mt-auto">
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="flex gap-4">
                          <a href={member.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                            <Github className="w-4 h-4" />
                          </a>
                          <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-16 text-center">
            <Button variant="outline" size="lg">
              Download Team Profile (PDF)
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
