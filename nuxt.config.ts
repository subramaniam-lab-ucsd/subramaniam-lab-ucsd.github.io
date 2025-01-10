// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', 'radix-vue/nuxt'],
  target: 'static',
  router: {
    base: '/',
    // buildAssetsDir: '/'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'IBM Plex Sans', provider: 'google' }, // sans
      { name: 'IBM Plex Mono', provider: 'google' }, // mono
      { name: 'IBM Plex Serif', provider: 'google' }, // display
    ],
  },
})
