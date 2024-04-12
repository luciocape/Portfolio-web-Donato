<template>
	<div class="ms-3 position-relative contenedor-header me-3">
		<header class="position-sticky">
			<section>
				<h1 class="mb-3">{{ name }}</h1>
				<h2>{{ job }}</h2>
				<p>{{ summary }}</p>
			</section>
			<nav class="mt-5 pt-5">
				<ul>
					<li v-for="(item, index) in nav" :key="index" class="mb-3">
						<a
							:href="'#' + index"
							class="d-flex align-items-center w-75 nav-item"
							
							><span
								class="nav-line bg-secondary me-2"
								:class="{ active: activeSection === index }"
							></span
							>{{ item }}</a
						>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VueScrollTo from "vue-scrollto";

name: "Header";

const name = "Donato Infantino";
const job = "Editor de video";
const summary =
	"lorem ipsum dolor sit amet, consectetur adip  euismod er  elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu";
const nav = ref(["EXPERIENCIA", "GALERIA", "SOBRE MI", "CONTACTO"]);
const activeSection = ref(-1)
const checkScroll = () => {
	for (let i = 0; i < nav.value.length; i++) {
		const section = document.getElementById(i);
		const rect = section.getBoundingClientRect();
		if (rect.top <= 120 && rect.bottom >= 120) {
			activeSection.value = i;
			break;
		}
	}
};

onMounted(() => {
	window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll);
});

// const activate = (index) => {
// 	activeIndex.value = index;
//     console.log("Active Index-click: " + activeIndex.value);
// };

// window.addEventListener("click", (event) => {
// 	if (!event.target.matches(".nav-item")) {
// 		activeIndex.value = -1;
//         console.log("Active Index-finish: " + activeIndex.value);
// 	}
// });
</script>

<style scoped lang="scss">
.contenedor-header {
	width: 30%;
	header {
		max-width: 100%;
		top: 25px;
		section {
			width: 100%;
			p {
				width: 85%;
			}
		}
		.nav-line {
			width: 30px;
			height: 2px;
			transition: 100ms;
		}
		a:hover .nav-line,
		.nav-line.active {
			width: 55px;
			background-color: rgb(30, 207, 219) !important;
			height: 2px;
		}
	}
}
</style>
