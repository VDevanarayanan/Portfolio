
import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-blue-700' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
    { name: 'CSS/Tailwind', level: 90, color: 'from-purple-400 to-purple-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Hello! I'm a Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating innovative web applications. 
                My journey in programming started with curiosity and has evolved into a career focused on 
                building user-centric solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I enjoy working with modern technologies and frameworks, always staying up-to-date with 
                the latest trends in web development. When I'm not coding, you can find me solving 
                algorithmic challenges or contributing to open-source projects.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Problem Solving', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-sm border border-purple-400/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100} relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
