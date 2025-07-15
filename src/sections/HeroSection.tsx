"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  HiArrowDown,
  HiCode,
  HiLightningBolt,
  HiSparkles,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

/**
 * HeroSection component with mobile optimizations:
 * 
 * MOBILE PERFORMANCE OPTIMIZATIONS:
 * ✅ Removes scroll-based disappearing effect on mobile devices (hero stays static)
 * ✅ Simplifies background orb animations (reduced movement, shorter durations)
 * ✅ Reduces animation delays and complexities (faster stagger animations)
 * ✅ Lighter text animations (smaller y-offset, shorter duration)
 * ✅ Custom cursor is conditionally disabled on mobile devices
 * 
 * DESKTOP EXPERIENCE:
 * ✅ Maintains full scroll-based parallax and disappearing effects
 * ✅ Complex background animations with rotation and larger movements
 * ✅ Full animation timings and stagger effects
 * ✅ Custom cursor enabled with hover interactions
 */
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Only apply scroll transforms on desktop
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], isMobile ? [1, 1, 1] : [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 0.5]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  // Additional transform for content that disappears faster - disabled on mobile
  const contentY = useTransform(scrollYProgress, [0, 0.6], isMobile ? ["0%", "0%"] : ["0%", "60%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    isMobile ? [1, 1, 1] : [1, 0.5, 0]
  );

  // Text animation variants - simplified on mobile
  const textVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (isMobile ? 0.05 : 0.1),
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const skills = [
    "React",
    "Angular",
    "TypeScript",
    "Next.js",
    "Java",
    "Python",
    "Spring Boot",
    "Flask",
    "Node.js",
    "AI",
    "Chatbot",
  ];

  return (
    <motion.section
      ref={containerRef}
      style={isMobile ? {} : { y: ySpring, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background pt-20 sm:pt-16 md:pt-0"
    >
      {/* Animated background elements - orbs independent of scroll transforms */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Grid pattern for subtle texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Gradient orbs - positioned outside scroll container to prevent disappearing */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Vibrant gradient orbs for ambient atmosphere - simplified on mobile */}
        <motion.div
          animate={isMobile ? {
            // Simpler animation for mobile
            x: [0, 40, 0],
            y: [0, -40, 0],
          } : {
            x: [0, 80, 0],
            y: [0, -80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: isMobile ? 15 : 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={isMobile ? {
            // Simpler animation for mobile
            x: [0, -40, 0],
            y: [0, 40, 0],
          } : {
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />

        {/* Large ambient breathing orb for atmosphere - simplified on mobile */}
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          } : {
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: isMobile ? 10 : 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/15 to-blue-300/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform py-8 sm:py-12"
        style={isMobile ? {
          transform: "translateZ(0)", // Force hardware acceleration
        } : {
          y: contentY,
          opacity: contentOpacity,
          transform: "translateZ(0)", // Force hardware acceleration
        }}
      >
        {/* Main content */}
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          {/* Hello animation */}
          <motion.div custom={0} variants={textVariants} className="space-y-2 mb-4 sm:mb-6">
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              👋 Hello, I'm
            </motion.p>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.div custom={1} variants={textVariants} className="mb-4 sm:mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Shijie Gan
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            custom={2}
            variants={textVariants}
            className="max-w-3xl mx-auto mb-6 sm:mb-8"
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
              whileHover={{ y: -2 }}
            >
              Full-Stack Software Engineer building{" "}
              <span className="gradient-text font-semibold">
                scalable web applications
              </span>{" "}
              with modern technologies
            </motion.p>
          </motion.div>

          {/* Skills badges */}
          <motion.div
            custom={3}
            variants={textVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1 + index * (isMobile ? 0.05 : 0.1),
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/20 glass hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-4 sm:px-0"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <HiCode className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/10 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 group glass"
              >
                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-yellow-400 transition-colors duration-300" />
                Hire Me
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-gray-600 dark:text-gray-400 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get to Know Me
                <HiArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 rotate-[-45deg]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={5}
            variants={textVariants}
            className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-12 sm:mb-20"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.5 + index * (isMobile ? 0.05 : 0.1),
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    transition: { duration: 0.05 }
                  }}
                  className="p-2.5 sm:p-3 rounded-full glass hover:bg-white/20 hover:text-blue-500 transition-all duration-150 text-gray-600 dark:text-gray-400 transform will-change-transform cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 mt-6 sm:mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
              <HiArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
