import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiFlask,
  SiMongodb,
  SiDocker,
  SiOpenai,
} from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Patlytics Infringement Checker
  const project = {
    title: "Patlytics Infringement Checker",
    description:
      "An AI-powered patent infringement analysis tool that leverages GPT-4o to analyze patent claims against company products, detecting potential infringements with high accuracy.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Developed a sophisticated web application designed to streamline the
            patent infringement analysis process. By integrating OpenAI&apos;s
            GPT-4o-mini model, the tool automates the comparison of patent
            claims with company product descriptions, providing detailed
            analysis and infringement likelihood reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Key Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">AI-Powered Analysis:</span>{" "}
                Utilizes GPT-4o for deep semantic analysis of patent claims.
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">
                  Infringement Detection:
                </span>{" "}
                Automatically identifies potential patent infringements.
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Detailed Reporting:</span>{" "}
                Generates comprehensive analysis reports for legal review.
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Analysis History:</span> Tracks
                and stores past analyses for easy reference.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">Technical Stack</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                React frontend for a responsive and intuitive user interface
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Flask backend for robust API handling and AI integration
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                MongoDB for flexible storage of patent and analysis data
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Docker & Docker Compose for consistent deployment environments
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
              Orchestrated a microservices architecture using Docker Compose to
              manage frontend, backend, and database containers seamlessly.
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Implemented a robust patent analysis pipeline that preprocesses
              claims before sending them to the OpenAI API for evaluation.
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Designed a clean, user-friendly interface that allows users to
              easily input patent data and view detailed analysis results.
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">AI Integration:</strong>{" "}
            This project showcases the practical application of Large Language
            Models (LLMs) in the legal tech space, automating complex analytical
            tasks with high precision.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Flask", icon: SiFlask },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Docker", icon: SiDocker },
    ],
    githubUrl: "https://github.com/sgan0420/patlytics-infringement-checker",
    liveUrl: "https://patlytics-infringement-checker-frontend.onrender.com",
    category: "AI & Legal Tech",
    duration: "1 week",
    status: "Completed",
    period: "Nov 2024",
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
                {project.period}
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
                    className="flex items-center justify-center gap-2 px-8 py-3 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
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
                    className="flex items-center justify-center gap-2 px-8 py-3 button-secondary cursor-pointer"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
              {project.liveUrl && (
                <p className="text-xs text-subtle font-normal">
                  ⚠️ Hosted on free tier, may take a moment to wake up
                </p>
              )}
            </div>
          </div>

          {/* Project Screenshot */}
          <div className="mb-24">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <ProjectVisual
                src="/patlytics.png"
                alt="Patlytics Infringement Checker Interface"
              />
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
              Looking for AI-Powered Solutions?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              I can build sophisticated AI applications that solve real-world
              business problems.
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
