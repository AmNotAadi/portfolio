import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Digital Signal Processing",
    level: 95,
    description: "Expert in DSP algorithms, filter design, and signal analysis"
  },
  {
    name: "Blockchain Technology",
    level: 90,
    description: "Deep expertise in blockchain architecture and smart contracts"
  },
  {
    name: "Non-Orthogonal Multiple Access",
    level: 85,
    description: "Advanced research in NOMA techniques and optimization"
  },
  {
    name: "Quantum Cryptography",
    level: 88,
    description: "Specialized in quantum key distribution and post-quantum cryptography"
  },
  {
    name: "Optical Communication",
    level: 92,
    description: "Expert in optical networks and fiber communication systems"
  }
];

const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">Technical Skills</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#F9FAFB]">{skill.name}</h3>
                  <span className="text-[#3B82F6] font-medium">{skill.level}%</span>
                </div>

                <div className="h-2 bg-[#374151] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-[#3B82F6] rounded-full"
                  />
                </div>

                {/* Description that appears on hover */}
                <div className="mt-2 text-sm text-[#D1D5DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills; 