import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocumentIcon } from '@heroicons/react/24/outline';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  doi?: string;
  abstract: string;
  citations: number;
  category: 'journal' | 'conference' | 'book';
}

const publications: Publication[] = [
  {
    id: "1",
    title: "Development of Quantum Cryptographic Techniques for Enhancing Security",
    authors: ["Swapnil Jain", "Rajesh K Shukla", "Jayant Shukla"],
    journal: "International Journal for Information Technology and knowledge management",
    year: "2010",
    doi: "ISSN No. 0973-4414",
    abstract: "Research on quantum cryptographic techniques for enhancing security in communication systems.",
    citations: 0,
    category: "journal"
  },
  {
    id: "2",
    title: "Study of various quantum state attacks in quantum key distribution system (QKD)",
    authors: ["Swapnil Jain", "Dr. Bharat Mishra", "Dr. T.K. Bandopadhyay"],
    journal: "International Journal on Emerging Technology",
    year: "2011",
    doi: "ISSN No. 0975-8364",
    abstract: "Analysis of quantum state attacks in quantum key distribution systems.",
    citations: 0,
    category: "journal"
  },
  {
    id: "3",
    title: "Enhancement of QoS in Mobile Network through Channel Allocation using Software Agents",
    authors: ["Nitin Muchhal", "Swapnil Jain", "Yogesh Sharma"],
    journal: "International Journal of Computer Science Issues",
    year: "2011",
    doi: "ISSN No. 16940784",
    abstract: "Research on improving Quality of Service in mobile networks through software agent-based channel allocation.",
    citations: 0,
    category: "journal"
  },
  {
    id: "4",
    title: "QXNOR algorithm of quantum cryptographic key exchange for data security",
    authors: ["Swapnil Jain", "Dr. Bharat Mishra", "Dr. T.K. Bandopadhyay"],
    journal: "International Journal of Advance in Communication Engineering",
    year: "2012",
    doi: "ISSN No. 0975-6094",
    abstract: "Development of QXNOR algorithm for quantum cryptographic key exchange.",
    citations: 0,
    category: "journal"
  },
  {
    id: "5",
    title: "Simulation of QX-NOR algorithm of quantum cryptographic key exchange using VHDL",
    authors: ["Swapnil Jain", "Dr. Bharat Mishra", "Dr. T.K. Bandopadhyay"],
    journal: "International Journal of Electrical, Electronics & Telecommunication Engineering",
    year: "2013",
    doi: "ISSN No. 2051-3240",
    abstract: "VHDL implementation of QX-NOR algorithm for quantum cryptographic key exchange.",
    citations: 0,
    category: "journal"
  },
  {
    id: "6",
    title: "Review Paper on Fast DHT algorithm using Vedic Mathematics",
    authors: ["Shirali Parsai", "Swapnil Jain", "Jyoti Dangi"],
    journal: "International Journal of Computer Applications",
    year: "2015",
    doi: "Volume 120 number 8",
    abstract: "Review of Fast Discrete Hartley Transform algorithm implementation using Vedic Mathematics.",
    citations: 0,
    category: "journal"
  },
  {
    id: "7",
    title: "VHDL implementation of Discrete Hartley Transform using Urdhwa multiplier",
    authors: ["Shirali Parsai", "Swapnil Jain", "Jyoti Dangi"],
    journal: "IEEE Bombay Section Symposium (IBSS)",
    year: "2015",
    doi: "10.1109/IBSS.2015.7456665",
    abstract: "Implementation of Discrete Hartley Transform using Urdhwa multiplier in VHDL.",
    citations: 0,
    category: "conference"
  },
  {
    id: "8",
    title: "A Review on Noise Reduction of Echo Cardio graphic Images based on Temporal Information",
    authors: ["Archana Sharma", "Swapnil Jain"],
    journal: "International Journal of Computer Applications",
    year: "2016",
    doi: "Volume 151 - Number 11",
    abstract: "Review of noise reduction techniques for echocardiographic images using temporal information.",
    citations: 0,
    category: "journal"
  },
  {
    id: "9",
    title: "Weighted Guided Image Filtering-A Survey",
    authors: ["Nidhi Sen", "Akhilesh Jain", "Swapnil Jain"],
    journal: "International Journal of Computer Applications",
    year: "2016",
    doi: "Volume 156 - Number 10",
    abstract: "Comprehensive survey of weighted guided image filtering techniques.",
    citations: 0,
    category: "journal"
  },
  {
    id: "10",
    title: "Review of Wide Bandwidth Low Power Low NOISE Amplifier for Modern Wireless Communication",
    authors: ["Bhawna Prajapati", "Swapnil Jain", "Braj Bihari"],
    journal: "International Journal of Computer Applications",
    year: "2016",
    doi: "Volume 137 number 14",
    abstract: "Review of low noise amplifier designs for modern wireless communication systems.",
    citations: 0,
    category: "journal"
  },
  {
    id: "11",
    title: "High Speed Area Efficient Diminished-1 Modulo 2 n+ 1 Multiplier",
    authors: ["Ahana Mishra", "Swapnil Jain", "Jyoti Dangi"],
    journal: "International Journal of Innovative Research in Computer and Communication Engineering",
    year: "2016",
    doi: "Vol. 4, Issue 12",
    abstract: "Design and implementation of high-speed area-efficient diminished-1 modulo multiplier.",
    citations: 0,
    category: "journal"
  },
  {
    id: "12",
    title: "Enhanced Resource Reservation Technique for Reduced Call Blocking in Femtocell Networks",
    authors: ["Amit Kumar", "Akhilesh Jain", "Swapnil Jain"],
    journal: "International Journal of Computer Applications",
    year: "2016",
    doi: "144(1):1-7",
    abstract: "Development of enhanced resource reservation technique for femtocell networks.",
    citations: 0,
    category: "journal"
  },
  {
    id: "13",
    title: "A review on comparative analysis of AODV and DSR protocols based on QoS in Wireless Ad-hoc Network",
    authors: ["Swapnil Jain", "Lalit Bhanwrela"],
    journal: "STM Journal of RTSRT",
    year: "2017",
    doi: "Vol. 4, Iss.3",
    abstract: "Comparative analysis of AODV and DSR protocols in wireless ad-hoc networks.",
    citations: 0,
    category: "journal"
  },
  {
    id: "14",
    title: "An Intelligent Road Transportation System using IoT-A New Approach",
    authors: ["Lalit Bhanwrela", "Swapnil Jain", "Pritesh Kumar Jain"],
    journal: "Advances in Computer Science and Information Technology (ACSIT)",
    year: "2017",
    doi: "Volume 4, Issue 3",
    abstract: "Development of intelligent road transportation system using IoT technologies.",
    citations: 0,
    category: "journal"
  },
  {
    id: "15",
    title: "Review on Massive MIMO",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "2nd Doctoral Conference on Interdisciplinary Research for Sustainable Development, SHODH-2018",
    year: "2018",
    abstract: "Comprehensive review of Massive MIMO technology.",
    citations: 0,
    category: "conference"
  },
  {
    id: "16",
    title: "Prevention of DDoS Attack through Trust Management System for VANET Environment",
    authors: ["Piyush Chouhan", "Swapnil Jain"],
    journal: "2nd international conference on computer networks and inventive communication technologies (ICCNCT-2019)",
    year: "2019",
    abstract: "Development of trust management system for preventing DDoS attacks in VANET.",
    citations: 0,
    category: "conference"
  },
  {
    id: "17",
    title: "Review on Non-Orthogonal Multiple Access (NOMA) for 5G",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "3rd Doctoral Conference on Innovation Invention & Industrialization, SHODH-2019",
    year: "2019",
    abstract: "Review of NOMA technology for 5G networks.",
    citations: 0,
    category: "conference"
  },
  {
    id: "18",
    title: "Review the technique for channel estimation and optimization of network key performance for Non-Orthogonal Multiple access (NOMA)",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "International Conference on Innovation in Engineering Science, Management and Technology ICIESMT-2019",
    year: "2019",
    abstract: "Review of channel estimation and network optimization techniques for NOMA.",
    citations: 0,
    category: "conference"
  },
  {
    id: "19",
    title: "Design and implementation of channel estimation for Non-Orthogonal Multiple access (NOMA)",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "International Journal of Scientific & Engineering Research -IJSER",
    year: "2019",
    doi: "ISSN 2229-5518",
    abstract: "Design and implementation of channel estimation techniques for NOMA systems.",
    citations: 0,
    category: "journal"
  },
  {
    id: "20",
    title: "A Review and Challenges of Vehicular Ad-Hoc Networks (VANETS)",
    authors: ["Prabhat Sharma", "Swapnil Jain"],
    journal: "3rd Doctoral Conference on Innovation Invention & Industrialization, SHODH-2019",
    year: "2019",
    abstract: "Review of challenges in Vehicular Ad-Hoc Networks.",
    citations: 0,
    category: "conference"
  },
  {
    id: "21",
    title: "Implementation of Cryptography based Security algorithm on Vehicular Ad-Hoc Network",
    authors: ["Prabhat Sharma", "Swapnil Jain"],
    journal: "International Conference on Sustainable and Innovative Solutions for Current Challenges in Engineering & Technology (ICSISCET-2019)",
    year: "2019",
    abstract: "Implementation of cryptographic security algorithms in VANET.",
    citations: 0,
    category: "conference"
  },
  {
    id: "22",
    title: "A Review on an Emerging Technology: Blockchain",
    authors: ["Kriti Patidar", "Swapnil Jain"],
    journal: "3rd Doctoral Conference on Innovation Invention & Industrialization, SHODH-2019",
    year: "2019",
    abstract: "Review of blockchain technology and its applications.",
    citations: 0,
    category: "conference"
  },
  {
    id: "23",
    title: "Blockchain and its Applications: A Systematic Survey",
    authors: ["Kriti Patidar", "Swapnil Jain"],
    journal: "TEQIP III Sponsored 2nd National Conference on Advanced Communication Technologies and Networks, MNIT Jaipur",
    year: "2019",
    abstract: "Systematic survey of blockchain technology and its applications.",
    citations: 0,
    category: "conference"
  },
  {
    id: "24",
    title: "Decentralized E-Voting Portal Using Blockchain",
    authors: ["Kriti Patidar", "Swapnil Jain"],
    journal: "10th International Conference on Computing, Communication And Networking Technologies (ICCCNT), IIT Kanpur",
    year: "2019",
    doi: "978-1-5386-5906-9",
    abstract: "Development of decentralized e-voting system using blockchain technology.",
    citations: 0,
    category: "conference"
  },
  {
    id: "25",
    title: "Implementation of Blockchain based distributed architecture for enhancing security and privacy in peer-to-peer networks",
    authors: ["Kriti Patidar", "Swapnil Jain"],
    journal: "10th International Advanced Computing Conference, Panaji, Goa",
    year: "2020",
    doi: "978-981-16-0401-0",
    abstract: "Implementation of blockchain-based distributed architecture for P2P networks.",
    citations: 0,
    category: "conference"
  },
  {
    id: "26",
    title: "Review of VANET Challenges and Protocol for Architecture Design and Intelligent Traffic System",
    authors: ["Prabhat Sharma", "Swapnil Jain"],
    journal: "2nd International Conference on Data, Engineering and Applications (IDEA), RGPV Bhopal",
    year: "2020",
    abstract: "Review of VANET challenges and protocols for intelligent traffic systems.",
    citations: 0,
    category: "conference"
  },
  {
    id: "27",
    title: "Multipath Routing for Internet of Vehicles using Master of Controller in Road Awareness (MRMOC-IOV)",
    authors: ["Piyush Chouhan", "Swapnil Jain"],
    journal: "International Journal of Computer Networks and Applications (IJCNA)",
    year: "2020",
    doi: "Volume 7 Issue 4",
    abstract: "Development of multipath routing protocol for Internet of Vehicles.",
    citations: 0,
    category: "journal"
  },
  {
    id: "28",
    title: "Efficient VLSI Architecture using Machine Learning Algorithms",
    authors: ["Arpit yadav", "Swapnil Jain"],
    journal: "International Journal Solid State Technology",
    year: "2020",
    doi: "Volume 63 Issue 2",
    abstract: "Design of efficient VLSI architecture using machine learning algorithms.",
    citations: 0,
    category: "journal"
  },
  {
    id: "29",
    title: "Implementation of channel estimation for Non-Orthogonal Multiple access (NOMA)",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "Mukt Shabd Journal",
    year: "2020",
    doi: "ISSN NO: 2347-3150",
    abstract: "Implementation of channel estimation techniques for NOMA systems.",
    citations: 0,
    category: "journal"
  },
  {
    id: "30",
    title: "Performance Improvement of VANET System Using ODMRP Protocol",
    authors: ["Prabhat Sharma", "Swapnil Jain"],
    journal: "Design Engineering (Toronto)",
    year: "2021",
    abstract: "Performance improvement of VANET systems using ODMRP protocol.",
    citations: 0,
    category: "journal"
  },
  {
    id: "31",
    title: "Implementation of Efficient Security Algorithm and Performance Improvement Through ODMRP Protocol in VANET Environment",
    authors: ["Prabhat Sharma", "Swapnil Jain"],
    journal: "Wireless Personal Communication Springer",
    year: "2021",
    abstract: "Implementation of security algorithms and performance improvement in VANET.",
    citations: 0,
    category: "journal"
  },
  {
    id: "32",
    title: "Resource Optimization of Downlink NOMA using Elman's Recurrent Neural Network Channel Estimation and Emperor Penguin Optimizer Power Allocation method",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "International Journal of Wireless and Mobile Computing (IJWMC) INDER SCIENCE",
    year: "2021",
    abstract: "Resource optimization in downlink NOMA using neural networks and optimization algorithms.",
    citations: 0,
    category: "journal"
  },
  {
    id: "33",
    title: "HMM-DTW Based Image Classification with Integrated Convolution Model to Achieve Higher Precision Model for Dental X-Ray Image",
    authors: ["Arpit Yadav", "Swapnil Jain"],
    journal: "Design Engineering (Toronto)",
    year: "2021",
    abstract: "Development of HMM-DTW based image classification for dental X-ray images.",
    citations: 0,
    category: "journal"
  },
  {
    id: "34",
    title: "Trusted Multipath Routing for Internet of Vehicles against DDoS assault using Brink Controller in Road Awareness (TMRBC-IOV)",
    authors: ["Piyush Chouhan", "Swapnil Jain"],
    journal: "Book chapter, Autonomous Vehicles Volume 1: Using Machine Intelligence",
    year: "2022",
    abstract: "Development of trusted multipath routing protocol for IoV against DDoS attacks.",
    citations: 0,
    category: "book"
  },
  {
    id: "35",
    title: "Harnessing Blockchain for Collective Defense: A Strategy for Detecting and Combating DDoS Attacks",
    authors: ["Kriti Patidar", "Swapnil Jain"],
    journal: "International Journal of Electrical and Electronics Engineering",
    year: "2024",
    abstract: "Development of blockchain-based strategy for DDoS attack detection and prevention.",
    citations: 0,
    category: "journal"
  },
  {
    id: "36",
    title: "Convolution Neural Network based Successive Interference Cancellation Method in Non-Orthogonal Multi Access Downlink System",
    authors: ["Shyam Gehlot", "Swapnil Jain"],
    journal: "Wireless Personal Communication Springer",
    year: "2024",
    abstract: "Implementation of CNN-based successive interference cancellation in NOMA downlink systems.",
    citations: 0,
    category: "journal"
  }
];

