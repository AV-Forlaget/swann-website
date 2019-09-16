let dotEnv = require('dotenv').config();

let modules = [
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
    title: 'Swann Studio: Audiobook production and distribution',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'description', content: 'Europe’s largest audiobook production company with 35 years of experience, recording studios in 14 countries and audiobook and eBook distribution services.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
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
    { src: '~/plugins/carousel.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    API_URL: process.env.API_URL || dotEnv.parsed.API_URL || '',
    FILE_URL: process.env.FILE_URL || dotEnv.parsed.FILE_URL || '',
    NARRATOR_LINK: process.env.NARRATOR_LINK || dotEnv.parsed.NARRATOR_LINK || '',
    LOGIN_LINK: process.env.LOGIN_LINK || dotEnv.parsed.LOGIN_LINK || '',
    FRONTPAGE_VIDEO_ID: process.env.FRONTPAGE_VIDEO_ID || dotEnv.parsed.FRONTPAGE_VIDEO_ID || ''
  },

  /*
  ** Build configuration
  */
  build: {
    
  }
}
