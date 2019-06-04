const pkg = require('./package')

let modules = [
  '@nuxtjs/dotenv',
  'nuxt-imagemin'
];

if(!process.env.PRODUCTION) {
  modules.push(['nuxt-robots-module', {
    /* module options */
    UserAgent: '*',
    Disallow: '/',
  }])
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Swann Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#22c877' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/output/frontend.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/directives.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    API_URL: process.env.API_URL || ''
  },

  /*
  ** Build configuration
  */
  build: {
    
  }
}
