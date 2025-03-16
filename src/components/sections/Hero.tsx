import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export function Hero({ opacity }: { opacity: number }) {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      style={{ opacity }}
      className="h-screen flex items-center justify-center relative overflow-hidden banner-bg"
      id="home"
    >
      <div className="absolute inset-0 banner-overlay" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-purple-500/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: -360,
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-emerald-500/20"
        animate={{
          scale: [0.8, 1, 0.8],
          rotate: 180,
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%] font-medium mb-2"
            >
              Hello, I'm
            </motion.div>
            <motion.h1
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%]"
            >
              Sabbir Hossain
            </motion.h1>
          </motion.div>

          <motion.div 
            className="h-24 flex items-center justify-center" // Increased height for better spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative pb-4" // Added padding at the bottom
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(titles[currentTitle])
                        .start();
                    }}
                    options={{
                      cursor: "|",
                      delay: 50,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`progress-${currentTitle}`}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Crafting robust and scalable web applications with modern technologies.
            Specialized in building full-stack solutions with MongoDB, Express, React, and Node.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700 text-white px-8 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-8 h-14 rounded-full border-2 border-emerald-500/30 flex items-start justify-center p-2 group-hover:border-emerald-400 transition-colors duration-300"
        >
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <ChevronDown className="w-6 h-6 text-emerald-400 mt-2 animate-bounce" />
      </motion.button>
    </motion.div>
  );
}