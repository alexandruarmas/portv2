/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: '/portv2',
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  basePath: '/portv2',
  assetPrefix: '/portv2/',
};

export default nextConfig;
