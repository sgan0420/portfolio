"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
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
            About Me
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
            Full-stack developer with a passion for building scalable
            applications and solving complex problems. Based in Malaysia,
            thinking globally.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
              <Image
                src="/me2.png"
                alt="Shijie Gan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              <p>
                I view code as a medium for creativity and problem-solving. My
                journey started with a curiosity for how things work, leading me
                to pursue Computer Science at Monash University and Engineering
                at Imperial College London.
              </p>
              <p>
                Today, I specialize in full-stack development, with expertise in
                modern frameworks like React, Next.js, and Spring Boot. I thrive
                in environments that challenge me to learn quickly and adapt.
              </p>
              <p>
                Beyond the screen, I&apos;m a strategic thinker—whether
                it&apos;s optimizing algorithms or ranking up in Teamfight
                Tactics. I believe in writing clean, maintainable code that
                stands the test of time.
              </p>
            </div>

            {/* Stats / Quick Info */}
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Location
                </h3>
                <p className="text-lg">Malaysia / Remote</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Education
                </h3>
                <p className="text-lg mb-1">Monash University</p>
                <p className="text-lg">Imperial College London</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Interests
                </h3>
                <p className="text-lg">Chess, Gaming, Board Games</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Status
                </h3>
                <p className="text-lg text-green-500">Available for hire</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Link href="/education" className="group">
            <div className="p-8 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light mb-2">Education</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light">
                  Academic journey and achievements
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm uppercase tracking-wider group-hover:underline underline-offset-4">
                View Details <HiArrowRight className="ml-2 w-4 h-4" />
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

export default About;
