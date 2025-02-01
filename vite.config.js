// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/GuessWhoLOL",
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Fix: Use "/" since you're using a custom domain
});
// "homepage": "https://yngjesus.github.io/GuessWhoLOL",
