"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Auto-play canvas animation for the hero section
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= 24; i++) {
      const img = new window.Image();
      img.src = `/jayant-frames/ezgif-frame-${i.toString().padStart(3, "0")}.png`;
      img.onload = () => {
        loadedCount++;
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            canvasRef.current.width = img.width;
            canvasRef.current.height = img.height;
            ctx.drawImage(img, 0, 0);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    let frame = 0;
    let animationId: number;

    const render = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        const img = images[Math.floor(frame) % 24];
        if (img && img.complete) {
          canvasRef.current.width = img.width;
          canvasRef.current.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      }
      frame += 0.5; // Adjust speed
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [images]);

  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-theme-bg">
        <div className="bg-noise absolute inset-0 mix-blend-overlay"></div>
        <div
          className="absolute top-0 left-0 w-[40vw] h-[60vh] bg-theme-amber/15 rounded-full blur-[80px] mix-blend-screen will-change-transform"
          style={{ transform: "translateZ(0px)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[50vw] h-[70vh] bg-theme-indigo/15 rounded-full blur-[90px] mix-blend-screen will-change-transform"
          style={{ transform: "translateZ(0px)" }}
        ></div>
      </div>

      <main className="bg-transparent min-h-screen relative" ref={containerRef}>
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          ></canvas>
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/60 via-[#121212]/40 to-[#121212] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent,rgba(18,18,18,0.8))] pointer-events-none"></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-sm tracking-[0.3em] uppercase text-theme-indigo/70 mb-8"
            >
              Professional Journey
            </motion.p>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-sans text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
              >
                <span>Work </span>
                <span>&amp; </span>
                <span>
                  <span className="bg-gradient-to-r from-theme-amber to-theme-indigo bg-clip-text text-transparent">
                    Experience
                  </span>
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              A timeline of my professional journey and the systems I've built.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-24 h-[2px] bg-gradient-to-r from-theme-amber to-theme-indigo mx-auto mt-10 origin-center"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Scroll
            </span>
            <div className="w-[22px] h-[36px] border border-white/40 rounded-full flex justify-center p-1 relative drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-white/80 rounded-full absolute top-2"
              ></motion.div>
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-6 md:px-24 bg-transparent max-w-7xl mx-auto relative overflow-hidden">
          <div className="fixed-bg pointer-events-none absolute -inset-x-[50vw] inset-y-0 overflow-hidden">
            <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-theme-indigo/[0.12] blur-[80px] will-change-transform"></div>
            <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-theme-amber/[0.10] blur-[70px] will-change-transform"></div>
            <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-purple-500/[0.08] blur-[60px] will-change-transform"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.10),transparent_70%)]"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#121212] to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h3 className="font-mono text-sm font-bold tracking-widest text-theme-amber uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                Career Timeline
              </h3>
            </motion.div>

            <div className="relative pl-8 md:pl-0 mb-24">
              <div className="absolute left-[7px] md:left-[3px] top-0 bottom-0 w-[2px] bg-white/10"></div>
              <motion.div
                className="absolute left-[7px] md:left-[3px] top-0 w-[2px] bg-gradient-to-b from-theme-amber to-theme-indigo shadow-[0_0_15px_rgba(99,102,241,0.6)] origin-top z-10"
                style={{ height: lineHeight }}
              ></motion.div>

              <div className="flex flex-col gap-16">
                {/* Timeline Item 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative pl-8 md:pl-16 group"
                >
                  <div className="absolute left-[-21px] md:left-[-25px] top-1.5 w-4 h-4 rounded-full bg-theme-bg border-[3px] border-white/20 z-20 transition-all duration-500 group-hover:border-theme-indigo group-hover:bg-theme-indigo/80 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="font-sans text-2xl md:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-theme-indigo">
                        Cozeva (Applied Research Works Pvt. Ltd.)
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                          Hybrid
                        </span>
                        <span className="font-mono text-xs text-gray-500">
                          Kolkata, India
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="relative pl-6 border-l-2 transition-all duration-300 border-theme-indigo/60">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                          <h4 className="font-sans text-lg md:text-xl font-semibold text-white">
                            Software Development Engineer II
                          </h4>
                          <span className="font-mono text-[10px] px-2.5 py-0.5 bg-theme-indigo/15 border border-theme-indigo/30 rounded-full text-theme-indigo font-bold uppercase tracking-widest w-fit">
                            Current
                          </span>
                        </div>
                        <p className="font-mono text-sm text-gray-400 mt-1">
                          February 2026 — Present
                        </p>
                      </div>
                      <div className="relative pl-6 border-l-2 transition-all duration-300 border-white/10 hover:border-white/20">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                          <h4 className="font-sans text-lg md:text-xl font-semibold text-white">
                            Software Development Engineer I
                          </h4>
                        </div>
                        <p className="font-mono text-sm text-gray-400 mt-1">
                          April 2025 — January 2026
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "OpenAI"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-3 py-1 bg-black/40 border border-white/10 rounded-full text-gray-400 hover:text-theme-indigo hover:border-theme-indigo/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Item 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative pl-8 md:pl-16 group"
                >
                  <div className="absolute left-[-21px] md:left-[-25px] top-1.5 w-4 h-4 rounded-full bg-theme-bg border-[3px] border-white/20 z-20 transition-all duration-500 group-hover:border-theme-indigo group-hover:bg-theme-indigo/80 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="font-sans text-2xl md:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-theme-indigo">
                        Altor Smart Mobility (Praesus Technologies Pvt. Ltd.)
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                          Hybrid
                        </span>
                        <span className="font-mono text-xs text-gray-500">
                          Kolkata, India
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="relative pl-6 border-l-2 transition-all duration-300 border-white/10 hover:border-white/20">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                          <h4 className="font-sans text-lg md:text-xl font-semibold text-white">
                            Software Engineer - Associate
                          </h4>
                        </div>
                        <p className="font-mono text-sm text-gray-400 mt-1">
                          September 2024 — April 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["TypeScript", "React.js", "Next.js", "Zustand", "TanStack Query", "Firebase", "Tailwind CSS", "PostgreSQL", "Socket.io", "Google Maps", "Node.js", "Express.js"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-3 py-1 bg-black/40 border border-white/10 rounded-full text-gray-400 hover:text-theme-indigo hover:border-theme-indigo/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Item 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative pl-8 md:pl-16 group"
                >
                  <div className="absolute left-[-21px] md:left-[-25px] top-1.5 w-4 h-4 rounded-full bg-theme-bg border-[3px] border-white/20 z-20 transition-all duration-500 group-hover:border-theme-indigo group-hover:bg-theme-indigo/80 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="font-sans text-2xl md:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-theme-indigo">
                        Aeonix Research and Innovations LLP
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                          Onsite
                        </span>
                        <span className="font-mono text-xs text-gray-500">
                          Kolkata, India
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="relative pl-6 border-l-2 transition-all duration-300 border-white/10 hover:border-white/20">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                          <h4 className="font-sans text-lg md:text-xl font-semibold text-white">
                            MERN Stack Development Intern
                          </h4>
                        </div>
                        <p className="font-mono text-sm text-gray-400 mt-1">
                          August 2023 — February 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["TypeScript", "React.js", "Material UI", "Firebase", "Chart.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-3 py-1 bg-black/40 border border-white/10 rounded-full text-gray-400 hover:text-theme-indigo hover:border-theme-indigo/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Selected Works Section */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-3xl opacity-0 hover-parent-glow transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.06), transparent 60%)",
                }}
              ></div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12"
              >
                <div>
                  <h3 className="font-mono text-sm font-bold tracking-widest text-theme-amber uppercase mb-3 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    Selected Works
                  </h3>
                  <p className="font-mono text-gray-500 text-sm max-w-lg leading-relaxed">
                    A curated showcase of systems, tools, and features — designed and
                    shipped.
                  </p>
                </div>
                <div className="font-mono text-6xl md:text-8xl font-black text-white/[0.03] select-none leading-none mt-4 md:mt-0">
                  17
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex gap-2 mb-10 overflow-x-auto scrollbar-none pb-2"
              >
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-theme-indigo/15 border-theme-indigo/50 text-theme-indigo shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                  All
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-theme-indigo/25 text-theme-indigo">
                    17
                  </span>
                </button>
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                  Browser Extension
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">
                    1
                  </span>
                </button>
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                  Developer Tooling
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">
                    2
                  </span>
                </button>
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                  System Design
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">
                    1
                  </span>
                </button>
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                  AI / Agentic
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">
                    3
                  </span>
                </button>
                <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                  Backend
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">
                    2
                  </span>
                </button>
              </motion.div>

              {/* Works Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    num: "01",
                    cat: "Browser Extension",
                    title: "EHR Data Extraction Engine",
                    desc: "Enhanced a browser extension Rule Engine for extracting patient demographics from EHR systems by adding patient list page support, enabling scalable DOM-based data extraction.",
                    tags: ["JavaScript", "DOM", "Browser Extension"],
                  },
                  {
                    num: "02",
                    cat: "Developer Tooling",
                    title: "Automated DOM Trainer",
                    desc: "Building an automated tool for a browser extension that generates extraction rules via XPath from user-selected fields (name, DOB, gender), drastically reducing manual configuration effort.",
                    tags: ["XPath", "Automation", "JavaScript"],
                  },
                  {
                    num: "03",
                    cat: "System Design",
                    title: "EHR-Driven Architecture Migration",
                    desc: "Redesigned a browser overlay by migrating from static URL matching to a scalable EHR-driven architecture, significantly improving patient record retrieval reliability.",
                    tags: ["Architecture", "React.js", "Scalability"],
                  },
                  {
                    num: "04",
                    cat: "AI / Agentic",
                    title: "Clinical Validation Agent",
                    desc: "Built a Clinical Validation Agent to compare patient histories across flat files and XML, using a pipeline to convert data into TOON format and process via OpenAI Batch API.",
                    tags: ["OpenAI", "Node.js", "Data Pipeline"],
                  },
                  {
                    num: "05",
                    cat: "AI / Agentic",
                    title: "Agentic Tool Integration",
                    desc: "Integrated function calling to enable AI agents to perform complex data manipulation directly within the EHR overlay context.",
                    tags: ["LLM Agents", "TypeScript", "LangChain"],
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative rounded-2xl bg-[#1a1a1f] border border-white/[0.07] p-7 flex flex-col gap-4 overflow-hidden hover:bg-[#1e1e24] hover:border-white/15 transition-all duration-500 cursor-pointer"
                  >
                    <span className="absolute -right-2 -top-4 font-sans text-7xl font-black text-white/[0.03] select-none leading-none group-hover:text-white/[0.06] transition-all duration-500">
                      {item.num}
                    </span>
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-theme-indigo/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="font-mono text-[10px] px-3 py-1.5 bg-theme-indigo/[0.08] border border-theme-indigo/15 rounded-full text-theme-indigo/60 uppercase tracking-wider font-bold group-hover:bg-theme-indigo/15 group-hover:text-theme-indigo/90 group-hover:border-theme-indigo/30 transition-all duration-300">
                        {item.cat}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-white/50">
                          <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-sans text-lg font-bold text-white/90 group-hover:text-white transition-colors relative z-10 leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-mono text-[13px] text-gray-500 leading-relaxed relative z-10 group-hover:text-gray-400 transition-colors line-clamp-3">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 relative z-10">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] px-2.5 py-1 bg-white/[0.03] border border-white/[0.07] rounded-full text-gray-600 group-hover:text-gray-400 group-hover:border-white/10 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
