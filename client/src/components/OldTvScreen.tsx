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
        {/* TV turning on animation */}
        <AnimatePresence>
          {!isContentVisible && isOn && (
            <motion.div 
              initial={{ opacity: 1, scaleY: 0.01 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white z-30"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
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
              <div className="h-full w-full">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* TV Off state - Show "Select an option" */}
        {!isOn && (
          <div className="bg-gray-900 w-full min-h-[80vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="8 17 12 21 16 17"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                </svg>
              </div>
              <p className="font-medium text-lg text-primary">Select an option</p>
              <p className="text-gray-400 text-sm mt-2">Use the controller to navigate</p>
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