<template>
    <div class="d-flex flex-column gap-5">
        <Experience></Experience>
    </div>
    
</template>

<script setup>
import Experience from "../components/home/experience.vue";
name: "experiences";
components: {
	Experience;
}
const dimenciones = {
    ancho: '3',
    alto: '',
} 
</script>

<style lang="scss" scoped>
@import '../assets/bootstrap-custom.scss';
.experience-container {
	height: 80%!important;

}



</style>