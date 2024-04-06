<template>
	<div
		class="container-fluid d-flex flex-row-reverse justify-content-between pt-3"
	>
		<Header></Header>
		<main class="ms-5 ps-5">
			<section v-for="item in sections" :key="index" :id="item" class="">
				<h2>{{ item }}</h2>
				<div class="border-start border-3 border-secondary h-75 line">
					<experience v-if="item == 'EXPERIENCIA'"></experience>
					<galery v-else-if="item == 'GALERIA'"></galery>
					<about v-else-if="item == 'SOBRE MI'"></about>
					<contact v-else-if="item == 'CONTACTO'"></contact>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import experience from "../components/home/experience.vue";
import galery from "../components/home/galery.vue";
import about from "../components/home/about.vue";
import contact from "../components/home/contact.vue";
import Header from "../components/header.vue";
name: "home";
components: {
	experience, galery, about, contact, Header;
}
const sections = ["EXPERIENCIA", "GALERIA", "SOBRE MI", "CONTACTO"];
</script>

<style scoped lang="scss">
main {
	width: 60%;
	section {
		height: 85vh;
		padding-top: 14vh;
	}
}
</style>
