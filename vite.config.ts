import { defineConfig } from "vite";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import react from "@vitejs/plugin-react";

const RECREATE_ERROR = true;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    RECREATE_ERROR
      ? vanillaExtractPlugin()
      : vanillaExtractPlugin({ emitCssInSsr: true }),
  ],
});
