// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/style-resources', '@nuxtjs/google-fonts', 'nuxt-icon'
  ],
  css: ['~/assets/style/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  googleFonts:{
    families: {
          Quicksand:true
        }
  },
  components: [
    { path: '~/global' },
    '~/components',
    
  ]
})
