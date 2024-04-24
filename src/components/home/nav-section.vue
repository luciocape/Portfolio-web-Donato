<template>
	<nav class="mt-2" v-if="screenSize >= 850">
		<ul>
			<li v-for="(item, index) in nav" :key="index" class="mb-3">
				<a :href="'#' + index" class="d-flex align-items-center w-75 nav-item"><span
						class="nav-line bg-secondary me-2" :class="{ active: activeSection === index }"></span>{{ item
					}}</a>
			</li>
		</ul>
	</nav>
	<nav class="nav-little mt-3 position-fixed top-0 w-75 rounded-5 bg-secondary bg-opacity-75 p-3"
		v-if="screenSize < 850">
		<ul class="d-flex justify-content-around align-items-center m-0">
			<li v-for="(item, index) in nav" :key="index" class="">
				<a :href="'#' + index" class="d-flex flex-column-reverse align-items-start nav-item"><span
						class="nav-line bg-secondary me-2" :class="{ active: activeSection === index }"></span>{{ item
					}}</a>
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

<style scoped>
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

.nav-little {
	backdrop-filter: blur(10px);
	z-index: 80;
}

@media only screen and (max-width: 849px) {
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