/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['image.dnkdream.com'],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID,
  },
};

module.exports = nextConfig;
