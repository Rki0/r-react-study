import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ViteUserConfig } from "vitest/config";

const vitestConfig: ViteUserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});
