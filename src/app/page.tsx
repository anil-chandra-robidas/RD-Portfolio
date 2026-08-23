import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import PreloaderWrapper from "./components/PreloaderWrapper";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-accent-violet/30 selection:text-white">
      <PreloaderWrapper />
      <Navbar />
      <main className="flex-1">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
