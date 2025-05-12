/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portv2',
  assetPrefix: '/portv2/',
};

export default nextConfig;
