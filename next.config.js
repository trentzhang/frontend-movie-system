/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    ],
  },
};

module.exports = nextConfig;
