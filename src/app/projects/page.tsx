"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";
import { FaGithub, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Placeholder projects data
  const projects = [
    {
      id: 1,
      title: "[Project Title 1 - Placeholder]",
      description: "A comprehensive web application built with modern technologies. This is placeholder content that will be replaced with your actual project description, highlighting key features and technical challenges solved.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
      githubUrl: "https://github.com/sgan0420/placeholder-repo-1",
      liveUrl: "https://your-project-1.vercel.app",
      category: "Web Development",
    },
    {
      id: 2,
      title: "[Project Title 2 - Placeholder]",
      description: "An innovative mobile-first solution that demonstrates advanced programming concepts. Placeholder description showcasing problem-solving skills and technical expertise in modern development practices.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "React", icon: FaReact, color: "text-blue-400" },
      ],
      githubUrl: "https://github.com/sgan0420/placeholder-repo-2",
      liveUrl: "https://your-project-2.vercel.app",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "[Project Title 3 - Placeholder]",
      description: "A cutting-edge application leveraging AI and machine learning technologies. This placeholder project showcases expertise in modern AI frameworks and data processing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: FaReact, color: "text-blue-400" },
      ],
      githubUrl: "https://github.com/sgan0420/placeholder-repo-3",
      liveUrl: "https://your-project-3.vercel.app",
      category: "AI/ML",
    },
  ];

  const categories = ["All", "Web Development", "Full Stack", "AI/ML", "Mobile"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white">
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight py-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my work and technical skills. Each project represents a unique challenge 
              and demonstrates different aspects of modern software development.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <HiCode className="w-16 h-16 text-gray-500" />
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                    >
                      <HiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                        >
                          <Icon className={`w-4 h-4 ${tech.color}`} />
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      <HiEye className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
              <p className="text-gray-300 mb-6">
                These are just a few examples of my work. I'm always working on new projects 
                and exploring cutting-edge technologies. Check out my GitHub for more!
              </p>
              <motion.a
                href="https://github.com/sgan0420"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
                View All Projects on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
