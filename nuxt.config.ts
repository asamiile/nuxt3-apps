// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  // runtimeConfig: {
  //   public: {
  //       siteUrl: process.env.SITE_URL,
  //       apiUrl: process.env.API_URL
  //   },
  // },

  // https://nuxt.com/docs/guide/going-further/custom-routing#scroll-behavior-for-hash-links
  // router: {
  //   options: {
  //     // smoothにならない
  //     scrollBehaviorType: 'smooth'
  //   }
  // },

  // components: [],
  // plugins: [],
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
  ],

  app: {
    head: {
      // meta: [
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // ],
      // script: [
      //   { src: '/grained.js' }
      // ],
      noscript: [
        { innerHTML: 'This website requires JavaScript.' }
      ],
    }
  }, 

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
  // https://nuxt.com/docs/api/nuxt-config#headnext
  experimental: {
    headNext: true,
  },
  // https://nuxt.com/docs/api/nuxt-config#restorestate
})
