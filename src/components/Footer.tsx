"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sgan0420",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shijie-gan-968926197/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/gan_shijie",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ];

  const contactInfo = [
    {
      icon: HiMail,
      text: "shijiegan.gs@gmail.com",
      href: "mailto:shijiegan.gs@gmail.com",
    },
    {
      icon: HiPhone,
      text: "+60 12-638 3016",
      href: "https://wa.me/60126383016",
      isWhatsApp: true,
    },
    {
      icon: HiLocationMarker,
      text: "Kuala Lumpur, Malaysia",
      href: "https://maps.google.com/?q=Kuala+Lumpur,+Malaysia",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black border-t border-gray-800 dark:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-4">Shijie Gan</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-6 max-w-md leading-relaxed text-sm">
                Full-Stack Software Engineer. Fast learner passionate about AI
                technologies and building innovative solutions that drive
                business success.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-medium mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <li key={contact.text}>
                      <a
                        href={contact.href}
                        target={
                          contact.href?.startsWith("https://wa.me") ||
                          contact.href?.startsWith("https://maps.google.com")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          contact.href?.startsWith("https://wa.me") ||
                          contact.href?.startsWith("https://maps.google.com")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center text-sm text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        <div className="flex flex-col">
                          <span>{contact.text}</span>
                          {contact.isWhatsApp && (
                            <div className="flex items-center gap-1 mt-1">
                              <FaWhatsapp className="w-3 h-3" />
                              <span className="text-xs">WhatsApp</span>
                            </div>
                          )}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Shijie Gan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
