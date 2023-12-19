/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "drive.google.com",
            port: "",
            pathname: "/uc"
        }],
        unoptimized: true
    },
}

module.exports = nextConfig
