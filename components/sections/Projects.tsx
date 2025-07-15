import React from "react";
import { ProjectCard } from "../project-card";
import { SectionHeading } from "../section-heading";
import { StaticImageData } from "next/image";
import rexAuctionImage from "@/public/rexAuction.png";
import advanceImage from "@/public/AdvanceImage.png";
import MobileCanvasImage from "@/public/MobileCanvas.png";
import pathFinderImage from "@/public/pathFinderImage.png";
import jobSparkImage from "@/public/jobSparkImage.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  demoUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "MobileCanvas - Gadget E-Commerce",
      description:
        "A responsive gadget & mobile e-commerce platform where admins manage products, orders, and users while customers can browse, wishlist, and track orders in real-time.",
      tags: [
        "Next.js",
        "Redux Toolkit",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "RTK_Query",
      ],
      image: MobileCanvasImage,
      demoUrl: "https://mobile-canvas-nextsd.vercel.app",
      repoUrl: "https://github.com/SouravDn-p/mobile-canvas-nextjs",
    },
    {
      title: "Advanced Healthcare",
      description:
        "A smart healthcare platform with role-based access (admin, doctor, patient), featuring e-prescriptions, virtual consultations, blockchain medical records, and emergency SOS support.",
      tags: ["React", "Tailwind CSS", "Firebase", "DaisyUI" , "JWT","REST_API"],
      image: advanceImage,
      demoUrl: "https://advance-healthcare-sd246.web.app",
      repoUrl:
        "https://github.com/SouravDn-p/Advance-HealthCare--Smarter-Healthcare-Better-Lives-",
    },
    {
      title: "RexAuction - Real-Time Auction",
      description:
        "A real-time auction system with live bidding, chat, and role-based dashboards. Built with WebSockets, it offers seamless participation and admin control.",
      tags: ["React", "Socket.io", "Redux", "Tailwind CSS", "Firebase"],
      image: rexAuctionImage,
      demoUrl: "https://rex-auction.web.app",
      repoUrl: "https://github.com/SouravDn-p/RexAuction",
    },
    {
      title: "PathFinder - Auth System",
      description:
        "A secure authentication system using email verification, token-based access (JWT), and MongoDB integration. Built with Next.js API routes and Nodemailer.",
      tags: ["Next.js", "MongoDB", "JWT", "Nodemailer", "Tailwind CSS"],
      image: pathFinderImage,
      demoUrl: "https://path-finder-sourav.vercel.app",

      repoUrl:
        "https://github.com/SouravDn-p/PathFinder---Smarter-Admissions-Simpler-Bookings",
    },
    {
      title: "JobSpark - AI Job Search ",
      description:
        "An AI-powered platform that fetches personalized job recommendations using OpenAI, manages job applications, and includes a task manager to keep users organized during their job hunt.",
      tags: ["React.js", "OpenAI API", "MongoDB", "JWT", "Tailwind CSS"],
      image: jobSparkImage,
      demoUrl: "https://jobspark-sourav246.web.app",
      repoUrl:
        "https://github.com/SouravDn-p/JobSpark---AI-Powered-Job-Match-Platform",
    },
  ];

  return (
    <section>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="Featured Project"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image.src}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
