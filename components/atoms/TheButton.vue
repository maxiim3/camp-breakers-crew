<template>
	<NuxtLink
		v-if="type === 'link'"
		v-bind="$attrs"
		:is="type"
		class="btn flex"
		:class="computedClasses"
		:to="to"
	>
		<slot name="default" />
	</NuxtLink>
	<button
		v-else
		v-bind="$attrs"
		class="btn flex"
		:class="computedClasses"
	>
		<slot name="default" />
	</button>
</template>

<script setup lang="ts">
interface Props {
	/** @name vertical @type boolean @description stacked vertically if true. Default horizontally */
	vertical?: boolean
	/** @name to @type string @description Url to redirecto to (optional) */
	to?: string
}

const props = defineProps<Props>()

const type = computed(() => {
	if (props.to) return "link"
})

const computedClasses = computed(() => {
	if (props.vertical) return "flex-col"

	return "flex-row"
})
</script>
