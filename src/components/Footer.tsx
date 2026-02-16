import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>by Aasmitha Tommandru</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aasmitha01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aasmitha-tommandru-222b57322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tommandruaasmitha@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
