import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'Java Intern',
    company: 'VaultOfCodes',
    duration: 'August 2025 - September 2025',
    location: 'Remote',
    points: [
      'Developed Java-based applications using Core Java and OOP principles',
      'Built projects including a To-Do List Application and Expense Tracker',
      'Participated in debugging and software development activities',
      'Used Git and GitHub for version control and collaboration',
    ],
    skills: ['Java', 'OOP', 'Git', 'GitHub', 'Problem Solving'],
  },
  {
    title: 'Data Analytics Virtual Intern',
    company: 'Deloitte (Forage)',
    duration: '2025',
    location: 'Remote',
    points: [
      'Completed real-world data analytics tasks and business case simulations',
      'Analyzed datasets to identify trends and generate business insights',
      'Worked with data visualization and reporting techniques',
      'Strengthened analytical thinking and problem-solving skills',
    ],
    skills: [
      'Data Analytics',
      'Data Visualization',
      'Business Insights',
      'Problem Solving',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Internships & Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-lg">
                  <Briefcase className="text-white" size={32} />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    {exp.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-blue-500 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <p className="text-gray-400">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;