<template>
	<header
		:class="cn(isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0')"
		class="shadow-slate-300/70' fixed left-0 top-0 z-40 flex h-full w-full flex-col items-center gap-24 border-b border-b-slate-400/50 bg-neutral-800 pt-32 text-neutral-50 lg:h-auto lg:scale-[unset] lg:flex-row lg:justify-between lg:gap-0 lg:p-8 lg:opacity-100">
		<div class="flex w-auto flex-col items-center gap-3 lg:flex-row lg:gap-8">
			<img
				alt="logo"
				class="w-24"
				src="/cb-logo.png" />
			<em>Art from the refugee camp to you</em>
		</div>
		<nav class="align-center flex flex-col items-center gap-8 lg:flex-row">
			<VList
				v-slot="{item}: {item: ListItem & {url: string}}"
				:items="pages"
				classes="gap-4 flex-col lg:flex-row">
				<NuxtLink
					:aria-selected="
						$router.currentRoute.value.path
							? $router.currentRoute.value.path === item.url
							: item.url === ''
					"
					:href="{path: item.url}"
					class="relative text-sm opacity-90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-400 after:content-[''] hover:opacity-100 hover:after:scale-x-100 aria-selected:font-bold aria-selected:after:scale-x-100"
					@click="closeMenu">
					{{ item.label }}
				</NuxtLink>
			</VList>
			<!-- <PrimeSelect
				v-model="$i18n.locale"
				:options="languages"
				optionLabel="label"
				optionValue="value"
				:placeholder="$t('Select a language')"
				class="w-full max-w-28 text-xs md:w-56" /> -->
		</nav>
		<Button
			v-if="isOpen"
			class="relative top-12 z-50 lg:hidden"
			size="icon"
			variant="default"
			@click="closeMenu">
			<Icon
				class="p-2 text-2xl"
				name="material-symbols:close-rounded" />
		</Button>
	</header>
	<Button
		v-if="!isOpen"
		class="fixed right-12 top-12 z-50 lg:hidden"
		size="icon"
		variant="default"
		@click="openMenu">
		<Icon name="iconamoon:menu-burger-horizontal-duotone" />
	</Button>
</template>

<script lang="ts" setup>
import type {ListItem} from "@/types"
import {useI18n} from "vue-i18n"
import {cn} from "~/lib/utils"

const isOpen = ref(false)
const {t, locale} = useI18n()
const openMenu = () => (isOpen.value = true)
const closeMenu = () => (isOpen.value = false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

// const languages = ref([
// 	{value: "fr", label: t("French")},
// 	{value: "en", label: t("English")},
// ])

const pages = ref<Array<ListItem & {url: string}>>([
	{
		label: t("Home"),
		url: "/",
		id: "home-page",
	},
	{
		label: t("About us"),
		url: "/about-us",
		id: "about-page",
	},
	{
		label: t("Help us"),
		url: "/help",
		id: "id-page",
	},
	{
		label: t("Contact"),
		url: "/contact",
		id: "contact-page",
	},
])
</script>

<style scoped>
a,
a:after {
	transition:
		font-weight 120ms ease-in-out,
		transform 240ms ease-in-out;
	transform-origin: left;
}

header {
	transition:
		transform 200ms ease-in-out,
		opacity 120ms ease-in-out;
	transform-origin: top;
}
</style>
