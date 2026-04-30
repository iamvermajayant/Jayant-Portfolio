"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const COMMUNITY_EVENTS = [
  {
    num: "01",
    tag: "Lead",
    tagColor: "yellow",
    title: "Google Developer Student Clubs Lead",
    desc: "Led the GDSC chapter, fostered a highly active developer community, and organized major technical workshops and events.",
    image: "https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803198/portfolio/community/google_developer_student_clubs_lead/1.jpg"
  },
  {
    num: "02",
    tag: "Speaker",
    tagColor: "indigo",
    title: "Speaker at Devfest Durgapur 2024",
    desc: "Topic: Cache me if you can.",
    image: "https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803228/portfolio/community/speaker_at_devfest_durgapur_2024/1.jpg"
  },
  {
    num: "03",
    tag: "Mentor & Judge",
    tagColor: "cyan",
    title: "Mentor at SIH Finals 2024",
    desc: "Mentored teams at the Smart India Hackathon Finals in Chennai (KCG College of Technology).",
    image: "https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803251/portfolio/community/mentor_at_sih_finals_2024/1.jpg"
  },
  {
    num: "04",
    tag: "Mentor & Judge",
    tagColor: "cyan",
    title: "Mentor/Judge at StatusCode2",
    desc: "36-hour hackathon with 100+ teams at IISER Kolkata.",
    image: "https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803305/portfolio/community/mentor_judge_at_statuscode2/1.jpg"
  },
  {
    num: "05",
    tag: "Mentor & Judge",
    tagColor: "cyan",
    title: "Judge at Hacktropica 2026",
    desc: "36-hour hackathon with 65+ teams at Asansol Engineering College.",
    image: "https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803349/portfolio/community/judge_at_hacktropica_2026/1.jpg"
  }
];

export default function CommunityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

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
              className="font-mono text-sm tracking-[0.3em] uppercase text-theme-amber/70 mb-8"
            >
              Community &amp; Speaking
            </motion.p>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-sans text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
              >
                Building{" "}
                <span className="bg-gradient-to-r from-theme-amber to-theme-indigo bg-clip-text text-transparent">
                  Together
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Talks, hackathons, mentoring, and the incredible communities that shaped
              my journey.
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

        {/* Events Section */}
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden">
          <div className="pointer-events-none absolute -inset-x-[50vw] inset-y-0 overflow-hidden">
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-theme-amber/[0.10] blur-[80px] will-change-transform"></div>
            <div className="absolute top-[55%] right-[15%] w-[350px] h-[350px] rounded-full bg-theme-indigo/[0.08] blur-[70px] will-change-transform"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#121212] to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
            >
              {[
                { num: "21+", label: "Events" },
                { num: "6", label: "Talks & Workshops" },
                { num: "14+", label: "Hackathons" },
                { num: "6+", label: "Cities" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl bg-[#1a1a1f] border border-white/[0.07] p-6 text-center">
                  <p className="font-sans text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.num}
                  </p>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-2 mb-12 overflow-x-auto scrollbar-none pb-2"
            >
              <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/10 border-white/20 text-white">
                All<span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/10 text-white">21</span>
              </button>
              <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                Lead<span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">1</span>
              </button>
              <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                Speaker<span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">6</span>
              </button>
              <button className="font-mono text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 bg-white/[0.03] border-white/10 text-gray-500 hover:bg-white/[0.06] hover:text-gray-300 hover:border-white/20">
                Mentor & Judge<span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-white/5 text-gray-600">14</span>
              </button>
            </motion.div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMUNITY_EVENTS.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-2xl bg-[#1a1a1f] border border-white/[0.07] overflow-hidden hover:border-white/15 transition-all duration-500"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-[#15151a]">
                    <div className="relative w-full h-full group/carousel flex items-center justify-center bg-[#15151a]">
                      <Image
                        alt={item.title}
                        src={item.image}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1f] via-transparent to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`font-mono text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider font-bold border ${item.tagColor === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' : item.tagColor === 'indigo' ? 'bg-theme-indigo/10 border-theme-indigo/20 text-theme-indigo' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <span className="absolute right-3 bottom-2 font-sans text-6xl font-black text-white/[0.03] select-none leading-none group-hover:text-white/[0.06] transition-all duration-500">
                      {item.num}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-white/90 group-hover:text-white transition-colors leading-snug relative z-10">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[13px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors relative z-10">
                      {item.desc}
                    </p>
                  </div>
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 via-${item.tagColor === 'yellow' ? 'yellow-500/50' : item.tagColor === 'indigo' ? 'theme-indigo/50' : 'cyan-500/50'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
