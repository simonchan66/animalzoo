// next.config.mjs
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.animality.xyz/:path*',
        },
      ];
    },
    images: {
      domains: ['cdn.animality.xyz'],
    },
  };
  
  export default nextConfig;