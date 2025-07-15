"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import { HiCode } from "react-icons/hi";

const Experience = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My journey through the tech industry, from fintech giants to full-stack development and academic mentoring
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.section variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <HiCode className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Professional Journey</h2>
              </div>
              
              <div className="space-y-12">
                {/* Timeline Item 1 - Ant International */}
                <div className="border-l-4 border-blue-500 pl-6 pb-8">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-blue-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          Backend Engineer
                        </h3>
                        <p className="text-blue-400 mb-4 text-lg">Ant International • Nov 2024 - Mar 2025 • 5 months</p>
                        <div className="text-gray-300 space-y-4">
                          <p className="text-lg leading-relaxed">
                            What an incredible journey at one of the world's leading fintech companies! 
                            Dove deep into the fascinating world of backend development and middleware systems, 
                            working on mission-critical payment infrastructure that serves millions of users globally.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div>
                              <p className="text-blue-300 font-semibold mb-3 text-lg">Technical Highlights:</p>
                              <ul className="space-y-2">
                                <li>• Backend & Middleware architecture mastery</li>
                                <li>• Advanced Security & Risk Management systems</li>
                                <li>• Large-scale traffic handling (11.11 shopping events!)</li>
                                <li>• Deep dive into payments ecosystem architecture</li>
                                <li>• Microservices design and implementation</li>
                                <li>• Performance optimization and monitoring</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-blue-300 font-semibold mb-3 text-lg">Amazing Experiences:</p>
                              <ul className="space-y-2">
                                <li>• Visited Hangzhou HQ & Alibaba Xixi campus</li>
                                <li>• Collaborated with brilliant, supportive teammates</li>
                                <li>• Performed at the annual company dinner!</li>
                                <li>• Thrived in fast-paced, high-impact environment</li>
                                <li>• Gained insights into global fintech operations</li>
                                <li>• Contributed to mission-critical payment systems</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                            <p className="text-blue-300 font-medium mb-2">Key Achievements:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Successfully implemented backend solutions for high-volume payment processing</li>
                              <li>• Gained hands-on experience with enterprise-level fintech infrastructure</li>
                              <li>• Developed strong understanding of security protocols in financial systems</li>
                              <li>• Understood the importance of security, grayscale strategies, monitoring, and emergency response.</li>
                            </ul>
                          </div>
                          
                          <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                            <strong>Tech Stack:</strong> Spring Framework, Microservices Architecture, Message Queue Systems, 
                            RESTful APIs, Authentication & Authorization Systems, Git/GitLab, Network Security, 
                            Technical Documentation, Performance Monitoring & more!
                          </p>
                        </div>
                        
                        {/* Work Photos */}
                        <div className="mt-6">
                          <p className="text-blue-300 font-medium mb-3">Memories from Ant International:</p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                              <img 
                                src="/ant-me.png" 
                                alt="At Ant International office" 
                                className="w-full h-64 object-cover rounded-lg border border-gray-600 shadow-lg"
                              />
                              <p className="text-sm text-gray-400 mt-2 text-center">At the Ant Group's headquarter in Hangzhou, China</p>
                            </div>
                            <div className="flex-1">
                              <img 
                                src="/ant-group.png" 
                                alt="Ant International team" 
                                className="w-full h-64 object-cover rounded-lg border border-gray-600 shadow-lg"
                              />
                              <p className="text-sm text-gray-400 mt-2 text-center">Amazing team at Ant International</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 - iFAST Corporation */}
                <div className="border-l-4 border-purple-500 pl-6 pb-8">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-purple-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          Fullstack Software Engineer
                        </h3>
                        <p className="text-purple-400 mb-4 text-lg">iFAST Corporation Ltd • Nov 2023 - Feb 2024 • 4 months</p>
                        <div className="text-gray-300 space-y-4">
                          <p className="text-lg leading-relaxed">
                            My first comprehensive full-stack adventure! Contributed to the iFAST Global Bank platform, 
                            working on both frontend and backend components while learning invaluable lessons about 
                            modern web development in a professional fintech environment.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div>
                              <p className="text-purple-300 font-semibold mb-3 text-lg">Key Achievements:</p>
                              <ul className="space-y-2">
                                <li>• Full-stack development on live banking platform</li>
                                <li>• Mastered Angular framework from ground up</li>
                                <li>• Built robust RESTful APIs with Spring Boot</li>
                                <li>• Became the team's bug-fixing little hero</li>
                                <li>• Developed responsive, user-friendly interfaces</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-purple-300 font-semibold mb-3 text-lg">Team & Learning:</p>
                              <ul className="space-y-2">
                                <li>• Practiced Agile Scrum methodology</li>
                                <li>• Collaborated closely with UI/UX designers</li>
                                <li>• Participated in KitaHack hackathon with teammates</li>
                                <li>• Built comprehensive back-office email system</li>
                                <li>• Rapid learning and adaptation to new technologies</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                            <p className="text-purple-300 font-medium mb-2">Project Highlights:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Developed and maintained features for iFAST Global Bank platform</li>
                              <li>• Successfully integrated frontend Angular components with Spring Boot backend</li>
                              <li>• Implemented user authentication and authorization flows</li>
                              <li>• Created responsive designs that work seamlessly across devices</li>
                            </ul>
                          </div>
                          
                          <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                            <strong>Tech Stack:</strong> Angular, TypeScript, Java, Spring Framework, Spring Boot, 
                            RESTful APIs, Bootstrap, CSS3, HTML5, JavaScript ES6+, Git, Jira, Trello, 
                            MySQL Database & more!
                          </p>
                        </div>
                        
                        {/* Work Photo */}
                        <div className="mt-6">
                          <p className="text-purple-300 font-medium mb-3">Team Memories at iFAST:</p>
                          <div className="max-w-md">
                            <img 
                              src="/ifast-group.png" 
                              alt="iFAST team group photo" 
                              className="w-full h-64 object-cover rounded-lg border border-gray-600 shadow-lg"
                            />
                            <p className="text-sm text-gray-400 mt-2 text-center">The amazing iFAST development team</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - Tutoring Experience */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <div className="relative">
                    <div className="absolute -left-8.5 w-4 h-4 bg-teal-500 rounded-full"></div>
                    
                    <div className="flex flex-col gap-6">
                      {/* Experience Content */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          Computer Science Mathematics Tutor
                        </h3>
                        <p className="text-teal-400 mb-4 text-lg">Monash University Malaysia • Jul 2023 - Aug 2023 • 2 months • Hybrid</p>
                        <div className="text-gray-300 space-y-4">
                          <p className="text-lg leading-relaxed">
                            Provided personalized instruction and comprehensive support for the continuous mathematics unit MAT1830 
                            at Monash University, delivering effective tutoring in both in-person and online formats. 
                            This experience enhanced my communication skills and deepened my understanding of mathematical concepts.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div>
                              <p className="text-teal-300 font-semibold mb-3 text-lg">Key Responsibilities:</p>
                              <ul className="space-y-2">
                                <li>• Personalized mathematics instruction and guidance</li>
                                <li>• Hybrid teaching delivery (in-person & online)</li>
                                <li>• Comprehensive exam preparation support</li>
                                <li>• Complex mathematical concept clarification</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-teal-300 font-semibold mb-3 text-lg">Achievements & Impact:</p>
                              <ul className="space-y-2">
                                <li>• Enhanced student confidence and mathematical skills</li>
                                <li>• Helped students achieve significant improvement</li>
                                <li>• Applied deep mathematical understanding practically</li>
                                <li>• Strengthened communication and mentoring abilities</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-teal-500/10 p-4 rounded-xl border border-teal-500/20">
                            <p className="text-teal-300 font-medium mb-2">Teaching Philosophy & Methods:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Focused on building strong foundational understanding before advancing to complex topics</li>
                              <li>• Encouraged active problem-solving and critical thinking approaches</li>
                              <li>• Provided continuous feedback and adapted teaching methods to individual learning styles</li>
                            </ul>
                          </div>
                          
                          <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                            <strong>Subject Focus:</strong> MAT1830 - Continuous Mathematics, Calculus, Mathematical Analysis, 
                            Exam Preparation Strategies, Hybrid Teaching Methods, Academic Mentoring, 
                            Problem-Solving Techniques
                          </p>
                        </div>
                      </div>
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

              {/* Education Link */}
              <Link href="/education">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-green-500/50 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                      <HiCode className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Education</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Explore my academic journey from world-class institutions and achievements.
                  </p>
                  <div className="flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Education</span>
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

export default Experience;
