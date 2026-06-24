import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
