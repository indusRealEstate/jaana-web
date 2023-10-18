/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  // experimental: {
  //   appDir: true,
  // },
  images: {
    unoptimized: true,
    // domains : ['localhost']
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;