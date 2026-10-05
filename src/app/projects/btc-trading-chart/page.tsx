import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaChartLine } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiVuedotjs, SiVite, SiAxios, SiBinance } from "react-icons/si";
import BackButton from "../../../components/BackButton";

export const metadata: Metadata = { title: "BTC Trading Chart" };

const ProjectDetail = () => {
  // Project data - BTC Trading Chart
  const project = {
    title: "BTC Trading Chart",
    description:
      "A real-time Bitcoin trading chart application inspired by TradingView, built with Vue 3 and Vite. Features live price updates via Binance API and interactive candlestick/line charts using ApexCharts.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Developed a high-performance cryptocurrency charting application
            that provides real-time Bitcoin price data and visualization. The
            application mimics professional trading platforms with its dark mode
            UI, interactive charts, and live data streaming from the Binance
            API.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Key Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Real-time Data:</span> Live price
                updates from Binance API
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Interactive Charts:</span> Switch
                between Candlestick and Line views
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Multiple Timeframes:</span> 1H,
                4H, 1D, 1W, 1M intervals
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Responsive Design:</span> Fully
                responsive dark-themed UI
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">Technical Stack</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Vue 3 Composition API for state management
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Vite for lightning-fast development and build
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                ApexCharts for advanced data visualization
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Axios for efficient API data fetching
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">
            Implementation Details
          </h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Implemented efficient data polling mechanism to ensure price
              accuracy without overloading the API.
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Customized ApexCharts configuration to match the professional look
              and feel of major trading platforms.
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Utilized Vue&apos;s computed properties to handle dynamic chart
              data formatting and reactivity.
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">
              Market Data Integration:
            </strong>{" "}
            This project demonstrates the ability to work with financial APIs,
            handle real-time data streams, and visualize complex datasets in a
            user-friendly interface.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "Vue 3", icon: SiVuedotjs },
      { name: "Vite", icon: SiVite },
      { name: "Binance API", icon: SiBinance },
      { name: "ApexCharts", icon: FaChartLine },
      { name: "Axios", icon: SiAxios },
    ],
    githubUrl: "https://github.com/sgan0420/btc-chart",
    liveUrl: "https://btc-chart-shijiegan.vercel.app/",
    category: "Web Application",
    status: "Coffee Break Project ☕",
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
          <div className="project-detail-header text-center" data-reveal>
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
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
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
                    className="button-secondary"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Screenshot */}
          <div className="mb-24">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <Image
                src="/btc-chart.png"
                alt="BTC Trading Chart Interface"
                fill
                sizes="(max-width: 768px) 100vw, 1120px"
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="project-tools-heading text-2xl font-normal mb-8 text-center">
              Technologies & Tools
            </h2>
            <div className="project-tools" data-reveal>
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
          <div className="case-study-content mb-24" data-reveal>
            {project.longDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
