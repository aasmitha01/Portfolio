import { FileText } from "lucide-react";
import profilePic from "../assets/portfolio.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20"></div>

              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-3 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Aasmitha Tommandru"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Full Stack Web Developer
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Computer Science undergraduate and aspiring Full Stack Web Developer
              skilled in React, Node.js, Java, and UI/UX design. Passionate about
              building responsive and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Experienced in frontend and backend technologies, database management
              with Supabase and Oracle SQL, and creating intuitive user interfaces
              using Figma.
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1M7qsm9BrTqzyBcpeQdNNk3gHGlx7vHEi/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
