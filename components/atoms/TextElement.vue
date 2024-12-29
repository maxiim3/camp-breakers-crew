<template>
	<component
		:is="tagType"
		class="text-md font-sans"
		:class="{
			bold: bold,
			italic: italic,
			'text-xs': small,
		}">
		<slot>{{ props.content }}</slot>
	</component>
</template>

<script setup lang="ts">
type Props = {
	content?: string
	bold?: boolean
	italic?: boolean
	small?: boolean
	span?: boolean
}

const props = defineProps<Props>()

const tagType = computed(() => {
	if (props.span) return "span"
	else if (props.small) return "small"
	else if (props.bold) return "b"
	else if (props.italic) return "em"
	else return "p"
})
</script>

<style scoped></style>
