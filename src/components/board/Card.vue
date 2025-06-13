<script setup lang="ts">
import SideMenu from "@/components/side-menu/SideMenu.vue";
import {useNewCard} from "@/stores/addNewCard.ts";

const newCard = useNewCard();

newCard.settings = {
  name: 'New Task',
  dateCreated: new Date().toLocaleDateString(),
  priority: 'High',
  assignedPerson: 'John Doe'
}

</script>

<template>
  <div class="p-2">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between p-2 relative">
        <h6 class="card-title fw-bold mb-0">
          {{ newCard.settings.name }}
        </h6>
        <div class="options d-flex align-items-center justify-content-end ms-1">
          <SideMenu/>
        </div>
      </div>
      <div class="card-body">
        <div class="card-text task-details">
          <div class="task-date-created">
            {{ newCard.settings.dateCreated }}
          </div>
          <div class="task-priority">
            {{ newCard.settings.priority }}
          </div>
          <div class="task-assigment-person">
            {{ newCard.settings.assignedPerson }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
