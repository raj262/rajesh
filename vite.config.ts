import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@designcodeio\/threeui\/style\.css$/,
        replacement: path.resolve(root, "src/shaders/threeui.css"),
      },
      {
        find: /^@designcodeio\/threeui$/,
        replacement: path.resolve(root, "src/threeui.ts"),
      },
    ],
  },
});
