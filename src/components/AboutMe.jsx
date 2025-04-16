import React, { useEffect } from 'react';
import { initScrollAnimation } from '../script';

const AboutMe = () => {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 animate-on-scroll">About Me</h2>
        <div className="md:flex md:space-x-8 items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="bg-blue-600 h-64 w-64 rounded-full mx-auto flex items-center justify-center text-white text-6xl font-bold">
              AP
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mt-4 animate-on-scroll" style={{transitionDelay: '0.4s'}}>
              I am a passionate web developer with a focus on building efficient and user-friendly applications.
              With a strong foundation in modern web technologies, I strive to create seamless experiences that
              solve real-world problems.
            </p>
            <p className="text-lg mt-4 animate-on-scroll" style={{transitionDelay: '0.6s'}}>
              My journey in web development began with a curiosity about how websites work, and has evolved into
              a professional career where I continuously learn and adapt to new technologies and methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
