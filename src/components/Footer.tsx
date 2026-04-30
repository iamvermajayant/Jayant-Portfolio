"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative z-20 py-20 px-8 md:px-24 bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="font-sans text-3xl font-bold text-white tracking-tight mb-2">
            Jayant Verma.
          </h2>
          <p className="font-mono text-gray-400 text-sm">
            Building digital experiences, one line at a time.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-gray-400 hover:text-white transition-all duration-300 relative group text-sm md:text-base uppercase tracking-widest"
            href="https://linkedin.com/in/sanglap-mridha"
          >
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-amber transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-gray-400 hover:text-white transition-all duration-300 relative group text-sm md:text-base uppercase tracking-widest"
            href="https://github.com/sanglap13"
          >
            <span className="relative z-10">GitHub</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-amber transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="font-mono text-gray-400 hover:text-white transition-all duration-300 relative group text-sm md:text-base uppercase tracking-widest"
            href="#contact"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-indigo transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600 relative z-10"
      >
        <p>© 2026 Jayant Verma. All rights reserved.</p>
        <p>Built with ❤️ using Next.js</p>
      </motion.div>
    </footer>
  );
}
