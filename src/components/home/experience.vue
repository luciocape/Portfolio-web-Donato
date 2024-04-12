<template>
	<article v-for="(item, index) in experiencies" :key="index"
		class="experience-container d-flex w-100 mb-3 p-4 rounded-3 align-items-center">
		<div class="title">
			<h3 class="mb-0">{{ item.company }}</h3>
			<p class="mb-0">{{ item.job }}</p>
			<p class="mb-0 duration">{{ item.duration }}</p>
		</div>
		<div class="ms-3 summary">
			<p class="mb-1">{{ item.description }}</p>
			<div class="d-flex flex-wrap gap-2">
				<span v-for="(element, index) in item.tags" :key="index"
					class="tag bg-primary bg-opacity-25 text-info rounded-5 text-nowrap">{{ element }}</span>
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
			"Esta empresa estaba bien culia, ademas no me pagaron un cho y me dijieron que tenia hasta el viernes para llevar a producción",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
	{
		company: "Insta Rekreative",
		job: "Editor de video",
		duration: "2022-presente",
		description:
			"Esta empresa estaba bien culia, ademas no me pagaron un cho y me dijieron que tenia hasta el viernes para llevar a producción",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
	{
		company: "Insta Rekreative",
		job: "Editor de video",
		duration: "2022-presente",
		description:
			"Esta empresa estaba bien culia, ademas no me pagaron un cho y me dijieron que tenia hasta el viernes para llevar a producción",
		tags: ["Midjourney", "Canva", "Premier pro"],
	},
];
</script>

<style scoped lang="scss">
.experience-container {
	background-color: #6c757d28;
	height: 100%;
	border: 1px solid transparent;
	transition: 250ms;
}

.experience-container:hover {
	background-color: #5e97f32d;
	border-top: 1px solid rgba(245, 245, 245, 0.158);
	border-right: 1px solid rgba(245, 245, 245, 0.158);

	// --bs-bg-opacity: .01;
}

.title {
	width: 30%;
}

.summary {
	width: 65%;

	.tag {
		padding: 5px 10px;
	}
}

.duration,
.tag {
	font-size: 0.8rem;
}
</style>
