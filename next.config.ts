import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/planets",
        destination: "/planets/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
