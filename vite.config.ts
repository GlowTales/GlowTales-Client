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
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      {
        find: "@constant",
        replacement: path.resolve(__dirname, "src/utils/constant"),
      },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@common",
        replacement: path.resolve(__dirname, "src/components/common"),
      },
      {
        find: "@ranking",
        replacement: path.resolve(__dirname, "src/components/ranking"),
      },
      {
        find: "@login",
        replacement: path.resolve(__dirname, "src/components/login"),
      },
    ],
  },
});
