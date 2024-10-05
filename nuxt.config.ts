export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  runtimeConfig: {
    apiNinjaKey: process.env.apiNinjaKey
  }
})
