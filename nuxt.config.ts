// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui'
  ],

  css: [
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
    // '~/assets/css/main.css',
  ],

  // https://github.com/Maiquu/nuxt-quasar#extrasanimations
  quasar: {
    config: {
      // Theme
      brand: {
        primary: '#1d2226',
        secondary: '#ffffffe6',
        accent: '#ccb97e',

        dark: '#1d2226cc',
        // 'dark-page': '#121212',

        positive: '#f18d5f',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    },
  },
})
