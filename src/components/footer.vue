<template>
    <div class="container-xxl conteiner-footer">
        <footer class="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center gap-3 py-3 my-4 border-top text-light">
            <p class="h5 text-center ms-3 m-auto me-0">{{ $t("Footer") }} <a href="https://www.linkedin.com/in/lucio-capezzuto" class="btn-link">Lucio Capezzuto</a></p>
            
            <a href="#header" class="button-up rounded-3 text-light me-md-5 position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                    class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
                <span class="lead">{{ $t("Up") }}</span>
            </a>
        </footer>
    </div>

</template>

<script setup>
name: "Footer";

</script>

<style lang="scss" scoped>
.conteiner-footer {
    margin-top: 15vh;
    footer{
        p{
            text-wrap: balance;
        }
    }
}

.button-up {
    transition: 100ms;
    span{
        width: 5rem;
        display: block;
        position: absolute;
        left: -20%;
        opacity: 0;
    }
}

.button-up:hover {
    transform: translateY(-3px);
    color: rgba(var(--bs-primary-rgb), 0.7) !important;
    background-color: rgb(var(--bs-secondary-rgb), 0.6);
    span{
        opacity: 1;
    }
}
</style>