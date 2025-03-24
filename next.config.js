/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["recharts"],
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  publicRuntimeConfig: {
    basePath: "",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
