<script setup lang="ts">
import '@/../node_modules/bootstrap/scss/bootstrap.scss';
import "@/../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '@/assets/main.scss'
import TheMain from './views/TheMain.vue'


</script>

<template>
  <TheMain/>
</template>

<style>
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb,
::-webkit-scrollbar {
  border-radius: 8px;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #373737;
}

::-webkit-scrollbar-thumb {
  background: #4b4b4b;
}
</style>
