<template>
	<VLayout with-navigation>
		<section class="relative flex h-screen items-center justify-center overflow-hidden">
			<div class="absolute inset-0 z-0">
				<!-- <video
					class="h-full w-full object-cover"
					autoplay
					loop
					muted
					playsinline>
					<source
						src="/videos/hero-background.mp4"
						type="video/mp4" />
				</video> -->
				<div class="absolute inset-0 bg-black/50"></div>
			</div>

			<div class="relative z-10 px-4 text-center text-white">
				<h1 class="mb-6 text-4xl font-bold md:text-6xl">Breaking Barriers Through Dance</h1>
				<p class="mb-8 text-xl text-stone-300 md:text-2xl">
					From the refugee camps of Palestine to you!
				</p>
				<NuxtLink
					to="/help"
					class="inline-block rounded-lg bg-lime-400 px-8 py-3 font-semibold text-stone-900 transition-colors hover:bg-lime-300">
					Support Our Cause
				</NuxtLink>
			</div>
		</section>
  <section class="py-20 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-neutral-700 mb-6">Our Mission</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Camps Breakerz takes us back to the origins of hip-hop, using dance as a powerful tool for expression and healing.
          With more than 20 years of experience in humanitarian programming, we're committed to bringing positive change through art.
        </p>
      </div>
    </section>
	</VLayout>
</template>

<script setup lang="ts"></script>
