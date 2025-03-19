// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-mongoose"],
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_API_BASE_URL,
    },
  },
  mongoose: {
    modelsDir: "models",
  },
});
