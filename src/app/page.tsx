import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BeyondCodeSection } from "@/components/BeyondCodeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-theme-bg">
        <div className="bg-noise absolute inset-0 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-[40vw] h-[60vh] bg-theme-amber/15 rounded-full blur-[80px] mix-blend-screen will-change-transform" style={{ transform: "translateZ(0px)" }}></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[70vh] bg-theme-indigo/15 rounded-full blur-[90px] mix-blend-screen will-change-transform" style={{ transform: "translateZ(0px)" }}></div>
      </div>
      <main className="bg-transparent min-h-screen relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CommunitySection />
        <ProjectsSection />
        <BeyondCodeSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
