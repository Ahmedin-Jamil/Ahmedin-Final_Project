import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "RESTful APIs", level: 80 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 75 }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-6">
              <h3 className="text-xl font-medium mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
