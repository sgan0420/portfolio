"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  useEffect(() => {
    // Hide default cursor on desktop
    if (window.innerWidth > 768) {
      document.body.style.cursor = "none";

      // Add cursor back on interactive elements for accessibility
      const style = document.createElement("style");
      style.textContent = `
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.cursor = "auto";
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-black relative overflow-x-hidden"
      style={{ overflowY: "auto" }}
    >
      {/* Custom Cursor - only on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Additional sections can be added here */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8"
            >
              Looking for a{" "}
              <span className="gradient-text">Full-Stack Developer?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Passionate software engineer who learns incredibly fast and adapts quickly to new technologies. 
              Capable with modern tech stack, AI integration, and ready to contribute to your team's success from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Schedule Interview
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>

    </motion.div>
  );
}
