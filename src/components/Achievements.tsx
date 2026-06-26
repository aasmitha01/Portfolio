import { Award, Trophy, Star, Code2 , GraduationCap} from 'lucide-react';

const Achievements = () => {
  const achievements = [
  {
    title: 'CodeChef Diamond Streak Badge',
    description: 'Maintained a 100-day coding streak on CodeChef, demonstrating consistency and dedication to problem-solving.',
    icon: Trophy,
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    title: '250+ Problems Solved',
    description: 'Solved 250+ coding problems across CodeChef, HackerRank, and LeetCode, strengthening DSA and problem-solving skills.',
    icon: Code2,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Masai Full Stack Certification',
    description: 'Completed Full Stack Web Development training covering React.js, Node.js, Express.js, Firebase, Supabase, and project development.',
    icon: Award,
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Java Internship Completion',
    description: 'Successfully completed a Java Internship and developed projects including a To-Do List Application and Expense Tracker.',
    icon: GraduationCap,
    gradient: 'from-blue-600 to-cyan-600',
  },
];

  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`bg-gradient-to-br ${achievement.gradient} p-4 rounded-full`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Continuously improving coding skills and participating in competitive programming challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
