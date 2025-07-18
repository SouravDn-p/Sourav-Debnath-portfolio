import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Phone,
  PhoneCall,
} from "lucide-react";
import React from "react";
import { ContactForm } from "../contact-form";
import { GlassmorphicCard } from "../glassmorphic-card";
import { SectionHeading } from "../section-heading";
import SDImage from "@/public/Sourav Debnath Photo.jpg";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />
        <div className=" items-center gap-4 mt-8">
          <div className="flex flex-col items-center justify-center z-10 relative py-2 mx-auto">
            <div className="relative w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 rounded-full overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full animate-pulse-slow" />
              <div className="absolute inset-1 bg-gray-800 rounded-full" />
              <Image
                width={400}
                height={400}
                src={SDImage || "/placeholder.svg"}
                alt="Sourav Debnath"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full filter brightness-110"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mt-2">
                Sourav Debnath
              </h3>

              <p className="text-teal-400 text-xs sm:text-sm font-medium">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Phone</div>
                  <div className="font-medium truncate">+880 1328764976</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium truncate">
                    sdsouravdebnath26@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">LinkedIn</div>
                  <div className="font-medium">
                    http://www.linkedin.com/in/souravdebnath246
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Github className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">GitHub</div>
                  <div className="font-medium">
                    https://github.com/SouravDn-p
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h4 className="text-lg font-medium mb-4">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span>
                  Available for freelance work and full-time opportunities
                </span>
              </div>
            </div>
          </GlassmorphicCard>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
