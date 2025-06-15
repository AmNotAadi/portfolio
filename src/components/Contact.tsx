import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const socialLinks = [
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Swapnil-Jain',
    icon: '📚'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=YOUR_ID',
    icon: '🎓'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/YOUR_ID',
    icon: '🔬'
  },
  {
    name: 'Scopus',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=YOUR_ID',
    icon: '📊'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="h-6 w-6 text-[#3B82F6] flex-shrink-0" />
                    <div>
                      <p className="text-[#E5E7EB]">Email</p>
                      <a href="mailto:swapnil.jain@svvv.edu.in" className="text-[#3B82F6] hover:text-[#10B981] transition-colors">
                        swapnil.jain@svvv.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-6 w-6 text-[#3B82F6] flex-shrink-0" />
                    <div>
                      <p className="text-[#E5E7EB]">Location</p>
                      <p className="text-[#E5E7EB]">
                        Shri Vaishnav Vidyapeeth Vishwavidyalaya,<br />
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Social Links</h3>
                
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/swapnil-jain-123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:text-[#10B981] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:text-[#10B981] transition-colors"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#E5E7EB] text-[#1F2937] focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#E5E7EB] text-[#1F2937] focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#E5E7EB] text-[#1F2937] focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#10B981] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 