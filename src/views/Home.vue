<template>
	<div
		class="container-fluid d-flex flex-row-reverse justify-content-between pt-0"
	>
		<Header></Header>
		<main class="ms-5 ps-5">
			<section
				v-for="(item, index) in sections"
				:key="index"
				:id="index"
				class="h-auto"
			>
				<h2>{{ item.title }}</h2>
				<div
					class="border-start border-2 border-secondary section-body"
					:class="item.clase"
				>
					<Experience v-if="item.title == 'EXPERIENCIA'"></Experience>
					<galery v-else-if="item.title == 'GALERIA'"></galery>
					<about v-else-if="item.title == 'SOBRE MI'"></about>
					<contact v-else-if="item.title == 'CONTACTO'"></contact>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import Experience from "../components/home/experience.vue";
import galery from "../components/home/galery.vue";
import about from "../components/home/about.vue";
import contact from "../components/home/contact.vue";
import Header from "../components/header.vue";
name: "home";
components: {
	Experience, galery, about, contact, Header;
}
const sections = [
	{
		title: "EXPERIENCIA",
		clase: "d-flex flex-column gap-2",
	},
	{
		title: "GALERIA",
		clase: "d-flex flex-column gap-2 justify-content-center",
	},
	{
		title: "SOBRE MI",
		clase: "",
	},
	{
		title: "CONTACTO",
		clase: "mb-5",
	},
];
</script>

<style scoped lang="scss">
main {
	width: 60%;
	section {
		padding-top: 8vh;
		min-height: 100vh;
		.section-body:nth-child(n) {
			padding-left: 20px;
		}
		.section-body {
			min-height: 60vh;
			width: auto;
		}
	}
}
</style>
