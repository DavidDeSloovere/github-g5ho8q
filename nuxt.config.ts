// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
      },
      {
        code: 'fr',
      },
    ],

    // Vue I18n
    vueI18n: './i18n.config.ts',
  },
});
