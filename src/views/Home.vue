<template>
	<ul class="background">
		<li v-for="item in burbujas"
			:style="{ left: randomNumbers[item] + 'vw', width: (item + 5) * 3.5 + 'px', height: (item + 5) * 3.5 + 'px', animationDuration: (item + 1) * 2 + 's' }"
			class="d-flex justify-content-center align-items-center bg-info bg-opacity-25">
			<div class=" w-75 h-75"></div>
		</li>
	</ul>
	<div class="contain-all container-fluid d-flex flex-row-reverse justify-content-between pt-0">
		<Header></Header>

		<main class="ms-5">
			<section v-for="(item, index) in sections" :key="index" :id="index" class="h-auto">
				<h2>{{ item.title }}</h2>
				<div class="border-start border-2 border-secondary section-body" :class="item.clase">
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
		clase: "d-flex flex-column gap-2",
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

//animación burbujas
const randomNumbers = ref([]); //random numbers list
const range = (s, e) => Array.from('x'.repeat(e - s), (_, i) => s + i); //range function
const burbujas = range(0, 40);
let realCicleState = 0;
let cicleState = 1;
let lastUpdateTime = Date.now();
let currentTime = Date.now();
let delay = 2000;
// let elementos = ref([]);
// let animationName = 'animate';
// let webTime = 0;

// document.addEventListener('DOMContentLoaded', () => {
// 	elementos = Array.from(burbujas, (x) => document.getElementById('id' + x));
// });

onMounted(
	() => {
		for (let i = 0; i < burbujas.length; i++) {
			randomNumbers.value.push(Math.floor(Math.random() * 101));
		};
		console.log('RandomStart: ' + randomNumbers.value);
		setInterval(() => {
			currentTime = Date.now();
			for (let i = 1; i <= cicleState; i++) {
				randomNumbers.value[i - 1] = cicleState % i === 0 ? Math.floor(Math.random() * 101): randomNumbers.value[i - 1];
			}
			realCicleState += 2000;
			if (cicleState < burbujas.length) { cicleState += 1; }
			else { cicleState = 1; }
			let desfase = currentTime - lastUpdateTime - realCicleState;
			delay = 2000 - desfase;
			console.log(delay);
		}, delay);
	}
);
// const updateRandom = (index) => {
// 	local vailables
// 	const animationDuration = (index + 1) * 5 / 4;
// 	let timeAlive = (index + 1) * 5 / 4;
// 	console.log(animationName)
// 	AnimationName config
// 	if (index === 0) { webTime += 1.25; }
// 	animationName = (webTime / timeAlive) % 2 === 0 ? 'animate' : 'animate2';
// 	animationName = animationName === 'animate' ? 'animate2' : 'animate'

// 	console.log(animationName)
// 	const animation = animationName + ' ' + animationDuration + 's ' + 'linear normal'
// 	console.log(animation);
// 	setTimeout(() => {
// 		elementos[index].style.animation = animation;
// 		console.log('valor:', elementos[index].style.animation);
// 	}, 0);

// 	if (index !== 0) {
// 		animationName = animationName === 'animate' ? 'animate2' : 'animate'
// 	}
// 	randomNumbers.value[index] = Math.floor(Math.random() * 101);
// 	console.log('RandomEnd' + randomNumbers.value);
// };
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
			min-height: 70vh;
			width: auto;
		}
	}
}

@media only screen and (max-width: 849px) {
	.contain-all {
		display: block !important;
		max-width: 70%;

		main {
			width: 100%;
			margin: 0 !important;
			padding: 0 !important;
		}
	}
}
</style>
