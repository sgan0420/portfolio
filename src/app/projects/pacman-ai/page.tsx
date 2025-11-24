"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import {
  FaGithub,
  FaPython,
  FaBrain,
  FaDatabase,
  FaGamepad,
  FaTrophy,
} from "react-icons/fa";
import { SiTensorflow, SiNumpy } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Pac-Man AI
  const project = {
    title: "Pac-Man AI",
    description:
      "Intelligent AI agents designed to master the classic Pac-Man game using advanced algorithms including search, adversarial agents, and reinforcement learning.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-light mb-8">
            Designed intelligent AI agents to master the classic Pac-Man game
            through multiple AI paradigms. This comprehensive project implements
            various artificial intelligence techniques to create sophisticated
            agents capable of strategic gameplay, learning, and adaptation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Search Algorithms
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                A* algorithm for optimal pathfinding
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Custom heuristics for maze navigation
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Real-time search optimization
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                DFS & BFS implementation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Adversarial Agent
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Alpha-beta pruning for competition
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Minimax strategic decision making
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Multi-agent ghost scenarios
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Game tree exploration
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Reinforcement Learning
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Q-learning strategy adaptation
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Value Iteration for optimal policy
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Reward-based navigation
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Temporal difference learning
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Perceptron Model
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Custom perceptron from scratch
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Move prediction implementation
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Feature extraction & weights
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Real-time decision making
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
            <strong className="text-black dark:text-white font-medium">
              Academic Project:
            </strong>{" "}
            This project demonstrates mastery of fundamental AI concepts through
            practical implementation in a classic gaming environment.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "AI Search", icon: FaBrain },
      { name: "Q-Learning", icon: FaDatabase },
      { name: "Perceptron", icon: SiNumpy },
      { name: "Game AI", icon: FaGamepad },
      { name: "Algorithms", icon: SiTensorflow },
    ],
    githubUrl: null as string | null, // Repository not yet public
    liveUrl: null as string | null, // Demo not yet deployed
    category: "AI/ML",
    duration: "2 months",
    status: "Completed",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <div className="mb-12">
            <BackButton href="/projects" text="Back to Projects" />
          </div>

          {/* Project Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                {project.category}
              </span>
              <span className="px-4 py-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                {project.duration}
              </span>
              <span className="px-4 py-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                {project.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-200 dark:border-gray-800 text-black dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    View Demo
                  </a>
                )}

                {/* Show message when links are not available */}
                {!project.githubUrl && !project.liveUrl && (
                  <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
                      📚 <strong>Academic Project</strong> - Repository and demo
                      will be available soon
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Demo & Resources */}
          <div className="mb-24 space-y-12">
            <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src="/pacman.png"
                alt="Pac-Man AI Game Interface"
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
                <h3 className="text-xl font-light mb-6">
                  AI Techniques Implemented
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                        Search Algorithms
                      </div>
                      <div className="text-gray-400 text-sm font-light">
                        A*, Heuristics, Pathfinding
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                        Adversarial AI
                      </div>
                      <div className="text-gray-400 text-sm font-light">
                        Alpha-Beta Pruning, Minimax
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                        Reinforcement Learning
                      </div>
                      <div className="text-gray-400 text-sm font-light">
                        Q-Learning, Value Iteration
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                        Neural Networks
                      </div>
                      <div className="text-gray-400 text-sm font-light">
                        Custom Perceptron Model
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col justify-center">
                <h3 className="text-xl font-light mb-4">Academic Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light mb-6">
                  This project was developed as part of advanced coursework in
                  Artificial Intelligence. My implementation achieved
                  exceptional performance in the competitive tournament.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black dark:text-white font-medium">
                    <FaTrophy className="w-5 h-5 text-yellow-500" />
                    <span>
                      1st Place - Pac-Man AI Challenge (MY & AU Campuses)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-black dark:text-white font-medium">
                    <FaBrain className="w-5 h-5" />
                    <span>High Distinction Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="text-2xl font-light mb-8 text-center">
              Technologies & Algorithms
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-2 border border-gray-200 dark:border-gray-800 rounded-full"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-24">{project.longDescription}</div>

          {/* Call to Action */}
          <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-24">
            <h2 className="text-3xl font-light mb-6">
              Interested in AI & Machine Learning?
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI can solve complex problems in your
              domain!
            </p>
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                Explore AI Solutions
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
