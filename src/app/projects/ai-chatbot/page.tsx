"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaReact, FaPython, FaDatabase, FaBrain } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFlask, SiOpenai, SiNumpy } from "react-icons/si";

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

  // Project data - AI Chatbot Platform
  const project = {
    title: "AI Chatbot Platform",
    description: "An AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots using document upload and RAG techniques.",
    longDescription: (
      <div>
        <p className="mb-4">
          I designed and developed an AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots. Users can upload documents (PDF, Word, Excel, Text), which are processed using Retrieval-Augmented Generation (RAG) techniques and indexed in a FAISS vector database. The system leverages OpenAI's ChatGPT API to generate intelligent responses based on the uploaded content.
        </p>
        
        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Built end-to-end web application with user registration and chatbot management</li>
            <li>Backend implemented document processing, vector indexing (FAISS), and OpenAI API integration</li>
            <li>Deployed chatbot can be embedded via a simple &lt;iframe&gt; tag into any website</li>
            <li>Hands-on experience with LLM integration in real-world use cases</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Technical Implementation:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Document processing pipeline for multiple file formats (PDF, Word, Excel, Text)</li>
            <li>Vector database integration using FAISS for efficient similarity search</li>
            <li>OpenAI ChatGPT API integration for intelligent response generation</li>
            <li>Retrieval-Augmented Generation (RAG) for context-aware responses</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Real-World Impact:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Businesses can create custom chatbots without technical expertise</li>
            <li>Easy website integration through iframe embedding</li>
            <li>Scalable architecture for multiple concurrent users</li>
            <li>Cost-effective solution for customer support automation</li>
          </ul>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
          <p className="text-yellow-300">
            <strong>Note:</strong> The demo is live but hosted on a free server. Please contact me to wake the server up for error-free usage.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Flask", icon: SiFlask, color: "text-white" },
      { name: "OpenAI API", icon: SiOpenai, color: "text-green-400" },
      { name: "LangChain", icon: FaPython, color: "text-yellow-400" },
      { name: "RAG", icon: FaBrain, color: "text-pink-400" },
      { name: "FAISS", icon: SiNumpy, color: "text-blue-500" },
      { name: "Vector DB", icon: FaDatabase, color: "text-purple-400" },
    ],
    githubUrl: "https://github.com/sgan0420/chatbot",
    liveUrl: "https://chatbot-69x9.onrender.com/",
    category: "AI/ML",
    duration: "11 months",
    status: "Completed",
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
            <Link href="/projects">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <HiArrowLeft className="w-5 h-5" />
                Back to Projects
              </motion.button>
            </Link>
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
                {project.duration}
              </span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
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
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <HiExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              </div>
              <p className="text-xs text-yellow-300 text-center max-w-72">
                ⚠️ Free server - contact me to wake up the live demo
              </p>
            </div>
          </motion.div>

          {/* Project Demo & Resources */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Demo & Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Demo Screenshot */}
                <div className="space-y-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/ai-chatbot.png" 
                      alt="AI Chatbot Platform Demo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    AI Chatbot Platform Interface
                  </p>
                </div>
                
                {/* Demo Guide */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Step-by-Step Demo Guide</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn how to create a custom chatbot for your business using our platform.
                  </p>
                  <motion.a
                    href="/How To Create A Shoe Store Chatbot.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Download Demo Guide (PDF)
                  </motion.a>
                  <p className="text-gray-400 text-xs">
                    Example: Creating a shoe store chatbot with document upload
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
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
              <h2 className="text-2xl font-bold mb-4">Interested in AI-powered solutions?</h2>
              <p className="text-gray-300 mb-6">
                This project showcases my expertise in AI, machine learning, and modern web development. 
                Let's discuss how I can help build intelligent solutions for your business!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get In Touch
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
