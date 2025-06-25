<script setup lang="ts">
import SideMenu from "@/components/side-menu/SideMenu.vue";
import {useNewCard} from "@/stores/addNewCard.ts";
import {useModal} from "@/stores/modal.ts";

const newCard = useNewCard();
const modal = useModal();

newCard.settings = {
  name: 'New Task',
  dateCreated: new Date().toLocaleDateString(),
  priority: 'High',
  assignedPerson: 'John Doe'
}

const closeAndReset = () => {
  modal.resetSettings();
}

const modalEditTask = (card) => {
  console.log(card)
  modal.updateSettings({
    toggle: true,
    title: 'Edycja taska',
    type: 'task',
    buttons: [
      {
        text: 'Udaremnij',
        action: closeAndReset,
        addClass: 'btn-secondary'
      },
      {
        text: 'Waliduj',
        action: () => {
        },
        addClass: 'btn-primary'
      }
    ],
  })
}
</script>

<template>
  <div class="p-2">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between p-2 relative">
        <h6 class="card-title fw-bold mb-0 text-truncate">
          {{ newCard.settings.name }}
        </h6>
        <div class="options d-flex align-items-center justify-content-end ms-1">
          <SideMenu title="Card options"/>
        </div>
      </div>
      <div class="card-body">
        <div class="card-text task-details" @dblclick="modalEditTask(task)">
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
