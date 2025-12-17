"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiCode } from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaBrain,
  FaGamepad,
  FaGithub,
  FaEnvelope,
  FaChartLine,
  FaCopyright,
  FaShieldAlt,
  FaSearch,
  FaEthereum,
  FaCubes,
  FaRobot,
  FaHandPaper,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiOpenai,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiReactivex,
  SiVuedotjs,
  SiVite,
  SiBinance,
  SiMongodb,
  SiDocker,
  SiSolidity,
  SiNextdotjs,
  SiPython,
  SiOpencv,
} from "react-icons/si";

const Projects = () => {
  // Projects data
  const projects = [
    {
      id: 8,
      title: "Project Atom",
      slug: "project-atom",
      description:
        "A gesture-controlled 3D robot inspired by Real Steel. Control an animated robot in real-time using hand gestures via webcam. Built with Ursina/Panda3D, MediaPipe, and OpenCV.",
      image: "/project-atom.png",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "Ursina/Panda3D", icon: FaRobot },
        { name: "MediaPipe", icon: FaHandPaper },
        { name: "OpenCV", icon: SiOpencv },
      ],
      category: "Computer Vision / 3D",
    },
    {
      id: 7,
      title: "Blockchain Treasure Hunt",
      slug: "blockchain-treasure-hunt",
      description:
        "A decentralized treasure hunt game on Base (Ethereum L2). Players dig to find hidden treasure and win ETH. Full-stack Web3 with smart contracts, Wagmi, and MetaMask integration.",
      image: "/blockchain-treasure-hunt.png",
      technologies: [
        { name: "Solidity", icon: SiSolidity },
        { name: "Hardhat", icon: FaCubes },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Wagmi", icon: FaEthereum },
      ],
      category: "Web3 / Blockchain",
    },
    {
      id: 5,
      title: "BTC Trading Chart",
      slug: "btc-trading-chart",
      description:
        "A real-time Bitcoin trading chart application inspired by TradingView. Features live price updates via Binance API, interactive candlestick/line charts, and responsive design.",
      image: "/btc-chart.png",
      technologies: [
        { name: "Vue 3", icon: SiVuedotjs },
        { name: "Vite", icon: SiVite },
        { name: "ApexCharts", icon: FaChartLine },
        { name: "Binance API", icon: SiBinance },
      ],
      category: "Web Application",
    },
    {
      id: 1,
      title: "AI Chatbot Platform",
      slug: "ai-chatbot",
      description:
        "An AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots using document upload and RAG techniques with FAISS vector database.",
      image: "/ai-chatbot.png",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Flask", icon: SiFlask },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "RAG", icon: FaBrain },
        { name: "FAISS", icon: SiNumpy },
        { name: "Vector DB", icon: FaDatabase },
      ],
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Chrome Extension - Quickie",
      slug: "chrome-extension-quickie",
      description:
        "A one-click Chrome toolbox that offers instant access to Chrome's most useful actions. From tab management and history to site settings, downloads, and QR code generation.",
      image: "/quickie.png",
      technologies: [
        { name: "JavaScript", icon: FaNodeJs },
        { name: "HTML", icon: FaReact },
        { name: "CSS", icon: SiTailwindcss },
        { name: "Chrome API", icon: FaReact },
      ],
      category: "Web Extension",
    },
    {
      id: 3,
      title: "Pac-Man AI",
      slug: "pacman-ai",
      description:
        "Intelligent AI agents designed to master the classic Pac-Man game using search algorithms, adversarial agents, reinforcement learning, and custom perceptron models.",
      image: "/pacman.png",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "AI Search", icon: FaBrain },
        { name: "Q-Learning", icon: FaDatabase },
        { name: "Perceptron", icon: FaReact },
      ],
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Tetris Game",
      slug: "tetris-game",
      description:
        "A fully interactive, modern Tetris game built with TypeScript and RxJS using reactive architecture. Features real-time game logic, SVG rendering, and immutable state management.",
      image: "/tetris.png",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "RxJS", icon: SiReactivex },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "SVG", icon: FaGamepad },
      ],
      category: "Interactive Game",
    },
    {
      id: 6,
      title: "Patlytics Infringement Checker",
      slug: "patlytics-infringement-checker",
      description:
        "An AI-powered patent infringement analysis tool that leverages GPT-4o to analyze patent claims against company products, detecting potential infringements with high accuracy.",
      image: null,
      icon: FaCopyright,
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Flask", icon: SiFlask },
        { name: "OpenAI", icon: SiOpenai },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Docker", icon: SiDocker },
      ],
      category: "AI & Legal Tech",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight mb-8">
            Projects
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
            A showcase of my{" "}
            <span className="font-semibold">personal projects</span>{" "}
            and technical skills. Each project represents a unique challenge and
            demonstrates different aspects of modern software development.
            Please note that professional industrial projects are not displayed
            here due to confidentiality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-black"
              >
                <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-900 overflow-hidden border-b border-gray-100 dark:border-gray-800">
                  {project.image && !project.image.includes("placeholder") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : project.icon === FaRobot ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <FaRobot className="w-32 h-32 text-gray-400 dark:text-gray-500" />
                        <FaHandPaper className="w-12 h-12 text-gray-600 dark:text-gray-300 absolute -bottom-2 -right-2" />
                      </div>
                    </div>
                  ) : project.icon === FaEthereum ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <FaCubes className="w-36 h-36 text-gray-300 dark:text-gray-700" />
                        <FaEthereum className="w-16 h-16 text-gray-600 dark:text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  ) : project.icon ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <FaShieldAlt className="w-36 h-36 text-gray-300 dark:text-gray-700" />
                        <FaCopyright className="w-16 h-16 text-gray-600 dark:text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <FaSearch className="w-10 h-10 text-gray-500 dark:text-gray-400 absolute -bottom-1 -right-1" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiCode className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-light mb-3 group-hover:underline underline-offset-4 decoration-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <div className="px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center h-full min-h-[400px]"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-light mb-3">Coming Soon</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light mb-6 leading-relaxed">
              I have many other exciting projects that I want to share with you!
              More project showcases are coming soon.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-500 dark:text-gray-400">
                In Progress
              </span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-24"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light mb-6">Want to see more?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light mb-8 leading-relaxed">
              These are just a few examples of my work. I&apos;m always working
              on new projects and exploring cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/sgan0420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity duration-300"
              >
                <FaGithub className="w-5 h-5" />
                View GitHub
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 dark:border-gray-800 text-black dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
