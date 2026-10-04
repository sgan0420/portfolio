import HeroSection from "@/sections/HeroSection";
import { HiArrowDownTray, HiArrowUpRight } from "react-icons/hi2";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section id="introduction" className="home-introduction">
        <div className="home-introduction-inner">
          <h2>Full-Stack Software Engineer</h2>
          <div>
            <p className="text-lg text-muted leading-relaxed">
              Passionate software engineer who learns incredibly fast and adapts
              quickly to new technologies. Capable with modern tech stack, AI
              integration, and ready to contribute to your team&apos;s success
              from day one.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/Resume_ShijieGan.pdf"
                download
                className="button-primary"
              >
                Download Resume <HiArrowDownTray aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/shijie-gan/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Connect on LinkedIn <HiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
