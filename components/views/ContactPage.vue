<template>
	<section
		id="food-basket"
		class="relative py-12 bg-neutral-50/90 pb-8 pt-20 backdrop-blur-sm"
	>
		<div class="container mx-auto">
			<h2 class="mb-8 text-center text-xl font-black">
				{{ $t("Contacts") }}
			</h2>
			<NuxtLink
				class="flex items-center gap-2"
				:to="socials[0].url"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect
						width="20"
						height="16"
						x="2"
						y="4"
						rx="2"
					/>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
				Contact us
			</NuxtLink>
			<h2 class="mb-8 text-center text-xl font-black">
				{{ $t("Follow us") }}
			</h2>
			<div class="flex flex-col gap-4">
				<NuxtLink
					class="flex items-center gap-2"
					:to="socials[1].url"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
						/>
						<path d="m10 15 5-3-5-3z" />
					</svg>
					Youtube
				</NuxtLink>
				<NuxtLink
					class="flex items-center gap-2"
					to="foo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect
							width="20"
							height="20"
							x="2"
							y="2"
							rx="5"
							ry="5"
						/>
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line
							x1="17.5"
							x2="17.51"
							y1="6.5"
							y2="6.5"
						/>
					</svg>
					Instagram
				</NuxtLink>
				<NuxtLink
					class="flex items-center gap-2"
					to="foo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
					</svg>
					Facebook
				</NuxtLink>
				<NuxtLink
					class="flex items-center gap-2"
					to="foo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
						<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
					</svg>
					Linktree
				</NuxtLink>
			</div>
		</div>
	</section>
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
