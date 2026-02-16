import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-lg">
                <Briefcase className="text-white" size={32} />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Java Intern</h3>
                  <p className="text-blue-400 font-medium text-lg">VaultOfCodes</p>
                </div>

                <div className="flex flex-wrap gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>August 2025 - September 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Remote</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-400">
                      Developed and maintained Java-based applications using core Java concepts and OOP principles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-400">
                      Collaborated with team members to design and implement software solutions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-400">
                      Participated in code reviews and debugging sessions to ensure code quality
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-400">
                      Gained hands-on experience with version control using Git and GitHub
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Java', 'OOP', 'Git', 'Problem Solving', 'Team Collaboration'].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
