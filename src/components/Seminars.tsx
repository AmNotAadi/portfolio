import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { DocumentIcon } from '@heroicons/react/24/outline';

interface Seminar {
  id: string;
  title: string;
  type: 'seminar' | 'fdp';
  date: string;
  venue: string;
  role: 'organizer' | 'participant';
  description: string;
}

const seminars: Seminar[] = [
  {
    id: "1",
    title: "Recent Trends in VLSI Design",
    type: "seminar",
    date: "2023-03-15",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Organized a seminar on recent trends in VLSI design, covering topics like low-power design, testing methodologies, and emerging technologies."
  },
  {
    id: "2",
    title: "Advanced Digital Signal Processing",
    type: "fdp",
    date: "2023-06-20",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Conducted a Faculty Development Program on advanced DSP techniques, including practical sessions on MATLAB implementation."
  },
  {
    id: "3",
    title: "IoT and Embedded Systems",
    type: "seminar",
    date: "2023-09-10",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Organized a seminar focusing on IoT applications and embedded systems design, with hands-on workshops on Arduino and Raspberry Pi."
  },
  {
    id: "4",
    title: "Machine Learning in Electronics",
    type: "fdp",
    date: "2023-11-05",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Conducted a Faculty Development Program on machine learning applications in electronics, covering neural networks and deep learning."
  },
  {
    id: "5",
    title: "Quantum Computing Workshop",
    type: "seminar",
    date: "2024-01-20",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Organized a workshop on quantum computing fundamentals and applications in electronics and communication."
  },
  {
    id: "6",
    title: "Advanced Communication Systems",
    type: "fdp",
    date: "2024-02-15",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Conducted a Faculty Development Program on advanced communication systems, including 5G and beyond technologies."
  },
  {
    id: "7",
    title: "VLSI Design Methodologies",
    type: "seminar",
    date: "2024-03-10",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Organized a seminar on modern VLSI design methodologies and tools, with focus on industry practices."
  },
  {
    id: "8",
    title: "Digital System Design",
    type: "fdp",
    date: "2024-04-05",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Conducted a Faculty Development Program on digital system design, covering FPGA implementation and verification techniques."
  },
  {
    id: "9",
    title: "Emerging Technologies in Electronics",
    type: "seminar",
    date: "2024-05-20",
    venue: "Department of Electronics, MITS Gwalior",
    role: "organizer",
    description: "Organized a seminar on emerging technologies in electronics, including AI, IoT, and quantum computing applications."
  }
];

const Seminars: React.FC = () => {
  return (
    <section id="seminars" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">Seminars & FDPs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seminars.map((seminar) => (
              <motion.div
                key={seminar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] perspective-1000 group"
              >
                <div className="relative w-full h-full transition-transform transform-style-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden bg-[#E5E7EB] rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <DocumentIcon className="h-6 w-6 text-[#3B82F6]" />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        seminar.type === 'seminar'
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#F59E0B] text-white'
                      }`}>
                        {seminar.type.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-4 line-clamp-2">
                      {seminar.title}
                    </h3>
                    
                    <p className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      seminar.role === 'organizer'
                        ? 'bg-[#3B82F6] text-white'
                        : 'bg-[#6B7280] text-white'
                    }`}>
                      {seminar.role}
                    </p>

                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-sm text-[#3B82F6]">
                        Hover to view details
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden bg-[#3B82F6] rounded-xl p-6 shadow-lg rotate-y-180">
                    <div className="h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-4 line-clamp-2">
                        {seminar.title}
                      </h3>
                      
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-[#E5E7EB] mb-4">
                          {seminar.description}
                        </p>
                        
                        <div className="text-[#E5E7EB] space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Date:</span> {seminar.date}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Venue:</span> {seminar.venue}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Role:</span>{' '}
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              seminar.role === 'organizer'
                                ? 'bg-[#10B981] text-white'
                                : 'bg-[#6B7280] text-white'
                            }`}>
                              {seminar.role.toUpperCase()}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-[#E5E7EB] mt-4">
                        Move mouse away to flip back
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Seminars; 