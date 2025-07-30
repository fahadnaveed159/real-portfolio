export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: [
    '~/assets/css/main.css'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },
  components: {
    global: true,
    dirs: ['~/components']
  }
})