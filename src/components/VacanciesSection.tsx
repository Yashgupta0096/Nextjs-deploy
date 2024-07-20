'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VacanciesSection = () => {
  const vacancies = [
    {
      title: 'Senior Full-Stack Engineer',
      details: ['Full-time position', 'Berlin or remote', '€65-85k, 0.5-1.50% equity share options'],
    },
    {
      title: 'Senior Designer',
      details: ['Full-time position', 'Berlin or remote', '€40-55k, 0.25-0.50% equity share options'],
    },
    {
      title: 'Superstar Intern',
      details: ['Full-time position', 'Berlin or remote', '€20-24k, 0.5-1.50% equity share options'],
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Open vacancies</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          {vacancies.map((vacancy, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:bg-yellow-200"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">{vacancy.title}</h3>
                <ul className="mt-4 text-left text-gray-700 space-y-2">
                  {vacancy.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="mt-4 py-2 px-4 bg-black text-white rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                See details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <img src="/assets/logo.png" alt="Ahead logo" className="w-16 h-16" />
        <p className="mt-4">Auguststraße 26, 10117 Berlin</p>
        <p className="mt-2">hi@ahead-app.com</p>
        <div className="mt-4">
          <a href="https://apps.apple.com/app/ahead" target="_blank" rel="noopener noreferrer">
            <img src="/assets/ghost.png" alt="App Store badge" className="w-32" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VacanciesSection;
