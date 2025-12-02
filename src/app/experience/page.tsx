"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const Experience = () => {
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
            Experience
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
            My professional journey through fintech giants, full-stack
            development, and academic mentoring.
          </p>
        </motion.div>

        {/* Experience Items */}
        <div className="space-y-24">
          {/* Trontal Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">Trontal Group</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-6">
                Mar 2025 - Present
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xl italic text-black dark:text-white">
                    Full Stack & Charting Engineer
                  </p>
                  <p className="text-sm text-gray-400 font-light">Current</p>
                </div>
                <div>
                  <p className="text-xl italic text-black dark:text-white">
                    Full Stack Engineer
                  </p>
                  <p className="text-sm text-gray-400 font-light">Initial</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Kiyotaka Trading Platform
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6">
                  Developing Kiyotaka.ai — a cutting-edge quant analytics platform
                  built for next-generation quantitative finance, designed as
                  &quot;a playground for the sharpest minds.&quot; Working across
                  the full stack on real-time charting, orderbook heatmaps, and
                  comprehensive market analytics tools.
                </p>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-900 mb-8">
                  <Image
                    src="/kiyotaka.png"
                    alt="Kiyotaka trading platform interface"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Real-time charting & data visualization</li>
                    <li>• Microservices architecture design</li>
                    <li>• Authentication & authorization systems</li>
                    <li>• Collaborative features & WebSockets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Full ownership across the entire stack</li>
                    <li>• Frontend platform development</li>
                    <li>• Backend services & APIs</li>
                    <li>• Live collaboration features</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Tech Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Vue 3, Nuxt 4, TypeScript, TailwindCSS, Pinia, Node.js,
                  WebSockets, Docker, Kubernetes, Cloudflare Pages.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ant International */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">Ant International</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Nov 2024 - Mar 2025
              </p>
              <p className="text-xl italic text-black dark:text-white">
                Backend Engineer
              </p>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Backend & Middleware Systems
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6">
                  Dove deep into the fascinating world of backend development
                  and middleware systems, working on mission-critical payment
                  infrastructure that serves millions of users globally.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src="/ant-me.png"
                      alt="At Ant International office"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src="/ant-group.png"
                      alt="Ant International team"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Backend & Middleware architecture</li>
                    <li>• Security & Risk Management systems</li>
                    <li>• Large-scale traffic handling (11.11)</li>
                    <li>• Microservices design & implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• High-volume payment processing</li>
                    <li>• Enterprise fintech infrastructure</li>
                    <li>• Security protocols implementation</li>
                    <li>• Emergency response strategies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Tech Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Spring Framework, Microservices, Message Queue, RESTful APIs,
                  Auth Systems, Git/GitLab, Network Security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* iFAST Corporation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">iFAST Corporation</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Nov 2023 - Feb 2024
              </p>
              <p className="text-xl italic text-black dark:text-white">
                Full Stack Engineer
              </p>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Global Bank Platform
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6">
                  Contributed to the iFAST Global Bank platform, working on both
                  frontend and backend components while learning invaluable
                  lessons about modern web development in a professional fintech
                  environment.
                </p>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 mb-8">
                  <Image
                    src="/ifast-group.png"
                    alt="iFAST team group photo"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Full-stack development on live banking app</li>
                    <li>• Mastered Angular framework</li>
                    <li>• Built robust RESTful APIs with Spring Boot</li>
                    <li>• Developed responsive interfaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Team & Learning
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Agile Scrum methodology</li>
                    <li>• UI/UX collaboration</li>
                    <li>• KitaHack hackathon participation</li>
                    <li>• Back-office email system</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Tech Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Angular, TypeScript, Java, Spring Boot, RESTful APIs,
                  Bootstrap, MySQL, Git, Jira.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Monash University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 dark:border-gray-900 pt-24"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light mb-2">Monash University</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                Jul 2023 - Aug 2023
              </p>
              <p className="text-xl italic text-black dark:text-white">
                Mathematics Tutor
              </p>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Computer Science Mathematics
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Provided personalized instruction and comprehensive support
                  for the continuous mathematics unit MAT1830, delivering
                  effective tutoring in both in-person and online formats.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Personalized mathematics instruction</li>
                    <li>• Hybrid teaching (in-person & online)</li>
                    <li>• Exam preparation support</li>
                    <li>• Concept clarification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Impact
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                    <li>• Enhanced student confidence</li>
                    <li>• Significant grade improvements</li>
                    <li>• Practical application of concepts</li>
                    <li>• Mentoring skills development</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Subject Focus
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  MAT1830 - Continuous Mathematics, Calculus, Mathematical
                  Analysis, Problem-Solving Techniques.
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

          <Link href="/education" className="group">
            <div className="p-8 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light mb-2">Education</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light">
                  Academic journey and achievements
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm uppercase tracking-wider group-hover:underline underline-offset-4">
                View Education <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
