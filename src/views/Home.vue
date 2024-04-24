<template>
	<ul class="background">
		<li v-for="item in range(0, 40)"
			:style="{ left: randomNumbers[item] + 'vw', width: item * 0.28 + 'rem', height: item * 0.28 + 'rem', animationDuration: item * 5 / 4 + 's' }"
			class="d-flex justify-content-center align-items-center bg-info bg-opacity-25">
			<div class=" w-75 h-75"></div>
		</li>
	</ul>
	<div class="contain-all container-fluid d-flex flex-row-reverse justify-content-between pt-0">
		<Header></Header>

		<main class="ms-3">
			<section v-for="(item, index) in sections" :key="index" :id="index" class="h-auto">
				<h2>{{ item.title }}</h2>
				<div class="border-start border-2 border-secondary section-body mt-1" :class="item.clase">
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
import { ref, onMounted, onUnmounted } from 'vue';
name: "home";
components: {
	Experience, galery, about, contact, Header;
}
const sections = [
	{
		title: "EXPERIENCIA",
		clase: "d-flex flex-column gap-3",
	},
	{
		title: "GALERIA",
		clase: "d-flex flex-column gap-2 justify-content-start",
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
let randomNumbers = [];

for (var i = 0; i < 40; i++) {
	randomNumbers.push(Math.floor(Math.random() * 100))
}

let range = (s, e) => Array.from('x'.repeat(e - s), (_, i) => s + i);

const screenSize = ref(window.innerWidth);

const handleResize = () => {
	screenSize.value = window.innerWidth;
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
main {
	width: 55%;

	section {
		padding-top: 5vh;
		min-height: 100vh;

		h2 {
			text-shadow: 1px 3px 7px #00aeff9a;
		}
		.section-body:nth-child(n) {
			padding-left: 4%;
			padding-top: 10px;
		}
		.section-body {
			min-height: 70vh;
			width: auto;
		}
	}
}

@media only screen and (max-width: 849px) {
	.contain-all {
		display: block !important;
		max-width: 75%;
		min-width: 320px;

		main {
			width: 100%;
			margin: 0 !important;
			padding: 0 !important;
		}
	}
}

@media only screen and (max-width: 400px) {

	.section-body:nth-child(n) {
		border-top: 2px solid #6b757e;
		border-left: 0px !important;
		padding-left: 0px !important;
	}
}
</style>
