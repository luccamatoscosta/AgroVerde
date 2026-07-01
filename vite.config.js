import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: page('index.html'),
        about: page('src/pages/about/about.html'),
        services: page('src/pages/services/services.html'),
        products: page('src/pages/products/products.html'),
        contact: page('src/pages/contact/contact.html'),
      },
    },
  },
})
