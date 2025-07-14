"use client";

import { useEffect, useRef } from "react";
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

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  // Additional transform for content that disappears faster
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "60%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [1, 0.5, 0]
  );

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
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
      style={{ y: ySpring, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* Animated background elements - orbs independent of scroll transforms */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Grid pattern for subtle texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Gradient orbs - positioned outside scroll container to prevent disappearing */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Vibrant gradient orbs for ambient atmosphere */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />

        {/* Large ambient breathing orb for atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/15 to-blue-300/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform"
        style={{
          y: contentY,
          opacity: contentOpacity,
          transform: "translateZ(0)", // Force hardware acceleration
        }}
      >
        {/* Main content */}
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          {/* Hello animation */}
          <motion.div custom={0} variants={textVariants} className="space-y-2">
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              👋 Hello, I'm
            </motion.p>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.div custom={1} variants={textVariants}>
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-bold gradient-text leading-tight"
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
            className="max-w-3xl mx-auto"
          >
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed"
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
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                }}
                className="px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 glass hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
            >
              <HiCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View My Projects
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 transition-all duration-300 flex items-center gap-2 group glass"
            >
              <HiSparkles className="w-5 h-5 group-hover:text-yellow-400 transition-colors duration-300" />
              Hire Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={5}
            variants={textVariants}
            className="flex justify-center gap-6 mt-8 mb-20"
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
                    delay: 1.5 + index * 0.1,
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
                  className="p-3 rounded-full glass hover:bg-white/20 hover:text-blue-500 transition-all duration-150 text-gray-600 dark:text-gray-400 transform will-change-transform cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <HiArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
