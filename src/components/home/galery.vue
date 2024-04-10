<template>
	<div class="wrapper w-100 d-flex align-items-center justify-content-start">
		<div  class="d-flex justify-content-start flex-nowrap">
            <div v-for="item in videos" class="container d-flex flex-nowrap justify-content-start">
                <input  type="radio" name="slide" :id="item.id" :checked="item.state"  class="d-none"/>
                <label :for="item.id" class="card rounded-4 overflow-hidden align-items-end justify-content-end">
                    <div class="row d-flex flex-nowrap text-body">
                        <div class="icon d-flex align-items-center justify-content-center bg-secondary rounded-5 m-3">1</div>
                        <div class="description d-flex flex-column justify-content-center overflow-hidden">
                            <h4 class="text-uppercase">{{ item.title }}</h4>
                            <p class="pt-1">{{ item.description }}</p>
                        </div>
                    </div>
                </label>
            </div>
		</div>
	</div>
</template>

<script setup>
name: "galery";
const videos = [
    {
        id: "c1",
        state: true,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
    {
        id: "c2",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
    {
        id: "c3",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    }
];
</script>

<style scoped lang="scss">
.container {
    height: 350px;
}
.card {
    width: 80px;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(62, 123, 151, 0.8);
}
.icon{
    width: 50px;
}
.description{
    height: 80px;
    width: 320px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

input:checked + label {
    width: 400px;
}

input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

</style>
