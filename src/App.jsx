import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-xl mt-2">Web Developer & Designer</p>
      </header>
      <main>
        <div id="about">
          <AboutMe />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
