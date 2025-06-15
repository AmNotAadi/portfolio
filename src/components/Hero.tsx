import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const titles = ['Professor', 'Ph.D. Guide', 'Blockchain Researcher'];

const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = titles[currentTitleIndex];
      
      if (!isDeleting && currentTitle === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && currentTitle === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setCurrentTitle((prev) => currentWord.substring(0, prev.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentTitle, currentTitleIndex, isDeleting, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1F2937] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#1F2937] opacity-90" />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[#F9FAFB] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dr. Swapnil Jain
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-[#3B82F6] mb-8 min-h-[2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {currentTitle}
            <span className="animate-blink">|</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-[#D1D5DB] max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Department of Electronics & Communication Engineering<br />
            Madhav Institute of Technology & Science, Gwalior
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a href="#about" className="text-[#E5E7EB] hover:text-[#3B82F6] transition-colors">
          <ArrowDownIcon className="h-8 w-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 