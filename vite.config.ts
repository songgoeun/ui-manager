import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/Typography.tsx",
      name: "TypographyPackage",
      fileName: (format) => `typography.${format}.js`,
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
  plugins: [react()],
});
