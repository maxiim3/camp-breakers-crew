<template>
	<TheHeader v-if="withNavigation" />
	<main class="px-1 md:px-8 lg:px-24 py-28 lg:py-40">
		<slot />
	</main>
</template>
<script lang="ts" setup>
type Props = {
	withNavigation?: boolean
}

defineProps<Props>()
</script>
