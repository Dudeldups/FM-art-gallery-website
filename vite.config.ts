import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = process.env.VITE_PROD === "true";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? "/projects/art-gallery" : "/",
  plugins: [react()],
});
