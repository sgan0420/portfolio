"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiUser, HiHeart, HiBriefcase, HiAcademicCap } from "react-icons/hi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white">
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A passionate full-stack developer who treats coding like the ultimate game and loves turning wild ideas into reality!
            </p>
          </motion.div>

          {/* Personal Story Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HiUser className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">My Story</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Personal Image */}
                <div className="md:col-span-1">
                  <div className="relative">
                    <Image 
                      src="/me.png" 
                      alt="Shijie Gan" 
                      width={224}
                      height={224}
                      className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-gray-600 shadow-lg mx-auto"
                    />
                  </div>
                </div>
                
                {/* Story Content */}
                <div className="md:col-span-2">
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Hey there! I&apos;m a passionate coder who treats coding like the ultimate video game - 
                      solving puzzles, breaking things (intentionally... mostly 😅), and building dreams into reality!
                    </p>
                    <p>
                      I&apos;m all about full-stack development and design, with a knack for rapid learning and turning ideas into reality. 
                      I&apos;m absolutely amazed by AI (ChatGPT and I are basically best friends), and I love designing things that make people go &quot;Wow!&quot;
                    </p>
                    <p>
                      Technology is my playground, and I thrive in dynamic environments where I can embrace new challenges. 
                      Let&apos;s connect and create something amazing together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Quick Links to Experience & Education */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Education Link */}
              <Link href="/education">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-green-500/50 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                      <HiAcademicCap className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Education</h3>
                      <p className="text-green-400">Academic Excellence</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Discover my educational journey from Monash University&apos;s Computer Science program 
                    to Imperial College London&apos;s world-renowned engineering program.
                  </p>
                  <div className="flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Education</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>

              {/* Experience Link */}
              <Link href="/experience">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-blue-500/50 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                      <HiBriefcase className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Experience</h3>
                      <p className="text-blue-400">My Professional Journey</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Explore my work experience at leading tech companies including Ant International, iFAST Corporation, 
                    and my tutoring journey at Monash University.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Experience</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.section>

          {/* Interests & Hobbies */}
          <motion.section variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HiHeart className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tech & Strategy</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Coding & Software Development (my ultimate passion!)</li>
                    <li>• UI/UX Design & User Experience</li>
                    <li>• Gaming (Teamfight Tactics - reached Rank 300 in Europe!)</li>
                    <li>• Chess (former VP of Chess Club)</li>
                    <li>• Puzzle games & brain teasers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Entertainment & Sports</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Listening to Jay Chou music</li>
                    <li>• Watching movies & entertainment</li>
                    <li>• Board games (Werewolves, Avalon)</li>
                    <li>• Playing badminton</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <p className="text-center text-gray-300 italic">
                  &quot;Technology is my playground, and I thrive in dynamic environments where I can embrace new challenges 
                  and turn wild ideas into reality!&quot;
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
