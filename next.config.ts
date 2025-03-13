import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    //ELENAS_API: 'https://elenasapi.azurewebsites.net'
  },
  images: {
    domains: ['localhost', 'images-test-via.s3.us-east-1.amazonaws.com'],
  },
};

export default nextConfig;
