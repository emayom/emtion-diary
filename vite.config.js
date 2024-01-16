import { resolve } from "path";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg?react",
    }),
    react(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@context", replacement: resolve(__dirname, "src/context") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@styles", replacement: resolve(__dirname, "src/styles") },
    ],
  },
});
