<template>
	<!-- VIDEO BACKGROUND FIXED -->
	<TheVideo />

	<!-- FIRST VIEW: HERO -->
	<section
		class="relative grid h-[90dvh] grid-cols-[1fr] grid-rows-[repeat(2,1fr)] gap-x-0 gap-y-0 bg-black/50">
		<header
			class="flex w-auto flex-col items-center justify-center gap-3 justify-self-center lg:gap-8">
			<TheLogo class="animation-logo w-48 pt-12" />
			<p class="animation-title font-mono italic text-neutral-50">
				Art from the refugee camp to you
			</p>
		</header>

		<article class="animation-heroText justify-self-center px-4 py-20">
			<div class="container mx-auto text-center">
				<h2 class="sr-only mb-6 text-3xl font-bold text-neutral-50">Our Mission</h2>
				<p class="mx-auto max-w-3xl text-xl text-neutral-50">
					Camps Breakerz takes us back to the origins of hip-hop, using dance as a
					powerful tool for expression and healing. With more than 20 years of experience
					in humanitarian programming, we're committed to bringing positive change through
					art.
				</p>
			</div>
		</article>
	</section>
</template>
