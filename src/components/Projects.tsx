import { Github, ExternalLink, ShoppingCart, Truck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GroShop',
      description: 'A modern UI/UX grocery shopping application designed with Figma. Features intuitive navigation, product categorization, and a seamless checkout experience.',
      icon: ShoppingCart,
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      github: 'https://github.com/aasmitha01',
      demo: '#',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Fleet Management Application',
      description: 'A comprehensive fleet management system for tracking vehicles, maintenance schedules, and driver assignments. Built with React and Node.js.',
      icon: Truck,
      technologies: ['React', 'Node.js', 'Express', 'Database'],
      github: 'https://github.com/aasmitha01',
      demo: '#',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                  <Icon className="text-white" size={80} strokeWidth={1.5} />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-slate-700"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
