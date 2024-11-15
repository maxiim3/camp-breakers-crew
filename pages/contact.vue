<template>
  <main class="py-20 px-4">
    <div class="container mx-auto max-w-2xl">
      <h1 class="text-4xl font-bold text-neutral-700 text-center mb-12">Contact Us</h1>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <ContactForm />
      </div>

      <div class="mt-12 text-center">
        <h2 class="text-2xl font-bold text-neutral-700 mb-4">Follow Us</h2>
        <div class="flex justify-center space-x-6">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="text-neutral-600 hover:text-lime-400 transition-colors"
          >
            <component :is="social.icon" class="w-8 h-8" />
            <span class="sr-only">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  InboxIcon,
  PhoneIcon,
  VideoCameraIcon
} from '@heroicons/vue/24/outline'

const socials = [
  {
    name: 'Email',
    url: 'mailto:campsbreakerz@gmail.com',
    icon: InboxIcon
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@gazabboy',
    icon: VideoCameraIcon
  }
]
</script>
