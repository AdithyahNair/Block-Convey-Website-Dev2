/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure images
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

  // Configure webpack to handle assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    return config;
  },

  // Configure output for static export
  output: "export",
  trailingSlash: true,

  // Configure asset prefix for deployment
  assetPrefix: "",

  // Configure base path if needed
  basePath: "",
};

module.exports = nextConfig;
