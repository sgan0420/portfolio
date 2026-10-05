import Link from "@/components/IntentLink";
import HeroSection from "@/sections/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import {
  HiArrowDownTray,
  HiCodeBracket,
  HiCpuChip,
  HiChartBar,
} from "react-icons/hi2";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section id="introduction" className="home-introduction">
        <div className="site-container">
          <div className="home-introduction-inner" data-reveal>
            <div>
              <h2>
                Building AI products
                <br />
                from 0 to 1.
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted leading-relaxed">
                Founding Software Engineer at a stealth AI startup. Previously
                built OpenMarket end to end at Trontal, scaling the platform to
                50,000 monthly active users.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="/Resume_ShijieGan.pdf"
                  download
                  className="button-primary"
                >
                  Download Resume
                  <HiArrowDownTray aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shijie-gan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="company-strip" data-reveal>
            <p>Experience across startups & fintech</p>
            <div>
              <span>Stealth Startup</span>
              <span>Trontal Group</span>
              <span>Ant International</span>
              <span>iFAST</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-work">
        <div className="site-container">
          <div className="section-heading" data-reveal>
            <div>
              <h2>Selected work</h2>
            </div>
            <Link href="/projects" className="text-link">
              All projects
            </Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="home-focus">
        <div className="site-container">
          <div className="section-heading" data-reveal>
            <div>
              <h2>Areas of focus</h2>
            </div>
            <Link href="/experience" className="text-link">
              My experience
            </Link>
          </div>
          <div className="focus-grid">
            <div className="focus-card" data-reveal>
              <HiCodeBracket aria-hidden="true" />
              <h3>Full-stack development</h3>
              <p>
                Scalable applications, from responsive interfaces to backend
                systems.
              </p>
              <span className="focus-stack">React · Next.js · Spring Boot</span>
            </div>
            <div className="focus-card" data-reveal>
              <HiCpuChip aria-hidden="true" />
              <h3>AI & agent systems</h3>
              <p>
                Turning language models into useful products, with context and
                model orchestration.
              </p>
              <span className="focus-stack">LLMs · RAG · Computer vision</span>
            </div>
            <div className="focus-card" data-reveal>
              <HiChartBar aria-hidden="true" />
              <h3>Fintech & Web3</h3>
              <p>
                Real-time charting, trading integrations, and applications built
                on blockchain.
              </p>
              <span className="focus-stack">
                WebSockets · Solidity · TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
