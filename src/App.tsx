import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Seminars from './components/Seminars';
import Contact from './components/Contact';
import TechnicalSkills from './components/TechnicalSkills';
import AcademicRoles from './components/AcademicRoles';
import SubjectsOfInterest from './components/SubjectsOfInterest';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2937] text-[#F9FAFB]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SubjectsOfInterest />
        <TechnicalSkills />
        <AcademicRoles />
        <Publications />
        <Patents />
        <Seminars />
        <Contact />
      </main>
    </div>
  );
};

export default App;
