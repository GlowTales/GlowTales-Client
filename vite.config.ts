import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@common",
        replacement: path.resolve(__dirname, "src/components/common"),
      }
    ],
  },
});
