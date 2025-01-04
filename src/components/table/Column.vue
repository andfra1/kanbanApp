<script setup>
import TaskInComponent from "@/components/table/TaskInColumn.vue";

const props = defineProps(
  [
    'item'
  ]
)
</script>

<template>
  <div class="fr_column p-2">
    <div class="fr_column_inner w-100 rounded-3">
      <div class="fr_column-name pt-1 pb-3 px-2 rounded-top-2">
        <span>
          {{ item.name }}
        </span>
      </div>
      <div class="fr_column-content p-2 rounded-3">
        <TaskInComponent
          v-for="(task, index) in item.tasks"
          :class="item.tasks.length-1 !== index ? 'mb-2' : ''"
        >
          {{ task }}
        </TaskInComponent>
      </div>
    </div>
  </div>
</template>
