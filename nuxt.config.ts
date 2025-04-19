// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ]
    }
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/styles/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: ['8fed-171-22-124-18.ngrok-free.app', 'http://localhost:3000']
    }
  },

  modules: ['shadcn-nuxt', '@nuxt/icon', 'nuxt-highcharts'],

  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['hugeicons']
    }
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2025-04-11',
})