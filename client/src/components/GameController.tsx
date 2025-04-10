import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/constants";

interface GameControllerProps {
  onNavigate: (section: string) => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function GameController({ onNavigate, isOpen = true, onToggle }: GameControllerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isControllerOpen, setIsControllerOpen] = useState(isOpen);
  const [showTooltip, setShowTooltip] = useState(true);
  const [buttonPresses, setButtonPresses] = useState({
    up: false,
    right: false,
    down: false,
    left: false,
    x: false,
    a: false,
    b: false,
    y: false
  });
  
  // Auto-hide tooltip after 7 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);
      
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  // Sync with parent component's state
  useEffect(() => {
    setIsControllerOpen(isOpen);
  }, [isOpen]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isControllerOpen) return;
      
      switch (e.key) {
        case "ArrowUp":
          setButtonPresses(prev => ({ ...prev, up: true }));
          setActiveIndex(prev => (prev === 0 ? navLinks.length - 1 : prev - 1));
          break;
        case "ArrowDown":
          setButtonPresses(prev => ({ ...prev, down: true }));
          setActiveIndex(prev => (prev === navLinks.length - 1 ? 0 : prev + 1));
          break;
        case "ArrowLeft":
          setButtonPresses(prev => ({ ...prev, left: true }));
          break;
        case "ArrowRight":
          setButtonPresses(prev => ({ ...prev, right: true }));
          break;
        case "Enter":
        case "x":
        case "X":
          setButtonPresses(prev => ({ ...prev, x: true }));
          onNavigate(navLinks[activeIndex].href);
          break;
        case "a":
        case "A":
          setButtonPresses(prev => ({ ...prev, a: true }));
          break;
        case "b":
        case "B":
          setButtonPresses(prev => ({ ...prev, b: true }));
          break;
        case "y":
        case "Y":
          setButtonPresses(prev => ({ ...prev, y: true }));
          break;
        default:
          break;
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setButtonPresses(prev => ({ ...prev, up: false }));
          break;
        case "ArrowDown":
          setButtonPresses(prev => ({ ...prev, down: false }));
          break;
        case "ArrowLeft":
          setButtonPresses(prev => ({ ...prev, left: false }));
          break;
        case "ArrowRight":
          setButtonPresses(prev => ({ ...prev, right: false }));
          break;
        case "Enter":
        case "x":
        case "X":
          setButtonPresses(prev => ({ ...prev, x: false }));
          break;
        case "a":
        case "A":
          setButtonPresses(prev => ({ ...prev, a: false }));
          break;
        case "b":
        case "B":
          setButtonPresses(prev => ({ ...prev, b: false }));
          break;
        case "y":
        case "Y":
          setButtonPresses(prev => ({ ...prev, y: false }));
          break;
        default:
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeIndex, isOpen, onNavigate]);

  const handleUp = () => {
    setButtonPresses(prev => ({ ...prev, up: true }));
    setActiveIndex(prev => (prev === 0 ? navLinks.length - 1 : prev - 1));
    setTimeout(() => setButtonPresses(prev => ({ ...prev, up: false })), 200);
  };

  const handleDown = () => {
    setButtonPresses(prev => ({ ...prev, down: true }));
    setActiveIndex(prev => (prev === navLinks.length - 1 ? 0 : prev + 1));
    setTimeout(() => setButtonPresses(prev => ({ ...prev, down: false })), 200);
  };

  const handleSelect = () => {
    setButtonPresses(prev => ({ ...prev, x: true }));
    onNavigate(navLinks[activeIndex].href);
    setTimeout(() => setButtonPresses(prev => ({ ...prev, x: false })), 200);
  };

  const handleToggle = () => {
    const newValue = !isControllerOpen;
    setIsControllerOpen(newValue);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className={`fixed inset-0 ${isControllerOpen ? 'bg-transparent' : 'hidden'} z-50 pointer-events-none`}>
      {/* Toggle Button */}
      <motion.button
        className="absolute top-4 left-4 bg-primary/90 text-white p-3 rounded-full shadow-lg pointer-events-auto"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
      >
        {isControllerOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16.5"></path>
            <circle cx="17" cy="12" r="1"></circle>
            <circle cx="17" cy="16" r="1"></circle>
            <circle cx="13" cy="14" r="1"></circle>
            <circle cx="9" cy="14" r="1"></circle>
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="h-full flex flex-col pointer-events-auto">
            
            {/* Left Side Panel */}
            <motion.div 
              className="w-[300px] bg-card/95 backdrop-blur-sm border-r border-border h-full shadow-2xl overflow-hidden fixed left-0 top-0 z-50 flex flex-col"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header/Profile Area */}
              <div className="p-6 border-b border-border bg-gradient-to-r from-card to-background">
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold mb-1 text-primary">{personalInfo.name}</h1>
                  <p className="text-muted-foreground text-sm">{personalInfo.role}</p>
                </div>
              </div>
              
              {/* Controller Section (Top 1/4) */}
              <div className="p-4 relative flex justify-center items-center">
                {/* Controller Tooltip */}
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute -top-4 right-4 bg-background/95 backdrop-blur-sm text-foreground p-4 rounded-lg shadow-lg border border-border text-sm z-10 max-w-[220px]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">X</div>
                        <span>Press to select a section</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                        <span>Use Up/Down to navigate</span>
                      </div>
                      <div className="absolute bottom-0 right-4 w-4 h-4 bg-background/90 border-r border-b border-border transform rotate-45 translate-y-2"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Controller Body */}
                <motion.div
                  className="w-[220px] h-[140px] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-2xl border-2 border-gray-700 p-4 flex flex-col items-center justify-between"
                  whileHover={{ y: -5 }}
                  initial={{ y: 0 }}
                  animate={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)" }}
                >
                  {/* Left Side Grip */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-l-full"></div>
                  
                  {/* Right Side Grip */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3 h-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-r-full"></div>

                  {/* Top Highlights */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full"></div>
                  
                  {/* D-Pad */}
                  <div className="absolute left-8 top-[calc(50%-14px)] w-16 h-16">
                    <div className="relative w-full h-full">
                      {/* D-Pad Background */}
                      <div className="absolute inset-0 bg-gray-900 rounded-full shadow-inner"></div>
                      
                      {/* Up Button */}
                      <motion.button
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.up ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                        onClick={handleUp}
                        whileTap={{ scale: 0.9 }}
                        animate={buttonPresses.up ? { y: 2 } : { y: 0 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </motion.button>
                      
                      {/* Down Button */}
                      <motion.button
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.down ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                        onClick={handleDown}
                        whileTap={{ scale: 0.9 }}
                        animate={buttonPresses.down ? { y: -2 } : { y: 0 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </motion.button>
                      
                      {/* Center */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-800 rounded-md flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute right-8 top-[calc(50%-14px)] w-16 h-16">
                    <div className="relative w-full h-full">
                      {/* Buttons Background */}
                      <div className="absolute inset-0 bg-gray-900 rounded-full shadow-inner"></div>
                      
                      {/* X Button */}
                      <motion.button
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs border-2 border-blue-700 ${buttonPresses.x ? 'opacity-80' : 'hover:bg-blue-500'}`}
                        onClick={handleSelect}
                        whileTap={{ scale: 0.9 }}
                        animate={buttonPresses.x ? { y: 2 } : { y: 0 }}
                      >
                        X
                      </motion.button>
                      
                      {/* A Button */}
                      <motion.div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs border-2 border-green-600 ${buttonPresses.a ? 'opacity-80' : 'hover:bg-green-400'}`}
                        whileTap={{ scale: 0.9 }}
                        animate={buttonPresses.a ? { y: -2 } : { y: 0 }}
                      >
                        A
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Controller Logo */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[8px] font-mono text-primary font-semibold">
                    PORTFOLIO CONTROLLER
                  </div>
                  
                  {/* Light Indicators */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-300"></div>
                  </div>
                </motion.div>
              </div>
              
              {/* Navigation Menu */}
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900/40 to-card/40">
                <div className="mb-4 text-sm font-mono uppercase text-muted-foreground tracking-wider border-b border-border pb-2">
                  Navigation Menu
                </div>
                
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      className={`p-3 rounded-md cursor-pointer flex items-center ${activeIndex === index ? 'bg-primary/20 text-primary border-l-4 border-primary pl-2' : 'hover:bg-card border-l-4 border-transparent pl-2'}`}
                      onClick={() => {
                        setActiveIndex(index);
                        onNavigate(link.href);
                      }}
                      whileHover={{ x: 5 }}
                      animate={activeIndex === index ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`${activeIndex === index ? 'font-medium' : ''} flex-1`}>{link.name}</span>
                      {activeIndex === index && (
                        <div className="text-xs bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center font-bold">X</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-border bg-gradient-to-r from-card to-background">
                <div className="flex justify-center space-x-4">
                  <a 
                    href={personalInfo.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href={personalInfo.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href={personalInfo.socialLinks.email} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Overlay to close panel when clicking outside */}
            <motion.div 
              className="fixed inset-0 bg-black/5 backdrop-blur-sm ml-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}