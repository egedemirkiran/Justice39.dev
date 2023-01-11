/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SNOW: true, // Change this to false to disable snowStorm (It's only working in winter months)
    LASTFM_TOKEN: "YOUR_LASTFM_API_KEY",
    LASTFM_USERNAME: "YOUR_LASTFM_USERNAME",
    DISCORD_ID: "YOUR_DISCORD_ID",
    BORN_DATE: 2005, // Your born date for age calculation
  },
  api: {
    externalResolver: true,
  },
  images: {
    domains: ['cdn.discordapp.com', 'discordapp.com', 'discord.com'],
  }
}

module.exports = nextConfig
