/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['source.unsplash.com', 'localhost', '209.38.202.247'],
        deviceSizes: [380, 640, 750, 1080, 1920, 3840],
    },
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ['pt', 'en'],
        defaultLocale: 'pt',
    },
}

module.exports = nextConfig
