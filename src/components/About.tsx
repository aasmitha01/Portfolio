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
Computer Science Engineering student and aspiring Full Stack Web Developer with hands-on experience in React.js, Node.js, Express.js, JavaScript, HTML, CSS, and modern database technologies. Passionate about building responsive, user-friendly web applications and creating efficient solutions that deliver a seamless user experience.                </p>

            <p className="text-gray-400 leading-relaxed">
              Completed Full Stack Web Development training and developed projects such as SpendSense, a personal finance tracking application, and NeuroFleetX, an AI-powered urban fleet and traffic intelligence system. Enthusiastic about problem-solving and continuous learning, with experience solving 250+ coding problems and strengthening skills in Data Structures & Algorithms, Java, and modern web development technologies.
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1hTU_Mb8i0jNxZOp6rjMt4uNc-RphBz4P/view?usp=sharing"
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
