'use client';

import React from 'react';
import { motion } from 'framer-motion';

const content = [
    {
        title: "Old habits are hard to break.",
        description: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",
        isHighlighted: false,
      },
      {
        title: "You and your motivation don’t have a long-term relationship.",
        description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.",
        isHighlighted: true,
      },
      {
        title: "Books just don’t offer practical advice.",
        description: "Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
        isHighlighted: false,
      },
      {
        title: "You and your motivation don’t have a long-term relationship.",
        description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.",
        isHighlighted: true,
      },{
        title: "Old habits are hard to break.",
        description: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",
        isHighlighted: false,
      },
    ];

const SelfImprovementSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wrong with self-improvement & how we’re fixing it.
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Self-improvement. Ugh. <span role="img" aria-label="emoji">😔</span>
        </motion.h1>
      </div>
      <div className="relative pl-12">
        <div className="space-y-10">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="relative"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full absolute left-[-0.5rem]"></div>
                <div className="ml-8">
                  <h3 className={`text-xl md:text-2xl font-bold ${item.isHighlighted ? 'text-black' : 'text-gray-500'}`}>{item.title}</h3>
                  <p className={`text-md md:text-lg ${item.isHighlighted ? 'text-black' : 'text-gray-500'}`}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfImprovementSection;
