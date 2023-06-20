// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['gsap'],
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue", ".ts", ".js"],
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use \"@/assets/styles/global.scss\" as *;",
        },
      },
    },
  },
  css: [
    "@/assets/styles/main.scss",
  ],
})
