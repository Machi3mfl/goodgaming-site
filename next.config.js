/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production" ? true : false;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/goodgaming-site/' : '',
  basePath: isProd ? '/goodgaming-site/' : '',
}

module.exports = nextConfig;