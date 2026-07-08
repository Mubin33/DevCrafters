"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide end-to-end software development services to help you build, launch, and scale your digital products.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.title}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 w-full">
                  <FadeIn direction={isEven ? "left" : "right"}>
                    <div className="aspect-[4/3] bg-secondary/50 rounded-3xl overflow-hidden flex items-center justify-center relative border border-border group">
                       <img 
                         src={service.image} 
                         alt={service.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-primary/10"></div>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <FadeIn direction={isEven ? "right" : "left"}>
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description} We use modern frameworks, robust architectures, and best practices to ensure your project is built to last. Our team works closely with you to understand your specific needs and deliver a solution that exceeds your expectations.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Tailored Strategy", "Modern Technologies", "Scalable Architecture", "Continuous Support"].map((feature) => (
                        <li key={feature} className="flex items-center text-foreground font-medium">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

        <FadeIn className="mt-32 text-center bg-secondary/30 rounded-3xl p-12 md:p-20 border border-border">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t see what you need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We love tackling new challenges. Reach out to us with your unique requirements, and let&apos;s see how we can help.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
