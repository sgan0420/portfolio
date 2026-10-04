import Link from "next/link";
import { HiArrowUp, HiArrowDownTray } from "react-icons/hi2";

const explore = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];
const social = [
  { name: "GitHub", href: "https://github.com/sgan0420" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shijie-gan/" },
  { name: "Instagram", href: "https://instagram.com/gan_shijie" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-invitation" data-reveal>
          <div>
            <h2>
              Let&apos;s build
              <br />
              <span>what&apos;s next.</span>
            </h2>
          </div>
          <Link href="/contact" className="button-primary footer-cta">
            Get in touch
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-bio">
            <Link href="/" className="brand">
              Shijie Gan<span className="text-accent">.</span>
            </Link>
            <p>Full-Stack Software Engineer.</p>
            <a
              className="footer-location"
              href="https://maps.google.com/?q=Kuala+Lumpur,+Malaysia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" />
              Kuala Lumpur, Malaysia
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            {explore.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div>
            <h3>Elsewhere</h3>
            {social.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
            <a href="/Resume_ShijieGan.pdf" download>
              Resume
              <HiArrowDownTray aria-hidden="true" />
            </a>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a href="mailto:shijiegan.gs@gmail.com">shijiegan.gs@gmail.com</a>
            <a
              href="https://wa.me/60126383016"
              target="_blank"
              rel="noopener noreferrer"
            >
              +60 12-638 3016
            </a>
            <span className="footer-note">Phone / WhatsApp</span>
            <Link href="/contact">Contact form</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shijie Gan. All rights reserved.</p>
          <a href="#main-content" className="back-to-top">
            <span>Back to top</span>
            <HiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
