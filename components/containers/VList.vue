<template>
	<ul
		:class="cn(classes)"
		class="flex">
		<li
			v-for="(item, key) in items"
			:key="key">
			<slot
				:item="item"
				name="default" />
		</li>
	</ul>
</template>
<script generic="T" i lang="ts" setup>
import type {ListItem} from "@/types"
import {cn} from "@/lib/utils.js"

interface ListProps<T> {
	items: Array<ListItem & T>
	model: T
	classes?: string
}

defineProps<ListProps<T>>()
</script>
