import Link from "@/components/IntentLink";
import { HiArrowDown } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SkyField from "@/components/SkyField";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sgan0420", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shijie-gan/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/gan_shijie",
    label: "Instagram",
  },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <SkyField />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Shijie Gan
            <span className="name-period" aria-hidden="true">
              .
            </span>
          </h1>
          <p className="hero-description">
            Software Engineer specializing in{" "}
            <span>Full-Stack Development and AI</span>, building scalable
            applications in Fintech and Web3
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">
              View Projects
            </Link>
            <Link href="/about" className="button-secondary">
              About Me
            </Link>
          </div>
          <div className="hero-socials">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <a href="#introduction" className="scroll-link">
          Scroll <HiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
