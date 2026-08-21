import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cs:id(0[1-8])",
        destination: "/pj:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
