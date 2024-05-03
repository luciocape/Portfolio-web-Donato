<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style lang="scss">
@import './assets/bootstrap-custom.scss';


.background {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  // background: #08bada4b;
  overflow: hidden;

  li {

    border-radius: 47% 53% 46% 45%;
    position: absolute;
    display: block;
    list-style: none;
    bottom: -184px;
    animation: animate 5s linear infinite;

    div {
      border: 1px solid rgba(131, 247, 255, 0.342);
      border-radius: 47% 53% 46% 45%;
      box-shadow: -7px -8px 15px -15px var(--bs-primary);
    }

  }
}
</style>
