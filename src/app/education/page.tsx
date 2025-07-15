"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import { HiAcademicCap, HiCode } from "react-icons/hi";

const Education = () => {
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
      {/* Header */}
      <Header />
      
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Education Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From academic excellence to world-class institutions - my educational path that shaped my passion for technology
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.section variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <HiAcademicCap className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Academic Excellence</h2>
              </div>
              
              <div className="space-y-12">
                {/* Monash University */}
                <div className="border-l-4 border-green-500 pl-6 pb-8">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Bachelor's Degree, Computer Science
                    </h3>
                    <p className="text-green-400 mb-4 text-lg">Monash University Malaysia • Oct 2022 - Jul 2025</p>
                    <div className="text-gray-300 space-y-4">
                      <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/30">
                        <p className="text-xl font-bold text-green-300 text-center">
                          🏆 CGPA: 3.97/4.0 | WAM: 90.154/100 | Monash High Achiever Award
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed">
                        Maintained exceptional academic excellence with outstanding performance in computer science fundamentals, 
                        including perfect scores and competition victories that showcase both theoretical knowledge and practical skills. 
                        Currently pursuing my final year with continued dedication to academic and practical excellence.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div>
                          <p className="text-green-300 font-semibold mb-3 text-lg">Core Achievements:</p>
                          <ul className="space-y-2">
                            <li>• Outstanding CGPA of 3.97/4.0 & WAM of 90.154/100</li>
                            <li>• Monash High Achiever Award (RM30,000 scholarship)</li>
                            <li>• Highest scores achieved in multiple core subjects</li>
                            <li>• 🏆 1st place in AI Pacman Challenge competition</li>
                            <li>• 💯 100% full marks in Python Development</li>
                            <li>• 💯 100% full marks in Mobile Application</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-green-300 font-semibold mb-3 text-lg">Key Skills Developed:</p>
                          <ul className="space-y-2">
                            <li>• Full-stack Development (Java, Python, JavaScript)</li>
                            <li>• Mobile App Development & Android</li>
                            <li>• Database Design & Data Analysis</li>
                            <li>• Cybersecurity principles & System Administration</li>
                            <li>• Artificial Intelligence & Machine Learning</li>
                            <li>• Data Structures, Algorithms & Software Engineering</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl">
                        <p className="text-green-300 font-medium mb-2">Notable Projects & Competitions:</p>
                        <ul className="text-sm space-y-1">
                          <li>• AI Pacman Challenge: Developed advanced AI algorithms that secured 1st place victory</li>
                          <li>• Mobile Application Project: Created comprehensive Android app with perfect execution</li>
                          <li>• Python Development: Showcased advanced programming skills with flawless implementation</li>
                          <li>• Database Systems: Designed and implemented complex database solutions</li>
                        </ul>
                      </div>
                      
                      <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                        <strong>Comprehensive Tech Stack:</strong> Java, Python, JavaScript, TypeScript, HTML5, CSS3, 
                        Android Studio, React, Node.js, Git, GitHub, GitLab, Oracle Database, MySQL, R Programming, 
                        Haskell, Linux/Unix Systems, MARIE Assembly Language & more!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imperial College London */}
                <div className="border-l-4 border-emerald-500 pl-6 pb-8">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Certificate of Higher Education, Mechanical Engineering
                    </h3>
                    <p className="text-emerald-400 mb-4 text-lg">Imperial College London • Oct 2019 - Jul 2022</p>
                    <div className="text-gray-300 space-y-4">
                      <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30">
                        <p className="text-xl font-bold text-emerald-300 text-center">
                          🏫 Imperial College London - Ranked 2nd in the World
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed">
                        Excelled in mechanical engineering with recognition for outstanding technical skills and academic performance 
                        at one of the world's leading engineering institutions. This foundational engineering experience provided 
                        invaluable problem-solving skills and analytical thinking that seamlessly transitioned into computer science.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div>
                          <p className="text-emerald-300 font-semibold mb-3 text-lg">Key Achievements:</p>
                          <ul className="space-y-2">
                            <li>• Recognition for Excellence in Design & Manufacture</li>
                            <li>• Top 10% ranking in multiple examinations</li>
                            <li>• Strong engineering principles mastery</li>
                            <li>• Advanced mathematical problem-solving skills</li>
                            <li>• International perspective and cultural adaptability</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-emerald-300 font-semibold mb-3 text-lg">Technical Skills Acquired:</p>
                          <ul className="space-y-2">
                            <li>• CAD Design & SOLIDWORKS proficiency</li>
                            <li>• Finite Element Analysis (FEA) expertise</li>
                            <li>• Fluid Mechanics & Thermodynamics</li>
                            <li>• Manufacturing processes & Mechatronics</li>
                            <li>• Python programming for engineering applications</li>
                            <li>• Data analysis and mathematical modeling</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl">
                        <p className="text-emerald-300 font-medium mb-2">Engineering Foundation Impact:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Developed systematic problem-solving approach that translates perfectly to software development</li>
                          <li>• Gained strong mathematical foundation essential for computer science algorithms</li>
                          <li>• Learned precision and attention to detail crucial in programming and system design</li>
                          <li>• Acquired project management and time management skills through complex engineering projects</li>
                        </ul>
                      </div>
                      
                      <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                        <strong>Engineering Focus Areas:</strong> Design & Manufacture, Stress Analysis, Fluid Mechanics, 
                        Thermodynamics, Mechatronics, Python Programming, SOLIDWORKS, Finite Element Analysis, 
                        Mathematical Modeling, Project Management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Taylor's College */}
                <div className="border-l-4 border-teal-500 pl-6 pb-8">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-teal-500 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Cambridge A-Levels
                    </h3>
                    <p className="text-teal-400 mb-4 text-lg">Taylor's College • Jan 2018 - Jul 2019</p>
                    <div className="text-gray-300 space-y-4">
                      <div className="bg-teal-500/10 p-4 rounded-xl border border-teal-500/30">
                        <p className="text-xl font-bold text-teal-300 text-center">
                          🌟 Grade: 4A* | A-Level High Achiever | Taylor's Merit Scholarship
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed">
                        Achieved exceptional results in Cambridge A-Levels with perfect A* grades, 
                        earning recognition as a high achiever and merit scholarship recipient. 
                        This rigorous academic preparation laid the foundation for success in higher education.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div>
                          <p className="text-teal-300 font-semibold mb-3 text-lg">Subject Excellence:</p>
                          <ul className="space-y-2">
                            <li>• Mathematics - A* (Advanced pure & applied math)</li>
                            <li>• Physics - A* (Mechanics, electricity, quantum)</li>
                            <li>• Chemistry - A* (Organic, inorganic, physical)</li>
                            <li>• Further Mathematics - A* (Advanced mathematical concepts)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-teal-300 font-semibold mb-3 text-lg">Recognition & Achievements:</p>
                          <ul className="space-y-2">
                            <li>• A-Level High Achiever Award</li>
                            <li>• Taylor's Merit Scholarship recipient</li>
                            <li>• Consistent top performer throughout program</li>
                            <li>• Perfect preparation for university entrance</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl">
                        <p className="text-teal-300 font-medium mb-2">Foundation Skills Developed:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Advanced mathematical reasoning and problem-solving methodologies</li>
                          <li>• Scientific method and analytical thinking approaches</li>
                          <li>• Independent research and self-directed learning capabilities</li>
                          <li>• Time management and exam preparation strategies under pressure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SMJK Yok Bin */}
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-cyan-500 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      SPM (Malaysian Certificate of Education)
                    </h3>
                    <p className="text-cyan-400 mb-4 text-lg">SMJK Yok Bin • 2013 - 2017</p>
                    <div className="text-gray-300 space-y-4">
                      <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/30">
                        <p className="text-xl font-bold text-cyan-300 text-center">
                          🎯 Grade: 7A+ 2A 1A- | Outstanding Academic Performance
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed">
                        Demonstrated exceptional academic performance and leadership capabilities during secondary education, 
                        achieving outstanding results while actively contributing to school community through various leadership roles.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div>
                          <p className="text-cyan-300 font-semibold mb-3 text-lg">Academic Excellence:</p>
                          <ul className="space-y-2">
                            <li>• 7A+, 2A, 1A- grades</li>
                            <li>• Consistent honor roll student throughout</li>
                            <li>• Top performer in mathematics and sciences</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-cyan-300 font-semibold mb-3 text-lg">Leadership & Activities:</p>
                          <ul className="space-y-2">
                            <li>• President of Chinese Society</li>
                            <li>• Vice President of Chess Club</li>
                            <li>• Deputy Head of School Emcee team</li>
                            <li>• Active participant in school cultural events</li>
                            <li>• Developed public speaking and presentation skills</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl">
                        <p className="text-cyan-300 font-medium mb-2">Leadership Development:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Developed strong organizational and team management skills through society leadership</li>
                          <li>• Enhanced strategic thinking and planning abilities through chess club involvement</li>
                          <li>• Gained confident public speaking and crowd engagement experience as school emcee</li>
                          <li>• Built multicultural communication skills and cultural appreciation</li>
                        </ul>
                      </div>
                      
                      <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                        <strong>Foundation Skills:</strong> Academic Excellence, Leadership Development, Public Speaking, 
                        Strategic Thinking, Cultural Appreciation, Team Management, Event Organization, 
                        Communication Skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Navigation to Other Sections */}
          <motion.section variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* About Link */}
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-blue-500/50 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <HiCode className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">About Me</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Learn more about my story, interests, and what drives my passion for technology.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View About</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-purple-500/50 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                      <HiCode className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Experience</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Explore my professional journey through leading tech companies and projects.
                  </p>
                  <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Experience</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
