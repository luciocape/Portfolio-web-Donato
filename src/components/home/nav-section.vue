<template>
	<nav class="mt-2" v-if="screenSize >= 850">
		<ul>
			<li v-for="(item, index) in nav" :key="index" class="mb-3">
				<a :href="'#' + index" class="d-flex align-items-center w-75 nav-item"><span
						class="nav-line bg-light-subtle me-2" :class="{ active: activeSection === index }"></span>{{ item
					}}</a>
			</li>
		</ul>
	</nav>
	<nav class="mt-3 position-fixed top-0 start-0    w-100" v-if="screenSize < 850">
		<ul class="d-flex justify-content-around align-items-center m-0 p-3 rounded-5 item-blur">
			<li v-for="(item, index) in nav" :key="index" class="">
				<a :href="'#' + index" class="d-flex flex-column-reverse align-items-start nav-item"><span
						class="nav-line bg-tertiary me-2" :class="{ active: activeSection === index }"></span>{{ item
					}}</a>
			</li>
			<li class="moon text-light bg-opacity-10 bg-gradient rounded-circle" @click="colorMode">
				<svg v-if="mode === 0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
					class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
					<path
						d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
					<path
						d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
				</svg>
				<svg v-if="mode === 1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
					class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
					<path
						d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
				</svg>
			</li>
		</ul>
	</nav>
</template>




<script setup>
import { ref, onMounted, onUnmounted } from "vue";

name: 'navSection';

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

const screenSize = ref(window.innerWidth);
const mode = ref(0);

const handleResize = () => {
	screenSize.value = window.innerWidth;
};
const colorMode = () => {
	mode.value = 1 - mode.value * 1;
}

onMounted(() => {
	window.addEventListener("scroll", checkScroll);
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll);
	window.removeEventListener('resize', handleResize);
});





</script>

<style lang="scss" scoped >
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



@media only screen and (max-width: 849px) {
	nav {
		z-index: 80;
		display: flex;
		align-items: center;
		justify-content: center;
		ul{
			width: 95%;
		}
	}

	.moon {
		cursor: pointer;
	}

	.moon:hover,
	.moon:hover svg {
		color: rgb(190, 198, 206);
		scale: 1.08;
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