import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
	compatibilityDate: "2024-10-20",
	devtools: {enabled: true},
	modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@primevue/nuxt-module"],
	primevue: {
		components: {
			prefix: "Prime",
		},
		directives: {
			prefix: "Prime",
		},
		autoImport: true,
		options: {
			inputVariant: "filled",
			theme: {
			 preset: Aura,
				options: {
					prefix: "p",
					darkModeSelector: "system",
					cssLayer: false,
				},
			},
		},
	},
})
