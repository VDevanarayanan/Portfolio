import React, { useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Movie-WishList",
      description:
        "A full-stack Movie Wish List Application built with React, Node.js, and MongoDB. Users can search for their desired movie and add it to their Favorites list",
      image:
        "https://github.com/VDevanarayanan/Portfolio/blob/main/src/components/images/Nude%202025-06-18%20at%203.13.00%E2%80%AFPM.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/VDevanarayanan/movie-wish-list",
      live: "https://movie-frontend-6p5h.onrender.com",
      featured: true,
    },
    {
      title: "D&D GPT Dungeon Master",
      description:
        "A GPT which lets users play dungeons and dragons without a human dungeon master.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TailWind CSS", "LLM", "TypeScript"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Ultimate Video Downloader",
      description:
        "A website which allows users to download videos from social media platforms like Youtube, Instagram, Twitter, Twitch, Facebook and 4 others",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "CSS3", "Flask", "yt-dlp"],
      github: "https://github.com/VDevanarayanan/Ultimate-Video-Downloader",
      live: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with interactive animations and modern design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/VDevanarayanan/Portfolio/tree/main",
      live: "https://portfolio-m5mp.onrender.com",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-purple-300">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.github}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600/50 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600/50 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-purple-300">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Code
                      size={24}
                      className="text-purple-400 group-hover:rotate-12 transition-transform duration-300"
                    />
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
