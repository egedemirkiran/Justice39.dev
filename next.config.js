/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.discordapp.com', 'discordapp.com', 'discord.com','*.*', '*.*.*', 'api-cdn.myanimelist.net', 'myanimelist.net'],
  }
}

module.exports = nextConfig
