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
    title: 'Narrator application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Swann Studios narrator application'}
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
    '@/plugins/directives.js',
    { src: '@/plugins/recapcha.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    RECAPCHA_SITE_KEY: process.env.RECAPCHA_SITE_KEY || '',
    POST_URL: process.env.POST_URL || '',
    CLOSE_URL: process.env.CLOSE_URL || '',
  },

  /*
  ** Build configuration
  */
  build: {
    
  }
}
