<template>
	<nav class="mt-2" v-if="screenSize >= 850">
		<ul>
			<li v-for="(item, index) in nav" :key="index" class="mb-3">
				<a :href="'#' + 'section' + index" class="d-flex align-items-center w-75 nav-item">
					<span class="nav-line bg-light bg-opacity-75 me-2" :class="{ active: activeSection === index }">
					</span>{{ $t(item + ".title") }}</a>
			</li>
		</ul>
	</nav>
	<nav class="navbar navbar-expand-sm mt-3 position-fixed top-0 p-3 ps-1 pe-1 rounded-5 item-blur"
		v-if="screenSize < 850">
		<button class="navbar-toggler bg-light-subtle bg-opacity-10 ms-3" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarsExample03" aria-controls="navbarsExample01" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarsExample03">
			<ul class="navbar-nav d-flex justify-content-around align-items-center gap-3 m-0 m-auto">

				<li v-for="(item, index) in nav" :key="index" class="">
					<a :href="'#' + 'section' + index"
						class="d-flex flex-column-reverse align-items-start text-nowrap h5 m-0 text-secondary"><span
							class="nav-line bg-tertiary" :class="{ active: activeSection === index }"></span>
						{{ $t(item + ".title") }}
					</a>
				</li>
			</ul>


		</div>
		<div class="d-flex justify-content-center align-items-center ms-3">
			<span class="moon text-light bg-opacity-10 bg-gradient rounded-circle me-1" @click="colorMode">
				<svg v-show="mode === 'dark'" data-bs-theme-value="light" xmlns="http://www.w3.org/2000/svg" width="25"
					height="25" fill="currentColor" id="moon" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
					<path
						d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
					<path
						d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
				</svg>
				<svg v-show="mode === 'light'" data-bs-theme-value="dark" xmlns="http://www.w3.org/2000/svg" width="25"
					height="25" fill="currentColor" id="sun" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
					<path
						d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
				</svg>
			</span>
			<langSelector></langSelector>
		</div>

	</nav>

</template>




<script setup>
import langSelector from "../reutilizables/language-selector.vue";

import { ref, onMounted, onUnmounted } from "vue";

name: 'navSection';
components: {
	langSelector;
}
const nav = ref(["Experience", "Galery", "About", "Contact"]);
const activeSection = ref(-1)
const checkScroll = () => {
	for (let i = 0; i < nav.value.length; i++) {
		const section = document.getElementById('section' + i);
		const rect = section.getBoundingClientRect();
		if (rect.top <= 120 && rect.bottom >= 120) {
			activeSection.value = i;
			break;
		}
	}
};

const mode = ref('');

if (localStorage.getItem('theme') && localStorage.getItem('theme') != 'auto') {
	mode.value = localStorage.getItem('theme');
}
else {
	mode.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const colorMode = () => {
	mode.value = localStorage.getItem('theme');
}


const screenSize = ref(window.innerWidth);

const handleResize = () => {
	screenSize.value = window.innerWidth;
};


onMounted(() => {
	window.addEventListener("scroll", checkScroll);
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll);
	window.removeEventListener('resize', handleResize);
});





</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap-custom.scss';

.nav-line {
	width: 30px;
	height: 2px;
	transition: 100ms;
}

a:hover .nav-line,
.nav-line.active {
	width: 55px;
	background-color: $primary !important;
	height: 2px;
}

a {
	text-shadow: $shadow-ocean;
}


@media only screen and (max-width: 849px) {
	nav {
		z-index: 80;
		display: flex;
		align-items: center;
		justify-content: center;

		ul {
			width: 95%;
		}
	}

	.nav-line {
		width: 0;
		height: 2px;
		transition: 300ms;
	}

	a:hover .nav-line,
	.nav-line.active {
		width: 100%;
	}
}
</style>