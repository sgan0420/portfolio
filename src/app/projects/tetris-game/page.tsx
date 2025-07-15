"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaGamepad, FaCode, FaCube, FaPlay } from "react-icons/fa";
import { SiTypescript, SiReactivex, SiHtml5, SiCss3 } from "react-icons/si";
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

  // Project data - Tetris Game
  const project = {
    title: "Tetris Game",
    description: "A fully interactive, modern Tetris game built with TypeScript and RxJS, designed with reactive architecture that handles game logic, rendering, and user inputs in real time.",
    longDescription: (
      <div>
        <p className="mb-4">
          Built a fully interactive, modern Tetris game using TypeScript and RxJS, designed with a reactive architecture that handles game logic, rendering, and user inputs in real time. The game uses SVG elements to draw the grid, pieces, and overlays, giving it a clean, responsive UI without any game engine.
        </p>
        
        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Reactive Architecture with RxJS:</strong> Uses Observables to handle real-time game ticks, inputs, and rendering</li>
            <li><strong>Functional State Management:</strong> Every input (keyboard or click) updates the game state immutably</li>
            <li><strong>SVG Rendering:</strong> Tetrominoes and the game grid are rendered dynamically with SVG and DOM manipulation</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Game Features:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Hold queue for strategic piece management</li>
            <li>Next piece preview for planning moves</li>
            <li>Hard drop for quick piece placement</li>
            <li>Pause & restart functionality</li>
            <li>Comprehensive scoring and leveling system</li>
            <li>Level-based speed scaling with observable tick streams</li>
            <li>Wallkick system for enhanced gameplay</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Technical Implementation:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Observable streams for game tick management and input handling</li>
            <li>Immutable state updates using functional programming principles</li>
            <li>Dynamic SVG rendering for smooth animations</li>
            <li>Modular TypeScript architecture for maintainability</li>
            <li>Real-time reactive patterns for responsive gameplay</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
          <p className="text-blue-300">
            <strong>Reactive Programming:</strong> This project demonstrates advanced reactive programming concepts using RxJS Observables for real-time game state management and user interaction handling.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "RxJS", icon: SiReactivex, color: "text-purple-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "SVG", icon: FaCube, color: "text-green-400" },
      { name: "DOM API", icon: FaCode, color: "text-yellow-400" },
    ],
    githubUrl: "https://github.com/sgan0420/tetris-game" as string | null,
    liveUrl: "https://sgan0420.github.io/tetris-game/" as string | null, // GitHub Pages demo
    category: "Web Development",
    duration: "2 months",
    status: "Completed",
    period: "Sep 2023 - Oct 2023",
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
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {project.period}
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
                    <FaPlay className="w-5 h-5" />
                    Play Game
                  </motion.a>
                )}
                
                {/* Show message when links are not available */}
                {!project.githubUrl && !project.liveUrl && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">
                      🎮 <strong>Game Project</strong> - Repository and playable demo will be available soon
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Game Demo & Features */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Game Features & Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Game Screenshot */}
                <div className="space-y-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/tetris.png" 
                      alt="Tetris Game Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Modern Tetris with SVG Rendering
                  </p>
                </div>
                
                {/* Technical Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Technical Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Reactive Architecture</div>
                        <div className="text-gray-400 text-sm">RxJS Observables for real-time updates</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Immutable State</div>
                        <div className="text-gray-400 text-sm">Functional programming principles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">SVG Rendering</div>
                        <div className="text-gray-400 text-sm">Dynamic graphics without game engine</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div>
                        <div className="text-gray-300 font-medium">Modular Design</div>
                        <div className="text-gray-400 text-sm">TypeScript for type safety</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Game Features Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Game Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: FaCube, title: "Hold Queue", desc: "Strategic piece management" },
                  { icon: FaPlay, title: "Next Preview", desc: "Plan your moves ahead" },
                  { icon: FaGamepad, title: "Hard Drop", desc: "Quick piece placement" },
                  { icon: FaCode, title: "Wallkick", desc: "Enhanced rotation system" },
                  { icon: SiReactivex, title: "Reactive Scoring", desc: "Real-time score updates" },
                  { icon: SiTypescript, title: "Level Scaling", desc: "Dynamic difficulty progression" },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <Icon className="w-8 h-8 text-blue-400" />
                      <h3 className="text-gray-300 font-semibold">{feature.title}</h3>
                      <p className="text-gray-400 text-sm text-center">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
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
              <h2 className="text-2xl font-bold mb-4">Interested in Reactive Programming?</h2>
              <p className="text-gray-300 mb-6">
                This project showcases advanced reactive programming patterns using RxJS and TypeScript. 
                Let's discuss how reactive architecture can enhance your next web application!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                >
                  Discuss Reactive Solutions
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
