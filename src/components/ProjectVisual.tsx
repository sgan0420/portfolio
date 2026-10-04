import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { FaCopyright, FaSearch, FaShieldAlt } from "react-icons/fa";

export default function ProjectVisual({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  // Keep the original asset reference, with a stable first-paint fallback.
  // Restoring the file automatically restores its screenshot on the next build.
  if (existsSync(join(process.cwd(), "public", src))) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-contain p-4"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      data-image-source={src}
      className="absolute inset-0 grid place-items-center"
    >
      <div
        aria-hidden="true"
        className="relative grid place-items-center h-40 w-40 sm:h-60 sm:w-60 rounded-full border border-line bg-surface"
      >
        <FaShieldAlt className="w-24 h-24 sm:w-36 sm:h-36 text-accent opacity-20" />
        <FaCopyright className="absolute w-12 h-12 sm:w-16 sm:h-16 text-accent" />
        <FaSearch className="absolute bottom-4 right-4 w-8 h-8 text-muted" />
      </div>
    </div>
  );
}
