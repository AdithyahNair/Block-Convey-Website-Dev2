/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blockconvey.com",
        port: "",
        pathname: "/images/**",
      },
    ],
    unoptimized: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },

  // ✅ For SSR on App Engine
  output: "standalone",
};

module.exports = nextConfig;
