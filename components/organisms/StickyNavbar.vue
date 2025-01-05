<template>
	<!-- STICKY NAV BAR -->
	<nav
		class="border/20 fixed bottom-0 z-50 w-full place-self-start justify-self-center bg-black/50 text-white backdrop-blur-sm sm:sticky sm:top-0 sm:py-4"
	>
		<VList
			v-slot="{item}"
			:items="links"
			classes="sm:gap-4 flex-row flex justify-evenly sm:justify-center"
		>
			<NuxtLink
				v-if="item?.url"
				rel="noreferrer noopenet"
				target="_blank"
				:to="item.url"
				:class="buttonClassList"
			>
				{{ item.label }}
			</NuxtLink>
			<button
				v-else-if="item?.hash"
				:class="buttonClassList"
				@click="navigateTo({name: 'index', hash: item.hash})"
			>
				{{ item.label }}
			</button>
			<button
				v-else
				:class="buttonClassList"
				@click="useScrollToTop()"
			>
				<div class="flex items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="m18 15-6-6-6 6" />
					</svg>
					<span class="hidden sm:inline">{{ item.label }}</span>
				</div>
			</button>
		</VList>
	</nav>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n"

const {t} = useI18n()
const l = useLinks()
const buttonClassList = ref(
	"btn btn-ghost relative text-xs px-1 sm:px-4 inherit sm:text-sm opacity-90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-400 after:content-[''] hover:opacity-100 hover:after:scale-x-100 aria-selected:font-bold aria-selected:after:scale-x-100"
)

const links = ref<Array<any>>([
	{
		label: t("History"),
		hash: "#timeline",
		id: "about-page",
	},
	{
		label: t("Food Baskets"),
		hash: "#food-basket",
		id: "food-basket",
	},
	{
		label: t("Contact"),
		hash: "#contact",
		id: "contact-page",
	},
	{
		label: t("Shop"),
		url: l.Shop.url,
		id: "shop",
	},
	{
		label: t("Top"),
		id: "top-of-the-page",
	},
])
</script>
