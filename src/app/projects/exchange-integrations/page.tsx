import Link from "next/link";
import Image from "next/image";
import { FaCubes, FaExchangeAlt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiBinance, SiTypescript } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Exchange Integrations (shipped at OpenMarket)
  const project = {
    title: "Exchange Integrations",
    description:
      "Trading integrations that connect OpenMarket to Binance and Bybit, two centralized exchanges, and Hyperliquid, a decentralized one. I was the sole developer at Trontal.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Charts and order-flow data tell traders what the market is doing.
            These integrations let them act on it without leaving OpenMarket,
            across three venues they already trade on: two centralized exchanges
            and one fully on-chain.
          </p>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">The Trade Panel</h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <span>
                <span className="font-medium">Trade beside the chart:</span> go
                long or short on perpetual futures without switching tabs
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <span>
                <span className="font-medium">Market and limit orders:</span>{" "}
                order size in USDT, with quick presets and a slider
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <span>
                <span className="font-medium">Risk controls:</span> take-profit
                and stop-loss on the same ticket
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <span>
                <span className="font-medium">Know before you click:</span>{" "}
                order value, margin, estimated liquidation and current position
                shown before the order is placed
              </span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Venues</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Binance:</span> centralized
                  exchange (CEX)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Bybit:</span> centralized
                  exchange (CEX)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Hyperliquid:</span>{" "}
                  decentralized exchange (DEX), on-chain
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">My Role</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Sole developer of all three integrations
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Bridged two different models: CEX accounts authenticate with API
                keys, while Hyperliquid orders are signed by a wallet
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                One of several platform features I owned end to end, alongside
                guest access, the PWA, alerts and push notifications
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    technologies: [
      { name: "Binance", icon: SiBinance },
      { name: "Bybit", icon: FaExchangeAlt },
      { name: "Hyperliquid", icon: FaCubes },
      { name: "TypeScript", icon: SiTypescript },
    ],
    liveUrl: "https://openmarket.xyz/",
    category: "Trading Integration",
    status: "Shipped at OpenMarket",
  };

  return (
    <div className="page-shell project-detail-page">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  <HiExternalLink className="w-5 h-5" />
                  Visit OpenMarket
                </a>
              </div>
            </div>
          </div>

          {/* Project Screenshot */}
          <div className="mb-24">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <Image
                priority
                src="/exchange-integrations.png"
                alt="OpenMarket trade panel placing a Binance perpetual order beside the chart"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="project-tools-heading text-2xl font-normal mb-8 text-center">
              Technologies & Tools
            </h2>
            <div className="project-tools">
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
              Working on Trading Infrastructure?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              I&apos;ve built exchange integrations, real-time charting and
              alerting for a platform with 50,000 monthly active users.
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
