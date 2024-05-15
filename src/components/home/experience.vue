<template>
	<article v-for="(item, index) in experiencies" :key="index"
		class="experience-container d-flex w-100 p-4 rounded-3 align-items-center">
		<div class="title">
			<h3 class="mb-0">{{ item.company }}</h3>
			<p class="mb-0">{{ item.job }}</p>
			<p class="mb-0 duration">{{ item.duration }}</p>
		</div>
		<div class="ms-3 summary w-auto">
			<p class="mb-1">{{ item.description }}</p>
			<div class="d-flex flex-wrap gap-2">
				<span v-for="(element, index) in item.tags" :key="index"
					class=" tag bg-secondary bg-opacity-50 text-primary rounded-5 text-nowrap">{{ element }}</span>
			</div>
		</div>
	</article>
</template>
<script setup>
name: "Experience";
const experiencies = [
	{
		company: "Insta Rekreative",
		job: "Editor de video",
		duration: "2022-presente",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing el aspect ratio nisl con et et dolor in eget et dolore magna al e fits",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
	{
		company: "Insta Rekreative",
		job: "Editor de video",
		duration: "2022-presente",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing el aspect ratio nisl con et et dolor in eget et dolore magna al e fits",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
	{
		company: "Insta Rekreative",
		job: "Editor de video",
		duration: "2022-presente",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing el aspect ratio nisl con et et dolor in eget et dolore magna al e fits",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
];
</script>

<style scoped lang="scss">
@import '../../assets/bootstrap-custom.scss';
.experience-container {
	background-color: rgba(var(--ocean-rgb),0.5);
	height: 100%;
	border: 1px solid transparent;
	box-shadow: 0px 0px 20px -2px var(--shadow-rgb);
	transition: 350ms;
}

.experience-container:hover {
	background-color: #29408bab;
	border-top: 1px solid rgba(255, 255, 255, 0.315);
	box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.39), -2px 2px 10px -3px rgba(0, 0, 0, 0.397);

	// --bs-bg-opacity: .01;
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
