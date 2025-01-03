<template>
	<!-- STICKY NAV BAR -->
	<nav
		class="sticky top-0 z-50 w-full place-self-start justify-self-center bg-black/50 py-4 text-white backdrop-blur-sm">
		<VList
			v-slot="{item}"
			:items="links"
			classes="gap-4 flex-row flex justify-center">
			<NuxtLink
				v-if="item?.url"
				:href="{path: item.url}"
				:class="buttonClassList">
				{{ item.label }}
			</NuxtLink>
			<button
				v-else-if="item?.hash"
				:class="buttonClassList"
				@click="navigateTo({name: 'index', hash: item.hash})">
				{{ item.label }}
			</button>
			<button
				v-else
				:class="buttonClassList"
				@click="useScrollToTop()">
				{{ item.label }}
			</button>
		</VList>
	</nav>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n"

const {t} = useI18n()

const buttonClassList = ref(
	"btn btn-ghost relative text-sm opacity-90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-400 after:content-[''] hover:opacity-100 hover:after:scale-x-100 aria-selected:font-bold aria-selected:after:scale-x-100"
)

const links = ref<Array<any>>([
	{
		label: t("History"),
		hash: "#timeline",
		id: "about-page",
	},
	{
		label: t("Food Basket for children"),
		hash: "#food-basket",
		id: "food-basket",
	},
	{
		label: t("Contact"),
		hash: "#contact",
		id: "contact-page",
	},
	{
		label: t("Top"),
		id: "top-of-the-page",
	},
])
</script>
