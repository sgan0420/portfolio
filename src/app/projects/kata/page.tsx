import Link from "next/link";
import Image from "next/image";
import { FaBrain, FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiTypescript, SiVuedotjs } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Kata (shipped at OpenMarket)
  const project = {
    title: "Kata",
    description:
      "An AI coding assistant inside OpenMarket. Describe an indicator in plain English and Kata writes it in kScript, Trontal's native scripting language for trading indicators, so traders who don't code can still build their own.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Custom indicators on OpenMarket are written in kScript, a scripting
            language Trontal built for the platform. That made custom indicators
            powerful, but only for people willing to learn a new language. Kata
            removes that barrier: you say what you want to see on the chart, and
            Kata writes the kScript for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">What It Does</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Describe, then chart:</span>{" "}
                  &ldquo;RSI with 14 period, smoothed&rdquo; becomes a working
                  kScript indicator
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">States its assumptions:</span>{" "}
                  when a request is ambiguous, Kata says how it read it, like
                  &ldquo;smoothed&rdquo; meaning a configurable 5-period EMA
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Validated first:</span> each
                  script is checked against the kScript engine and test-run on
                  historical bars before you see it
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">One click to the chart:</span>{" "}
                  run it on the chart, with the generated code open in the
                  editor to tweak
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">My Role</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Built Kata single-handedly, from design to production
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Still live in OpenMarket today
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    technologies: [
      { name: "LLMs", icon: FaBrain },
      { name: "kScript", icon: FaCode },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vue 3", icon: SiVuedotjs },
    ],
    liveUrl: "https://openmarket.xyz/",
    category: "AI Assistant",
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
                src="/kata.png"
                alt="Kata writing a smoothed RSI indicator in kScript inside OpenMarket"
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
            <h2 className="text-3xl font-normal mb-6">Building with AI?</h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              I enjoy turning LLMs into products real users rely on, from the
              model layer to the interface.
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
