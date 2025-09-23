import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface Role {
  id: number;
  title: string;
  institution: string;
  period: string;
  description?: string;
  featured?: boolean;
}

const roles: Role[] = [
  {
    id: 0,
    title: "HOD, ECE Department",
    institution: "Sagar Institute of Research and Technology (SIRT), Bhopal",
    period: "Aug 2025 – Present",
    featured: true,
  },
  {
    id: 1,
    title: "Professor",
    institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
    period: "2016 – Aug 2025",
  },
  {
    id: 2,
    title: "Associate Professor",
    institution: "NRI Institute of Information Science & Technology, Bhopal",
    period: "Feb 2015 – Jul 2016",
  },
  {
    id: 3,
    title: "Associate Professor",
    institution: "Corporate Institute of Science & Technology, Bhopal",
    period: "Jun 2012 – Feb 2014",
  },
  {
    id: 4,
    title: "Assistant Professor",
    institution: "Sagar Institute of Science & Technology, Bhopal",
    period: "Oct 2009 – May 2012",
  },
  {
    id: 5,
    title: "Lecturer / Assistant Professor",
    institution: "NRI Institute of Information Science & Technology, Bhopal",
    period: "Feb 2002 – Sep 2009",
  },
];

const AcademicRoles: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-6 text-[#F9FAFB]">Experience</h2>

          <p className="text-center text-[#D1D5DB] max-w-3xl mx-auto mb-12">
            I have around 23 years of teaching experience, including 16.5 years after M.Tech. and 8.5 years after Ph.D.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 transition-shadow ${
                  role.featured
                    ? 'bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] shadow-[0_10px_30px_rgba(59,130,246,0.5)] border border-[#60A5FA]'
                    : 'bg-[#374151] hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BriefcaseIcon className={`h-8 w-8 ${role.featured ? 'text-white drop-shadow' : 'text-[#3B82F6]'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className={`text-xl font-semibold ${role.featured ? 'text-white' : 'text-[#F9FAFB]'}`}>{role.title}</h3>
                      <span className={`${role.featured ? 'text-white/90' : 'text-[#3B82F6]'}`}>{role.period}</span>
                    </div>
                    <p className={`${role.featured ? 'text-white/95' : 'text-[#D1D5DB]'}`}>{role.institution}</p>
                    {role.description && (
                      <p className={`${role.featured ? 'text-white/90' : 'text-[#9CA3AF]'} mt-2`}>{role.description}</p>
                    )}
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

export default AcademicRoles; 