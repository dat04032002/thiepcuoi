import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1500); // Wait for exit animation
    }, 2500); // Show intro for 2.5s
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 1 }}
        >
          {/* Left Curtain */}
            <motion.div
            className="w-1/2 h-full bg-red-500 flex items-center justify-end border-r border-red-600"
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            >
             <div className="mr-[-50px] z-10">
              <div className="w-24 h-24 bg-white text-red-600 rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-400">
                <span className="font-serif text-4xl">囍</span>
              </div>
             </div>
            </motion.div>

          {/* Right Curtain */}
          <motion.div
            className="w-1/2 h-full bg-red-500 flex items-center justify-start border-l border-red-600"
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
