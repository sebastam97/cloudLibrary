/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  // Solo agregar basePath en producción para GitHub Pages
  ...(process.env.GITHUB_ACTIONS && {
    basePath: "/cloudLibrary",
    assetPrefix: "/cloudLibrary",
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
