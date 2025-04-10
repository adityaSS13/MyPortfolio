import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

interface GameControllerProps {
  onNavigate: (section: string) => void;
}

export default function GameController({ onNavigate }: GameControllerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
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
  
  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
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
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {/* Toggle Button */}
      <motion.button
        className="absolute -top-16 right-0 bg-primary/90 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
      >
        {isOpen ? (
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

      {/* Controller Tooltip */}
      <AnimatePresence>
        {showTooltip && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -top-32 right-0 bg-background/90 backdrop-blur-sm text-foreground p-4 rounded-lg shadow-lg border border-border text-sm max-w-[250px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">X</div>
              <span>Press X or Enter to select a section</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <span>Use Up/Down arrows to navigate sections</span>
            </div>
            <div className="absolute bottom-0 right-4 w-4 h-4 bg-background/90 border-r border-b border-border transform rotate-45 translate-y-2"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative"
          >
            {/* Game Screen / Section Menu */}
            <motion.div
              className="absolute -top-52 -left-[100px] w-[280px] bg-background/90 backdrop-blur-sm border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* Game Screen Header */}
              <div className="bg-gray-800 py-2 px-4 flex justify-between items-center border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-gray-300">Menu</div>
                <div className="w-4"></div>
              </div>
              
              {/* Game Screen Content */}
              <div className="p-2 bg-gradient-to-b from-gray-900 to-gray-800 min-h-[180px]">
                <div className="bg-gray-900 border border-gray-700 rounded-md p-3">
                  <div className="text-xs text-gray-400 mb-2 font-mono">SELECT SECTION:</div>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      className={`p-2 rounded-md cursor-pointer flex items-center ${activeIndex === index ? 'bg-primary text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                      onClick={() => {
                        setActiveIndex(index);
                        onNavigate(link.href);
                      }}
                      whileHover={{ x: 5 }}
                      animate={activeIndex === index ? { scale: [1, 1.03, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex === index && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="mr-2 text-sm"
                        >
                          &gt;
                        </motion.div>
                      )}
                      <span className={`${activeIndex === index ? 'font-medium' : ''} flex-1`}>{link.name}</span>
                      {activeIndex === index && (
                        <div className="text-xs bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center font-bold">X</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Controller Body */}
            <motion.div
              className="relative w-64 h-[180px] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl border-2 border-gray-700 p-4 flex flex-col items-center justify-between"
              whileHover={{ y: -5 }}
              initial={{ y: 0 }}
              animate={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)" }}
            >
              {/* Left Side Grip */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-l-full"></div>
              
              {/* Right Side Grip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-4 h-32 bg-gradient-to-r from-gray-900 to-gray-800 rounded-r-full"></div>

              {/* Top Highlights */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full"></div>
              
              {/* D-Pad */}
              <div className="absolute left-10 top-[calc(50%-20px)] w-20 h-20">
                <div className="relative w-full h-full">
                  {/* D-Pad Background */}
                  <div className="absolute inset-0 bg-gray-900 rounded-full shadow-inner"></div>
                  
                  {/* Up Button */}
                  <motion.button
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.up ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    onClick={handleUp}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.up ? { y: 2 } : { y: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </motion.button>
                  
                  {/* Right Button */}
                  <motion.button
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.right ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.right ? { x: 2 } : { x: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </motion.button>
                  
                  {/* Down Button */}
                  <motion.button
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.down ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    onClick={handleDown}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.down ? { y: -2 } : { y: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.button>
                  
                  {/* Left Button */}
                  <motion.button
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gray-800 rounded-md flex items-center justify-center border border-gray-700 ${buttonPresses.left ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.left ? { x: -2 } : { x: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </motion.button>
                  
                  {/* Center */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute right-10 top-[calc(50%-20px)] w-20 h-20">
                <div className="relative w-full h-full">
                  {/* Buttons Background */}
                  <div className="absolute inset-0 bg-gray-900 rounded-full shadow-inner"></div>
                  
                  {/* X Button */}
                  <motion.button
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-blue-700 ${buttonPresses.x ? 'opacity-80' : 'hover:bg-blue-500'}`}
                    onClick={handleSelect}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.x ? { y: 2 } : { y: 0 }}
                  >
                    X
                  </motion.button>
                  
                  {/* Y Button */}
                  <motion.div
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-sm border-2 border-yellow-600 ${buttonPresses.y ? 'opacity-80' : 'hover:bg-yellow-400'}`}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.y ? { x: 2 } : { x: 0 }}
                  >
                    Y
                  </motion.div>
                  
                  {/* A Button */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm border-2 border-green-600 ${buttonPresses.a ? 'opacity-80' : 'hover:bg-green-400'}`}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.a ? { y: -2 } : { y: 0 }}
                  >
                    A
                  </motion.div>
                  
                  {/* B Button */}
                  <motion.div
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm border-2 border-red-600 ${buttonPresses.b ? 'opacity-80' : 'hover:bg-red-400'}`}
                    whileTap={{ scale: 0.9 }}
                    animate={buttonPresses.b ? { x: -2 } : { x: 0 }}
                  >
                    B
                  </motion.div>
                </div>
              </div>
              
              {/* Central Options Buttons */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 flex gap-8">
                <motion.button
                  className="h-2 w-8 bg-gray-700 rounded-full shadow-inner border border-gray-600"
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
                <motion.button
                  className="h-2 w-8 bg-gray-700 rounded-full shadow-inner border border-gray-600"
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
              </div>
              
              {/* Controller Logo */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs font-mono text-primary font-semibold">
                PORTFOLIO CONTROLLER
              </div>
              
              {/* Light Indicators */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-12">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-300"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}