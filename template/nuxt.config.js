module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global Plugins
  */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/prompt/index.js'
  ],
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts/roboto.css',
    'material-design-icons-iconfont/dist/material-design-icons.css',
    'vuetify/dist/vuetify.min.css',
    '~/assets/css/main.css'
  ],
  build: {
    extractCSS: true,
    vendor: [
      '~/plugins/vuetify.js',
      'babel-polyfill',
      'axios'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  messages: {
    error_404: 'Page could not be found',
    server_error: 'Server error',
    nuxtjs: 'Nuxt.js',
    back_to_home: 'Go back to the home page',
    server_error_details: 'An error occurred in the application and your page could not be served.',
    client_error: 'Error',
    client_error_details: 'An error occurred while rendering the page.'
  },
  router: {
    middleware: ['check-auth']
  },
  serverMiddleware: ['~/api/index.js']
}
