<template>
	<article
		class="experience-container position-relative d-flex flex-column justify-content-start align-items-center w-100 p-5 rounded-3 ">
		<div class="conteiner-div h-100 d-flex flex-column">
			<img src="../../../public/contenido/propcompany_logo.webp" width="100" height="100" alt="Pro.P Company">
			<div class="title mt-3 mb-4">
				<h3 class="mb-0"><a href="https://www.linkedin.com/company/propcompany/" target="_blank" class="h3">{{ $t("Experience.Experience1.company") }} <span class="position-absolute w-100 h-100 top-0 start-0"></span></a></h3>
				<p class="mb-0">{{ $t("Experience.Experience1.job") }}</p>
				<p class="mb-0 duration">{{ $t("Experience.Experience1.duration") }}</p>
			</div>
			<div class="summary w-auto">
				<p class="mb-1">{{ $t("Experience.Experience1.description") }}</p>
				<div class="d-flex flex-wrap gap-2">
					<span v-for="(element, index) in experiencies.tags" :key="index"
						class=" tag bg-secondary bg-opacity-50 text-primary rounded-5 text-nowrap">
						{{ $t("Experience.Experience1.tags[" + element + "]") }}
					</span>
				</div>
			</div>
		</div>

	</article>
</template>
<script setup>
name: "Experience";
const experiencies = {
	company: "Experience1",
	job: "Editor de video",
	duration: "2022-presente",
	description:"lorem ipsum dolor sit amet, consectetur adipiscing el aspect ratio nisl con et et dolor in eget et dolore magna al e fits",
	tags: ["0", "1"],
};
</script>

<style scoped lang="scss">
@import '../../assets/bootstrap-custom.scss';

.experience-container {
	background-color: rgba(var(--ocean-rgb), 0.5);
	min-height: 300px;
	height: auto;
	border: 1px solid transparent;
	box-shadow: 0px 0px 20px -2px var(--shadow-rgb);
	transition: 350ms;

	&:hover {
		background-color: #011961ab;
		border-top: 1px solid rgba(255, 255, 255, 0.315);
		box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.39), -2px 2px 10px -3px rgba(0, 0, 0, 0.397);

		// --bs-bg-opacity: .01;
	}

	.conteiner-div{
		width: 70%;
	}
}

.title {
	min-width: 30%;
}

.summary {

	.tag {
		padding: 5px 10px;
	}
}

.duration,
.tag {
	font-size: 0.8rem;
}
</style>
