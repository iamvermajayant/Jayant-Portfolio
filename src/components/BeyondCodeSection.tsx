"use client";

import { motion } from "framer-motion";

export function BeyondCodeSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 bg-transparent">
      <div className="flex flex-col md:flex-row md:items-end justify-between max-w-7xl mx-auto mb-10 md:mb-16 drop-shadow-md">
        <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 md:mb-0">Beyond the Code</h2>
        <div>
          <a className="font-mono px-6 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white transition-all duration-300 hover:bg-theme-indigo/10 hover:border-theme-indigo/50 hover:text-theme-indigo hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] w-fit flex items-center gap-2" href="/informal">
            Explore More <span>→</span>
          </a>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[650px] max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden group transition-all duration-500 md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-0 rounded-[2rem] bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-10 flex flex-col justify-end hover:border-theme-indigo/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
          <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(99,102,241,0.15), transparent 80%)' }}></div>
          <div className="absolute inset-0 z-[-1]">
            <img alt="Hero" className="object-cover w-full h-full" src="https://picsum.photos/1000/800?random=11" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-[-1]"></div>
          <p className="font-mono text-sm font-bold tracking-widest text-theme-amber mb-3 uppercase relative z-10">Creator Spotlight</p>
          <h3 className="font-sans text-3xl font-bold text-white relative z-10 mb-2">The Care-free Traveller</h3>
        </div>
        
        <div className="relative overflow-hidden group transition-all duration-500 md:col-span-2 md:row-span-1 rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-center hover:bg-theme-indigo/5">
          <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(99,102,241,0.15), transparent 80%)' }}></div>
          <h3 className="font-sans text-2xl font-bold text-white leading-tight mb-4">Rider. Creator. Explorer.</h3>
          <p className="font-mono text-gray-400 leading-relaxed text-sm lg:text-base">When I'm not pushing production code, I'm rolling the throttle. I'm a passionate motorcycle content creator and avid traveler. From scaling winding mountain passes to discovering hidden gems on the road, I'm always looking for my next adventure.</p>
        </div>
        
        <div className="relative overflow-hidden group transition-all duration-500 md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-0 rounded-[2rem] bg-white/5 border border-white/10 hover:border-theme-amber/50">
          <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(245,158,11,0.15), transparent 80%)' }}></div>
          <img alt="Gallery 1" className="object-cover w-full h-full absolute inset-0" src="https://picsum.photos/400/400?random=12" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-amber/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <div className="relative overflow-hidden group transition-all duration-500 md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-0 rounded-[2rem] bg-white/5 border border-white/10 hover:border-theme-indigo/50">
          <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(99,102,241,0.15), transparent 80%)' }}></div>
          <img alt="Gallery 2" className="object-cover w-full h-full absolute inset-0" src="https://picsum.photos/400/400?random=13" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-indigo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
}
