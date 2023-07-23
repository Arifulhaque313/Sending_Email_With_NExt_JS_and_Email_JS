/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        // Network IP address you want to bind to
        HOST: '192.168.0.103',
        // Optional: Port number you want to use, default is 3000
        PORT: 3000,
    },
}

module.exports = nextConfig
