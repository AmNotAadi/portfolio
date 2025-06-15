import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import tempProfile from '../assets/temp-profile.jpg';

const bio = `Dr. Swapnil Jain is an accomplished academician and researcher with extensive experience in Electronics and Communication Engineering. With a strong focus on Digital Signal Processing, Blockchain Technology, and Non-Orthogonal Multiple Access, he has made significant contributions to both teaching and research. His work spans across quantum cryptography and optical communication, making him a versatile expert in the field.`;

const education = [
  {
    degree: "Ph.D.",
    institution: "MGCGV, Chitrakoot",
    year: "2016",
    details: "Specialized in Digital Signal Processing and Wireless Communication"
  },
  {
    degree: "M.Tech. in Digital Communication",
    institution: "NRIIST, Bhopal",
    year: "2008",
    details: "Focused on Advanced Communication Systems and Signal Processing"
  },
  {
    degree: "Bachelor of Engineering (Electronics)",
    institution: "YCCE, Nagpur",
    year: "1998",
    details: "Comprehensive study of Electronics and Communication Engineering"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Image and basic info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#3B82F6]">
                <img
                  src={tempProfile}
                  alt="Dr. Swapnil Jain"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-[#F9FAFB]">Dr. Swapnil Jain</h3>
                <p className="text-[#D1D5DB]">Assistant Professor</p>
              </div>
            </motion.div>

            {/* Right column - Bio and education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Biography</h3>
                <p className="text-[#D1D5DB] leading-relaxed">
                  {bio}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#374151] rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-medium text-[#F9FAFB]">{edu.degree}</h4>
                        <span className="text-[#3B82F6]">{edu.year}</span>
                      </div>
                      <p className="text-[#D1D5DB]">{edu.institution}</p>
                      {edu.details && (
                        <p className="text-[#9CA3AF] mt-2">{edu.details}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 