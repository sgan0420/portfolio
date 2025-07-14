"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiUser, HiHeart, HiCode } from "react-icons/hi";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-20">
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
              [Placeholder] - A passionate software engineer who loves creating innovative solutions and learning new technologies.
            </p>
          </motion.div>

          {/* Personal Story Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HiUser className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">My Story</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  [Placeholder] - This is where you'll share your personal journey into software development, 
                  what inspired you to become a developer, and key moments that shaped your career.
                </p>
                <p>
                  [Placeholder] - Talk about your passion for technology, problem-solving approach, 
                  and what drives you to create meaningful software solutions.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Skills & Experience Timeline */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HiCode className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Experience & Skills</h2>
              </div>
              <div className="space-y-6">
                {/* Timeline Item 1 */}
                <div className="border-l-4 border-blue-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      [Current/Recent Position - Placeholder]
                    </h3>
                    <p className="text-blue-400 mb-2">[Company Name] • [Duration]</p>
                    <p className="text-gray-300">
                      [Placeholder] - Brief description of your role, key responsibilities, 
                      and major achievements or projects you worked on.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="border-l-4 border-purple-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      [Previous Position - Placeholder]
                    </h3>
                    <p className="text-purple-400 mb-2">[Company Name] • [Duration]</p>
                    <p className="text-gray-300">
                      [Placeholder] - Description of previous experience, technologies used, 
                      and key learning outcomes.
                    </p>
                  </div>
                </div>

                {/* Add more timeline items as needed */}
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HiAcademicCap className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      [Degree - Placeholder]
                    </h3>
                    <p className="text-green-400 mb-2">[University Name] • [Year]</p>
                    <p className="text-gray-300">
                      [Placeholder] - Brief description of your studies, relevant coursework, 
                      achievements, or projects during your education.
                    </p>
                  </div>
                </div>
              </div>
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
                  <h3 className="text-lg font-semibold text-white mb-3">Professional Interests</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• [Placeholder] - AI & Machine Learning</li>
                    <li>• [Placeholder] - Web Development</li>
                    <li>• [Placeholder] - Mobile App Development</li>
                    <li>• [Placeholder] - Cloud Computing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Hobbies</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• [Placeholder] - Your hobby 1</li>
                    <li>• [Placeholder] - Your hobby 2</li>
                    <li>• [Placeholder] - Your hobby 3</li>
                    <li>• [Placeholder] - Your hobby 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
