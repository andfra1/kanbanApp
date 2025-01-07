<script setup lang="ts">
import Column from "@/components/table/Column.vue";
import {ref} from "vue";

const currentColumns = ref([
  {
    name: 'to-do',
    tasks: [5,6,3,1]
  },
  {
    name: 'w trakcie',
    tasks: [4,0,9,]
  },
  {
    name: 'deployment',
    tasks: [1]
  },
  {
    name: 'done',
    tasks: [2,5,6,3,1]
  }
])

const defaultColumns = ref([
  {
    name: 'to-do',
    tasks: [5,6,3,1]
  },
  {
    name: 'w trakcie',
    tasks: [4,0,9,]
  },
  {
    name: 'done',
    tasks: [2,5,6,3,1]
  }
])

const statuses = ref([...defaultColumns.value]);
currentColumns.value = ref(defaultColumns.value);
</script>

<template>
  <div class="fr_table">
    <div class="fr_table_title">
      Nazwa tablicy: tier 1
    </div>
    <div class="fr_table_columns d-flex overflow-auto">
      <Column :item="column" :key="column" v-for="column in currentColumns"/>
    </div>
  </div>
</template>
