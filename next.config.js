/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production" ? true : false;
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;
