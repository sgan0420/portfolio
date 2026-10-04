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
  FaCode,
  FaExchangeAlt,
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
      id: 10,
      title: "Kata",
      slug: "kata",
      org: "OpenMarket",
      description:
        "An AI coding assistant inside OpenMarket. Describe an indicator in plain English and Kata writes it in kScript, so traders who don't code can build their own. Built single-handedly at Trontal.",
      image: "/kata.png",
      technologies: [
        { name: "LLMs", icon: FaBrain },
        { name: "kScript", icon: FaCode },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Vue 3", icon: SiVuedotjs },
      ],
      category: "AI Assistant",
    },
    {
      id: 9,
      title: "Exchange Integrations",
      slug: "exchange-integrations",
      org: "OpenMarket",
      description:
        "Trading integrations connecting OpenMarket to Binance and Bybit (centralized) and Hyperliquid (decentralized). Sole developer at Trontal.",
      image: "/exchange-integrations.png",
      technologies: [
        { name: "Binance", icon: SiBinance },
        { name: "Bybit", icon: FaExchangeAlt },
        { name: "Hyperliquid", icon: FaCubes },
        { name: "TypeScript", icon: SiTypescript },
      ],
      category: "Trading Integration",
    },
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
        { name: "MediaPipe/TensorFlow", icon: FaHandPaper },
        { name: "OpenCV", icon: SiOpencv },
      ],
      category: "Computer Vision / AI",
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
    <div className="page-shell">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-heading"
        >
          <h1 className="page-title">Projects</h1>
          <p className="page-lead">
            A showcase of features I&apos;ve{" "}
            <span className="font-semibold">shipped in production</span> and my{" "}
            <span className="font-semibold">personal projects</span>. Each
            project represents a unique challenge and demonstrates different
            aspects of modern software development. Work from Ant International
            and iFAST is not displayed here due to confidentiality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                // Keep every card visible in the server-rendered HTML.
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="project-card group"
              >
                <div className="project-card-image relative aspect-[4/3] overflow-hidden">
                  {project.image && !project.image.includes("placeholder") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 motion-safe:group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : project.icon === FaRobot ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative motion-safe:group-hover:scale-105 transition-transform duration-500">
                        <FaRobot className="w-32 h-32 text-subtle" />
                        <FaHandPaper className="w-12 h-12 text-muted absolute -bottom-2 -right-2" />
                      </div>
                    </div>
                  ) : project.icon === FaEthereum ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative motion-safe:group-hover:scale-105 transition-transform duration-500">
                        <FaCubes className="w-36 h-36 text-gray-300 dark:text-gray-700" />
                        <FaEthereum className="w-16 h-16 text-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  ) : project.icon ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative motion-safe:group-hover:scale-105 transition-transform duration-500">
                        <FaShieldAlt className="w-36 h-36 text-gray-300 dark:text-gray-700" />
                        <FaCopyright className="w-16 h-16 text-muted absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <FaSearch className="w-10 h-10 text-muted absolute -bottom-1 -right-1" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiCode className="w-16 h-16 text-subtle" />
                    </div>
                  )}
                  {project.org && (
                    <div className="absolute top-4 left-4 project-org">
                      {project.org}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 project-category">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted font-normal mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 border border-line rounded-full text-sm text-muted"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <div className="px-3 py-1 border border-line rounded-full text-sm text-muted">
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
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-dashed border-line rounded-2xl p-8 flex flex-col justify-center items-center text-center h-full min-h-[400px]"
          >
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-normal mb-3">Coming Soon</h3>
            <p className="text-muted font-normal mb-6 leading-relaxed">
              I have many other exciting projects that I want to share with you!
              More project showcases are coming soon.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface rounded-full text-sm text-muted">
                In Progress
              </span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-line pt-24"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-normal mb-6">Want to see more?</h2>
            <p className="text-xl text-muted font-normal mb-8 leading-relaxed">
              These are just a few examples of my work. I&apos;m always working
              on new projects and exploring cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/sgan0420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300"
              >
                <FaGithub className="w-5 h-5" />
                View GitHub
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 button-secondary"
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
