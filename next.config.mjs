/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "repository-images.githubusercontent.com",
      "opengraph.githubassets.com",
    ],
  },
};

export default nextConfig;
