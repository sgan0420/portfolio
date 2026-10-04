import Link from "next/link";
import Image from "next/image";
import { HiExternalLink, HiDownload } from "react-icons/hi";
import {
  FaGithub,
  FaReact,
  FaPython,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { SiFlask, SiOpenai, SiNumpy } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - AI Chatbot Platform
  const project = {
    title: "AI Chatbot Platform",
    description:
      "An AI-powered chatbot platform that enables businesses and individuals to easily create and deploy custom chatbots using document upload and RAG techniques.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            I designed and developed an AI-powered chatbot platform that enables
            businesses and individuals to easily create and deploy custom
            chatbots. Users can upload documents (PDF, Word, Excel, Text), which
            are processed using Retrieval-Augmented Generation (RAG) techniques
            and indexed in a FAISS vector database. The system leverages
            OpenAI&apos;s ChatGPT API to generate intelligent responses based on
            the uploaded content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Key Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                End-to-end web application with user registration
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Document processing & vector indexing (FAISS)
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Simple &lt;iframe&gt; embedding integration
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Real-world LLM integration experience
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">
              Technical Implementation
            </h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Multi-format document processing pipeline
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                FAISS vector database for similarity search
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                OpenAI ChatGPT API integration
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                RAG for context-aware responses
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">Real-World Impact</h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              No technical expertise required for businesses
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Scalable architecture for concurrent users
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Cost-effective customer support automation
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">Note:</strong> The demo is
            live but hosted on a free server. Please contact me to wake the
            server up for error-free usage.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Flask", icon: SiFlask },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "LangChain", icon: FaPython },
      { name: "RAG", icon: FaBrain },
      { name: "FAISS", icon: SiNumpy },
      { name: "Vector DB", icon: FaDatabase },
    ],
    githubUrl: "https://github.com/sgan0420/chatbot",
    liveUrl: "https://chatbot-69x9.onrender.com/",
    category: "AI/ML",
    duration: "11 months",
    status: "Completed",
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
                {project.duration}
              </span>
              <span className="px-4 py-1.5 border border-line rounded-full text-sm text-muted">
                {project.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-secondary"
                >
                  <HiExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
              <p className="text-xs text-subtle font-normal">
                ⚠️ Free server - contact me to wake up the live demo
              </p>
            </div>
          </div>

          {/* Project Demo & Resources */}
          <div className="mb-24 space-y-12">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <Image
                src="/ai-chatbot.png"
                alt="AI Chatbot Platform Demo"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-4"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-line rounded-2xl">
              <div>
                <h3 className="text-xl font-normal mb-2">
                  Step-by-Step Demo Guide
                </h3>
                <p className="text-muted font-normal">
                  Learn how to create a custom chatbot for your business.
                </p>
              </div>
              <a
                href="/How To Create A Shoe Store Chatbot.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-surface text-ink rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <HiDownload className="w-5 h-5" />
                Download Guide (PDF)
              </a>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="text-2xl font-normal mb-8 text-center">
              Technologies Used
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
              Interested in AI-powered solutions?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help build intelligent solutions for
              your business!
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
