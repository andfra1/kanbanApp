<script setup lang="ts">
import TaskInComlumn from "@/components/table/TaskInColumn.vue";

const props = defineProps(
  [
    'item'
  ]
);

</script>

<template>
  <div class="fr_column p-2">
    <div class="fr_column_inner w-100 rounded-4">
      <div class="fr_column-name p-2 rounded-top-3">
        <span>
          {{ props.item.name }}
        </span>
        <div class="options hidden">
          <div>add task</div>
          <div>other options</div>
        </div>
      </div>
      <div class="fr_column-content p-2 rounded-3">
        <TaskInComlumn
          v-for="(task, index) in props.item.tasks"
          :class="props.item.tasks.length-1 !== index ? 'mb-2' : ''"
          :key="task"
        >
          {{ task }}
        </TaskInComlumn>
      </div>
    </div>
  </div>
</template>
