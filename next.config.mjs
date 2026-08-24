/** @type {import('next').NextConfig} */

// GitHub Pages serves this project at
// https://ryansan2001-source.github.io/Microprism-site/, so assets and links
// must be prefixed with /Microprism-site in production.
// If you later attach a custom domain (served from the root), set
// PAGES_BASE_PATH="" in the build environment to clear the prefix.
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.PAGES_BASE_PATH ?? (isProd ? "/Microprism-site" : "");

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
