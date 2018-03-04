module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Denkmalmit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Denkmalmit ist der Verein hinter Denkmal.org, dem Online-Eventkalender für Basels Nachtleben.'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Denkmalmit, Denkmal.org, Was loift?, Eventkalender, Basel, Musik, Ausgang, Nachtleben'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'Denkmalmit'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Denkmalmit'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.denkmalmit.org'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.denkmalmit.org/images/denkmal-logo.png'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Denkmalmit'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Denkmalmit ist der Verein hinter Denkmal.org, dem Online-Eventkalender für Basels Nachtleben.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Denkmalmit'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@denkmal_basel'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@stophecom'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700'
      }
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/npm/basicscroll@2.0.0/dist/basicScroll.min.js'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#89a7a1' },

  plugins: [
    {
      src: '~plugins/ga.js',
      ssr: false
    }
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['underscore'],
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
        })
      }
    }
  }
}
