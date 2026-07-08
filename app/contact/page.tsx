"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { siteInfo } from "@/lib/data";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-border h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href={`mailto:${siteInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <div className="flex flex-col">
                      {siteInfo.phone.split(",").map((p) => (
                        <a key={p} href={`tel:${p.trim()}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {p.trim()}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {siteInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      {siteInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={siteInfo.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-background border border-border rounded-xl hover:text-primary hover:border-primary/50 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={siteInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-background border border-border rounded-xl hover:text-primary hover:border-primary/50 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={siteInfo.socials.twitter} target="_blank" rel="noreferrer" className="p-3 bg-background border border-border rounded-xl hover:text-primary hover:border-primary/50 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service Needed</label>
                  <select 
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">Web Application</option>
                    <option value="custom">Custom Software</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and budget..."
                  ></textarea>
                </div>
                
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
