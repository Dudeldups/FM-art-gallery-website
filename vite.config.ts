import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //@ts-expect-error Vite but with .env import
  base: import.meta.env.PROD ? "/projects/art-gallery" : "/",
  plugins: [react()],
});
