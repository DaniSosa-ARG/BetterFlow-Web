import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Con varios root layouts no hay un layout común para componer el 404.
    globalNotFound: true,
  },
};

export default nextConfig;
