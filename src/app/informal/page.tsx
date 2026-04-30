"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const REELS = [
  {
    id: 1,
    title: "Cute Cinematics",
    views: "25K Views",
    likes: "1.5K Likes",
    video: "https://res.cloudinary.com/dh6pwbdn2/video/upload/v1/portfolio/beyondCode/reels/1.mp4",
    youtube: "https://www.youtube.com/shorts/0_aEyHILpZM",
    instagram: "https://www.instagram.com/reel/DXUQpuuTaZS"
  },
  {
    id: 2,
    title: "Dream to Reality",
    views: "42K Views",
    likes: "3.2K Likes",
    video: "https://res.cloudinary.com/dh6pwbdn2/video/upload/v1776804879/portfolio/beyondCode/reels/2.mp4",
    youtube: "https://www.youtube.com/shorts/om57HcEzXig",
    instagram: "https://www.instagram.com/reel/DV_dpu-ky8l"
  },
  {
    id: 3,
    title: "KTM Lover",
    views: "2K Views",
    likes: "150 Likes",
    video: "https://res.cloudinary.com/dh6pwbdn2/video/upload/v1776804917/portfolio/beyondCode/reels/3.mp4",
    youtube: "https://www.youtube.com/shorts/cDrn1Sui32w",
    instagram: "https://www.instagram.com/reel/DWom4iWzbu8"
  },
  {
    id: 4,
    title: "City Rides",
    views: "1.9K Views",
    likes: "88 Likes",
    video: "https://res.cloudinary.com/dh6pwbdn2/video/upload/v1776804952/portfolio/beyondCode/reels/4.mp4",
    youtube: "https://www.youtube.com/shorts/BCIKPAHxtHY",
    instagram: "https://www.instagram.com/reel/DW6qMytTYFl"
  }
];

