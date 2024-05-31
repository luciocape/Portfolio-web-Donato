<template>
    <div class="position-relative lang-menu text-start fw-bold">
        <span :class="selected" class="d-flex align-items-center gap-1 me-2"></span>
        <ul class=" rounded-1 position-absolute top-100 end-0 m-0 p-0 text-light bg-light bg-opacity-25">
            <li  @click="$i18n.locale = noSelected; cheangeLang()">
                <span :class="noSelected" class="gap-1">{{ noSelected }}</span>
            </li>
        </ul>
    </div>

</template>

<script setup>

import { ref } from 'vue';

name: "langSelector";
let selected = ref('es');
let noSelected = ref('en');
const cheangeLang = () => {
    const interVar = selected.value;
    selected.value = noSelected.value;
    noSelected.value = interVar;
} 
</script>

<style scoped lang="scss">
.lang-menu {
    width: 50px;

    ul {
        display: none;
        border: 1px solid #f8f8f8;
        width: 85px;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
        span{
            align-items: center;
        }

        li {
            transition: 100ms;
            span {
                width: 100%;
                padding: 5px 10px;
                display: block;
                
            }

            span:before {
                content: '';
                display: inline-block;
                width: 25px;
                height: 25px;
                vertical-align: middle;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }


        li:hover {
            background-color: #00000050;
        }
    }

    .es::before {

        background-image: url(https://flagsapi.com/AR/shiny/64.png);

    }

    .en::before {
        background-image: url(https://flagsapi.com/US/shiny/64.png);
    }



    .en::before,
    .es::before {
        content: '';
        width: 35px;
        height: 35px;
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .en,
    .es {
        display: flex;
        justify-content: space-around;
        line-height: 2;
        cursor: pointer;
    }
}

.lang-menu:hover ul {
    display: block;
}
</style>
