/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output:"export",
    basePath: "/carp22.github.io",
    images: {
        unoptimized: true,
        remotePatterns: [{
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/uc"
        }],
    },
}

module.exports = nextConfig
