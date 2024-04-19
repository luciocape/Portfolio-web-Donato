<template>
	<div class="ms-3 position-relative contenedor-header me-3">
		<header class="position-sticky">
			<section>
				<div class="picture"></div>
				<h1 class="mb-3">{{ name }}</h1>
				<h2>{{ job }}</h2>
				<p>{{ summary }}</p>
			</section>
			<navSection v-if="screenSize >= 850"></navSection>
		</header>
	</div>
</template>
<script setup>
// import VueScrollTo from "vue-scrollto";
import navSection from "./home/nav-section.vue";
import { ref, onMounted, onUnmounted } from "vue";

name: "Header";

components: {
	navSection;
}

const name = "Donato Infantino";
const job = "Editor de video";
const summary =
	"lorem ipsum dolor sit amet, consectetur adip  euismod er  elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu";

//acctivación componente navSection
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

			.picture {
				width: 27vh;
				height: 27vh;
				border-radius: 50%;
				box-shadow: 70px -35px 10px rgba(0, 255, 255, 0.336);
				background-color: aqua;
				margin-bottom: 10px;
				transition: 300ms;
			}

			.picture:hover {
				box-shadow: 0px 0px 20px rgba(0, 255, 255, 0.336);
				border: 3px solid snow;

			}

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

@media only screen and (max-width: 849px) {
	.contenedor-header {
		margin-left: 0 !important;
		margin-right: 0 !important;
		margin-bottom: 25vh;
		width: 100%;
		height: 75vh;
		display: flex;
		align-items: end;

		header {
			position: relative !important;
			;
		}
	}
}
</style>
