// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      NEWS_API_URL: process.env.NEWS_API_URL,
      NEWS_API_KEY: process.env.NEWS_API_KEY,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
      WEATHER_API_URL: process.env.WEATHER_API_URL,
    },
  },
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/style/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Quicksand: true,
    },
  },
  components: [{ path: "~/global" }, { path: "~/home" }, "~/components"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
