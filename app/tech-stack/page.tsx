"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { technologies } from "@/lib/data";
import { Code2, Database, Layout, Server, Cloud } from "lucide-react";

export default function TechStackPage() {
  const categories = [
    { name: "Frontend", icon: Layout },
    { name: "Backend", icon: Server },
    { name: "Database", icon: Database },
    { name: "Languages", icon: Code2 },
    { name: "DevOps", icon: Cloud },
  ];

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Tech Stack</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We leverage modern, scalable, and proven technologies to build robust software solutions that stand the test of time.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-20">
          {categories.map((category, idx) => {
            const categoryTechs = technologies.filter(t => t.category === category.name);
            if (categoryTechs.length === 0) return null;
            
            const Icon = category.icon;

            return (
              <FadeIn key={category.name} delay={idx * 0.1}>
                <div className="bg-secondary/20 border border-border rounded-3xl p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {categoryTechs.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="bg-background border border-border p-6 rounded-2xl flex items-center justify-center text-center font-medium hover:border-primary/50 transition-colors shadow-sm"
                      >
                        {tech.name}
                      </div>
                    ))}
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
