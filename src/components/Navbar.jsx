import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Ahmedin, Jamil Alamin</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition-colors">About</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-200 transition-colors">Education</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-200 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-200 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition-colors">Contact</button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
