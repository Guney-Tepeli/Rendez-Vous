import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths, so the build works under any sub-path
  // (GitHub Pages serves it at /<repo-name>/).
  base: "./",
  plugins: [react()],
});
