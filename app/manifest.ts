import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avtorlab",
    short_name: "Avtorlab",
    description: "Avtorlab dental laboratory in Dnipro.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/brand/logo-white.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/logo-white.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
