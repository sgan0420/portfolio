import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="page-shell">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="page-heading">
          <h1 className="page-title">Experience</h1>
          <p className="page-lead">
            My professional journey, from a founding role at an AI startup to
            fintech giants, full-stack development, and academic mentoring.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-8">
          {/* Stealth Startup */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">Stealth Startup</h2>
              <p className="text-muted font-normal mb-4">Aug 2026 - Present</p>
              <p className="text-xl italic text-ink">
                Founding Software Engineer
              </p>
              <p className="text-sm text-subtle font-normal">
                New York, United States
              </p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-normal mb-4">
                Productizing AI for the Next Billion Users
              </h3>
              <p className="timeline-overview">
                Building AI products from 0 to 1 across the full stack, with a
                focus on agents and model orchestration.
              </p>
              <details className="detail-disclosure">
                <summary>Role details</summary>
                <div className="disclosure-content space-y-7">
                  <div>
                    <p className="text-lg text-muted leading-relaxed font-normal mb-6">
                      Founding engineer at a stealth AI startup backed by $20M
                      from the VCs and angel investors behind companies like
                      Notion and Anduril. Building at the frontier of AI —
                      architecting systems across the entire stack from 0 to 1,
                      and turning early ideas into real products.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        What I&apos;m Building
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Systems across the entire stack, 0 to 1</li>
                        <li>• Context & model orchestration</li>
                        <li>• Real-world agent systems</li>
                        <li>• Technical foundations from first principles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        The Company
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• $20M raised from VCs and angel investors</li>
                        <li>• Backers behind Notion, Anduril and more</li>
                        <li>• Founding engineering team</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="section-label text-subtle mb-4">Focus</h4>
                    <p className="text-muted font-normal leading-relaxed">
                      AI Products, Agent Systems, Model Orchestration,
                      Full-Stack Architecture.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Trontal Group */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">Trontal Group</h2>
              <p className="text-muted font-normal mb-6">Mar 2025 - Aug 2026</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xl italic text-ink">
                    Full Stack & Charting Engineer
                  </p>
                  <p className="text-sm text-subtle font-normal">Promoted</p>
                </div>
                <div>
                  <p className="text-xl italic text-ink">Full Stack Engineer</p>
                  <p className="text-sm text-subtle font-normal">Initial</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-normal mb-4">
                OpenMarket Trading Platform
              </h3>
              <p className="timeline-overview">
                Built OpenMarket end to end and helped scale it to 50,000
                monthly active users. Promoted to own core charting and platform
                infrastructure.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <a
                  href="https://openmarket.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent underline-offset-4 hover:underline"
                >
                  <HiExternalLink className="w-4 h-4" />
                  openmarket.xyz
                </a>
                <a
                  href="https://x.com/openmarket_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent underline-offset-4 hover:underline"
                >
                  <FaXTwitter className="w-4 h-4" />
                  @openmarket_xyz
                </a>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-900 mb-8">
                <Image
                  src="/kiyotaka.png"
                  alt="OpenMarket (then Kiyotaka.ai) trading platform interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <details className="detail-disclosure">
                <summary>Role details</summary>
                <div className="disclosure-content space-y-7">
                  <div>
                    <p className="text-lg text-muted leading-relaxed font-normal mb-6">
                      Built OpenMarket (formerly Kiyotaka.ai) — a blockchain
                      quantitative trading platform — end to end, from system
                      design to deployment. Scaled the product from 0 to 50,000
                      monthly active users while refactoring the codebase into a
                      modular, scalable architecture that kept the system fast
                      and reliable as traffic grew. Promoted to Charting
                      Engineer with ownership of the core charting library and
                      platform infrastructure.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Technical Highlights
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Real-time charting & data visualization</li>
                        <li>
                          •{" "}
                          <Link
                            href="/projects/kata"
                            className="underline underline-offset-4 decoration-1 hover:text-accent"
                          >
                            Kata
                          </Link>{" "}
                          — AI assistant for authoring kScript indicators
                        </li>
                        <li>
                          • Live collaboration over WebSockets (session
                          management & live chat)
                        </li>
                        <li>
                          •{" "}
                          <Link
                            href="/projects/exchange-integrations"
                            className="underline underline-offset-4 decoration-1 hover:text-accent"
                          >
                            CEX & DEX integrations
                          </Link>{" "}
                          (Binance, Bybit, Hyperliquid)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>
                          • Scaled the platform from 0 to 50,000 monthly active
                          users
                        </li>
                        <li>
                          • Refactored into a modular, scalable architecture
                        </li>
                        <li>
                          • Guest access system & Progressive Web App (PWA)
                        </li>
                        <li>• Alert, in-app & push notification systems</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="section-label text-subtle mb-4">
                      Tech Stack
                    </h4>
                    <p className="text-muted font-normal leading-relaxed">
                      Vue 3, Nuxt 4, TypeScript, TailwindCSS, Pinia, Node.js,
                      WebSockets, PWA, Docker, Kubernetes, Cloudflare Pages.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Ant International */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">Ant International</h2>
              <p className="text-muted font-normal mb-4">Nov 2024 - Mar 2025</p>
              <p className="text-xl italic text-ink">Backend Engineer</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-normal mb-4">
                Backend & Middleware Systems
              </h3>
              <p className="timeline-overview">
                Built backend and middleware for payment systems serving
                millions of users globally.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-surface">
                  <Image
                    src="/ant-me.png"
                    alt="At Ant International office"
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-surface">
                  <Image
                    src="/ant-group.png"
                    alt="Ant International team"
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <details className="detail-disclosure">
                <summary>Role details</summary>
                <div className="disclosure-content space-y-7">
                  <div>
                    <p className="text-lg text-muted leading-relaxed font-normal mb-6">
                      Delivered backend and middleware components for
                      mission-critical payment systems — including the merchant
                      registration system, non-insured refund project, and
                      merchant OTP system — on a SOFABoot / Spring Boot stack
                      serving millions of users globally. Selected for a
                      business trip to Ant International&apos;s global event in
                      Hangzhou, working onsite at Ant HQ and Alibaba&apos;s Xixi
                      campus.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Technical Highlights
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Merchant registration, refund & OTP systems</li>
                        <li>• Async processing with message brokers</li>
                        <li>• Recurring tasks via job scheduling</li>
                        <li>
                          • Runtime tunability via dynamic resource config
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>
                          • Three golden rules: grayscale, monitoring, emergency
                          response
                        </li>
                        <li>• Large-scale traffic handling (11.11)</li>
                        <li>
                          • Cross-functional work across China & Singapore
                        </li>
                        <li>• Onsite at Ant HQ & Alibaba Xixi (Hangzhou)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="section-label text-subtle mb-4">
                      Tech Stack
                    </h4>
                    <p className="text-muted font-normal leading-relaxed">
                      SOFABoot, Spring Boot, Microservices, Message Brokers, Job
                      Scheduling, RESTful APIs, Auth Systems, Git/GitLab,
                      Network Security.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* iFAST Corporation */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">iFAST Corporation</h2>
              <p className="text-muted font-normal mb-4">Nov 2023 - Feb 2024</p>
              <p className="text-xl italic text-ink">Full Stack Engineer</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-normal mb-4">
                Global Bank Platform
              </h3>
              <p className="timeline-overview">
                Full-stack development for the iFAST Global Bank platform, from
                responsive interfaces to banking APIs.
              </p>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-surface mb-8">
                <Image
                  src="/ifast-group.png"
                  alt="iFAST team group photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <details className="detail-disclosure">
                <summary>Role details</summary>
                <div className="disclosure-content space-y-7">
                  <div>
                    <p className="text-lg text-muted leading-relaxed font-normal mb-6">
                      Contributed to the iFAST Global Bank platform, working on
                      both frontend and backend components while learning
                      invaluable lessons about modern web development in a
                      professional fintech environment.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Full-stack development on live banking app</li>
                        <li>• Mastered Angular framework</li>
                        <li>• Built robust RESTful APIs with Spring Boot</li>
                        <li>• Developed responsive interfaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Team & Learning
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Agile Scrum methodology</li>
                        <li>• UI/UX collaboration</li>
                        <li>• KitaHack hackathon participation</li>
                        <li>• Back-office email system</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="section-label text-subtle mb-4">
                      Tech Stack
                    </h4>
                    <p className="text-muted font-normal leading-relaxed">
                      Angular, TypeScript, Java, Spring Boot, RESTful APIs,
                      Bootstrap, MySQL, Git, Jira.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Monash University */}
          <div className="timeline-item grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-normal mb-2">Monash University</h2>
              <p className="text-muted font-normal mb-4">Jul 2023 - Aug 2023</p>
              <p className="text-xl italic text-ink">Mathematics Tutor</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-normal mb-4">
                Computer Science Mathematics
              </h3>
              <p className="timeline-overview">
                Personalized mathematics tutoring for Monash Computer Science
                students, online and in person.
              </p>
              <details className="detail-disclosure">
                <summary>Role details</summary>
                <div className="disclosure-content space-y-7">
                  <div>
                    <p className="text-lg text-muted leading-relaxed font-normal">
                      Provided personalized instruction and comprehensive
                      support for the continuous mathematics unit MAT1830,
                      delivering effective tutoring in both in-person and online
                      formats.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="section-label text-subtle mb-4">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Personalized mathematics instruction</li>
                        <li>• Hybrid teaching (in-person & online)</li>
                        <li>• Exam preparation support</li>
                        <li>• Concept clarification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label text-subtle mb-4">Impact</h4>
                      <ul className="space-y-2 text-muted font-normal">
                        <li>• Enhanced student confidence</li>
                        <li>• Significant grade improvements</li>
                        <li>• Practical application of concepts</li>
                        <li>• Mentoring skills development</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="section-label text-subtle mb-4">
                      Subject Focus
                    </h4>
                    <p className="text-muted font-normal leading-relaxed">
                      MAT1830 - Continuous Mathematics, Calculus, Mathematical
                      Analysis, Problem-Solving Techniques.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
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

          <Link href="/education" className="group">
            <div className="navigation-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-normal mb-2">Education</h3>
                <p className="text-muted font-normal">
                  Academic journey and achievements
                </p>
              </div>
              <div className="mt-8 flex items-center section-label group-hover:underline underline-offset-4">
                View Education <HiArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
