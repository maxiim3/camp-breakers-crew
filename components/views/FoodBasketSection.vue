<template>
	<section
		id="food-basket"
		class="relative min-h-screen bg-base-300/90 pb-8 pt-20 backdrop-blur-sm"
	>
		<div class="container mx-auto">
			<h2 class="mb-8 text-center text-xl font-black text-white">
				{{ $t("Food baskets for children") }}
			</h2>
			<div class="relative flex w-full flex-col items-stretch justify-center md:flex-row">
				<div class="prose flex min-w-[30h] max-w-[65ch] flex-1 flex-col gap-4 text-pretty text-white">
					<p>
						Welcome to the Et’aam Food Aid Initiative - a community project initiated by the Camps Breakerz
						Crew & Breakdance School.
					</p>

					<p>
						While teaching children the art of breakdancing is our passion, CB Crew’s ultimate focus is the
						wellbeing of the entire community.
					</p>
					<div class="flex items-center gap-2">
						<NuxtImg
							quality="40"
							class="w-1/2 object-contain"
							src="/images/food_baskets/food_baskets-01.webp"
						/>
						<NuxtImg
							quality="40"
							class="w-1/2 object-contain"
							src="/images/food_baskets/food_baskets-02.webp"
						/>
					</div>
					<p>
						Several months ago, the Crew began providing free meals to a few families in need. Soon after,
						demand flourished and in response to that need we launched the Et’aam Food Aid Campaign
						(formerly CB Crew Food Basket Initiative), aimed at raising funds to make a bigger impact within
						the community.
					</p>

					<p>
						The word “Et’aam” (pronounced ‘it-AHM’) signifies a deep commitment to feeding those in need. It
						perfectly encapsulates our mission to nourish and support Palestinians, particularly those
						facing extreme financial hardship and displacement in the Gaza Strip. Through our initiative, we
						strive to embody the values of our name by making a consistent and lasting impact in the lives
						of others, providing nutrition and resources to as many families as we can.
					</p>

					<p>
						Et’aam currently distributes food in both Nuseirat Camp and Deir Al Balah. Our dedicated ground
						teams provide groceries to 25 families each week, filled with everything from lifesaving dry
						goods to rare, nutritious vegetables.
					</p>

					<div class="flex items-center gap-2">
						<NuxtImg
							quality="40"
							class="w-1/2 object-contain"
							src="/images/food_baskets/food_baskets-03.webp"
						/>
						<NuxtImg
							quality="40"
							class="w-1/2 object-contain"
							src="/images/food_baskets/food_baskets-04.webp"
						/>
					</div>

					<p>
						With food prices soaring due to scarcity, heightened demand, supply chain issues and blockade
						delays, access to essential nutrition has become a challenge for every individual in Gaza.
						Through our combined efforts, we can fulfill our mission providing nourishment and support to
						community members in need.
					</p>

					<p>
						We invite you to follow along with our journey and dedicated team members via our Instagram
						fundraising page - @etaamfoodaid / @cbcrewlt. If you’d like to learn more about our dance crew
						and the children we mentor, you can find us on our main page - @campsbreakerz.
					</p>

					<p>
						Thank you for your attention, empathy and contribution! Together, we can make a difference in
						the lives of deserving, vulnerable families.
					</p>
					<div class="flex flex-col gap-1 sm:flex-row">
						<NuxtLink
							to="https://www.gofundme.com/f/basketsforgaza/donate?source=btn_donate"
							class="btn btn-warning mx-auto w-full flex-1 text-center"
							target="_blank"
							rel="noopener noreferrer"
						>
							Donate
						</NuxtLink>
						<NuxtLink
							to="https://www.gofundme.com/f/basketsforgaza"
							class="btn btn-link mx-auto w-full flex-1 text-center"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit the Go Fund Me page
						</NuxtLink>
					</div>
				</div>

				<!-- SCRIPT GO FUNDME -->
				<div class="relative flex-grow-0">
					<div
						class="gfm-embed sticky top-8 mx-auto h-[460px] w-fit overflow-hidden bg-transparent p-4"
						data-url="https://www.gofundme.com/f/basketsforgaza/widget/large?sharesheet=fundraiser sidebar&attribution_id=sl:61ccbdc5-d3eb-4aa2-ac1a-b9766014769c"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
useHead({
	script: [
		{
			src: "https://www.gofundme.com/static/js/embed.js",
			defer: true,
			body: true,
		},
	],
})
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
