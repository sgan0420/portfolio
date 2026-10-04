import Link from "next/link";
import { FaGithub, FaEthereum, FaCubes } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiSolidity, SiNextdotjs, SiTypescript } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  const project = {
    title: "Blockchain Treasure Hunt",
    description:
      "A decentralized treasure hunt game built on Base (Ethereum L2). Players dig on a 3x3 grid to find hidden treasure and win ETH prizes. Demonstrates full-stack blockchain development with smart contracts and Web3 frontend.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Built a complete decentralized application (dApp) from scratch,
            learning blockchain fundamentals, smart contract development, and
            Web3 frontend integration. The game features a trustless prize pool
            mechanism where all logic runs on-chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">
              Blockchain Skills Gained
            </h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Smart Contracts:</span> Wrote
                  Solidity contracts with state management and events
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Web3 Integration:</span>{" "}
                  Connected frontend using Wagmi/Viem and MetaMask
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">JSON-RPC:</span> Frontend to
                  blockchain node communication
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">ABI Encoding:</span> Function
                  call encoding/decoding
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">Technical Stack</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Solidity for smart contract development
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Hardhat for testing, compilation, and deployment
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Next.js & TypeScript for the frontend
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Wagmi/Viem for blockchain interactions
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Base Sepolia testnet for deployment
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">Key Learnings</h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Blockchain data storage: Contract state variables act as a
              decentralized database replicated across all nodes
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Transaction flow: From wallet signing to node validation to
              on-chain execution
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Gas economics: Understanding costs for reads (free) vs writes
              (costs gas)
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Layer 2 benefits: Using Base for faster and cheaper transactions
              while inheriting Ethereum security
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">
              Decentralized Architecture:
            </strong>{" "}
            No backend server needed! The smart contract IS the backend - it
            stores code, data, and handles all game logic. The frontend
            communicates directly with blockchain nodes via JSON-RPC.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "Solidity", icon: SiSolidity },
      { name: "Hardhat", icon: FaCubes },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Wagmi/Viem", icon: FaEthereum },
      { name: "Base L2", icon: FaEthereum },
    ],
    githubUrl: "https://github.com/sgan0420/blockchain-treasure-hunt",
    liveUrl: "https://blockchain-treasure-hunt.vercel.app/",
    explorerUrl:
      "https://sepolia.basescan.org/address/0xf1E5fc114176593d6090494682D0E2D745bC6B25",
    category: "Web3 / Blockchain",
    status: "Weekend Project",
  };

  return (
    <div className="page-shell">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-12">
            <BackButton href="/projects" text="Back to Projects" />
          </div>

          {/* Project Header */}
          <div className="project-detail-header text-center">
            <h1 className="text-5xl md:text-6xl font-normal tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-1.5 border border-line rounded-full text-sm text-muted">
                {project.category}
              </span>
              <span className="px-4 py-1.5 border border-line rounded-full text-sm text-muted">
                {project.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-secondary cursor-pointer"
                >
                  <HiExternalLink className="w-5 h-5" />
                  Play Game
                </a>
                <a
                  href={project.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-secondary cursor-pointer"
                >
                  <FaEthereum className="w-5 h-5" />
                  View on BaseScan
                </a>
              </div>
            </div>
          </div>

          {/* Game Preview */}
          <div className="mb-24">
            <div className="relative w-full bg-surface rounded-2xl overflow-hidden border border-line p-8">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-ink mb-4">
                  💎 Treasure Hunt
                </h3>
                <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto mb-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-surface rounded-lg flex items-center justify-center text-2xl border border-line hover:border-accent transition-colors"
                    >
                      {i === 4 ? "💎" : "?"}
                    </div>
                  ))}
                </div>
                <p className="text-subtle text-sm">
                  0.001 ETH per dig • Win 0.005 ETH
                </p>
                <p className="text-amber-700 dark:text-amber-400 text-xs mt-2">
                  ⚠️ Connect to Base Sepolia network
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="text-2xl font-normal mb-8 text-center">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-2 border border-line rounded-full"
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
          <div className="text-center border-t border-line pt-24">
            <h2 className="text-3xl font-normal mb-6">
              Interested in Web3 Development?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              I can build decentralized applications, smart contracts, and Web3
              integrations for your blockchain projects.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
