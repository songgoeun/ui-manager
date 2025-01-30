import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/Typography.tsx",
      name: "TypographyPackage",
      fileName: "index",
      formats: ["es", "umd"],
      // fileName: (format) => `typography.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dts()],
});
