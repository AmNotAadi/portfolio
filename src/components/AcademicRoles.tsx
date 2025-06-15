import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface Role {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
}

const roles: Role[] = [
  {
    id: 1,
    title: "Assistant Professor",
    institution: "SVVV University",
    period: "2020 - Present",
    description: "Teaching undergraduate and graduate courses in Computer Science, focusing on Data Structures, Algorithms, and Machine Learning."
  },
  {
    id: 2,
    title: "Research Associate",
    institution: "IIT Indore",
    period: "2018 - 2020",
    description: "Conducted research in the field of Wireless Communication and Signal Processing, published multiple papers in reputed journals."
  },
  {
    id: 3,
    title: "Teaching Assistant",
    institution: "IIT Indore",
    period: "2015 - 2018",
    description: "Assisted in teaching various courses and conducted laboratory sessions for undergraduate students."
  }
];

const AcademicRoles: React.FC = () => {
  return (
    <section id="academic-roles" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">Academic Roles</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#374151] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BriefcaseIcon className="h-8 w-8 text-[#3B82F6]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-[#F9FAFB]">{role.title}</h3>
                      <span className="text-[#3B82F6]">{role.period}</span>
                    </div>
                    <p className="text-[#D1D5DB] mb-2">{role.institution}</p>
                    <p className="text-[#9CA3AF]">{role.description}</p>
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