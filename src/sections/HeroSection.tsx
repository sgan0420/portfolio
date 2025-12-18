"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple fade-in animation
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-16 md:pt-0"
    >
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 mt-32 md:mt-40"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Main content */}
        <div className="space-y-12">
          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black dark:text-white"
          >
            Shijie Gan
          </motion.h1>

          {/* Tagline */}
          <motion.div variants={textVariants} className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Full-Stack Software Engineer building scalable web applications
              with modern technologies
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity duration-200 rounded-full"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 rounded-full"
            >
              About Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textVariants}
            className="flex justify-center gap-6 mt-16"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={textVariants}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 mt-20"
          >
            <span className="text-xs font-medium">Scroll</span>
            <HiArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
