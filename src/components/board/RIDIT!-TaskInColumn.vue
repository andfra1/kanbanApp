<script setup lang="ts">
import Select from "@/components/forms/Select.vue";
import { defineStore } from 'pinia'
import { useNewTask } from "@/stores/addNewCard.ts";

const newTask = useNewTask();
</script>

<template>
  <li class="list-group-item p-2">
    <div class="task_body">
      <div class="task_body_header">
        <div class="task-name rounded px-2 py-1">
          <span>
            {{ newTask.settings.task.name }}
          </span>
<!--          <div>-->
<!--            opcje-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div class="task_details p-2">
      <div class="task-date-created d-none">
        2025-01-01
      </div>
      <div class="task-priority">
        priorytet: wysoki
      </div>
      <div class="task-assigment-person">
        K. Owalski
      </div>
      <div class="task-status d-none">
        <Select mode="status" data="defaultPriorities"/>
      </div>
    </div>
  </li>
</template>
