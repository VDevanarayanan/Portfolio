import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Code } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              V.Devanarayanan
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-10">
            <span className="border-r-2 border-purple-400 animate-pulse pr-1">
              {displayText}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about creating beautiful, functional, and user-friendly
            applications. I love turning complex problems into simple, elegant
            solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/v-devanarayanan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/VDevanarayanan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
          >
            <Github
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </a>

          <a
            href="https://leetcode.com/u/Devacoder/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <Code
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LeetCode
            </span>
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("projects")}
          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
        >
          View My Work
          <ChevronDown
            size={20}
            className="ml-2 group-hover:translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
