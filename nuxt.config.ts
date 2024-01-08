// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui'
  ],

  // https://github.com/Maiquu/nuxt-quasar#extrasanimations
  quasar: {
    config: {
      // Theme
      brand: {
        primary: '#192230',
        // secondary: '#ffffffe6',
        // accent: '#ccb97e',

        dark: '#333F44',
        // 'dark-page': '#121212',

        // positive: '#f18d5f',
        // negative: '#C10015',
        // info: '#31CCEC',
        // warning: '#F2C037'
      }
    },
  },
})
