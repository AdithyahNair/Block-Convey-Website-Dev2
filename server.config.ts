import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    ssr: resolve(__dirname, "server.ts"),
    outDir: "dist/server",
    target: "node20",
    minify: false,
    rollupOptions: {
      input: "server.ts",
      output: {
        format: "esm",
        entryFileNames: "server.js",
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
