"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiCode } from "react-icons/hi";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDatabase, FaBrain, FaGamepad } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFlask, SiOpenai, SiNumpy, SiHtml5, SiCss3, SiReactivex } from "react-icons/si";

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

  // Projects data
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Platform",
      slug: "ai-chatbot",
      description: "An AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots using document upload and RAG techniques with FAISS vector database.",
      image: "/ai-chatbot.png",
      technologies: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Flask", icon: SiFlask, color: "text-white" },
        { name: "OpenAI API", icon: SiOpenai, color: "text-green-400" },
        { name: "RAG", icon: FaBrain, color: "text-pink-400" },
        { name: "FAISS", icon: SiNumpy, color: "text-blue-500" },
        { name: "Vector DB", icon: FaDatabase, color: "text-purple-400" },
      ],
      githubUrl: "https://github.com/sgan0420/chatbot",
      liveUrl: "https://chatbot-69x9.onrender.com/",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Chrome Extension - Quickie",
      slug: "chrome-extension-quickie",
      description: "A one-click Chrome toolbox that offers instant access to Chrome's most useful actions. From tab management and history to site settings, downloads, and QR code generation.",
      image: "/quickie.png",
      technologies: [
        { name: "JavaScript", icon: FaNodeJs, color: "text-yellow-400" },
        { name: "HTML", icon: FaReact, color: "text-orange-500" },
        { name: "CSS", icon: SiTailwindcss, color: "text-blue-400" },
        { name: "Chrome API", icon: FaReact, color: "text-green-500" },
      ],
      githubUrl: "https://github.com/sgan0420/extension-shortcut-launcher",
      liveUrl: "https://chromewebstore.google.com/detail/ddbehnlodocjgdmkeaaiedkkdlnhehkp?utm_source=item-share-cb",
      category: "Web Extension",
    },
    {
      id: 3,
      title: "Pac-Man AI",
      slug: "pacman-ai",
      description: "Intelligent AI agents designed to master the classic Pac-Man game using search algorithms, adversarial agents, reinforcement learning, and custom perceptron models.",
      image: "/pacman.png",
      technologies: [
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "AI Search", icon: FaBrain, color: "text-purple-400" },
        { name: "Q-Learning", icon: FaDatabase, color: "text-blue-500" },
        { name: "Perceptron", icon: FaReact, color: "text-green-400" },
      ],
      githubUrl: "https://github.com/sgan0420/pacman-ai",
      liveUrl: "https://your-pacman-ai-demo.vercel.app",
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Tetris Game",
      slug: "tetris-game",
      description: "A fully interactive, modern Tetris game built with TypeScript and RxJS using reactive architecture. Features real-time game logic, SVG rendering, and immutable state management.",
      image: "/tetris.png",
      technologies: [
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "RxJS", icon: SiReactivex, color: "text-purple-400" },
        { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS", icon: SiCss3, color: "text-blue-500" },
        { name: "SVG", icon: FaGamepad, color: "text-green-400" },
      ],
      githubUrl: "https://github.com/sgan0420/tetris-game",
      liveUrl: "https://sgan0420.github.io/tetris-game/",
      category: "Interactive Game",
    },
  ];

  const categories = ["All", "Web Development", "Web Extension", "Full Stack", "AI/ML", "Mobile"];

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

          {/* Play My Tetris Button */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.a
              href="https://sgan0420.github.io/tetris-game/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <FaGamepad className="w-6 h-6" />
              Play My Tetris Game
            </motion.a>
            <p className="text-gray-300 mt-2 text-sm">
              ⬆️ One of my favourite projects | Play on desktop | Refer to the Tetris Game card below for the details
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-800 overflow-hidden">
                    {project.image && !project.image.includes('placeholder') ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <HiCode className="w-16 h-16 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-medium">Click to view details</span>
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
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => {
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
                      {project.technologies.length > 3 && (
                        <div className="flex items-center px-3 py-1 bg-gray-800/50 rounded-full text-sm">
                          <span className="text-gray-400">+{project.technologies.length - 3} more</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
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
