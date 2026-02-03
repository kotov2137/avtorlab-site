import { fileURLToPath } from "url";
import path from "path";

/**
 * Fix for __dirname in ES modules
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // ⚠️ ВАЖНО: фикс проблемы с несколькими package-lock.json
  turbopack: {
    root: __dirname,
  },

  // SEO / стабильность
  trailingSlash: false,
};

export default nextConfig;
