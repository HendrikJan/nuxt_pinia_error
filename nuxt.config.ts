import { defineNuxtConfig } from '@nuxt/bridge';
const isDev = true;
const nuxtBaseUrl = 'http://localhost:3000';
const nuxtBrowserBaseUrl = 'http://localhost:3000';

console.log('Nuxt config loading...');

export default defineNuxtConfig({
  srcDir: 'client/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'error demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.png',
      },
    ],
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: nuxtBaseUrl,
      browserBaseURL: nuxtBrowserBaseUrl,
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'pinia/nuxt',
    '@nuxtjs/vuetify',
  ],

  vuetify: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  compilerOptions: {
    types: ['@nuxt/types'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev,
    standalone: true, // Needed for d3 to work
    extend(config, { isClient, isDev }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map';
      }
    },
  },

  // Inside Docker, hot-module-reload should be done polling
  watchers: {
    webpack: {
      poll: 1000,
    },
  },
});
