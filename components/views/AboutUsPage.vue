<template>
	<VLayout with-navigation>
		<div>
			<h1>Page: about-us</h1>
			<PrimeTimeline
				:value="events"
				align="alternate">
				<template #content="slotsProps: {item: Event}">
					<div class="flex flex-col gap-2 rounded-md border bg-slate-100 p-4">
						<p>{{ slotsProps.item.status }}</p>
						<small>{{ slotsProps.item.date }}</small>
						<button
							@click="openDetails(slotsProps.item)"
							class="rounded-md bg-green-800 px-4 py-2 text-white">
							Open
						</button>
					</div>
				</template>
			</PrimeTimeline>
		</div>
		<PrimeDialog
			v-model:visible="visible"
			modal
			:header="selectedItem?.status"
			class="textslate-900 min-h-[30vh] min-w-[30vw] bg-slate-300">
			{{ selectedItem?.description }}
		</PrimeDialog>
	</VLayout>
</template>

<script setup lang="ts">
interface Event {
	status: string
	date: string
	icon: string
	color: string
	description: string
}
const visible = ref(false)
const selectedItem = ref<Event | null>(null)

const events = ref<Event[]>([
	{
		status: "Foundation",
		date: "2004",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"Camps Breakerz was founded in 2004 by brothers Moh Ghraiz and Ahmed Alghariz, who formed the community dance team to represent the Palestinian people and draw attention to their ongoing struggle. CB Crew shares the unique beauty of dance and art with the people Gaza through teaching and performances, in addition to speaking around the world. Since it’s creation, the crew has achieved multiple dreams, including the establishment of the first dance school in Nuseirat Refugee Camp, after bombing in 2009 rendered their previous practice studio unusable.",
	},
	{
		status: "Emergency Response Team",
		date: "2009",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"Since the 2009 bombing of their practice studio, CB Crew have weathered multiple wars and resulting traumatic losses. In response, team members have completed studies in psychology and art therapy in order to better help the community. Our crew believes the performing arts can impact meaningful change and help heal traumas. We offer specialized programs focusing on somatic release and coping skills to help children restore their sense of wellbeing and belonging.",
	},
	{
		status: "Art Therapy for children",
		date: "2009",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"In 2009, Save The Children partnered with Camps Breakerz to provide art therapy programs for children in need of rehabilitation.",
	},
	{
		status: "CB Crew Academy",
		date: "2012",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"Established in 2012, the CB Crew Academy provides more than 50 students with professional instruction in creative disciplines including dance, graffiti, and music. Featuring programs for both boys and girls, the Academy hosts weekly exhibitions and rewards the best performers, allowing the children an opportunity for healthy expression and competition. In addition, CB Crew Academy helps children meet their material needs by providing access to clothing and scholarships.",
	},
	{
		status: "Rehabilitation Program",
		date: "2014",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"In 2014, CB Crew launched Rebuild Gaza, a rehabilitation program that took place in Gaza City after bombardment and showcased dancing on piles of remaining rubble.",
	},
	{
		status: "Make Music and Dance",
		date: "2019",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"In 2019, CB Crew debuted Make Music and Dance, a project that took place in the Gaza City UN schools, at the time being used as a shelter for displaced people.",
	},
	{
		status: "We will not get down",
		date: "2022",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			"In 2022, CB Crew staged We Will Not Go Down, a program designed for and in collaboration with the orphans of Gaza, culminating in a final showcase.",
	},
	{
		status: "Still Alive",
		date: "11/12/2023",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			" In 2023, CB Crew presented Still Alive, a series of showcases featuring various urban dancers and reflecting on the phases of Palestinian struggle through time.",
	},
	{
		status: "Get Down for Gaza",
		date: "11/12/2023",
		color: "#FF0000",
		icon: "pi pi-circle",
		description:
			" In 2024, CB Crew created Get Down for Gaza, a weekly international event that is taking place from the refugee camps of Gaza to NYC, Paris, and Dubai!",
	},
])

function openDetails(item: Event) {
	selectedItem.value = item
	visible.value = true
}
</script>
