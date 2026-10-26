import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const socialLinks = [
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/swapnil_jain2',
    icon: '📚'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=wyBzZvgAAAAJ',
    icon: '🎓'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org//0000-0002-1175-2860',
    icon: '🔬'
  },
  {
    name: 'Scopus',
    url: 'http://www.scopus.com/authid/detail.url?authorId=57215304800',
    icon: '📊'
  }
];

const Contact: React.FC = () => {

  return (
    <section id="contact" className="section-padding bg-[#E5E7EB]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#1F2937]">Contact</h2>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="h-6 w-6 text-[#3B82F6] flex-shrink-0" />
                    <div>
                      <p className="text-[#E5E7EB]">Email</p>
                      <a href="mailto:hodec@mpu.ac.in" className="block text-[#3B82F6] hover:text-[#10B981] transition-colors">
                        hodec@mpu.ac.in
                      </a>
                      <a href="mailto:swapniljain76@gmail.com" className="block text-[#3B82F6] hover:text-[#10B981] transition-colors">
                        swapniljain76@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Social Links</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#3B82F6] hover:text-[#10B981] transition-colors"
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Removed contact form as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 