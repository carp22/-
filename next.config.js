/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/carp22.github.io",
    images: {
        unoptimized: true,
        domains: ["drive.google.com"],
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/',
            },
        ];
    },
    generateStaticParams: async () => {
        return {
            '/': { page: '/' },
        };
    },
}

module.exports = nextConfig;
