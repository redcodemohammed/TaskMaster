// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  experimental: {
    typedPages: true
  },
  modules: [
    // https://nuxt.com/modules/eslint
    '@nuxtjs/eslint-module',
    // https://pinia.vuejs.org/
    '@pinia/nuxt',
    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/devtools
    '@nuxt/devtools',
    // https://nuxt.com/modules/google-fonts
    '@nuxtjs/google-fonts',
    // https://vueuse.org/guide/#nuxt
    '@vueuse/nuxt'
  ],

  // https://pinia.vuejs.org/
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },

  // https://nuxt.com/modules/tailwindcss
  // tailwindcss: {},

  // https://v8.i18n.nuxtjs.org/
  i18n: {
    vueI18n: './i18n.config.ts'
  },

  // https://nuxt.com/modules/devtools
  devtools: {},

  // https://nuxt.com/modules/google-fonts
  googleFonts: {
    families: {
      Roboto: true,
      'IBM+Plex+Sans+Arabic': true
    },
    download: true,
    fontsDir: 'assets/fonts'
  },

  // https://www.naiveui.com/en-US/dark/docs/ssr
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : []
    },
    plugins: [Components({ resolvers: [NaiveUiResolver()] })]
  }
})
