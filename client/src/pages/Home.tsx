import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import GameController from "@/components/GameController";
import OldTvScreen from "@/components/OldTvScreen";

export default function Home() {
  const [isControllerOpen, setIsControllerOpen] = useState(true); // Start with controller open
  const [activeSection, setActiveSection] = useState("hero"); // Track which section is active
  const [isTvOn, setIsTvOn] = useState(true); // TV screen state
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Extract section ID from hash
  const getSectionId = (hash: string) => {
    return hash.startsWith('#') ? hash.substring(1) : hash;
  };
  
  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (hash: string) => {
    const sectionId = getSectionId(hash);
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle controller navigation
  const handleControllerNavigate = (hash: string) => {
    // Turn off TV briefly for transition effect
    setIsTvOn(false);
    
    const sectionId = getSectionId(hash);
    setActiveSection(sectionId);
    
    // Short delay before turning TV back on
    setTimeout(() => {
      setIsTvOn(true);
      handleSmoothScroll(hash);
    }, 300);
  };

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        // Get section ID from hash and use TV effect
        const sectionId = getSectionId(anchor.hash);
        
        // Use same TV effect as controller navigation
        setIsTvOn(false);
        setActiveSection(sectionId);
        
        setTimeout(() => {
          setIsTvOn(true);
          handleSmoothScroll(anchor.hash);
        }, 300);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Handle keyboard shortcut to toggle controller
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + P or Cmd + P to toggle controller
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setIsControllerOpen(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ScrollProgress />
      
      {/* Game Controller UI */}
      <GameController 
        onNavigate={handleControllerNavigate} 
        isOpen={isControllerOpen}
        onToggle={() => setIsControllerOpen(prev => !prev)}
      />
      
      {/* Button to toggle controller (visible on small screens) */}
      <button 
        className="fixed bottom-4 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={() => setIsControllerOpen(prev => !prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="17" cy="12" r="1"></circle>
          <circle cx="17" cy="16" r="1"></circle>
          <circle cx="13" cy="14" r="1"></circle>
          <circle cx="9" cy="14" r="1"></circle>
          <path d="M3 7v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7m-5-2h-4m-2 14a2 2 0 0 1-2-2v-2"></path>
        </svg>
      </button>
      
      {/* Main content with Old TV effect and left margin when controller is open */}
      <div className={`transition-all duration-300 ease-in-out p-6 ${isControllerOpen ? 'ml-[300px]' : 'ml-0'}`}>
        <OldTvScreen isOn={isTvOn} section={activeSection}>
          <div ref={contentRef} className="relative overflow-y-auto">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <AchievementsSection />
            <ContactSection />
          </div>
        </OldTvScreen>
      </div>
    </div>
  );
}
