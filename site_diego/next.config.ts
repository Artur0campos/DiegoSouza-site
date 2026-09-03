import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['192.168.0.5', 'localhost', '127.0.0.1'],
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