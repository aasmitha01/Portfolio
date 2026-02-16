import { Award, Trophy, Star, Code2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'CodeChef Silver Badge',
      description: 'Achieved Silver Badge on CodeChef through consistent problem-solving and competitive programming',
      icon: Trophy,
      gradient: 'from-gray-400 to-gray-600',
    },
    {
      title: 'LeetCode 65+ Problems',
      description: 'Successfully solved over 65 coding problems on LeetCode covering data structures and algorithms',
      icon: Code2,
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'HackerRank Java Certification',
      description: 'Earned Java programming certification from HackerRank demonstrating proficiency in Java concepts',
      icon: Award,
      gradient: 'from-green-600 to-emerald-600',
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
