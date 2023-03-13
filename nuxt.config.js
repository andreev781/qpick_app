export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: 'blue',
    height: '5px'
  },
  head: {
    title: 'QPICK',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href: "https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Montserrat:wght@400;500;600;700&display=swap", rel: "stylesheet"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/null.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/mask.js',  ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    defaultAssets: { icons: 'fa' }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'DropdownPlugin',
      'FormSelectPlugin',
      'ModalPlugin',
      'ButtonPlugin'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
