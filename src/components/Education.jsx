import React from 'react';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      description: "Focused on software engineering, web development, and database management."
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      year: "2017",
      description: "Intensive 12-week program covering full-stack web development."
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      year: "2014 - 2018",
      description: "Advanced courses in mathematics and computer science."
    }
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Education</h2>
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-medium">{item.degree}</h3>
              <p className="text-gray-600">{item.institution} | {item.year}</p>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
