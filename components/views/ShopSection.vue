<template>
	<section
		id="shop"
		class="relative bg-neutral-50/90 pb-48 pt-8 backdrop-blur-sm"
	>
		<div class="container mx-auto">
			<h2 class="mb-4 text-center text-xl font-black">
				{{ $t("Shop") }}
			</h2>
			<div class="flex flex-col items-center justify-center gap-4">
				<p class="flex flex-col gap-2 sm:flex-row justify-center items-center">
					<span> Support Camp Breakerz Crew </span>
					<TheLogo class="inline w-8" />
					<span> by purshasing our merch </span>
				</p>
				<TheButton
					target="_blank"
					rel="noopener noreferrer"
					class="btn-ghost items-center gap-1 border border-black/20"
					:to="links.Shop.url"
				>
					<component :is="links.Shop.component" />
					Visit our shop
				</TheButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import {useLinks} from "~/composables/useLinks"

const links = useLinks()
</script>
