<template>
    <div class="wrapper w-100 d-flex align-items-center justify-content-start">
        <div class="w-100 d-flex justify-content-start flex-column flex-lg-row lex-nowrap gap-2">
            <article v-for="item in videos" class="container d-flex flex-nowrap justify-content-center m-0 p-0">
                <input type="radio" name="slide" :id="item.id" :checked="item.state" class="d-none" />
                <label :for="item.id" class="card rounded-5 overflow-hidden align-items-start justify-content-end p-2 pb-0 pt-0">
                    <div class="rowl d-flex flex-nowrap text-body align-items-center justify-content-start">
                        <div class="icon d-flex align-items-center justify-content-center bg-secondary rounded-5">
                            {{ item.id }}
                        </div>
                        <div class="description d-flex flex-column justify-content-center overflow-hidden">
                            <h4 class="text-uppercase">{{ item.title }}</h4>
                            <p class="pt-1">{{ item.description }}</p>
                        </div>
                    </div>
                </label>
            </article>
        </div>
    </div>
</template>

<script setup>
name: "galery";
const videos = [
    {
        id: "v1",
        state: true,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
    {
        id: "v2",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
    {
        id: "v3",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
    {
        id: "v4",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "",
    },
];
</script>

<style scoped lang="scss">
// .wrapper {
//     min-height: 70vh;
//     width: 100%;
//     .contain {
//         height: 400px;
//         .card {
//             width: 80px;
//             box-shadow: 0px 10px 30px -5px rgba(62, 123, 151, 0.8);
//             cursor: pointer;
//             transition: .6s cubic-bezier(.28,-0.03,0,.99);
//             .description{
//                 height: 80px;
//                 width: 520px;
//                 opacity: 0;
//                 transform: translateY(30px);
//                 transition: all .3s ease;
//             }
//             .icon{
//                 width: 50px;
//             }
//         }
//     }
// }

.container {
    min-height: 70vh;
    width: auto;
}

.card {
    width: 75px;
    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
    box-shadow: 0px 10px 30px -5px rgba(62, 123, 151, 0.8);
    cursor: pointer;
}

.icon {
    width: 35px;
    height: 35px;
    margin-right: 10px;
}

.description {
    max-height: 90px;
    width: 240px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}
.card:hover{
    scale: 1.05;
}
input:checked + .card:hover{
    scale: 1;
}
input:checked+label  {
    width: 275px;
}

input:checked .rowl {
    width: 100%;
}

input:checked+label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

@media only screen and (max-width: 992px) {
    label {
        width: 100%;
        justify-content: center !important;
    }

    .wrapper {
        min-height: 70vh;
        width: 100%;

        .container {

            min-height: 70px;
        }
    }

    .card {
        width: 250px;
        height: 65px;
        transition: .6s cubic-bezier(.28, -0.03, 0, .99);
        box-shadow: 0px 10px 30px -5px rgba(62, 123, 151, 0.8);
        cursor: pointer;
    }

    .description {
        max-height: 90px;
        width: 230px;
        opacity: 0;
        transform: translateY(30px);
        transition: all .3s ease;
    }

    input:checked+label {
        width: 250px;
        height: 300px;
        justify-content: end  !important;
    }

    input:checked+label .description {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
}
</style>
