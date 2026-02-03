import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Helps Next.js pick the correct workspace root when you have another
  // package-lock.json in parent folders.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
