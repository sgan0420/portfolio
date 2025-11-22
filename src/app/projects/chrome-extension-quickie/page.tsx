"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaChrome, FaDownload } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
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

  // Project data - Chrome Extension Quickie
  const project = {
    title: "Chrome Extension - Quickie",
    description:
      "A one-click Chrome toolbox that offers instant access to Chrome's most useful actions, no need to memorize shortcuts or dig through menus.",
    longDescription: (
      <div>
        <p className="mb-4">
          Quickie is your one-click Chrome toolbox. It offers instant access to
          Chrome's most useful actions, no need to memorize shortcuts or dig
          through menus. From tab management and history to site settings,
          downloads, and even QR code generation, Quickie helps users stay
          efficient and focused.
        </p>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>One-click access to Chrome's most useful features</li>
            <li>Tab management tools for better organization</li>
            <li>Quick access to browsing history and bookmarks</li>
            <li>Site settings and permissions management</li>
            <li>Downloads management interface</li>
            <li>QR code generation for easy sharing</li>
            <li>Clean, intuitive user interface</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">
            Technical Implementation:
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Built using Chrome Extension Manifest V3</li>
            <li>Vanilla JavaScript for optimal performance</li>
            <li>HTML5 and CSS3 for responsive popup interface</li>
            <li>Chrome APIs integration for browser functionality</li>
            <li>Lightweight design with minimal resource usage</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">
            User Experience:
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Eliminates need to memorize keyboard shortcuts</li>
            <li>Reduces time spent navigating through Chrome menus</li>
            <li>Improves productivity for power users and casual browsers</li>
            <li>Accessible design for users of all technical levels</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
          <p className="text-green-300">
            <strong>Available Now:</strong> Download Quickie from the Chrome Web
            Store and start boosting your browsing efficiency today!
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
      { name: "Chrome API", icon: FaChrome, color: "text-green-500" },
    ],
    githubUrl: "https://github.com/sgan0420/extension-shortcut-launcher",
    liveUrl:
      "https://chromewebstore.google.com/detail/ddbehnlodocjgdmkeaaiedkkdlnhehkp?utm_source=item-share-cb",
    category: "Web Extension",
    duration: "1 month",
    status: "Published",
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
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {project.duration}
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                {project.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <FaDownload className="w-5 h-5" />
                  Install from Chrome Store
                </motion.a>
              </div>
              <p className="text-xs text-green-300 text-center max-w-72">
                ✅ Available now on Chrome Web Store
              </p>
            </div>
          </motion.div>

          {/* Project Demo & Resources */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Extension Preview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Extension Screenshot */}
                <div className="space-y-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img
                      src="/quickie.png"
                      alt="Chrome Extension Quickie Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Quickie Extension Interface
                  </p>
                </div>

                {/* Features Overview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Quick Access Features
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">
                        Tab Management
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">
                        History & Bookmarks
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">
                        Site Settings
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">
                        Downloads Manager
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">
                        QR Code Generator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <Icon className={`w-8 h-8 ${tech.color}`} />
                      <span className="text-gray-300 text-sm font-medium">
                        {tech.name}
                      </span>
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
              <h2 className="text-2xl font-bold mb-4">
                Need a custom browser extension?
              </h2>
              <p className="text-gray-300 mb-6">
                This project demonstrates my expertise in browser extension
                development and user experience design. Let's discuss how I can
                help build productivity tools for your users!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                >
                  Let's Build Something
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
