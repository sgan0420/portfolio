"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Education = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight mb-8">
            Education
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
            My academic journey, from engineering foundations to computer
            science excellence.
          </p>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-24">
          {/* Monash University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">Monash University</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Oct 2022 - Jul 2025
              </p>
              <div className="inline-block px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Bachelor of Computer Science
                </h3>
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-6">
                  <p className="text-lg font-medium mb-1">
                    CGPA: 3.97/4.0 • WAM: 90.15
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monash High Achiever Award (RM30,000 Scholarship)
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Maintained exceptional academic excellence with outstanding
                  performance in computer science fundamentals. Currently
                  pursuing my final year with continued dedication to academic
                  and practical excellence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• 1st place in AI Pacman Challenge</li>
                    <li>• 100% full marks in Python Development</li>
                    <li>• 100% full marks in Mobile Application</li>
                    <li>• Highest scores in multiple core subjects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Skills Developed
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Full-stack Development</li>
                    <li>• Mobile App & Android</li>
                    <li>• AI & Machine Learning</li>
                    <li>• Cybersecurity Principles</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Tech Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Java, Python, JavaScript, TypeScript, React, Node.js, Android
                  Studio, Oracle Database, MySQL, Linux/Unix, Haskell.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Imperial College London */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">
                Imperial College London
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Oct 2019 - Jul 2022
              </p>
              <div className="inline-block px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                London, UK
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Mechanical Engineering
                </h3>
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                  Certificate of Higher Education
                </p>
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-6">
                  <p className="text-lg font-medium mb-1">
                    Ranked 2nd in the World (QS 2025)
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Recognition for Excellence in Design & Manufacture
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Excelled in mechanical engineering at one of the world&apos;s
                  leading institutions. This foundational experience provided
                  invaluable problem-solving skills and analytical thinking that
                  seamlessly transitioned into computer science.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Top 10% ranking in multiple exams</li>
                    <li>• Strong engineering principles mastery</li>
                    <li>• Advanced mathematical problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Skills Acquired
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Python for Engineering</li>
                    <li>• Data Analysis & Modeling</li>
                    <li>• CAD Design & SOLIDWORKS</li>
                    <li>• Finite Element Analysis (FEA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Taylor's College */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">
                Taylor&apos;s College
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Jan 2018 - Jul 2019
              </p>
              <div className="inline-block px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">Cambridge A-Levels</h3>
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-6">
                  <p className="text-lg font-medium mb-1">
                    4 A* (Perfect Score)
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    A-Level High Achiever Award • Taylor&apos;s Merit
                    Scholarship
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Achieved exceptional results with perfect A* grades in
                  Mathematics, Physics, Chemistry, and Further Mathematics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SMJK Yok Bin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">SMJK Yok Bin</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                2013 - 2017
              </p>
              <div className="inline-block px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  SPM (Malaysian Certificate of Education)
                </h3>
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-6">
                  <p className="text-lg font-medium mb-1">7A+, 2A, 1A-</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Outstanding Academic Performance
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Demonstrated exceptional academic performance and leadership
                  capabilities. President of Chinese Society, Vice President of
                  Chess Club.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-32"
        >
          <Link href="/about" className="group">
            <div className="p-8 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light mb-2">About Me</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light">
                  My story and background
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm uppercase tracking-wider group-hover:underline underline-offset-4">
                Read Bio <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/experience" className="group">
            <div className="p-8 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light mb-2">Experience</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light">
                  Professional career and roles
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm uppercase tracking-wider group-hover:underline underline-offset-4">
                View Journey <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
