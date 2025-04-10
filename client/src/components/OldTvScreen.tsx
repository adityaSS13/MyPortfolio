import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OldTvScreenProps {
  children: ReactNode;
  isOn: boolean;
  section: string;
}

export default function OldTvScreen({ children, isOn, section }: OldTvScreenProps) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  // Control the TV turn on effect
  useEffect(() => {
    if (isOn) {
      // Short delay to show the "TV turning on" effect
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 400);
      
      return () => clearTimeout(timer);
    } else {
      setIsContentVisible(false);
    }
  }, [isOn]);

  return (
    <div className="relative w-full">
      {/* TV Frame */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl border-8 border-[#222] bg-black">
        {/* CRT Screen effect overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Scanlines */}
          <div className="absolute inset-0 bg-scanlines opacity-10"></div>
          
          {/* Glare */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          
          {/* TV turning on animation */}
          <AnimatePresence>
            {!isContentVisible && isOn && (
              <motion.div 
                initial={{ opacity: 1, scaleY: 0.01 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* TV Content */}
        <AnimatePresence mode="wait">
          {isOn && (
            <motion.div
              key={section}
              initial={{ opacity: 0, filter: "brightness(0)" }}
              animate={{ 
                opacity: isContentVisible ? 1 : 0, 
                filter: isContentVisible ? "brightness(1)" : "brightness(0)" 
              }}
              exit={{ opacity: 0, filter: "brightness(0)" }}
              transition={{ duration: 0.5 }}
              className="relative z-0 min-h-[80vh] w-full"
            >
              {/* Slight wobble effect for CRT look */}
              <motion.div 
                animate={{ 
                  y: [0, 0.5, -0.5, 0],
                  x: [0, -0.3, 0.3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="h-full w-full"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* TV Off state */}
        {!isOn && (
          <div className="bg-black w-full min-h-[80vh] flex items-center justify-center text-gray-600">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>
              <p className="font-mono text-xs">NO SIGNAL</p>
            </div>
          </div>
        )}
      </div>
      
      {/* TV Controls */}
      <div className="absolute -bottom-3 right-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-gray-700"></div>
        <div className="w-3 h-3 rounded-full bg-gray-700"></div>
        <div className="w-3 h-3 rounded-full bg-red-600"></div>
      </div>
    </div>
  );
}