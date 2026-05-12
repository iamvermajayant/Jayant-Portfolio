"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const COMMUNITY_EVENTS = [
  {
    title: "Nasscom AI 2025",
    description: "Presented two solutions using the GEN ai related to insurance and Banking sectors.",
    img: "/Community/Nascoomai.jpg", 
  },
  {
    title: "Speaker at Devfest Durgapur 2024",
    description: "Topic: Cache me if you can.",
    img: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Mentor at SIH Finals 2024",
    description: "Mentored teams at the Smart India Hackathon Finals in Chennai (KCG College of Technology).",
    img: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Mentor/Judge at StatusCode2",
    description: "36-hour hackathon with 100+ teams at IISER Kolkata.",
    img: "https://picsum.photos/800/600?random=4",
  },
];

export function CommunitySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#050505]">
      <div className="sticky top-0 z-10 flex h-screen items-center overflow-hidden w-full">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,var(--color-theme-bg)_0%,transparent_10%,transparent_90%,var(--color-theme-bg)_100%)] pointer-events-none"></div>
        
        {/* Header Text */}
        <div className="absolute top-12 md:top-24 left-6 md:left-24 z-10 w-full drop-shadow-lg pr-6">
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Community <span className="bg-gradient-to-r from-theme-amber to-theme-indigo bg-clip-text text-transparent">& Volunteering</span>
          </h2>
          <p className="font-mono text-gray-400 text-sm md:text-lg max-w-xs md:max-w-md">
            Highlighting the incredible places I've been and ideas I've shared.
          </p>
        </div>
        
        {/* View All Button */}
        <a className="font-mono absolute right-6 md:right-24 bottom-12 md:bottom-auto md:top-24 px-5 py-2.5 md:px-6 md:py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white transition-all duration-300 hover:bg-theme-indigo/10 hover:border-theme-indigo/50 hover:text-theme-indigo hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] z-10 flex items-center gap-2 text-sm md:text-base" href="/community">
          View All <span>→</span>
        </a>

        {/* Scrollable Cards Container */}
        <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-6 md:pl-24 md:pr-24 mt-20 md:mt-32 w-max items-center relative z-10">
          {COMMUNITY_EVENTS.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[320px] md:h-[400px] w-[85vw] md:w-[500px] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 z-[-1] bg-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                {/* Using a standard img tag for simplicity and placeholder usage */}
                <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-sans text-3xl font-bold text-white mb-3 drop-shadow-md">{event.title}</h3>
                <p className="font-mono text-gray-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
