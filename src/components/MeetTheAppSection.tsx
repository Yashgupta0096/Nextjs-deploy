'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MeetTheAppSection = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-[#FFF1E6] rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg font-semibold">Built out of frustration</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Meet the ahead app</h1>
          <p className="text-lg mb-4">
            A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
          </p>
          <p className="text-lg">
            Think of it as a pocket cheerleader towards a better, more fulfilling.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, loop: Infinity }}
          >
            <motion.img
              src="/assets/ghost.png" 
              alt="Emoji"
              className="w-40 h-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, loop: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-0 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, loop: Infinity }}
            >
              <span className="text-xl">1</span>
            </motion.div>
          </motion.div>
          <motion.img
            src="/assets/Daisy.png" 
            alt="Emoji"
            className="absolute -bottom-5 left-10 w-10 h-10 bg-pink-300 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, loop: Infinity }}
          />
          <motion.img
            src="/assets/Daisy.png" 
            alt="Emoji"
            className="absolute -top-5 right-10 w-12 h-12 bg-green-300 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, loop: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetTheAppSection;
