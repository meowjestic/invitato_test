// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: "Buttler", src:"/fonts/ButlerRegular.otf"}
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ["~/plugins/preline.client.ts"],
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
})