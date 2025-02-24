import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: "https://guesswholol.me", // Replace with your actual domain
      changefreq: "daily", // You can adjust the frequency (daily, weekly, etc.)
      priority: 0.8, // Priority for pages, set it higher for important pages
      lastmod: true, // Enable last modified dates for your pages
    }),
  ],
  base: "/",
});
