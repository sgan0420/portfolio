"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiAcademicCap, HiUser, HiHeart, HiCode, HiArrowLeft, HiHome } from "react-icons/hi";

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
      {/* Back/Home Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group bg-black/30 backdrop-blur-sm rounded-lg"
        >
          <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <HiHome className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </motion.div>
      
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
              A passionate full-stack developer who treats coding like the ultimate game and loves turning wild ideas into reality! 🚀
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
                    <img 
                      src="/me.png" 
                      alt="Shijie Gan" 
                      className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-gray-600 shadow-lg mx-auto"
                    />
                  </div>
                </div>
                
                {/* Story Content */}
                <div className="md:col-span-2">
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Hey there! I'm a passionate coder who treats coding like the ultimate video game - 
                      solving puzzles, breaking things (intentionally... mostly 😅), and building dreams into reality!
                    </p>
                    <p>
                      I'm all about full-stack development and design, with a knack for rapid learning and turning ideas into reality. 
                      I'm absolutely amazed by AI (ChatGPT and I are basically best friends), and I love designing things that make people go "Wow!"
                    </p>
                    <p>
                      Technology is my playground, and I thrive in dynamic environments where I can embrace new challenges. 
                      Let's connect and create something amazing together!
                    </p>
                  </div>
                </div>
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
              <div className="space-y-8">
                {/* Timeline Item 1 - Ant International */}
                <div className="border-l-4 border-blue-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-blue-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Backend Engineer
                        </h3>
                        <p className="text-blue-400 mb-4">Ant International • Nov 2024 - Mar 2025 • 5 months</p>
                        <div className="text-gray-300 space-y-3">
                          <p>
                            What an incredible journey at one of the world's leading fintech companies! 
                            Dove deep into the fascinating world of backend development and middleware systems.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 my-4">
                            <div>
                              <p className="text-blue-300 font-medium mb-2">Technical Highlights:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Backend & Middleware mastery</li>
                                <li>• Security & Risk Management</li>
                                <li>• Large-scale traffic handling (11.11 events!)</li>
                                <li>• Payments ecosystem deep dive</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-blue-300 font-medium mb-2">Amazing Experiences:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Visited Hangzhou HQ & Alibaba Xixi campus</li>
                                <li>• Met brilliant, supportive teammates</li>
                                <li>• Performed at the annual dinner!</li>
                                <li>• Thrived in fast-paced environment</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">
                            <strong>Tech Stack:</strong> Spring Framework, Microservices, Message Queue, APIs, 
                            Authentication Systems, Git, Network Security, Technical Documentation & more!
                          </p>
                        </div>
                        
                        {/* Work Photos */}
                        <div className="mt-4">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <img 
                              src="/ant-me.png" 
                              alt="At Ant International office" 
                              className="w-48 h-54 object-cover rounded-lg border border-gray-600 shadow-lg"
                            />
                            <img 
                              src="/ant-group.png" 
                              alt="Ant International team" 
                              className="w-72 h-54 object-cover rounded-lg border border-gray-600 shadow-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 - iFAST Corporation */}
                <div className="border-l-4 border-purple-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-purple-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Fullstack Software Engineer
                        </h3>
                        <p className="text-purple-400 mb-4">iFAST Corporation Ltd • Nov 2023 - Feb 2024 • 4 months</p>
                        <div className="text-gray-300 space-y-3">
                          <p>
                            My first full-stack adventure! Contributed to the iFAST Global Bank platform 
                            and learned so much about modern web development.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 my-4">
                            <div>
                              <p className="text-purple-300 font-medium mb-2">Key Achievements:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Full-stack development on live platform</li>
                                <li>• Mastered Angular framework</li>
                                <li>• Built RESTful APIs with Spring Boot</li>
                                <li>• Bug fixing hero</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-purple-300 font-medium mb-2">Team Experience:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Practiced Scrum methodology</li>
                                <li>• Collaborated with UI/UX team</li>
                                <li>• Participated in KitaHack hackathon</li>
                                <li>• Built back-office email project</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">
                            <strong>Tech Stack:</strong> Angular, TypeScript, Java, Spring Framework, RESTful APIs, 
                            Bootstrap, CSS, HTML, JavaScript, Git, Jira, Trello & more!
                          </p>
                        </div>
                        
                        {/* Work Photo */}
                        <div className="mt-4">
                          <img 
                            src="/ifast-group.png" 
                            alt="iFAST team group photo" 
                            className="w-72 h-48 object-cover rounded-lg border border-gray-600 shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - Tutoring Experience */}
                <div className="border-l-4 border-teal-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-teal-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Computer Science Mathematics Tutor
                        </h3>
                        <p className="text-teal-400 mb-4">Monash University Malaysia • Jul 2023 - Aug 2023 • 2 months • Hybrid</p>
                        <div className="text-gray-300 space-y-3">
                          <p>
                            Provided personalized instruction and support for the continuous mathematics unit MAT1830 at Monash University, 
                            delivering both in-person and online tutoring in a hybrid format.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 my-4">
                            <div>
                              <p className="text-teal-300 font-medium mb-2">Key Responsibilities:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Personalized mathematics instruction</li>
                                <li>• Hybrid teaching (in-person & online)</li>
                                <li>• Exam preparation support</li>
                                <li>• Complex concept clarification</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-teal-300 font-medium mb-2">Achievements:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Enhanced student confidence & skills</li>
                                <li>• Helped student achieve academic success</li>
                                <li>• Applied deep mathematical understanding</li>
                                <li>• Adapted to hybrid learning environment</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">
                            <strong>Subject:</strong> MAT1830 - Continuous Mathematics, Mathematical Concepts, 
                            Exam Preparation, Hybrid Teaching Methods
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="space-y-8">
                {/* Monash University */}
                <div className="border-l-4 border-green-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Bachelor's Degree, Computer Science
                    </h3>
                    <p className="text-green-400 mb-4">Monash University • Oct 2022 - Jul 2025</p>
                    <div className="text-gray-300 space-y-3">
                      <p className="text-lg font-medium text-green-300">
                        🏆 CGPA: 3.97/4.0 | WAM: 90.154/100 | Monash High Achiever Award
                      </p>
                      <p>
                        Maintained exceptional academic excellence with outstanding performance in computer science fundamentals, 
                        including perfect scores and competition victories that showcase both theoretical knowledge and practical skills.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-4">
                        <div>
                          <p className="text-green-300 font-medium mb-2">Core Achievements:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Outstanding CGPA of 3.97/4.0 & WAM of 90.154/100</li>
                            <li>• 🏆 1st place in AI Pacman Challenge</li>
                            <li>• 💯 100% full marks in Python Development</li>
                            <li>• 💯 100% full marks in Mobile Application</li>
                            <li>• Highest scores achieved in multiple subjects</li>
                            <li>• Monash High Achiever Award (RM30,000 scholarship)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-green-300 font-medium mb-2">Key Skills Developed:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Full-stack Development (Java, Python, JS)</li>
                            <li>• Mobile App Development & Android</li>
                            <li>• Database Design & Data Analysis</li>
                            <li>• Cybersecurity & System Administration</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        <strong>Tech Stack:</strong> Java, Python, JavaScript, TypeScript, HTML, CSS, Android Studio, 
                        Git, GitHub, GitLab, Oracle Database, R, Haskell, Linux, Unix, MARIE Assembly & more!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imperial College London */}
                <div className="border-l-4 border-emerald-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Certificate of Higher Education, Mechanical Engineering
                    </h3>
                    <p className="text-emerald-400 mb-4">Imperial College London • Oct 2019 - Jul 2022</p>
                    <div className="text-gray-300 space-y-3">
                      <p className="text-lg font-medium text-emerald-300">
                        🏫 Imperial College London - Ranked 2nd in the World
                      </p>
                      <p>
                        Excelled in mechanical engineering with recognition for outstanding technical skills and academic performance 
                        at one of the world's leading engineering institutions.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-4">
                        <div>
                          <p className="text-emerald-300 font-medium mb-2">Key Achievements:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Recognition for Excellence in Design & Manufacture</li>
                            <li>• Top 10% ranking in multiple examinations</li>
                            <li>• Outstanding project work recognition</li>
                            <li>• Strong engineering principles mastery</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-emerald-300 font-medium mb-2">Technical Skills:</p>
                          <ul className="text-sm space-y-1">
                            <li>• CAD & SOLIDWORKS proficiency</li>
                            <li>• Finite Element Analysis (FEA)</li>
                            <li>• Fluid Mechanics & Thermodynamics</li>
                            <li>• Manufacturing & Mechatronics</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        <strong>Engineering Focus:</strong> Design & Manufacture, Stress Analysis, Fluid Mechanics, 
                        Thermodynamics, Mechatronics, Python, SOLIDWORKS, FEA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Taylor's College */}
                <div className="border-l-4 border-teal-500 pl-6 pb-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-teal-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Cambridge A-Levels
                    </h3>
                    <p className="text-teal-400 mb-4">Taylor's College • Jan 2018 - Jul 2019</p>
                    <div className="text-gray-300 space-y-3">
                      <p className="text-lg font-medium text-teal-300">
                        🌟 Grade: 4A* | A-Level High Achiever | Taylor's Merit Scholarship
                      </p>
                      <p>
                        Achieved exceptional results in Cambridge A-Levels with perfect A* grades, 
                        earning recognition as a high achiever and merit scholarship recipient.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SMJK Yok Bin */}
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-cyan-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      SPM (Malaysian Certificate of Education)
                    </h3>
                    <p className="text-cyan-400 mb-4">SMJK Yok Bin • 2013 - 2017</p>
                    <div className="text-gray-300 space-y-3">
                      <p className="text-lg font-medium text-cyan-300">
                        🎯 Grade: 7A+ 2A 1A-
                      </p>
                      <div className="grid md:grid-cols-1 gap-4 my-4">
                        <div>
                          <p className="text-cyan-300 font-medium mb-2">Leadership Roles:</p>
                          <ul className="text-sm space-y-1">
                            <li>• President of Chinese Society</li>
                            <li>• Vice President of Chess Club</li>
                            <li>• Deputy Head of School Emcee</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
