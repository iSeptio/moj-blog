module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: 'nFn1VQy0r8azr47fxP4EFQtt', cacheProvider: 'memory'}]
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],
  router: {
    middleware: 'languageDetection'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'mywebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
