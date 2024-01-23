import { resolve } from 'node:path';

export default defineNuxtConfig({
  appConfig: {
    nuxtIcon: {
      size: '24px',
      class: 'icon',
    },
  },
  css: ['assets/styles/index.scss'],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      DOMAIN_URL: process.env.DOMAIN_URL,
      TELEGRAM: process.env.TELEGRAM,
      INSTAGRAM: process.env.INSTAGRAM,
      FACEBOOK: process.env.FACEBOOK,
      PHONE_HOT_LINE: process.env.PHONE_HOT_LINE,
      PHONE_INVO_TAXI: process.env.PHONE_INVO_TAXI,
      PHONE_EVACUATION: process.env.PHONE_EVACUATION,
      EMAIL: process.env.EMAIL,
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
      LIQPAY_PUBLIC_KEY: process.env.LIQPAY_PUBLIC_KEY,
    },
    private: {
      PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
      PAYPAL_AUTH_URL: process.env.PAYPAL_AUTH_URL,
      PAYPAL_CREATE_ORDER_URL: process.env.PAYPAL_CREATE_ORDER_URL,
      LIQPAY_PRIVATE_KEY: process.env.LIQPAY_PRIVATE_KEY,
      MONGO_DB_NAME: process.env.MONGO_DB_NAME,
      MONGO_DB_USER: process.env.MONGO_DB_USER,
      MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-primevue',
    'nuxt-icon',
  ],
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
    locales: [
      {
        code: 'uk',
        file: 'uk.json',
        name: 'UK',
        iso: 'uk',
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'EN',
        iso: 'en',
      },
    ],
    lazy: true,
    langDir: 'i18n/locales',
    defaultLocale: 'uk',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: resolve(__dirname, './assets/presets/lara/'), as: 'Lara' },
    components: {
      include: [
        'Button',
        'Card',
        'Dialog',
        'Divider',
        'Dropdown',
        'InputNumber',
        'InputText',
        'Menubar',
        'Paginator',
        'Sidebar',
      ],
    },
    directives: {
      include: ['animateonscroll', 'ripple', 'tooltip'],
    },
    composables: {
      include: [],
    },
  },
  tailwindcss: {
    cssPath: 'assets/styles/tailwind.css',
  },
});