export default function InformalPage() {
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
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          ></canvas>
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/40 to-[#121212] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent,rgba(18,18,18,0.8))] pointer-events-none"></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-theme-amber/70 mb-8 font-black"
            >
              Life Beyond the IDE · Known as <span className="text-white">myth</span>
            </motion.p>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-sans text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
              >
                Rider.{" "}
                <span className="bg-gradient-to-r from-theme-amber to-orange-500 bg-clip-text text-transparent">
                  Creator.
                </span>{" "}
                Explorer.
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Meet{" "}
              <span className="text-white font-bold underline decoration-theme-amber/40 underline-offset-4">
                myth_op_gg
              </span>
              . When I&apos;m not pushing production code, I&apos;m rolling the throttle.
              Discover my journey through vlogs, travel, and adventure.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-24 h-[2px] bg-gradient-to-r from-theme-amber to-orange-500 mx-auto mt-10 origin-center"
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

        <section className="py-24 px-4 md:px-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -inset-x-[50vw] inset-y-0 overflow-hidden">
            <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-theme-amber/[0.08] blur-[80px] will-change-transform"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-orange-500/[0.06] blur-[70px] will-change-transform"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#121212] to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-32">
            {/* The Philosophy Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-theme-amber/60 mb-6 font-bold">
                  The Philosophy
                </p>
                <h2 className="font-sans text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Life isn&apos;t meant to be lived{" "}
                  <span className="text-theme-amber underline decoration-theme-amber/30 underline-offset-8 italic">
                    only
                  </span>{" "}
                  behind a screen.
                </h2>
                <p className="font-mono text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                  When I&apos;m not pushing production code, I&apos;m rolling the throttle. I&apos;m a
                  passionate motorcycle content creator and avid traveler. From scaling
                  winding mountain passes to discovering hidden gems on the road, I&apos;m
                  always looking for my next adventure.
                </p>
                <div className="mt-12 flex gap-8 flex-wrap">
                  <div className="flex flex-col min-w-[100px]">
                    <span className="font-sans text-3xl font-bold text-white">100K+</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Video Views</span>
                  </div>
                  <div className="flex flex-col min-w-[100px]">
                    <span className="font-sans text-3xl font-bold text-white">2</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Countries</span>
                  </div>
                  <div className="flex flex-col min-w-[100px]">
                    <span className="font-sans text-3xl font-bold text-white">15</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">States Explored</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-theme-amber/20 to-orange-500/10 border border-white/10 overflow-hidden relative group">
                  <Image
                    alt="Hero"
                    src="https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776802667/portfolio/beyondCode/hero/hero.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Adventure Awaits</p>
                    <p className="font-sans text-2xl font-bold text-white leading-tight">Rolling the throttle since 2021.</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-theme-amber border border-amber-400/50 flex flex-col items-center justify-center rotate-12 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-20">
                  <span className="font-mono text-[10px] font-black text-black uppercase tracking-tight">Traveler</span>
                  <span className="font-sans text-xl font-black text-black">50K+ km</span>
                  <span className="font-mono text-[8px] font-bold text-black/60 uppercase">Total Ride</span>
                </div>
              </motion.div>
            </div>

            {/* Shorts & Reels Section */}
            <div className="flex flex-col gap-12">
              <div className="text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-theme-amber/70 font-black mb-4">
                  @myth_op_gg
                </p>
                <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Shorts &amp; Reels
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
                {REELS.map((reel, i) => (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-[9/16] rounded-[2rem] bg-[#1a1a1f] border border-white/[0.08] relative overflow-hidden group hover:border-theme-amber/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 cursor-pointer"
                  >
                    <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-row items-center justify-center gap-6">
                      <a
                        href={reel.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 rounded-full transition-all bg-red-600 text-white hover:bg-red-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                        title="Watch on YouTube"
                      >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                        </svg>
                      </a>
                      <a
                        href={reel.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 rounded-full transition-all bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                        title="View on Instagram"
                      >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                          <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07l0.203,0.009c1.077,0.046,1.66,0.218,2.05,0.368 c0.418,0.163,0.718,0.354,1.033,0.669s0.505,0.615,0.668,1.032c0.151,0.389,0.323,0.973,0.369,2.05h0.01 C21.988,8.416,22,8.796,22,12s-0.012,3.584-0.07,4.85l-0.009,0.203c-0.046,1.077-0.218,1.66-0.368,2.05 c-0.163,0.418-0.354,0.718-0.669,1.033s-0.615,0.505-1.032,0.668c-0.389,0.151-0.973,0.323-2.05,0.369v0.01 c-1.266,0.058-1.646,0.07-4.85,0.07s-3.584-0.012-4.85-0.07l-0.203-0.009c-1.077-0.046-1.66-0.218-2.05-0.368 c-0.418-0.163-0.718-0.354-1.033-0.669S2.71,19.64,2.548,19.223c-0.151-0.389-0.323-0.973-0.368-2.05H2.17 C2.112,15.584,2,15.204,2,12s0.012-3.584,0.07-4.85l0.009-0.203c0.046-1.077,0.218-1.66,0.368-2.05 c0.163-0.418,0.354-0.718,0.669-1.033S3.722,3.359,4.139,3.196c0.389-0.151,0.973-0.323,2.05-0.368v-0.01 C7.456,2.175,7.836,2.163,12,2.163 M12,0.5C8.741,0.5,8.333,0.514,7.053,0.572C5.776,0.631,4.903,0.835,4.143,1.13 c-0.785,0.305-1.45,0.709-2.115,1.374C1.363,3.169,0.96,3.834,0.655,4.619C0.359,5.378,0.156,6.252,0.098,7.528 C0.039,8.81,0.025,9.219,0.025,12c0,2.781,0.014,3.19,0.073,4.472c0.059,1.276,0.261,2.15,0.557,2.909 c0.305,0.785,0.708,1.45,1.373,2.115s1.33,1.068,2.115,1.373c0.76,0.296,1.633,0.499,2.91,0.557C8.333,23.486,8.741,23.5,12,23.5 c3.259,0,3.667-0.014,4.947-0.072c1.277-0.059,2.15-0.262,2.91-0.557c0.785-0.305,1.45-0.708,2.115-1.373 c0.665-0.665,1.068-1.33,1.373-2.115c0.296-0.76,0.499-1.633,0.557-2.909c0.058-1.282,0.072-1.691,0.072-4.472 c0-2.781-0.014-3.19-0.072-4.472c-0.058-1.276-0.261-2.15-0.557-2.908c-0.305-0.785-0.708-1.45-1.373-2.115S20.617,1.435,19.832,1.13 c-0.76-0.296-1.633-0.499-2.91-0.557C15.641,0.514,15.232,0.5,12,0.5L12,0.5z M12,5.838c-3.403,0-6.162,2.759-6.162,6.162 s2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162S15.403,5.838,12,5.838z M12,16.5c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5 s4.5,2.015,4.5,4.5S14.485,16.5,12,16.5z M18.406,6.694c0,0.615-0.5,1.115-1.115,1.115s-1.115-0.5-1.115-1.115S16.676,5.58,17.291,5.58 S18.406,6.079,18.406,6.694z"></path>
                        </svg>
                      </a>
                    </div>
                    <video
                      src={reel.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    ></video>
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none">
                      <p className="font-sans text-sm font-bold text-white group-hover:text-theme-amber transition-colors mb-1">
                        {reel.title}
                      </p>
                      <div className="flex items-center gap-3 drop-shadow-md">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">{reel.views}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">{reel.likes}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Gallery Section */}
            <div className="flex flex-col gap-12">
              <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-theme-amber/70 font-bold mb-4">
                    Perspective
                  </p>
                  <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight">
                    The Gallery
                  </h2>
                </div>
                <p className="font-mono text-xs text-gray-500 max-w-[200px] text-right hidden md:block uppercase tracking-wider leading-relaxed">
                  Moments frozen in time, captured across diverse landscapes and cultures.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:h-[800px]">
                {/* Image 1 */}
                <div className="aspect-square md:aspect-auto lg:col-span-2 lg:row-span-2 rounded-[2.5rem] bg-[#1a1a1f] border border-white/[0.08] overflow-hidden relative group">
                  <Image
                    alt="Gallery 1"
                    src="https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803188/portfolio/beyondCode/gallery/1.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className="font-mono text-[10px] text-theme-amber uppercase tracking-widest font-bold mb-2 block">Modern Samurai</span>
                    <h4 className="font-sans text-3xl font-bold text-white underline decoration-white/20 underline-offset-8">
                      The Art of Speed
                    </h4>
                  </div>
                </div>
                {/* Image 2 */}
                <div className="aspect-square md:aspect-auto lg:col-span-1 lg:row-span-2 rounded-[2.5rem] bg-[#1a1a1f] border border-white/[0.08] overflow-hidden relative group">
                  <Image
                    alt="Gallery 2"
                    src="https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803192/portfolio/beyondCode/gallery/2.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8">
                    <h4 className="font-sans text-xl font-bold text-white">More Than a Machine</h4>
                  </div>
                </div>
                {/* Image 3 */}
                <div className="aspect-square md:aspect-auto lg:col-span-1 lg:row-span-1 rounded-[2.5rem] bg-[#1a1a1f] border border-white/[0.08] overflow-hidden relative group">
                  <Image
                    alt="Gallery 3"
                    src="https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803194/portfolio/beyondCode/gallery/3.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8">
                    <h4 className="font-sans text-lg font-bold text-white">Two Wheels, Zero Limits</h4>
                  </div>
                </div>
                {/* Image 4 */}
                <div className="aspect-square md:aspect-auto lg:col-span-1 lg:row-span-1 rounded-[2.5rem] bg-[#1a1a1f] border border-white/[0.08] overflow-hidden relative group">
                  <Image
                    alt="Gallery 4"
                    src="https://res.cloudinary.com/dh6pwbdn2/image/upload/v1776803196/portfolio/beyondCode/gallery/4.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8">
                    <h4 className="font-sans text-lg font-bold text-white">Oceanic Zen</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] bg-gradient-to-br from-[#1a1a1f] to-[#121212] border border-white/5 p-12 md:p-24 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.1),transparent_70%)]"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-sans text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  Follow the Ride.
                </h2>
                <p className="font-mono text-gray-400 text-lg mb-12">
                  I share my adventures and gear reviews as{" "}
                  <span className="text-white font-bold italic">myth</span> across all
                  social platforms. Let&apos;s explore together.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://www.youtube.com/@myth_op_gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono px-8 py-4 bg-white text-black rounded-full font-black hover:bg-theme-amber hover:scale-105 transition-all duration-300"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/myth_op_gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
