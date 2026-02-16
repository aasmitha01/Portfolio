import { Code, Server, Database, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['Supabase', 'Oracle SQL', 'PostgreSQL'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'UI/UX',
      icon: Palette,
      skills: ['Figma', 'Responsive Design', 'Wireframing'],
      color: 'from-indigo-600 to-blue-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-blue-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
