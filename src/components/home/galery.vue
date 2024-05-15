<template>
    <div class="wrapper w-100 d-flex align-items-center justify-content-start">
        <div class="w-100 d-flex justify-content-start flex-column flex-lg-row lex-nowrap gap-2">
            <article v-for="item in videos"
                class="container contendor-proyect d-flex flex-nowrap justify-content-center m-0 p-0">
                <input type="radio" name="slide" :id="'v' + item.id" :checked="item.state" class="d-none" />
                <label :for="'v' + item.id"
                    class="card bg-black rounded-5 overflow-hidden align-items-start justify-content-end p-2 pb-0">
                    <video :src="item.url" autoplay muted playsinline loop class="position-absolute"></video>
                    <div class="filtro bg-black bg-opacity-50 position-absolute"
                        style="height: 100%; width: 100%; z-index: 50;"></div>
                    <div class="rowl d-flex flex-nowrap text-body align-items-center justify-content-start gap-2"
                        style="z-index: 100;">
                        <div
                            class="icon d-flex align-items-center justify-content-center bg-secondary text-light rounded-5">
                            {{ item.id }}
                        </div>
                        <div class="description d-flex flex-column justify-content-center overflow-hidden">
                            <h4 class="text-uppercase mb-0">{{ item.title }}</h4>
                            <p class="pt-1 mb-0">{{ item.description }}</p>
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
        id: "1",
        state: true,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "../../../contenido/estilo-avanzado.mp4",
    },
    {
        id: "2",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "../../../public/contenido/estilo-medio-avanzado-emi.mp4",
    },
    {
        id: "3",
        state: false,
        title: "video 1",
        description: "lorem ipsum dolor sit amet",
        url: "../../../public/contenido/hormozi.mp4",
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

.contendor-proyect {
    min-height: 70vh;
    width: auto;
}

video {
    top: 0;
    align-self: center;
    min-height: 290px;
    height: 110%;
}

.card {
    width: 70px;
    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
    box-shadow: 0px 10px 30px -5px var(--shadow-rgb);
    cursor: pointer;
}

.filtro {
    align-self: center;
    justify-self: center;
}

.icon {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    align-self: end;
    margin: 0;
    margin-bottom: 2px;
}

.rowl {
    margin-bottom: 16px;
    margin-left: 4px;
}

.description {
    max-height: 90px;
    width: 240px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.card:hover {
    scale: 1.03;
}

input:checked+.card:hover {
    scale: 1;
}

input:checked+label {
    width: 275px;
}

input:checked  .rowl {
    width: 100%;
}

input:checked+label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}


@media only screen and (max-width: 992px) {


    label {
        width: 100%;
        margin: auto;
    }

    .wrapper {
        min-height: 70vh;
        width: 100%;

        .contendor-proyect {
            min-height: 70px;
        }
    }

    .card {
        width: 100%;
        height: 70px;
        margin: auto;
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
        width: 100%;
        height: 300px;
        justify-content: end !important;
    }

    input:checked+label .description {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
}
</style>
