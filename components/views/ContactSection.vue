<template>
	<section
		id="contact"
		class="relative bg-neutral-50/90 pb-8 pt-48 backdrop-blur-sm"
	>
		<div class="container mx-auto">
			<h2 class="mb-4 text-center text-xl font-black">
				{{ $t("Contacts") }}
			</h2>
			<div class="flex items-center justify-center gap-2">
				<TheButton
					target="_blank"
					rel="noopener noreferrer"
					class="btn-ghost items-center gap-2 border border-black/20"
					:to="links.Email.url"
				>
					<component :is="links.Email.component" />
					Contact us
				</TheButton>
			</div>

			<h2 class="mb-4 mt-16 text-center text-xl font-black">
				{{ $t("Follow us") }}
			</h2>
			<div class="flex-wrap flex items-center justify-center gap-4">
				<template
					v-for="linkName in ['YouTube', 'Instagram', 'Facebook', 'Linktree']"
					:key="linkName"
				>
					<TheButton
						target="_blank"
						rel="noopener noreferrer"
						vertical
						class="btn-ghost h-20 w-24 items-center gap-1 border border-black/20"
						:to="links[linkName].url"
					>
						<component :is="links[linkName].component" />
						{{ linkName }}
					</TheButton>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import {useLinks} from "~/composables/useLinks"

const links = useLinks()
</script>
