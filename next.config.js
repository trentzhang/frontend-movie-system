/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**/*.{jpg,jpeg,png,webp}",
      },
      {
        protocol: "http",
        hostname: "st.depositphotos.com",
        port: "",
        pathname: "/**/*.{jpg,jpeg,png,webp}",
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
        port: "",
        pathname: "/**/*.{jpg,jpeg,png,webp}",
      },
    ],
  },
};

module.exports = nextConfig;
