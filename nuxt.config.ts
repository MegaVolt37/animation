// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: ['gsap'],
	},
	app: {
		baseURL: '/animation/',
	},
	components: [
		{
			path: '~/components',
			extensions: ['.vue', '.ts', '.js'],
			pathPrefix: false,
		},
	],
	modules: [
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt',
		'@nuxt/image',
		'@nuxtjs/google-fonts',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as *;',
				},
			},
		},
	},
	css: ['@/assets/styles/main.scss'],
	googleFonts: {
		families: {
			Inter: [500, 600],
		},
		useStylesheet: true,
		outputDir: 'assets/fonts',
	},
})
