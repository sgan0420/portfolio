import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Education = () => {
  return (
    <div className="page-shell">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="page-heading">
          <h1 className="page-title">Education</h1>
          <p className="page-lead">
            My academic journey, from engineering foundations to computer
            science excellence.
          </p>
        </div>

        {/* Education Items */}
        <div className="space-y-8">
          {/* Monash University */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">Monash University</h2>
              <p className="text-muted font-normal mb-4">Oct 2022 - Jul 2025</p>
              <div className="inline-block px-3 py-1 border border-line rounded-full text-sm text-muted">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-normal mb-4">
                  Bachelor of Computer Science
                </h3>
                <div className="p-6 bg-surface rounded-lg border border-line mb-6">
                  <p className="text-lg font-medium mb-1">
                    CGPA: 3.97/4.0 • WAM: 90.15
                  </p>
                  <p className="text-muted">
                    Monash High Achiever Award (RM30,000 Scholarship)
                  </p>
                </div>
                <p className="text-lg text-muted leading-relaxed font-normal">
                  Graduated with exceptional academic excellence and outstanding
                  performance across computer science fundamentals, earning the
                  Monash High Achiever Award and top marks in multiple core
                  subjects.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="section-label text-subtle mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-muted font-normal">
                    <li>• 1st place in AI Pacman Challenge</li>
                    <li>• 100% full marks in Python Development</li>
                    <li>• 100% full marks in Mobile Application</li>
                    <li>• Highest scores in multiple core subjects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="section-label text-subtle mb-4">
                    Skills Developed
                  </h4>
                  <ul className="space-y-2 text-muted font-normal">
                    <li>• Full-stack Development</li>
                    <li>• Mobile App & Android</li>
                    <li>• AI & Machine Learning</li>
                    <li>• Cybersecurity Principles</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="section-label text-subtle mb-4">Tech Stack</h4>
                <p className="text-muted font-normal leading-relaxed">
                  Java, Python, JavaScript, TypeScript, React, Node.js, Android
                  Studio, Oracle Database, MySQL, Linux/Unix, Haskell.
                </p>
              </div>
            </div>
          </div>

          {/* Imperial College London */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">
                Imperial College London
              </h2>
              <p className="text-muted font-normal mb-4">Oct 2019 - Jul 2022</p>
              <div className="inline-block px-3 py-1 border border-line rounded-full text-sm text-muted">
                London, UK
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-normal mb-4">
                  Mechanical Engineering
                </h3>
                <p className="text-sm text-subtle mb-4 uppercase tracking-wider">
                  Certificate of Higher Education
                </p>
                <div className="p-6 bg-surface rounded-lg border border-line mb-6">
                  <p className="text-lg font-medium mb-1">
                    Ranked 2nd in the World (QS 2025)
                  </p>
                  <p className="text-muted">
                    Recognition for Excellence in Design & Manufacture
                  </p>
                </div>
                <p className="text-lg text-muted leading-relaxed font-normal">
                  Excelled in mechanical engineering at one of the world&apos;s
                  leading institutions. This foundational experience provided
                  invaluable problem-solving skills and analytical thinking that
                  seamlessly transitioned into computer science.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="section-label text-subtle mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-muted font-normal">
                    <li>• Top 10% ranking in multiple exams</li>
                    <li>• Strong engineering principles mastery</li>
                    <li>• Advanced mathematical problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="section-label text-subtle mb-4">
                    Skills Acquired
                  </h4>
                  <ul className="space-y-2 text-muted font-normal">
                    <li>• Python for Engineering</li>
                    <li>• Data Analysis & Modeling</li>
                    <li>• CAD Design & SOLIDWORKS</li>
                    <li>• Finite Element Analysis (FEA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Taylor's College */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">
                Taylor&apos;s College
              </h2>
              <p className="text-muted font-normal mb-4">Jan 2018 - Jul 2019</p>
              <div className="inline-block px-3 py-1 border border-line rounded-full text-sm text-muted">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-normal mb-4">
                  Cambridge A-Levels
                </h3>
                <div className="p-6 bg-surface rounded-lg border border-line mb-6">
                  <p className="text-lg font-medium mb-1">
                    4 A* (Perfect Score)
                  </p>
                  <p className="text-muted">
                    A-Level High Achiever Award • Taylor&apos;s Merit
                    Scholarship
                  </p>
                </div>
                <p className="text-lg text-muted leading-relaxed font-normal">
                  Achieved exceptional results with perfect A* grades in
                  Mathematics, Physics, Chemistry, and Further Mathematics.
                </p>
              </div>
            </div>
          </div>

          {/* SMJK Yok Bin */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">SMJK Yok Bin</h2>
              <p className="text-muted font-normal mb-4">2013 - 2017</p>
              <div className="inline-block px-3 py-1 border border-line rounded-full text-sm text-muted">
                Malaysia
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl font-normal mb-4">
                  SPM (Malaysian Certificate of Education)
                </h3>
                <div className="p-6 bg-surface rounded-lg border border-line mb-6">
                  <p className="text-lg font-medium mb-1">7A+, 2A, 1A-</p>
                  <p className="text-muted">Outstanding Academic Performance</p>
                </div>
                <p className="text-lg text-muted leading-relaxed font-normal">
                  Demonstrated exceptional academic performance and leadership
                  capabilities. President of Chinese Society, Vice President of
                  Chess Club.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-6 mt-32">
          <Link href="/about" className="group">
            <div className="navigation-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-normal mb-2">About Me</h3>
                <p className="text-muted font-normal">
                  My story and background
                </p>
              </div>
              <div className="mt-8 flex items-center section-label group-hover:underline underline-offset-4">
                Read Bio <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/experience" className="group">
            <div className="navigation-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-normal mb-2">Experience</h3>
                <p className="text-muted font-normal">
                  Professional career and roles
                </p>
              </div>
              <div className="mt-8 flex items-center section-label group-hover:underline underline-offset-4">
                View Journey <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
