<template>
  <div class="min-h-screen bg-stone-100">
    <NuxtLayout>
      <TheHeader />
      <NuxtPage />
      <TheFooter />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
