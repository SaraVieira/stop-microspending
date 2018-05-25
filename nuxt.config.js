module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Stop Microspending',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Seriously Stop...' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  manifest: {
    name: 'Stop Microspending'
  },
  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css'],
  modules: [
    [
      'nuxt-social-meta',
      {
        url: 'https://stop-microspending.now.sh/',
        title: 'Stop Microspending',
        description: 'Seriously Stop...',
        img: '/icon.png',
        locale: 'en_EN',
        twitter: '@NikkitaFTW'
      }
    ],
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-37411302-7'
      }
    ]
  ],
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: ['@/plugins/element-ui', '@/plugins/currency'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
