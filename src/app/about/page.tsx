import type { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

const About = () => {
  return (
    <div className="page-shell about-page">
      <div className="site-container">
        {/* Header Section */}
        <PageHeading title="About Me">
          Full-stack developer with a passion for building scalable applications
          and solving complex problems. Based in Malaysia, thinking globally.
        </PageHeading>

        {/* Main Content Grid */}
        <div
          data-reveal
          className="about-layout grid md:grid-cols-12 gap-12 mb-24"
        >
          {/* Profile Image */}
          <div className="md:col-span-5">
            <div className="profile-frame relative aspect-[4/5] w-full overflow-hidden bg-surface">
              <Image
                src="/me2.png"
                alt="Shijie Gan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Bio & Details */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div className="about-bio space-y-8 text-lg text-muted leading-relaxed font-normal">
              <p>
                I view code as a medium for creativity and problem-solving. My
                journey started with a curiosity for how things work, leading me
                to pursue Computer Science at Monash University and Engineering
                at Imperial College London.
              </p>
              <div className="visible-details">
                <div className="detail-content space-y-5">
                  <p>
                    Today, I specialize in full-stack development, with
                    expertise in modern frameworks like React, Next.js, and
                    Spring Boot. I thrive in environments that challenge me to
                    learn quickly and adapt.
                  </p>
                  <p>
                    Beyond the screen, I&apos;m a strategic thinker—whether
                    it&apos;s optimizing algorithms or ranking up in Teamfight
                    Tactics. I believe in writing clean, maintainable code that
                    stands the test of time.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats / Quick Info */}
            <div className="about-facts grid grid-cols-2 gap-8 mt-12 border-t border-line pt-8">
              <div>
                <h3 className="section-label text-subtle mb-2">Location</h3>
                <p className="text-lg">Malaysia / Remote</p>
              </div>
              <div>
                <h3 className="section-label text-subtle mb-2">Education</h3>
                <p className="text-lg mb-1">Monash University</p>
                <p className="text-lg">Imperial College London</p>
              </div>
              <div>
                <h3 className="section-label text-subtle mb-2">Interests</h3>
                <p className="text-lg">Chess, Gaming, Board Games</p>
              </div>
              <div>
                <h3 className="section-label text-subtle mb-2">Status</h3>
                <p className="text-lg text-green-700 dark:text-green-400">
                  Available for hire
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/education" className="group">
            <div className="navigation-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-normal mb-2">Education</h3>
                <p className="text-muted font-normal">
                  Academic journey and achievements
                </p>
              </div>
              <div className="mt-8 flex items-center section-label group-hover:underline underline-offset-4">
                View Details
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
                View Journey
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
