"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGamepad, FaCode, FaCube, FaPlay } from "react-icons/fa";
import { SiTypescript, SiReactivex, SiHtml5, SiCss3 } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Tetris Game
  const project = {
    title: "Tetris Game",
    description:
      "A fully interactive, modern Tetris game built with TypeScript and RxJS, designed with reactive architecture that handles game logic, rendering, and user inputs in real time.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Built a fully interactive, modern Tetris game using TypeScript and
            RxJS, designed with a reactive architecture that handles game logic,
            rendering, and user inputs in real time. The game uses SVG elements
            to draw the grid, pieces, and overlays, giving it a clean,
            responsive UI without any game engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Key Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Reactive Architecture:</span> RxJS
                Observables for real-time updates
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">Functional State:</span> Immutable
                state management
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span className="font-medium">SVG Rendering:</span> Dynamic DOM
                manipulation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">Game Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Hold queue & Next piece preview
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Hard drop & Wallkick system
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Pause, restart & Level scaling
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Comprehensive scoring system
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">
            Technical Implementation
          </h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Observable streams for game tick management
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Immutable state updates using functional programming
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Dynamic SVG rendering for smooth animations
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Modular TypeScript architecture
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">
              Reactive Programming:
            </strong>{" "}
            This project demonstrates advanced reactive programming concepts
            using RxJS Observables for real-time game state management and user
            interaction handling.
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "RxJS", icon: SiReactivex },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SVG", icon: FaCube },
      { name: "DOM API", icon: FaCode },
    ],
    githubUrl: "https://github.com/sgan0420/tetris-game",
    liveUrl: "https://sgan0420.github.io/tetris-game/",
    category: "Web Development",
    duration: "2 months",
    status: "Completed",
    period: "Sep 2023 - Oct 2023",
  };

  return (
    <div className="page-shell">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
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
                    <FaPlay className="w-5 h-5" />
                    Play Game
                  </a>
                )}
              </div>

              {project.liveUrl && (
                <p className="text-xs text-subtle font-normal">
                  🖥️ Best experienced on desktop - mobile controls not supported
                </p>
              )}
            </div>
          </div>

          {/* Game Demo & Features */}
          <div className="mb-24 space-y-12">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <Image
                src="/tetris.png"
                alt="Tetris Game Interface"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-4"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-line rounded-2xl">
                <h3 className="text-xl font-normal mb-6">
                  Technical Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div>
                      <div className="text-muted font-medium">
                        Reactive Architecture
                      </div>
                      <div className="text-subtle text-sm font-normal">
                        RxJS Observables for real-time updates
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div>
                      <div className="text-muted font-medium">
                        Immutable State
                      </div>
                      <div className="text-subtle text-sm font-normal">
                        Functional programming principles
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div>
                      <div className="text-muted font-medium">
                        SVG Rendering
                      </div>
                      <div className="text-subtle text-sm font-normal">
                        Dynamic graphics without game engine
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div>
                      <div className="text-muted font-medium">
                        Modular Design
                      </div>
                      <div className="text-subtle text-sm font-normal">
                        TypeScript for type safety
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-line rounded-2xl">
                <h3 className="text-xl font-normal mb-6">Game Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaCube, title: "Hold Queue" },
                    { icon: FaPlay, title: "Next Preview" },
                    { icon: FaGamepad, title: "Hard Drop" },
                    { icon: FaCode, title: "Wallkick" },
                    { icon: SiReactivex, title: "Reactive Scoring" },
                    { icon: SiTypescript, title: "Level Scaling" },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-subtle" />
                        <span className="text-sm text-muted font-normal">
                          {feature.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
              Interested in Reactive Programming?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how reactive architecture can enhance your next
              web application!
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              Discuss Reactive Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
