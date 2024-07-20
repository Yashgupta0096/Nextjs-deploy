'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeedbackSection = () => {
  return (
    <div className="bg-blue-100 border-2 rounded-3xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ever wondered what others think of you?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Let your friends, family, and co-workers (anonymously) rate your social skills.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-6 md:space-y-0 md:space-x-8 md:flex-row">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-white text-xl font-semibold">{step.number}</span>
              </div>
              <p className="mt-2 text-center text-gray-700">{step.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <motion.div
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="relative flex items-center justify-between">
                {people.map((person, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    <div className={`${person.color} w-8 h-8 rounded-full`}></div>
                    <span className="mt-2 text-gray-700">{person.name}</span>
                  </motion.div>
                ))}
                <div className="absolute w-full border-t border-gray-300 top-4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const steps = [
  { number: 1, text: 'Answer questions on your social skills' },
  { number: 2, text: 'Let others anonymously answer the same questions about you' },
  { number: 3, text: 'Find out where you and others see things the same way - and where not!' },
];

const people = [
  { name: 'You', color: 'bg-purple-500' },
  { name: 'Anonymous 1', color: 'bg-blue-500' },
  { name: 'Anonymous 2', color: 'bg-yellow-500' },
  { name: 'Anonymous 3', color: 'bg-green-500' },
];

export default FeedbackSection;
