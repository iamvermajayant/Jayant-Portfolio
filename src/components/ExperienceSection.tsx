"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative z-20 w-full bg-transparent">
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 px-8 md:px-24 bg-transparent max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-24 drop-shadow-lg"
          >
            Work & Experience
          </motion.h2>
          
          <div className="relative pl-8 md:pl-0">
            {/* Background line */}
            <div className="absolute left-[7px] md:left-[3px] top-0 bottom-0 w-[2px] bg-white/10"></div>
            {/* Animated foreground line */}
            <motion.div 
              className="absolute left-[7px] md:left-[3px] top-0 w-[2px] bg-gradient-to-b from-theme-amber to-theme-indigo shadow-[0_0_15px_rgba(99,102,241,0.6)] origin-top z-10"
              style={{ height: lineHeight }}
            />
            
            <div className="flex flex-col gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-8 md:pl-16 group"
              >
                <div className="absolute left-[-21px] md:left-[-25px] top-1.5 w-4 h-4 rounded-full bg-theme-bg border-[3px] border-white/20 z-20 transition-all duration-500 group-hover:border-theme-indigo group-hover:bg-theme-indigo/80 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans text-3xl md:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-theme-indigo">
                      Full Stack Engineer 
                    </h3>
                    <span className="font-mono text-[10px] px-3 py-1 bg-theme-indigo/15 border border-theme-indigo/30 rounded-full text-theme-indigo font-bold uppercase tracking-widest">
                      Present
                    </span>
                  </div>
                  <h4 className="font-mono text-sm text-gray-400">Capgemini (Applied Innovation Exchange, AIE)  · Bengaluru, India</h4>
                  <p className="font-mono text-gray-400/80 leading-relaxed max-w-xl mt-1 text-sm">
                    Driving scalable product development, building AI-powered agentic systems, and architecting browser extension tooling for healthcare platforms.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <a className="font-mono px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-white transition-all duration-300 hover:bg-theme-indigo/10 hover:border-theme-indigo/50 hover:text-theme-indigo hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]" href="/experience">
                View Full Experience
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
