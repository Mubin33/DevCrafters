"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { team } from "@/lib/data";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

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
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023, our mission is to empower businesses with cutting-edge technology and intuitive design. We believe that great software shouldn&apos;t just work—it should inspire.
              </p>
              <p>
                Unlike large agencies where your project gets lost in the shuffle, we intentionally stay small. This allows us to partner deeply with our clients, moving fast and maintaining an uncompromising standard of quality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10 border-t border-border pt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-medium text-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
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
                <div className="group rounded-2xl overflow-hidden bg-background border border-border">
                  <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    {/* <div className="flex gap-4">
                      <a href={member.socials.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div> */}
                  </div>
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
