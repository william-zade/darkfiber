// next.config.ts
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Force styles to load in the right order
  webpack(config: import('webpack').Configuration) {
    if (config.resolve) {
      config.resolve.fallback = { ...config.resolve.fallback };
    }
    return config;
  },
};

export default nextConfig;

