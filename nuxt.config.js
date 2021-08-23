export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-highlightjs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
    
  styleResources: {
    //Do not import actual styles. Use this module only to import
    //variables, mixins, functions (et cetera) as they won't exist in the
    //actual build. Importing actual styles will include them in every
    //component and will also make your build/HMR magnitudes slower.
    //From: https://github.com/nuxt-community/style-resources-module
      scss: [
          '~assets/scss/mixins.scss',
          '~assets/scss/variables.scss'
      ]
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
