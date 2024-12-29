<template>
	<main class="px-4 py-20">
		<div class="container mx-auto max-w-2xl">
			<h1 class="mb-12 text-center text-4xl font-bold text-neutral-700">Contact Us</h1>

			<div class="rounded-lg bg-white p-8 shadow-lg">
				<ContactForm />
			</div>

			<div class="mt-12 text-center">
				<h2 class="mb-4 text-2xl font-bold text-neutral-700">Follow Us</h2>
				<div class="flex justify-center space-x-6">
					<a
						v-for="social in socials"
						:key="social.name"
						:href="social.url"
						target="_blank"
						rel="noopener"
						class="text-neutral-600 transition-colors hover:text-lime-400">
						<component
							:is="social.icon"
							class="h-8 w-8" />
						<span class="sr-only">{{ social.name }}</span>
					</a>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import {InboxIcon, PhoneIcon, VideoCameraIcon} from "@heroicons/vue/24/outline"

const socials = [
	{
		name: "Email",
		url: "mailto:campsbreakerz@gmail.com",
		icon: InboxIcon,
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/@gazabboy",
		icon: VideoCameraIcon,
	},
]
</script>
