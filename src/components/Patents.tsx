import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocumentIcon } from '@heroicons/react/24/outline';

interface Patent {
  id: string;
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  status: string;
  description: string;
}

const patents: Patent[] = [
  {
    id: "1",
    title: "A Method for Adaptive Communication between different smart IOT devices in 5G Communication platform",
    inventors: ["Swapnil Jain"],
    patentNumber: "202111003754",
    filingDate: "2021-02-12",
    status: "Granted",
    description: "A novel method for enabling adaptive communication between different smart IoT devices in 5G communication platforms."
  },
  {
    id: "2",
    title: "An Apparatus and System for De-noising Signals using Wavelets",
    inventors: ["Swapnil Jain"],
    patentNumber: "202221030720",
    filingDate: "2022-06-10",
    status: "Granted",
    description: "An innovative apparatus and system for signal de-noising using wavelet transforms."
  },
  {
    id: "3",
    title: "System for geo-based smart accident alert and rescue system using cloud IOT platform",
    inventors: ["Swapnil Jain"],
    patentNumber: "202221036181",
    filingDate: "2022-07-15",
    status: "Granted",
    description: "A comprehensive system for geo-based smart accident alert and rescue using cloud IoT platform."
  },
  {
    id: "4",
    title: "Multi disease prediction system using advanced artificial intelligence technique",
    inventors: ["Swapnil Jain"],
    patentNumber: "202321079116",
    filingDate: "2023-12-15",
    status: "Granted",
    description: "An advanced multi-disease prediction system utilizing artificial intelligence techniques."
  }
];

const Patents: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="patents" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">Patents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent) => (
              <motion.div
                key={patent.id}
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
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#3B82F6] text-white">
                        PATENT
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-4 line-clamp-2">
                      {patent.title}
                    </h3>
                    
                    <p className="text-sm text-[#1F2937] line-clamp-2">
                      {patent.inventors.join(', ')}
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
                        {patent.title}
                      </h3>
                      
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-[#E5E7EB] mb-4">
                          {patent.description}
                        </p>
                        
                        <div className="text-[#E5E7EB] space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Inventors:</span> {patent.inventors.join(', ')}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Patent Number:</span> {patent.patentNumber}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Filing Date:</span> {patent.filingDate}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Status:</span>{' '}
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              patent.status === 'granted'
                                ? 'bg-[#10B981] text-white'
                                : 'bg-[#F59E0B] text-white'
                            }`}>
                              {patent.status.toUpperCase()}
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

export default Patents; 