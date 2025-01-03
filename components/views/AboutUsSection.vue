<template>
	<section
		id="timeline"
		class="relative min-h-screen bg-black/90 pb-8 pt-20 backdrop-blur-sm"
	>
		<header class="mb-12 flex flex-col items-center justify-center gap-12">
			<h2 class="text-center text-xl font-black text-white">
				{{ $t("History of Camp Breakerz") }}
			</h2>
			<!-- Reverse sort btn -->
			<button
				class="btn-outlined btn mx-auto text-white"
				@click="sortReverse = !sortReverse"
			>
				{{ sortReverse ? $t("View latest first") : $t("View oldest first") }}
			</button>
		</header>

		<!-- List of nodeEvents -->
		<ul class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			<li
				v-for="(event, key) of events.sort((a, b) => (sortReverse ? a.date - b.date : b.date - a.date))"
				:key="key"
			>
				<div class="timeline-middle">
					<div class="h-5 w-5 rounded-full bg-neutral-600"></div>
				</div>
				<div
					class="timeline-box max-w-xl text-white"
					:class="[
						key % 2 === 0 ? 'timeline-start text-end' : 'timeline-end text-start',
						key % 3 === 2 && 'bg-red-900/20',
						key % 3 === 1 && 'bg-green-900/20',
					]"
				>
					<time class="font-mono italic">{{ event.date }}</time>
					<h3 class="text-lg font-black">{{ event.status }}</h3>
					<p>{{ event.description }}</p>
					<div
						v-if="event?.images && event.images.length"
						class="flex flex-row-reverse flex-wrap gap-4 px-2 py-3"
						:class="{'flex-row-reverse': key % 2 === 0}"
					>
						<NuxtImg
							v-for="(img, key) of event.images"
							class="cursor-pointer"
							:key="key"
							:src="img.path"
							:alt="img.alt"
							quality="30"
							width="60"
							height="60"
							loading="lazy"
							@click="openImg(img)"
						/>
					</div>
				</div>
				<hr />
			</li>
		</ul>
	</section>
	<!-- Modal dialog image detail -->
	<dialog
		v-if="showModal && selectedItem"
		ref="modal"
		class="modal modal-bottom sm:modal-middle"
	>
		<div class="modal-box relative max-w-2xl bg-neutral-800/80 p-2">
			<NuxtImg
				:src="selectedItem.path"
				:alt="selectedItem.alt"
				class="aspect-square w-full overflow-hidden object-contain"
				quality="50"
			/>
			<h3 class="text-pretty text-base font-bold text-white">{{ selectedItem.alt }}</h3>
			<p class="float-right font-brandMono text-xs italic text-white/70">
				Press ESC key or click outside to close
			</p>
			<div class="modal-action">
				<button
					class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-white"
					@click="closeModal"
				>
					✕
				</button>
			</div>
		</div>
		<form
			method="dialog"
			class="modal-backdrop"
		>
			<button>close</button>
		</form>
	</dialog>
</template>

<script setup lang="ts">
interface Img {
	path: string
	alt: string
}

interface Node {
	status: string
	date: number
	description: string
	images?: Img[]
}

const modal = ref<null | HTMLDialogElement>(null)
const showModal = ref(false)
const selectedItem = ref<Img | null>(null)
const sortReverse = ref(false)
const events = ref<Node[]>([
	{
		status: "Foundation",
		date: 2004,
		description:
			"Camps Breakerz was founded in 2004 by brothers Moh Ghraiz and Ahmed Alghariz, who formed the community dance team to represent the Palestinian people and draw attention to their ongoing struggle. CB Crew shares the unique beauty of dance and art with the people Gaza through teaching and performances, in addition to speaking around the world. Since it’s creation, the crew has achieved multiple dreams, including the establishment of the first dance school in Nuseirat Refugee Camp, after bombing in 2009 rendered their previous practice studio unusable.",
		images: [
			{
				path: "/images/founders/founders-ahmed_alghariz_shark.webp",
				alt: "Ahmed Alghariz, also known as Shark, founder of the Crew",
			},
			{
				path: "/images/founders/founders-moh_ghraiz_funk.webp",
				alt: "Moh Ghraiz, also known as Funk, founder of the Crew",
			},
		],
	},
	{
		status: "Emergency Response Team",
		date: 2009,
		description:
			"Since the 2009 bombing of their practice studio, CB Crew have weathered multiple wars and resulting traumatic losses. In response, team members have completed studies in psychology and art therapy in order to better help the community. Our crew believes the performing arts can impact meaningful change and help heal traumas. We offer specialized programs focusing on somatic release and coping skills to help children restore their sense of wellbeing and belonging.",
		images: [
			{
				path: "/images/emergency_response_team/emergency_response_team-01.webp",
				alt: "Pictures from the Emergency response Team event",
			},
			{
				path: "/images/emergency_response_team/emergency_response_team-02.webp",
				alt: "Pictures from the Emergency response Team event",
			},
			{
				path: "/images/emergency_response_team/emergency_response_team-03.webp",
				alt: "Pictures from the Emergency response Team event",
			},

			{
				path: "/images/emergency_response_team/emergency_response_team-04.webp",
				alt: "Pictures from the Emergency response Team event",
			},
		],
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
			images: [
				{
					path: "/images/get_down_for_gaza/get_down_for_gaza-01.webp",
					alt: "Get down for Gaza Event",
				},
				{
				path: "/images/get_down_for_gaza/get_down_for_gaza-02.webp",
				alt: "Get down for Gaza Event",
				},
			],
	},
])

function openImg(item: Img) {
	selectedItem.value = item
	showModal.value = true
	modal.value?.showModal()
}

function closeModal() {
	selectedItem.value = null
	showModal.value = false
	modal.value?.close()
}
</script>
