<template>
	<div class="ms-2 position-relative contenedor-header">
		<header class="position-sticky">
			<navSection v-if="screenSize < 850"></navSection>
			<section>
				<div class="picture"></div>
				<h1 class="mb-3">{{ name }}</h1>
				<h2>{{ job }}</h2>
				<div class="mt-3 mb-5 d-flex align-items-center gap-3">
					<a href=""
						class="open-to-work-btn btn btn-outline-light bg-black bg-opacity-25  rounded-5 border-2 border-dark border-opacity-25 p-2 d-flex align-items-center justify-content-evenly">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
							class="bi bi-linkedin" viewBox="0 0 16 16">
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
						</svg> Linkedin</a>
					<div class="moon text-light bg-opacity-10 bg-gradient rounded-circle" @click="colorMode" v-if="screenSize>=850">
						<svg v-if="mode === 0" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
							fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
							<path
								d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
							<path
								d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
						</svg>
						<svg v-if="mode === 1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
							fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
							<path
								d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
						</svg>
					</div>

				</div>
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
const screenSize = ref(window.innerWidth);
const mode = ref(0);

const colorMode = () => {
	mode.value = 1 - mode.value * 1;
}

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
@import '../assets/bootstrap-custom.scss';

.contenedor-header {
	width: 38%;

	header {
		max-width: 100%;
		top: 25px;

		section {
			width: 100%;

			.picture {
				width: 27vh;
				height: 27vh;
				border-radius: 50%;
				box-shadow: -10px 18px 20px var(--ocean);
				background-color: var(--bs-primary);
				margin-bottom: 10px;
				transition: 300ms;
			}

			.picture:hover {
				box-shadow: 0px 0px 25px var(--shadow-rgb);
				border: 3px solid var(--bs-light);

			}

			p {
				width: 85%;
			}

			.open-to-work-btn {
				font-size: 13px;
				width: 150px;
				box-shadow: $shadow-ocean;
			}

			.open-to-work-btn:hover {
				background-color: rgb(96, 196, 226) !important;
			}
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
