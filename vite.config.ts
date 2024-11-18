import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@views": path.resolve(__dirname, "src/views"),
      "@lang": path.resolve(__dirname, "lang"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@api": path.resolve(__dirname, "src/api"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
    },
  },
});
