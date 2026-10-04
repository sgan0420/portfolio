import Link from "next/link";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaChrome, FaDownload } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  // Project data - Chrome Extension Quickie
  const project = {
    title: "Chrome Extension - Quickie",
    description:
      "A one-click Chrome toolbox that offers instant access to Chrome's most useful actions, no need to memorize shortcuts or dig through menus.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Quickie is your one-click Chrome toolbox. It offers instant access
            to Chrome&apos;s most useful actions, no need to memorize shortcuts
            or dig through menus. From tab management and history to site
            settings, downloads, and even QR code generation, Quickie helps
            users stay efficient and focused.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Key Features</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                One-click access to Chrome&apos;s features
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Tab management tools
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                History & Bookmarks access
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Site settings & permissions
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                QR code generation
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
                Chrome Extension Manifest V3
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Vanilla JavaScript performance
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Responsive popup interface
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Chrome APIs integration
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">User Experience</h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Eliminates need for keyboard shortcuts
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Reduces navigation time
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Improves productivity
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Accessible design
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">Available Now:</strong>{" "}
            Download Quickie from the Chrome Web Store and start boosting your
            browsing efficiency today!
          </p>
        </div>
      </div>
    ),
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Chrome API", icon: FaChrome },
    ],
    githubUrl: "https://github.com/sgan0420/extension-shortcut-launcher",
    liveUrl:
      "https://chromewebstore.google.com/detail/ddbehnlodocjgdmkeaaiedkkdlnhehkp?utm_source=item-share-cb",
    category: "Web Extension",
    duration: "1 month",
    status: "Published",
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
                  <FaDownload className="w-5 h-5" />
                  Install from Chrome Store
                </a>
              </div>
              <p className="text-xs text-subtle font-normal">
                ✅ Available now on Chrome Web Store
              </p>
            </div>
          </div>

          {/* Project Demo & Resources */}
          <div className="mb-24 space-y-12">
            <div className="project-visual relative aspect-video w-full rounded-2xl overflow-hidden border border-line">
              <Image
                src="/quickie.png"
                alt="Chrome Extension Quickie Interface"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-4"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-line rounded-2xl">
                <h3 className="text-xl font-normal mb-6">
                  Quick Access Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted font-normal">
                      Tab Management
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted font-normal">
                      History & Bookmarks
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted font-normal">
                      Site Settings
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted font-normal">
                      Downloads Manager
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted font-normal">
                      QR Code Generator
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-line rounded-2xl flex flex-col justify-center">
                <h3 className="text-xl font-normal mb-4">Try it yourself</h3>
                <p className="text-muted font-normal mb-6">
                  Experience the efficiency boost firsthand. Install Quickie
                  from the Chrome Web Store.
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink font-medium hover:underline underline-offset-4"
                >
                  Visit Chrome Web Store <HiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="project-tools-heading text-2xl font-normal mb-8 text-center">
              Technologies Used
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
              Need a custom browser extension?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help build productivity tools for
              your users!
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              Let&apos;s Build Something
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
