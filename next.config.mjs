/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

export default nextConfig;
