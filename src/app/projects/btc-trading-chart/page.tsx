"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaChartLine } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiVuedotjs, SiVite, SiAxios, SiBinance } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - BTC Trading Chart
  const project = {
    title: "BTC Trading Chart",
    description:
      "A real-time Bitcoin trading chart application inspired by TradingView, built with Vue 3 and Vite. Features live price updates via Binance API and interactive candlestick/line charts using ApexCharts.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-light mb-8">
            Developed a high-performance cryptocurrency charting application
            that provides real-time Bitcoin price data and visualization. The
            application mimics professional trading platforms with its dark mode
            UI, interactive charts, and live data streaming from the Binance
            API.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Key Features
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                <span className="font-medium">Real-time Data:</span> Live price
                updates from Binance API
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                <span className="font-medium">Interactive Charts:</span> Switch
                between Candlestick and Line views
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                <span className="font-medium">Multiple Timeframes:</span> 1H,
                4H, 1D, 1W, 1M intervals
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                <span className="font-medium">Responsive Design:</span> Fully
                responsive dark-themed UI
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Technical Stack
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Vue 3 Composition API for state management
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Vite for lightning-fast development and build
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                ApexCharts for advanced data visualization
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white">•</span>
                Axios for efficient API data fetching
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            Implementation Details
          </h4>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300 font-light">
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              Implemented efficient data polling mechanism to ensure price
              accuracy without overloading the API.
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              Customized ApexCharts configuration to match the professional look
              and feel of major trading platforms.
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              Utilized Vue's computed properties to handle dynamic chart data
              formatting and reactivity.
            </li>
          </ul>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
            <strong className="text-black dark:text-white font-medium">
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
    githubUrl: "https://github.com/sgan0420/btc-chart", // Assuming this URL based on pattern
    liveUrl: "https://btc-chart-shijiegan.vercel.app/",
    category: "Web Application",
    duration: "1 week",
    status: "Completed",
    period: "Jan 2025",
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
                {project.period}
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
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Screenshot */}
          <div className="mb-24">
            <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src="/btc-chart.png"
                alt="BTC Trading Chart Interface"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="text-2xl font-light mb-8 text-center">
              Technologies & Tools
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
              Need a Financial Dashboard?
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              I can build responsive, high-performance data visualization tools
              for your fintech needs.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
