<template>
		<div class="container mx-auto">
			<h1 class="mb-12 text-center text-4xl font-bold text-neutral-700">Support Our Cause</h1>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<DonationCard
					v-for="option in donationOptions"
					:key="option.title"
					v-bind="option"
					@donate="handleDonation(option)" />
			</div>

			<div class="mt-20 text-center">
				<h2 class="mb-6 text-3xl font-bold text-neutral-700">Visit Our Shop</h2>
				<p class="mb-8 text-xl text-neutral-600">
					Support our cause by purchasing from our online store. All proceeds go directly
					to supporting our programs.
				</p>
				<a
					href="https://campsbreakerzshop.etsy.com"
					target="_blank"
					rel="noopener"
					class="inline-block rounded-lg bg-lime-400 px-8 py-3 font-semibold text-stone-900 transition-colors hover:bg-lime-300">
					Visit Shop
				</a>
			</div>
		</div>
</template>

<script setup lang="ts">
const donationOptions = [
	{
		title: "Food Basket",
		description: "Provide essential food supplies for a family in Gaza for one week.",
		amount: 20,
		image: "/images/donations/food-basket.jpg",
	},
	{
		title: "Dance Education",
		description: "Support dance education and therapy programs for children.",
		amount: 50,
		image: "/images/donations/dance-education.jpg",
	},
	{
		title: "Community Support",
		description: "Help rebuild and maintain our community spaces and programs.",
		amount: 100,
		image: "/images/donations/community.jpg",
	},
]

const handleDonation = (option: any) => {
	// Handle donation process
	console.log("Processing donation:", option)
}
</script>
