import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import frappeui from 'frappe-ui/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [frappeui(), vue(),
    VitePWA({
      registerType: "autoUpdate",
			strategies: "injectManifest",
			injectRegister: null,
			devOptions: {
				enabled: true,
			},
			manifest: {
				display: "standalone",
				name: "ProjectIT",
				short_name: "ProjectIT",
				start_url: "/projectit",
				description: "Project Costing and Tracking Tool",
				theme_color: "#ffffff",
				icons: [
          {
            "src": "images/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "images/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "images/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "images/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: `../${path.basename(path.resolve('..'))}/public/projectit`,
    emptyOutDir: true,
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['frappe-ui > feather-icons', 'showdown', 'engine.io-client'],
  },
})
