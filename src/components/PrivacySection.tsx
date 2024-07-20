'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SignatureAnimation = () => {
    const signaturePath = "M10 30 C 20 20, 40 20, 50 30 S 70 40, 90 30";
  
    return (
      <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d={signaturePath}
          stroke="black"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    );
  };

const PrivacySection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600">We take privacy seriously</p>
        </motion.div>
        <motion.h2
          className="mt-2 text-3xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Before you get started
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          “We won't share your answers with anyone (and won’t ever tell you which friends said what about you)”
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600">with love,</p>
          <SignatureAnimation />
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="bg-black text-white py-2 px-4 rounded-full text-lg">
            Start a test
          </button>
          <p className="mt-2 text-gray-500">Take only 5 minutes</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacySection;
