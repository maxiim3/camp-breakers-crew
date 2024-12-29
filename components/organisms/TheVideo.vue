<template>
	<div class="fixed h-screen w-screen animation-video">
		<iframe
			:src="`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?si=g_81oSxIMmVPALAz&autoplay=${autoplay}&controls=0&mute=1&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&playlist=${VIDEO_ID}&loop=1`"
			title="Camp Breakrz Crew"
			class="pointer-events-none absolute inset-0 h-full w-full select-none"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen></iframe>
		<button
			class="btn btn-ghost absolute right-12 top-12 z-50"
			@click="autoplay = autoplay === 0 ? 1 : 0">
			Auto Play {{ autoplay ? "on" : "off" }}
		</button>
	</div>
</template>

<script setup lang="ts">
const autoplay = ref(1)
const VIDEO_ID = ref("X9qAB0y20ps")
</script>
