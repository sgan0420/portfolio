"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
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

  // Project data - replace with your actual project details
  const project = {
    title: "[Project Title 2 - Replace with actual title]",
    description: "Description for your second project. Replace this with details about what this project does, the problems it solves, and the key features it provides.",
    longDescription: `
      This is where you can provide a more detailed explanation of your second project. 
      
      **Key Features:**
      - Full-stack functionality
      - Database integration
      - RESTful API design
      
      **Technical Challenges:**
      - Backend optimization
      - Data management
      
      **What I Learned:**
      - Advanced backend development
      - Database design principles
      - API security best practices
    `,
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "React", icon: FaReact, color: "text-blue-400" },
    ],
    githubUrl: "https://github.com/sgan0420/placeholder-repo-2",
    liveUrl: "https://your-project-2.vercel.app",
    category: "Full Stack",
    duration: "3 months",
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
          </motion.div>

          {/* Project Image Placeholder */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">
                  [Add project screenshots or demo video here]
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Replace this with actual screenshots, demo videos, or project images
              </p>
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
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-gray-300 mb-6">
                This project showcases my full-stack development capabilities. 
                Let's discuss how I can help build your next application!
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
