const baseUrl = 'https://localhost:8000/'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Education portal Adab",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffcc33' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/scss/default.scss',
    './assets/scss/element-ui.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/nuxt-client-init'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/scss/vars/*.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api/auth_token': {
      target: baseUrl,
      pathRewrite: { '^/api/auth_token' : '/auth_token' },
      secure: false,
      changeOrigin: true
    },
    '/api/logout': {
      target: baseUrl,
      pathRewrite: { '^/api/logout' : '/logout' },
      secure: false,
      changeOrigin: true
    },
    '/api/user': {
      target: baseUrl,
      pathRewrite: { '^/api/user' : '/user' },
      secure: false,
      changeOrigin: true
    },
    '/api': {
      target: baseUrl,
      pathRewrite: { '^/api' : '/api' },
      secure: false,
      changeOrigin: true
    }
  }

}
