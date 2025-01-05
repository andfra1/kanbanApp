<script setup>
import '@/../node_modules/bootstrap/scss/bootstrap.scss';
import '@/assets/main.scss'
import Table from "@/components/Table.vue";
import TheFooter from "@/components/single-instance-components/TheFooter.vue";
import TheHeader from "@/components/single-instance-components/TheHeader.vue";
import {useCounterStore} from "@/stores/counter";

const store = useCounterStore();
</script>

<template>
  <TheHeader/>
  <Table/>
  <TheFooter/>
</template>
