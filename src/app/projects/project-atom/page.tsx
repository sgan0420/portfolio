import Link from "next/link";
import {
  FaGithub,
  FaRobot,
  FaHandPaper,
  FaCube,
  FaRunning,
} from "react-icons/fa";
import { SiPython, SiOpencv } from "react-icons/si";
import { HiVideoCamera } from "react-icons/hi";
import Image from "next/image";
import BackButton from "../../../components/BackButton";

const ProjectDetail = () => {
  const project = {
    title: "Project Atom",
    description:
      "A gesture-controlled 3D robot inspired by Real Steel. Control an animated robot in real-time using hand gestures captured via webcam. Built with Ursina/Panda3D, MediaPipe, and OpenCV.",
    longDescription: (
      <div className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted font-normal mb-8">
            Inspired by the movie Real Steel, this project brings
            gesture-controlled robotics to life. Using computer vision and 3D
            rendering, you can control a robot&apos;s actions with your bare
            hands - make a fist to punch, open your palm to kick, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="section-label text-muted mb-4">Gesture Controls</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Both Fists:</span> Boxing stance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Both Palms:</span> Dance
                  animation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Left/Right Fist:</span> Punch
                  left/right
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                <span>
                  <span className="font-medium">Left/Right Palm:</span> Kick
                  left/right
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-muted mb-4">Technical Stack</h4>
            <ul className="space-y-3 text-muted font-normal">
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Ursina/Panda3D for 3D rendering and animation
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                MediaPipe for 21-point hand landmark detection
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                OpenCV for webcam capture and image processing
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                Python threading for real-time gesture processing
              </li>
              <li className="flex gap-3">
                <span className="text-ink">•</span>
                GLB animated 3D models with skeletal animation
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">
            Key Technical Challenges Solved
          </h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Real-time webcam texture updates in Panda3D using setRamImage()
              with BGR format
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Non-blocking gesture detection using Python threading with Queue
              for frame/pose data
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Gesture classification by comparing finger tip vs PIP joint
              y-coordinates
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Dynamic material system with height-based coloring for robot parts
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              Left/right hand differentiation using MediaPipe handedness
              detection
            </li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-line">
          <p className="text-sm text-muted font-normal">
            <strong className="text-ink font-medium">
              Real-Time Performance:
            </strong>{" "}
            Achieves smooth 30+ FPS by running ML inference and 3D rendering in
            parallel threads, with lock-free queues for minimal latency between
            gesture detection and robot animation response.
          </p>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">Architecture Flow</h4>
          <div className="p-6 bg-surface rounded-lg border border-line font-mono text-sm overflow-x-auto">
            <div className="text-muted whitespace-pre">
              {`Webcam → OpenCV → MediaPipe → Gesture Detection → Ursina/Panda3D → Robot GLB (Mixamo)`}
            </div>
          </div>
        </div>

        <div>
          <h4 className="section-label text-muted mb-4">3D Assets & Tools</h4>
          <ul className="space-y-3 text-muted font-normal">
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <strong className="text-ink font-medium">Sketchfab</strong> -
              Robot 3D model sourced from the Sketchfab marketplace
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <strong className="text-ink font-medium">Mixamo</strong> -
              Character animations (punch, kick, dance, boxing) applied to the
              robot model
            </li>
            <li className="flex gap-3">
              <span className="text-ink">•</span>
              <strong className="text-ink font-medium">GLB Format</strong> -
              Exported animations in GLB format for Panda3D compatibility
            </li>
          </ul>
        </div>
      </div>
    ),
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Ursina/Panda3D", icon: FaRobot },
      { name: "MediaPipe/TensorFlow", icon: FaHandPaper },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Mixamo", icon: FaRunning },
      { name: "Sketchfab", icon: FaCube },
    ],
    githubUrl: "https://github.com/sgan0420/project-atom",
    category: "Computer Vision",
  };

  return (
    <div className="page-shell project-detail-page">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-12">
            <BackButton href="/projects" text="Back to Projects" />
          </div>

          {/* Project Header */}
          <div className="project-detail-header text-center">
            <h1 className="text-5xl md:text-6xl font-normal tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-1.5 border border-line rounded-full text-sm text-muted">
                {project.category}
              </span>
              <span className="px-4 py-1.5 border border-line rounded-full text-sm text-muted">
                Artificial Intelligence
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="mb-24">
            <div className="relative w-full bg-surface rounded-2xl overflow-hidden border border-line">
              <div className="relative aspect-video">
                <Image
                  priority
                  src="/project-atom.png"
                  alt="Project Atom - 3D Robot"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
              <div className="p-6 border-t border-line">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-4">
                  <div className="bg-surface rounded-lg p-3 border border-line text-center">
                    <div className="text-2xl mb-1">&#x1F44A;</div>
                    <div className="text-xs text-subtle">Punch</div>
                  </div>
                  <div className="bg-surface rounded-lg p-3 border border-line text-center">
                    <div className="text-2xl mb-1">&#x1F590;</div>
                    <div className="text-xs text-subtle">Kick</div>
                  </div>
                  <div className="bg-surface rounded-lg p-3 border border-line text-center">
                    <div className="text-2xl mb-1">&#x1F44A;&#x1F44A;</div>
                    <div className="text-xs text-subtle">Box</div>
                  </div>
                  <div className="bg-surface rounded-lg p-3 border border-line text-center">
                    <div className="text-2xl mb-1">&#x1F590;&#x1F590;</div>
                    <div className="text-xs text-subtle">Dance</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-subtle text-sm">
                  <HiVideoCamera className="w-5 h-5" />
                  <span>Clone from GitHub and run locally to try it out</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <h2 className="project-tools-heading text-2xl font-normal mb-8 text-center">
              Technologies & Tools
            </h2>
            <div className="project-tools">
              {project.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-2 border border-line rounded-full"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-24">{project.longDescription}</div>

          {/* Call to Action */}
          <div className="text-center border-t border-line pt-24">
            <h2 className="text-3xl font-normal mb-6">
              Interested in Computer Vision Projects?
            </h2>
            <p className="text-xl text-muted font-normal mb-8 max-w-2xl mx-auto">
              I can build interactive applications using computer vision, 3D
              graphics, and real-time processing for innovative user
              experiences.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 button-primary font-medium rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
