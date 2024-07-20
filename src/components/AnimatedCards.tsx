'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    emoji: "😬",
    title: "You get a promotion at work",
    description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities."
  },
  {
    emoji: "🤔",
    title: "You attend a class reunion",
    description: "You compare yourself with your peers’ achievements, instead of making your self-judgement more independent of others."
  },
  {
    emoji: "😟",
    title: "You are at a lively dinner party",
    description: "You play on your phone, instead of confidently approaching strangers and striking up a chat."
  },
  {
    emoji: "😁",
    title: "You hit the gym",
    description: "You get really nervous and don't know where to start, instead of confidently going about your solution."
  },
];

const AnimatedCards = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row p-4">
        <motion.h3
          className="text-2xl md:text-4xl font-bold text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Does this sound familiar...
        </motion.h3>
        <motion.img
          src="/assets/logo.png"
          alt=""
          className="w-30 h-30 md:w-14 md:h-14 ml-0 md:ml-4 mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-3xl mb-4">
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.6, loop: Infinity, repeatDelay: 1 }}
              >
                {card.emoji}
              </motion.span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AnimatedCards;
