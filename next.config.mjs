import { fileURLToPath } from "url";
import path from "path";

/** ESM-safe __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Убирает проблему с workspace root и Turbopack
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
