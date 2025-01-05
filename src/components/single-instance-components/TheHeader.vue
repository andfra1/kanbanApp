<script setup>
import '@/../node_modules/bootstrap/scss/bootstrap.scss';
import '@/assets/main.scss'

const mainMenu = [
  {
    name: "Tablice",
    router: ''
  },
  {
    name: "Taski",
    router: ''
  },
]
</script>

<template>
  <div class="fr_header ">
    <div class="fr_header_top d-flex">
      <div class="fr_logo">
        logo
      </div>
      <ul class="d-flex">
        <li v-for="item in menu">{{ item.name}}</li>
      </ul>
    </div>
    <nav class="fr_nav p-2">
      <ul class="fr_ul d-flex">
        <li v-for="item in mainMenu" class="fr_li mx-2">
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.fr_nav {
  background-color: #F6F4F0;
}

.fr_ul {
  padding: 0;
  margin: 0;
}

.fr_ul > li {
  list-style: none;
  color: $blue;
}
</style>