const Publications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPublications = publications.filter(pub => 
    selectedCategory === 'all' || pub.category === selectedCategory
  );

  return (
    <section id="publications" className="section-padding bg-[#1F2937]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-primary text-center mb-12 text-[#F9FAFB]">Publications</h2>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-[#3B82F6] p-1 bg-[#1F2937]">
              {['all', 'journal', 'conference'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#3B82F6] text-white'
                      : 'text-[#F9FAFB] hover:bg-[#3B82F6]/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((pub) => (
              <motion.div
                key={pub.id}
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
                        pub.category === 'journal'
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#F59E0B] text-white'
                      }`}>
                        {pub.category.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-4 line-clamp-2">
                      {pub.title}
                    </h3>
                    
                    <p className="text-sm text-[#1F2937] line-clamp-2">
                      {pub.authors.join(', ')}
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
                        {pub.title}
                      </h3>
                      
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-[#E5E7EB] mb-4">
                          {pub.authors.join(', ')}
                        </p>
                        
                        <div className="text-[#E5E7EB] space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Journal:</span> {pub.journal}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Year:</span> {pub.year}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">DOI:</span>{' '}
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F9FAFB] hover:underline"
                            >
                              {pub.doi}
                            </a>
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Citations:</span> {pub.citations}
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

export default Publications; 