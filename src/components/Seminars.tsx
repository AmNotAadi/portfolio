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
    title: "One-week Short Term Course: Data-Driven Analytics with Machine Learning",
    type: "fdp",
    date: "June 12–16, 2023",
    venue: "MNIT, Jaipur",
    role: "participant",
    description: "Attended a one-week short term course on Data-Driven Analytics with Machine Learning."
  },
  {
    id: "2",
    title: "Three Day International Conference on Cryptology",
    type: "seminar",
    date: "December 13–15, 2021",
    venue: "LNM Institute of Information Technology, Jaipur",
    role: "participant",
    description: "Attended a three day international conference on Cryptology."
  },
  {
    id: "3",
    title: "Three Day Faculty Development Program: NextG-2020",
    type: "fdp",
    date: "July 3–5, 2020",
    venue: "Dept. of ECE, Oriental Institute of Science and Technology, Bhopal",
    role: "participant",
    description: "Attended a three day Faculty Development Program on NextG-2020."
  },
  {
    id: "4",
    title: "One-week FDP: Blockchain Technology",
    type: "fdp",
    date: "December 3–9, 2019",
    venue: "E & ICT Academy, NIT Roorkee (held at IPEC Ghaziabad)",
    role: "participant",
    description: "Attended a one-week faculty development program on Blockchain Technology."
  },
  {
    id: "5",
    title: "One-week FDP: Security & Privacy",
    type: "fdp",
    date: "December 3–8, 2018",
    venue: "E & ICT Academy, NIT Warangal",
    role: "participant",
    description: "Attended a one-week faculty development program on Security & Privacy."
  },
  {
    id: "6",
    title: "One-week STTP: CMOS, Mixed Signal and RF VLSI Design",
    type: "seminar",
    date: "January 30 – February 4, 2017",
    venue: "IIT Kharagpur (NMEICT, MHRD)",
    role: "participant",
    description: "Attended a one-week short term training program on CMOS, mixed signal and RF VLSI design under NMEICT (MHRD)."
  },
  {
    id: "7",
    title: "Paper Presentation: Development of Quantum Cryptographic Techniques for Enhancing Security",
    type: "seminar",
    date: "January 9–10, 2010",
    venue: "International Conference on Recent Trends in Soft Computing and Information Technology, CIST Bhopal",
    role: "participant",
    description: "Presented a paper entitled 'Development of Quantum Cryptographic Techniques for Enhancing Security'."
  },
  {
    id: "8",
    title: "AICTE-ISTE One-week STTP: CMOS VLSI – Digital IC Design",
    type: "seminar",
    date: "June 23–27, 2008",
    venue: "Yeshwantrao Chavan College of Engineering, Nagpur",
    role: "participant",
    description: "Attended AICTE-ISTE approved short term training program on CMOS VLSI – Digital IC design."
  },
  {
    id: "9",
    title: "AICTE-ISTE STTP: Convergence of Social Choice and Individual Values",
    type: "seminar",
    date: "June 2–6, 2008",
    venue: "College of Management, NRIIST, Bhopal",
    role: "participant",
    description: "Attended AICTE-ISTE approved STTP on 'Convergence of social choice and individual values – the ethical dilemma of managing modern business organization'."
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