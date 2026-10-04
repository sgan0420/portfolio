export interface PortfolioProject {
  id: number;
  title: string;
  slug: string;
  org: string | null;
  description: string;
  image: string | null;
  category: string;
  group: string;
  technologies: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 10,
    title: "Kata",
    slug: "kata",
    org: "OpenMarket",
    description:
      "An AI coding assistant inside OpenMarket. Describe an indicator in plain English and Kata writes it in kScript, so traders who don't code can build their own. Built single-handedly at Trontal.",
    image: "/kata.png",
    category: "AI Assistant",
    group: "AI & ML",
    technologies: ["LLMs", "kScript", "TypeScript", "Vue 3"],
  },
  {
    id: 9,
    title: "Exchange Integrations",
    slug: "exchange-integrations",
    org: "OpenMarket",
    description:
      "Trading integrations connecting OpenMarket to Binance and Bybit (centralized) and Hyperliquid (decentralized). Sole developer at Trontal.",
    image: "/exchange-integrations.png",
    category: "Trading Integration",
    group: "Fintech",
    technologies: ["Binance", "Bybit", "Hyperliquid", "TypeScript"],
  },
  {
    id: 8,
    title: "Project Atom",
    slug: "project-atom",
    org: null,
    description:
      "A gesture-controlled 3D robot inspired by Real Steel. Control an animated robot in real-time using hand gestures via webcam. Built with Ursina/Panda3D, MediaPipe, and OpenCV.",
    image: "/project-atom.png",
    category: "Computer Vision / AI",
    group: "AI & ML",
    technologies: [
      "Python",
      "Ursina/Panda3D",
      "MediaPipe/TensorFlow",
      "OpenCV",
    ],
  },
  {
    id: 7,
    title: "Blockchain Treasure Hunt",
    slug: "blockchain-treasure-hunt",
    org: null,
    description:
      "A decentralized treasure hunt game on Base (Ethereum L2). Players dig to find hidden treasure and win ETH. Full-stack Web3 with smart contracts, Wagmi, and MetaMask integration.",
    image: "/blockchain-treasure-hunt.png",
    category: "Web3 / Blockchain",
    group: "Web3",
    technologies: ["Solidity", "Hardhat", "Next.js", "Wagmi"],
  },
  {
    id: 5,
    title: "BTC Trading Chart",
    slug: "btc-trading-chart",
    org: null,
    description:
      "A real-time Bitcoin trading chart application inspired by TradingView. Features live price updates via Binance API, interactive candlestick/line charts, and responsive design.",
    image: "/btc-chart.png",
    category: "Web Application",
    group: "Fintech",
    technologies: ["Vue 3", "Vite", "ApexCharts", "Binance API"],
  },
  {
    id: 1,
    title: "AI Chatbot Platform",
    slug: "ai-chatbot",
    org: null,
    description:
      "An AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots using document upload and RAG techniques with FAISS vector database.",
    image: "/ai-chatbot.png",
    category: "AI/ML",
    group: "AI & ML",
    technologies: ["React", "Flask", "OpenAI API", "RAG", "FAISS", "Vector DB"],
  },
  {
    id: 2,
    title: "Chrome Extension - Quickie",
    slug: "chrome-extension-quickie",
    org: null,
    description:
      "A one-click Chrome toolbox that offers instant access to Chrome's most useful actions. From tab management and history to site settings, downloads, and QR code generation.",
    image: "/quickie.png",
    category: "Web Extension",
    group: "Tools & games",
    technologies: ["JavaScript", "HTML", "CSS", "Chrome API"],
  },
  {
    id: 3,
    title: "Pac-Man AI",
    slug: "pacman-ai",
    org: null,
    description:
      "Intelligent AI agents designed to master the classic Pac-Man game using search algorithms, adversarial agents, reinforcement learning, and custom perceptron models.",
    image: "/pacman.png",
    category: "AI/ML",
    group: "AI & ML",
    technologies: ["Python", "AI Search", "Q-Learning", "Perceptron"],
  },
  {
    id: 4,
    title: "Tetris Game",
    slug: "tetris-game",
    org: null,
    description:
      "A fully interactive, modern Tetris game built with TypeScript and RxJS using reactive architecture. Features real-time game logic, SVG rendering, and immutable state management.",
    image: "/tetris.png",
    category: "Interactive Game",
    group: "Tools & games",
    technologies: ["TypeScript", "RxJS", "HTML", "CSS", "SVG"],
  },
  {
    id: 6,
    title: "Patlytics Infringement Checker",
    slug: "patlytics-infringement-checker",
    org: null,
    description:
      "An AI-powered patent infringement analysis tool that leverages GPT-4o to analyze patent claims against company products, detecting potential infringements with high accuracy.",
    image: null,
    category: "AI & Legal Tech",
    group: "AI & ML",
    technologies: ["React", "Flask", "OpenAI", "MongoDB", "Docker"],
  },
];
