"use client";

import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16"
          >
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 md:mb-0">Projects</h2>
            <a className="font-mono px-6 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white transition-all duration-300 hover:bg-theme-indigo/10 hover:border-theme-indigo/50 hover:text-theme-indigo hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] w-fit flex items-center gap-2" href="/projects">
              See More <span>→</span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full rounded-[2rem] border border-dashed border-yellow-400/40 bg-yellow-400/[0.03] flex flex-col items-center justify-center text-center overflow-hidden p-12 md:p-20"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #facc15 0px, #facc15 30px, transparent 30px, transparent 60px)' }}></div>
            <div className="text-6xl md:text-8xl mb-8 md:mb-10 select-none relative z-10">🚧</div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="font-sans font-bold text-yellow-300 mb-4 drop-shadow-[0_0_30px_rgba(253,224,71,0.5)] text-2xl md:text-4xl">I'm currently building this section</h3>
              <p className="font-mono text-gray-400 leading-relaxed mb-3 text-sm md:text-base">Awesome things take time. Check back soon for updates.</p>
              <p className="font-mono text-gray-600 text-xs tracking-widest uppercase mb-10">ETA: SOON</p>
              <div className="w-full max-w-sm mx-auto h-1.5 bg-white/5 rounded-full overflow-hidden mb-12 border border-white/10">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-10">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="font-mono text-xs text-yellow-400/70 tracking-widest uppercase">IN PROGRESS</span>
              </div>
              <a className="font-mono px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 text-sm inline-flex items-center gap-2" href="/">Return Home</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
