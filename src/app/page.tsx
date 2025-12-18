"use client";

import { motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        <HeroSection />

        <section className="py-32 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-light text-black dark:text-white">
                Full-Stack Software Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Passionate software engineer who learns incredibly fast and
                adapts quickly to new technologies. Capable with modern tech
                stack, AI integration, and ready to contribute to your team's
                success from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="/Resume_ShijieGan.pdf"
                  download
                  className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity duration-200 rounded-full"
                >
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/shijie-gan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 rounded-full"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
