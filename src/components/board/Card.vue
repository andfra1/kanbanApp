<script setup lang="ts">
import Select from "@/components/forms/Select.vue";
import {useNewTask} from "@/stores/addNewTask.ts";

const newTask = useNewTask();
</script>

<template>
  <div class="p-2">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between p-2">
        <h6 class="card-title mb-0">
          {{ newTask.settings.task.name }} - card
        </h6>
        <div class="options d-flex align-items-center justify-content-end ms-1">
          <button type="button"
                  class="btn btn-outline-light ms-1 p-0">
            <i class="bi bi-three-dots m-1"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-text task-details">
          <div class="task-date-created">
            2025-01-01
          </div>
          <div class="task-priority">
            normal
          </div>
          <div class="task-assigment-person">
            K. Owalski
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
