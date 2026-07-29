import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development', // Evita o bloqueio de IP privado no localhost em dev
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;