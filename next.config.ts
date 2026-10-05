import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Match the actual portfolio layout instead of generating 3840px images for
    // screenshots that never render wider than 1120 CSS pixels.
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
