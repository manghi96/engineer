/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/engineer",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;