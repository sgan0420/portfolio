"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaWhatsapp } from "react-icons/fa";
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
      isWhatsApp: true
    },
    { icon: HiLocationMarker, text: "Bukit Jalil, Kuala Lumpur", href: "https://maps.google.com/?q=Bukit+Jalil,+Kuala+Lumpur" },
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Shijie Gan
              </h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Full-Stack Software Engineer with expertise in React, Angular, Java, Python, and Node.js. 
                Fast learner passionate about AI technologies and building innovative solutions that drive business success.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{
                        scale: 1.2,
                        y: -2,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3, color: "#a855f7" }}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-200 flex items-center group text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.li
                      key={contact.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={contact.href}
                        target={contact.href?.startsWith("https://wa.me") || contact.href?.startsWith("https://maps.google.com") ? "_blank" : undefined}
                        rel={contact.href?.startsWith("https://wa.me") || contact.href?.startsWith("https://maps.google.com") ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-200 group"
                      >
                        <Icon className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors duration-200" />
                        <div className="flex flex-col">
                          <span className="text-sm">{contact.text}</span>
                          {contact.isWhatsApp && (
                            <div className="flex items-center gap-1 mt-1">
                              <FaWhatsapp className="w-3 h-3 text-green-400" />
                              <span className="text-xs text-green-400">WhatsApp</span>
                            </div>
                          )}
                        </div>
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#f97316", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-2"
              >
                <FaHeart className="w-4 h-4" />
              </motion.div>
              <span>by a passionate developer</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shijie Gan. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
