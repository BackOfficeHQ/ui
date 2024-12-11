import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [], // Add external dependencies here
      output: {
        globals: {
          // Define global variables for UMD build
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
