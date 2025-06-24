import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    ssr: true,
    outDir: "dist/server",
    target: "node20",
    minify: false,
    rollupOptions: {
      input: resolve(__dirname, "server.ts"),
      output: {
        format: "esm",
        dir: "dist/server",
        entryFileNames: "server.js",
        preserveModules: false,
      },
      external: [
        "express",
        "firebase/app",
        "firebase/firestore",
        "path",
        "fs",
        "url",
        "dotenv",
        /^node:/,
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
