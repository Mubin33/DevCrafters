"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Workflow</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A transparent, agile, and collaborative approach to ensure your project is delivered on time, within budget, and beyond expectations.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative z-10">
                  <FadeIn direction={isEven ? "right" : "left"}>
                    <div className={`flex flex-col sm:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
                      {/* Empty space for alternating layout on desktop */}
                      <div className="hidden md:block w-1/2"></div>
                      
                      {/* Number circle */}
                      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-background rounded-full border-4 border-primary flex items-center justify-center font-bold text-xl text-primary shadow-lg hidden sm:flex">
                        {step.id}
                      </div>

                      {/* Content card */}
                      <div className={`w-full sm:w-[calc(100%-5rem)] md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                        <div className="bg-secondary/30 border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors">
                          <div className="sm:hidden text-primary font-bold text-xl mb-2">{step.id}</div>
                          <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start the journey?</h2>
          <Link href="/contact">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
