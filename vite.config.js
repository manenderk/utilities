import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";


const manifestConf = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable-icon.png"],
  manifest: {
    name: "Utilities",
    short_name: "Utilities",
    description: "Simple utilities apps",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      }
    ],
    theme_color: '#333',
    background_color: '#333',
    display: 'standalone',
    start_url: '/',
    scope: '/',
    orientation: 'portrait',
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestConf)],
})
