import type { MetadataRoute } from "next";

// Required by `output: "export"` — the manifest is a route handler, and a
// static export has no server to generate it on request.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OddsLab — Football Market Research & Odds Tracking",
    short_name: "OddsLab",
    description:
      "Track football odds movements and steam moves across the top leagues, build your own prediction models, and measure them against the closing line.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#0B1220",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
