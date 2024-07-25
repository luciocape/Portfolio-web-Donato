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
			<section v-for="(item, index) in sections" :key="index" :id="'section' + index" class="h-auto">
				<h2>{{ $t(item.title + ".title") }}</h2>
				<div class="border-start border-2 border-light border-opacity-75 section-body mt-1" :class="item.clase">
					<Experience v-if="item.title == 'Experience'"></Experience>
					<galery v-if="item.title == 'Galery'"></galery>
					<a href="https://drive.google.com/drive/folders/1x7wtZp3RlMt4Wl5OhcmiTGkn1TY341Ij?usp=drive_link" target="_blank" v-if="item.title == 'Galery'" class="ver-mas btn btn-outline-primary mt-2 p-3 lead">{{ $t("More") }}</a>
					<about v-if="item.title == 'About'"></about>
					<contact v-if="item.title == 'Contact'"></contact>
				</div>
			</section>
		</main>
	</div>
	<Footer></Footer>
</template>

<script setup>
import Experience from "../components/home/experience.vue";
import galery from "../components/home/galery.vue";
import about from "../components/home/about.vue";
import contact from "../components/home/contact.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import { ref, onMounted, onUnmounted } from 'vue';
name: "home";
components: {
	Experience, galery, about, contact, Header, Footer;
}
const sections = [
	{
		title: "Experience",
		clase: "d-flex flex-column gap-3 justify-content-center align-items-center",
	},
	{
		title: "Galery",
		clase: "d-flex flex-column gap-2 justify-content-start",
	},
	{
		title: "About",
		clase: "",
	},
	{
		title: "Contact",
		clase: "",
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
@import '../assets/bootstrap-custom.scss';

main {
	width: 55%;

	#section3 {
		margin-bottom: 0;
	}

	section {
		padding-top: 11vh;
		min-height: 80vh;
		margin-bottom: 9vh;


		.section-body:nth-child(n) {
			padding-left: 4%;
			padding-top: 10px;
		}

		.section-body {
			min-height: 70vh;
			width: auto;
			.ver-mas {
				box-shadow: inset 0 0 20px 2px $info;
			}
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

@media only screen and (max-width: 550px) {
	main{
		section{
			margin-bottom: 0;
			.section-body:nth-child(n) {
			border-top: 2px solid $light;
			border-left: 0px !important;
			padding-left: 0px !important;
			}
		}
	}


}
</style>
