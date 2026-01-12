// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 uses Turbopack by default
  turbopack: {
    // Explicitly set the project root to avoid
    // "multiple lockfiles" workspace warnings
    root: __dirname,
  },
};

export default nextConfig;

