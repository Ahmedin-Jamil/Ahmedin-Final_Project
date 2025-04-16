import React from 'react';

const Experience = () => {
  const experienceItems = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building responsive web applications",
        "Implement modern React architecture with Tailwind CSS for styling",
        "Collaborate with UX/UI designers to create intuitive user interfaces"
      ]
    },
    {
      position: "Web Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      responsibilities: [
        "Developed and maintained client websites using React and Node.js",
        "Optimized website performance and implemented SEO best practices",
        "Worked in an agile environment with daily stand-ups and sprint planning"
      ]
    },
    {
      position: "Junior Developer",
      company: "StartUp Hub",
      period: "2018 - 2020",
      responsibilities: [
        "Assisted in building web applications using HTML, CSS, and JavaScript",
        "Participated in code reviews and implemented feedback",
        "Learned and applied best practices in web development"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Experience</h2>
        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium">{item.position}</h3>
              <p className="text-gray-600">{item.company} | {item.period}</p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-gray-700">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
