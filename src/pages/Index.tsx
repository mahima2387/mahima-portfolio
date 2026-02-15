import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThingsIDidSection from "@/components/ThingsIDidSection";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallerySection";
import RandomSection from "@/components/RandomSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background bg-grid-pattern">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ThingsIDidSection />
        <SkillsSection />
        <GallerySection />
        <RandomSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;