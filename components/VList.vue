<template>
   <ul>
      <li v-for="(item, key) in items" :key="key">
        <slot name="default" :item="item" />
      </li >
    </ul>
</template>
<script setup lang="ts"i generic="T">
interface ListProps <T> {
  items: T[]
  model: T
}
defineProps<ListProps<T>>()
</script>
