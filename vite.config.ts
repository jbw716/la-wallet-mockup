/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icon/cropped-LAW-Favicon-1-32x32.png',
        'icon/cropped-LAW-Favicon-1-144x144.png',
        'icon/cropped-LAW-Favicon-1-180x180.png',
        'icon/cropped-LAW-Favicon-1-192x192.png'
      ],
      manifest: {
        name: 'LA Wallet',
        short_name: 'LA Wallet',
        description: 'A prototype of a new UI for LA Wallet',
        theme_color: '#306bb2',
        background_color: '#306bb2',
        icons: [
          {
            src: 'icon/cropped-LAW-Favicon-1-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: 'icon/cropped-LAW-Favicon-1-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icon/cropped-LAW-Favicon-1-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: 'icon/cropped-LAW-Favicon-1-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
