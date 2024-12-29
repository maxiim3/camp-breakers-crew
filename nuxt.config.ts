import Aura from "@primevue/themes/aura"

export default defineNuxtConfig({
	compatibilityDate: "2024-10-20",
	devtools: {enabled: true},
	modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@primevue/nuxt-module"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
		strategy: "prefix_except_default",
		vueI18n: "./i18n.config.ts",
	},

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
	router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
	app: {
		head: {
			title: "Camps Breakers - Breaking Barriers Through Dance",
			meta: [
				{charset: "utf-8"},
				{name: "viewport", content: "width=device-width, initial-scale=1"},
				{
					name: "description",
					content:
						"Camps Breakers - Promoting art and break dance in Gaza through community initiatives and dance education.",
				},
			],
			link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
		},
	},
})
