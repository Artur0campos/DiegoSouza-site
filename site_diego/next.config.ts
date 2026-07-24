import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Se em produção você usar o Strapi em outro domínio (ex: Cloud/Heroku), adicione ele aqui também.
    ],
  },
};

export default nextConfig;
