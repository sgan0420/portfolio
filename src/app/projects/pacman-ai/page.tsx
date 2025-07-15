"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaPython, FaBrain, FaDatabase, FaGamepad } from "react-icons/fa";
import { SiTensorflow, SiNumpy } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
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

  // Project data - Pac-Man AI
  const project = {
    title: "Pac-Man AI (Search, Adversarial & Reinforcement Learning)",
    description: "Intelligent AI agents designed to master the classic Pac-Man game using advanced algorithms including search, adversarial agents, and reinforcement learning.",
    longDescription: (
      <div>
        <p className="mb-4">
          Designed intelligent AI agents to master the classic Pac-Man game through multiple AI paradigms. This comprehensive project implements various artificial intelligence techniques to create sophisticated agents capable of strategic gameplay, learning, and adaptation.
        </p>
        
        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Search Algorithms:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Implemented A* algorithm for optimal pathfinding</li>
            <li>Developed custom heuristics for efficient maze navigation</li>
            <li>Optimized search strategies for real-time gameplay</li>
            <li>Multiple search variants including depth-first and breadth-first search</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Adversarial Agent:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Alpha-beta pruning implementation for competitive gameplay</li>
            <li>Minimax algorithm for strategic decision making</li>
            <li>Multi-agent scenarios with ghost opponents</li>
            <li>Game tree exploration and evaluation functions</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Reinforcement Learning:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Q-learning implementation for dynamic strategy adaptation</li>
            <li>Value Iteration for optimal policy computation</li>
            <li>Reward-based navigation and learning from experience</li>
            <li>Temporal difference learning for real-time improvement</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Perceptron Model:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Built and trained perceptron from scratch (no external libraries)</li>
            <li>Custom implementation for move prediction</li>
            <li>Feature extraction and weight optimization</li>
            <li>Real-time decision making based on game state</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-4">
          <p className="text-purple-300">
            <strong>Academic Project:</strong> This project demonstrates mastery of fundamental AI concepts through practical implementation in a classic gaming environment.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "AI Search", icon: FaBrain, color: "text-purple-400" },
      { name: "Q-Learning", icon: FaDatabase, color: "text-blue-500" },
      { name: "Perceptron", icon: SiNumpy, color: "text-green-400" },
      { name: "Game AI", icon: FaGamepad, color: "text-red-400" },
      { name: "Algorithms", icon: SiTensorflow, color: "text-orange-400" },
    ],
    githubUrl: null as string | null, // Repository not yet public
    liveUrl: null as string | null, // Demo not yet deployed
    category: "AI/ML",
    duration: "2 months",
    status: "Completed",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white">
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <BackButton href="/projects" text="Back to Projects" />
          </motion.div>

          {/* Project Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              {project.description}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {project.duration}
              </span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                {project.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    View Demo
                  </motion.a>
                )}
                
                {/* Show message when links are not available */}
                {!project.githubUrl && !project.liveUrl && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">
                      📚 <strong>Academic Project</strong> - Repository and demo will be available soon
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Demo & Resources */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Game AI Demonstration</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Game Screenshot */}
                <div className="space-y-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/pacman.png" 
                      alt="Pac-Man AI Game Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Pac-Man AI in Action
                  </p>
                </div>
                
                {/* AI Techniques Overview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">AI Techniques Implemented</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Search Algorithms</div>
                        <div className="text-gray-400 text-sm">A*, Heuristics, Pathfinding</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Adversarial AI</div>
                        <div className="text-gray-400 text-sm">Alpha-Beta Pruning, Minimax</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Reinforcement Learning</div>
                        <div className="text-gray-400 text-sm">Q-Learning, Value Iteration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Neural Networks</div>
                        <div className="text-gray-400 text-sm">Custom Perceptron Model</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies & Algorithms</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {project.technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <Icon className={`w-8 h-8 ${tech.color}`} />
                      <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Interested in AI & Machine Learning?</h2>
              <p className="text-gray-300 mb-6">
                This project demonstrates my expertise in artificial intelligence, machine learning algorithms, and game AI development. 
                Let's discuss how AI can solve complex problems in your domain!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Explore AI Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
