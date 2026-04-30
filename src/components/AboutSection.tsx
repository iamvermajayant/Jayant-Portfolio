"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  "ReactJS", "NextJS", "Typescript", "JavaScript", "TailwindCSS", "Redux Toolkit", 
  "Tanstack Query", "Zustand", "NodeJS", "ExpressJS", "MongoDB", "SQL", "Git", 
  "OpenAI", "Agentic AI", "MCP"
];

const QUALIFICATIONS = [
  { title: "B.Tech in Computer Science & Engineering", subtitle: "Future Institute of Engineering and Management", year: "2020 - 2024" },
  { title: "Class 12 (Computer Science)", subtitle: "Future Campus School", year: "2018 - 2020" },
  { title: "Class 10", subtitle: "B. D. M. International", year: "2018" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"arsenal" | "qualifications">("arsenal");

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative z-20 w-full bg-white/[0.02] backdrop-blur-xl pt-32 pb-24 px-8 md:px-24 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-[3rem] -mt-10 mx-auto max-w-7xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="font-sans text-sm font-bold tracking-widest text-theme-indigo mb-4 uppercase drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            About Me
          </h2>
          <h3 className="font-sans text-4xl md:text-5xl font-bold tracking-tight bg-[linear-gradient(90deg,#fed7aa_0%,#ffffff_30%,#ffffff_70%,#6366f1_100%)] bg-clip-text text-transparent mb-8 leading-snug">
            Streamer turned Software Engineer
          </h3>
          <p className="font-mono text-gray-300/80 leading-relaxed mb-10">
            A passionate coder with 2 years of experience primarily working in the MERN stack. I evolved from content creation to full-stack web development, and I bring a unique perspective to building robust, user-centric digital experiences. Always looking for opportunities to grow, share knowledge, and foster a healthy dev community.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/sanglap-mridha" target="_blank" rel="noreferrer" className="font-mono flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-theme-indigo/10 hover:border-theme-indigo/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:text-theme-indigo">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              LinkedIn
            </a>
            <a href="https://github.com/sanglap13" target="_blank" rel="noreferrer" className="font-mono flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-theme-indigo/10 hover:border-theme-indigo/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:text-theme-indigo">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
              GitHub
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/3 flex flex-col pt-2 md:pt-0"
        >
          <div className="flex gap-2 mb-8 bg-black/20 p-1.5 rounded-2xl border border-white/5 w-fit">
            <button 
              onClick={() => setActiveTab("arsenal")}
              className={`font-mono relative px-4 py-2 rounded-xl text-sm font-medium transition-colors z-10 ${activeTab === 'arsenal' ? 'text-theme-amber' : 'text-gray-400 hover:text-white/80'}`}
            >
              {activeTab === 'arsenal' && (
                <motion.div layoutId="aboutTab" className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl z-[-1] shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              )}
              Technical Arsenal
            </button>
            <button 
              onClick={() => setActiveTab("qualifications")}
              className={`font-mono relative px-4 py-2 rounded-xl text-sm font-medium transition-colors z-10 ${activeTab === 'qualifications' ? 'text-theme-amber' : 'text-gray-400 hover:text-white/80'}`}
            >
              {activeTab === 'qualifications' && (
                <motion.div layoutId="aboutTab" className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl z-[-1] shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              )}
              Qualifications
            </button>
          </div>
          
          <div className="relative min-h-[200px]">
            {activeTab === 'arsenal' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-3"
              >
                {SKILLS.map((skill) => (
                  <span key={skill} className="font-mono px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 shadow-inner shadow-white/5 rounded-xl text-xs font-medium text-gray-200 hover:text-theme-indigo hover:border-theme-indigo/50 hover:bg-theme-indigo/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4"
              >
                {QUALIFICATIONS.map((qual, idx) => (
                  <div key={idx} className="flex flex-col gap-1 p-4 bg-black/40 rounded-xl border border-white/10">
                    <h4 className="font-sans font-bold text-white text-sm">{qual.title}</h4>
                    <p className="font-mono text-gray-400 text-xs">{qual.subtitle}</p>
                    <p className="font-mono text-theme-amber text-xs mt-1">{qual.year}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
