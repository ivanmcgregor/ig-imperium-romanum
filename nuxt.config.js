import Galerien from './pages/galerie/galerien'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/scss/entry.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-gallery.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: [
  //   // Doc: https://github.com/nuxt-community/eslint-module
  //   '@nuxtjs/eslint-module',
  //   // Doc: https://github.com/nuxt-community/stylelint-module
  //   '@nuxtjs/stylelint-module'
  // ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   * Static site generation
   */
  generate: {
    routes() {
      return new Promise((resolve) => {
        resolve(
          Object.keys(Galerien).map((gal, idx) => ({
            route: `/galerie/${gal}`,
            payload: Galerien[idx]
          }))
        )
      })
    }
  }
}
