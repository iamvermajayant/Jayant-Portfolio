"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="contact" 
      className="py-32 px-8 md:px-24 bg-transparent flex justify-center relative overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-theme-indigo/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-theme-amber/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl bg-black/40 border border-white/10 rounded-[2rem] p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-theme-indigo/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-amber/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">What's Next?</h2>
          <p className="font-mono text-gray-400 mb-12 max-w-xl leading-relaxed">Whether you need to review my qualifications, have a direct conversation, or just want to drop a casual note, just click what you need.</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <button className="flex flex-col items-center justify-center gap-4 py-12 px-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-theme-indigo/10 hover:border-theme-indigo/50 transition-all duration-300 group">
              <span className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">📄</span>
              <span className="font-sans font-bold text-white text-lg drop-shadow-md">Request Resume</span>
              <span className="font-mono text-xs text-gray-500">Get my latest CV</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-4 py-12 px-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-theme-amber/10 hover:border-theme-amber/50 transition-all duration-300 group">
              <span className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">📧</span>
              <span className="font-sans font-bold text-white text-lg drop-shadow-md">Get Direct Email</span>
              <span className="font-mono text-xs text-gray-500">Reach my inbox</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-4 py-12 px-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
              <span className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">💬</span>
              <span className="font-sans font-bold text-white text-lg drop-shadow-md">Write a Message</span>
              <span className="font-mono text-xs text-gray-500">Quick contact form</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
