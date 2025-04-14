<script setup lang="ts">
import Select from "@/components/forms/Select.vue";
</script>

<template>
  <div class="task rounded">
    <div class="task_body">
      <div class="task_body_header">
        <div class="task-name rounded px-2 py-1">
          <span>
            Task name
          </span>
<!--          <div>-->
<!--            opcje-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div class="task_details p-2">
      <div class="task-date-created">
        2025-01-01
      </div>
      <div class="task-priority">
        priorytet: wysoki
      </div>
      <div class="task-assigment-person">
        K. Owalski
      </div>
      <div class="task-status">
        <Select mode="status" data="defaultPriorities"/>
      </div>
    </div>
  </div>
</template>
