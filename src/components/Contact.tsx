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
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('https://formspree.io/f/mjkrrpbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        setFormData({
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
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

            {/* Contact Form */}
            <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
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

                {status.message && (
                  <div className={`text-sm ${
                    status.type === 'success' ? 'text-green-500' : 
                    status.type === 'error' ? 'text-red-500' : 
                    'text-blue-500'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#10B981] transition-colors"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
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