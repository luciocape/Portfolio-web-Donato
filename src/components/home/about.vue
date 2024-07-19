<template>
	<p class="about lead text-start mb-0" v-for="(item, index) in about" :key="index" >
		{{ $t('About.' + item) }} <br><br>
	</p>
</template>
<script setup>
name: "about";
const about  = [
	"description1",
	"description2",
	"description3"
];
</script>

<style scoped lang="scss"></style>
