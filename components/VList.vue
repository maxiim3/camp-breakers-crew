<template >
  <ul
    class="flex"
    :class="cn(classes )"
  >
    <li v-for="(item, key) in items" :key="key" >
      <slot name="default" :item="item" />
    </li >
  </ul >
</template >
<script setup lang="ts" i generic="T" >
import { cn } from "@/lib/utils.js";


interface ListProps<T> {
  items: T[]
  model: T
  classes: string
}
  defineProps<ListProps<T>>()
</script >
