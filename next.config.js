/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
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
