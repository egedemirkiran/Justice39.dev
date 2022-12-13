/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SNOW: true, // Change this to false to disable snowStorm (It's only working in winter months)
  },
  images: {
    domains: ['cdn.discordapp.com', 'discordapp.com', 'discord.com'],
  }
}

module.exports = nextConfig
