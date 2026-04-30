"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images and handle canvas scrubbing
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // Preload all 24 frames
    for (let i = 1; i <= 24; i++) {
      const img = new Image();
      img.src = `/jayant-frames/ezgif-frame-${i.toString().padStart(3, '0')}.png`;
      img.onload = () => {
        loadedCount++;
        // Draw the first frame once it's loaded
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
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (canvasRef.current && images.length > 0) {
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        
        // Scrub the images across the first 80% of the scroll progress
        const progress = Math.min(latest / 0.8, 1);
        const frameIndex = Math.min(
          23,
          Math.max(0, Math.floor(progress * 24))
        );
        
        const img = images[frameIndex];
        if (img && img.complete) {
          canvasRef.current.width = img.width;
          canvasRef.current.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, images]);

  // Section 1: Fade out and scale up early
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  const blur1 = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(10px)"]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Section 2: Fade in then out
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.6], [50, 0, 0, -50]);

  // Section 3: Fade in
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [50, 0, 0]);

  // Video fade effect on scroll (stays visible longer to show the animation)
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background replacing Video */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ opacity: videoOpacity, scale: scale1 }}
        >
          <canvas 
            ref={canvasRef}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure text readability against the full-screen video */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-theme-bg/30 pointer-events-none"></div>
        </motion.div>
        
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Section 1 */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-24 text-center"
            style={{ opacity: opacity1, scale: scale1, filter: blur1, y: y1 }}
          >
            <h1 className="font-sans text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white/80 mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] leading-[1.2]">
              JAYANT VERMA
            </h1>
            <p className="font-mono text-lg md:text-3xl text-white/60 font-medium tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
              Software Engineer
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Scroll
            </span>
            <div className="w-[22px] h-[36px] border border-white/40 rounded-full flex justify-center p-1 relative drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-white/80 rounded-full absolute top-2"
              />
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-start justify-end pb-32 md:justify-center p-8 md:p-24 text-left"
            style={{ opacity: opacity2, y: y2 }}
          >
            <h2 className="font-sans text-3xl md:text-6xl font-bold tracking-tight text-white/80 max-w-3xl text-balance drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] leading-tight py-2">
              I build digital
              <span className="font-mono opacity-80 block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent pb-3 pt-2 mt-1 leading-normal drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                experiences.
              </span>
            </h2>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-end justify-end pb-8 md:justify-center p-8 md:p-24 text-right"
            style={{ opacity: opacity3, y: y3 }}
          >
            <h2 className="font-sans text-3xl md:text-6xl font-bold tracking-tight text-white/80 max-w-3xl text-balance drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] leading-tight py-2">
              Bridging design
              <span className="font-mono opacity-80 block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent pb-3 pt-2 mt-1 leading-normal drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]">
                and engineering.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
