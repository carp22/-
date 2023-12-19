/** @type {import('next').NextConfig} */
const nextConfig = {
        exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
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
