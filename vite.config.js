// filepath: /c:/Users/bahaj/Desktop/GuessWhoLOL/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/GuessWhoLOL/", // Ensure this line is added
});

