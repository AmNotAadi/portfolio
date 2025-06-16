import React from 'react';
import { motion } from 'framer-motion';

const subjects = [
  'Analog Communication',
  'Digital Communication',
  'Information Theory & Coding',
  'Data Communication',
  'Optical Communication',
  'Digital Signal Processing',
  'Computer Networks',
  'Signals and Systems'
];

const SubjectsOfInterest = () => {
  return (
    <section id="subjects" className="py-16 bg-gray-800">
      <div className="container-custom">
        <h2 className="heading-primary text-center">Subjects of Interest</h2>
        
        <div className="relative overflow-hidden py-8">
          {/* First row - scrolling left */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {subjects.map((subject, index) => (
              <div
                key={`left-${index}`}
                className="inline-block mx-4 px-6 py-3 bg-blue-600 rounded-full text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {subject}
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div
            className="flex whitespace-nowrap mt-4"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {subjects.map((subject, index) => (
              <div
                key={`right-${index}`}
                className="inline-block mx-4 px-6 py-3 bg-blue-600 rounded-full text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {subject}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsOfInterest; 