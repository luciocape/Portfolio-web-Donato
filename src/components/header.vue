<template>
	<div class="position-relative contenedor-header me-3">
		<header class="position-sticky">
			<section>
				<h1>{{ name }}</h1>
				<h2>{{ job }}</h2>
				<p>{{ summary }}</p>
			</section>
			<nav class="mt-5 pt-5">
				<ul>
					<li v-for="item in nav" :key="index" class="mb-3">
						<a :href="'#' + item" class="d-flex align-items-center w-75"
							><span class="nav-link bg-secondary me-3"></span>{{ item }}</a
						>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>
<script setup>
name: "Header";
const name = "Donato Infantino";
const job = "Editor de video";
const summary =
	"lorem ipsum dolor sit amet, consectetur adip  euismod er  elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu";
const nav = ["EXPERIENCIA", "GALERIA", "SOBRE MI", "CONTACTO"];
</script>

<style scoped lang="scss">
.contenedor-header {
	width: 40%;
	header {
		max-width: 100%;
		top: 25px;
		section {
			width: 100%;
			p {
				width: 85%;
			}
		}
		.nav-link {
			width: 30px;
			height: 2px;
			transition: 100ms;
		}
		a:hover .nav-link,
		a:active .nav-link {
			width: 60px;
			background-color: rgb(30, 207, 219);
			height: 2px;
		}
	}
}
</style>
