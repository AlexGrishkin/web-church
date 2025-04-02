// https://nuxt.com/docs/api/configuration/nuxt-config
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true, // Убедитесь, что SSR включен
  vue: {
    config: {
      productionTip: false, // Убирает отладочные комментарии
      devtools: false, // Отключает Vue DevTools
    },
    compilerOptions: {
      comments: false, // Убирает отладочные комментарии в шаблонах
    },
  },
  components: true, // Автоимпорт компонентов
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'dayjs-nuxt',
    // 'nuxt-typed-router',
    'nuxt-file-storage',
    '@nuxt/eslint',
    'nuxt-typed-router',
  ],
  router: {
    options: {
      strict: true, // Включение строгого режима
      sensitive: false, // Чувствительность к регистру
    },
  },
  families: [
    { name: 'montserrat', provider: 'google' },
    { name: 'geist', provider: 'google' },
  ],
  css: ['~/assets/scss/global.scss'],
  vite: {
    plugins: [
      createHtmlPlugin({
        minify: {
          removeComments: true, // Удаляет комментарии
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "~/assets/scss/_vars.scss" as *;
        @use "~/assets/scss/_mixins.scss" as *;
        `,
        },
      },
    },
    esbuild: {
      legalComments: 'none', // Удаляет все комментарии
    },
  },
});
