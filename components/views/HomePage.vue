<template>
	<main
		id=""
		class="min-h-screen bg-black">
		<!-- VIDEO BACKGROUND FIXED -->
		<TheVideo />

		<!-- FIRST VIEW: HERO -->
		<section
			class="relative grid h-[90dvh] grid-cols-[1fr] grid-rows-[repeat(2,1fr)] gap-x-0 gap-y-0 bg-black/50">
			<header
				class="flex w-auto flex-col items-center justify-center gap-3 justify-self-center lg:gap-8">
				<img
					alt="logo"
					class="animation-logo w-48 pt-12"
					src="/cb-logo.png" />
				<p class="animation-title italic text-neutral-50">
					Art from the refugee camp to you
				</p>
			</header>

			<article class="animation-heroText justify-self-center px-4 py-20">
				<div class="container mx-auto text-center">
					<h2 class="sr-only mb-6 text-3xl font-bold text-neutral-50">Our Mission</h2>
					<p class="mx-auto max-w-3xl text-xl text-neutral-50">
						Camps Breakerz takes us back to the origins of hip-hop, using dance as a
						powerful tool for expression and healing. With more than 20 years of
						experience in humanitarian programming, we're committed to bringing positive
						change through art.
					</p>
				</div>
			</article>
		</section>

		<!-- STICKY NAV BAR -->
		<nav
			class="sticky top-0 z-50 w-full place-self-start justify-self-center bg-black/50 py-4 text-white backdrop-blur-sm">
			<VList
				v-slot="{item}"
				:items="links"
				classes="gap-4 flex-row flex justify-center">
				<NuxtLink
					v-if="item?.url"
					:href="{path: item.url}"
					:class="buttonClassList">
					{{ item.label }}
				</NuxtLink>
				<button
					v-else-if="item?.hash"
					:class="buttonClassList"
					@click="navigateTo({name: 'index', hash: item.hash})">
					{{ item.label }}
				</button>
				<button
					v-else
					:class="buttonClassList"
					@click="useScrollToTop()">
					{{ item.label }}
				</button>
			</VList>
		</nav>

		<section
			id="timeline"
			class="relative min-h-screen bg-black/90 pb-8 pt-20 backdrop-blur-sm">
			<header class="mb-12 flex flex-col items-center justify-center gap-12">
				<h2 class="text-center text-xl font-black text-white">
					{{ $t("History of Camp Breakerz") }}
				</h2>
				<button
					class="btn-outlined btn mx-auto text-white"
					@click="sortReverse = !sortReverse">
					{{ sortReverse ? $t("View latest first") : $t("View oldest first") }}
				</button>
			</header>
			<ul class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
				<li
					v-for="(event, key) of events.sort((a, b) =>
						sortReverse ? a.date - b.date : b.date - a.date
					)"
					:key="key">
					<div class="timeline-middle">
						<div class="h-5 w-5 rounded-full bg-neutral-600"></div>
					</div>
					<div
						class="timeline-box max-w-xl text-white"
						:class="[
							key % 2 === 0 ? 'timeline-start text-end' : 'timeline-end text-start',
							key % 3 === 2 && 'bg-red-900/20',
							key % 3 === 1 && 'bg-green-900/20',
						]">
						<time class="font-mono italic">{{ event.date }}</time>
						<h3 class="text-lg font-black">{{ event.status }}</h3>
						<p>{{ event.description }}</p>
					</div>
					<hr />
				</li>
			</ul>
		</section>

		<section
			id="help"
			class="relative min-h-screen bg-black/90 pb-8 pt-20 backdrop-blur-sm">
			<HelpPage />
		</section>
		<section
			id="help"
			class="relative min-h-screen bg-black/90 pb-8 pt-20 backdrop-blur-sm">
			<ContactPage />
		</section>
	</main>

	<TheFooter />
</template>
<script lang="ts" setup>
import {useI18n} from "vue-i18n"

interface Event {
	status: string
	date: number
	description: string
}
const {t, locale} = useI18n()
const visible = ref(false)
const selectedItem = ref<Event | null>(null)
const sortReverse = ref(false)

const buttonClassList = ref(
	"btn btn-ghost relative text-sm opacity-90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-400 after:content-[''] hover:opacity-100 hover:after:scale-x-100 aria-selected:font-bold aria-selected:after:scale-x-100"
)

const links = ref<Array<any>>([
	{
		label: t("History"),
		hash: "#timeline",
		id: "about-page",
	},
	{
		label: t("Help us"),
		hash: "#help",
		id: "id-page",
	},
	{
		label: t("Contact"),
		hash: "#contact",
		id: "contact-page",
	},
	{
		label: t("Top"),
		id: "top-of-the-page",
	},
])

const events = ref<Event[]>([
	{
		status: "Foundation",
		date: 2004,
		description:
			"Camps Breakerz was founded in 2004 by brothers Moh Ghraiz and Ahmed Alghariz, who formed the community dance team to represent the Palestinian people and draw attention to their ongoing struggle. CB Crew shares the unique beauty of dance and art with the people Gaza through teaching and performances, in addition to speaking around the world. Since it’s creation, the crew has achieved multiple dreams, including the establishment of the first dance school in Nuseirat Refugee Camp, after bombing in 2009 rendered their previous practice studio unusable.",
	},
	{
		status: "Emergency Response Team",
		date: 2009,
		description:
			"Since the 2009 bombing of their practice studio, CB Crew have weathered multiple wars and resulting traumatic losses. In response, team members have completed studies in psychology and art therapy in order to better help the community. Our crew believes the performing arts can impact meaningful change and help heal traumas. We offer specialized programs focusing on somatic release and coping skills to help children restore their sense of wellbeing and belonging.",
	},
	{
		status: "Art Therapy for children",
		date: 2009,
		description:
			"In 2009, Save The Children partnered with Camps Breakerz to provide art therapy programs for children in need of rehabilitation.",
	},
	{
		status: "CB Crew Academy",
		date: 2012,
		description:
			"Established in 2012, the CB Crew Academy provides more than 50 students with professional instruction in creative disciplines including dance, graffiti, and music. Featuring programs for both boys and girls, the Academy hosts weekly exhibitions and rewards the best performers, allowing the children an opportunity for healthy expression and competition. In addition, CB Crew Academy helps children meet their material needs by providing access to clothing and scholarships.",
	},
	{
		status: "Rehabilitation Program",
		date: 2014,
		description:
			"In 2014, CB Crew launched Rebuild Gaza, a rehabilitation program that took place in Gaza City after bombardment and showcased dancing on piles of remaining rubble.",
	},
	{
		status: "Make Music and Dance",
		date: 2019,
		description:
			"In 2019, CB Crew debuted Make Music and Dance, a project that took place in the Gaza City UN schools, at the time being used as a shelter for displaced people.",
	},
	{
		status: "We will not get down",
		date: 2022,
		description:
			"In 2022, CB Crew staged We Will Not Go Down, a program designed for and in collaboration with the orphans of Gaza, culminating in a final showcase.",
	},
	{
		status: "Still Alive",
		date: 2023,
		description:
			" In 2023, CB Crew presented Still Alive, a series of showcases featuring various urban dancers and reflecting on the phases of Palestinian struggle through time.",
	},
	{
		status: "Get Down for Gaza",
		date: 2024,
		description:
			" In 2024, CB Crew created Get Down for Gaza, a weekly international event that is taking place from the refugee camps of Gaza to NYC, Paris, and Dubai!",
	},
])

function openDetails(item: Event) {
	selectedItem.value = item
	visible.value = true
}
</script>
