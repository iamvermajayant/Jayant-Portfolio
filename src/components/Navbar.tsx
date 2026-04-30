"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Community", href: "/community" },
  { name: "Beyond Code", href: "/informal" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-x-auto scrollbar-none rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.15)] pointer-events-auto"
      >
        <nav className="flex items-center gap-1 px-2 py-2 w-max">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} tabIndex={0}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative flex px-4 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
}
