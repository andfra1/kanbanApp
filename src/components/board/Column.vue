<script setup lang="ts">
import {ref} from "vue";
import Card from "@/components/board/Card.vue";
import {useModal} from "@/stores/modal.ts";
import {useUnicodeName} from "@/stores/unicodeName.ts";
import {useUniqueId} from "@/stores/uniqueId.ts";
import {useNewCard} from "@/stores/addNewCard.ts";
import SideMenu from "@/components/side-menu/SideMenu.vue";

const props = defineProps(
  [
    'item'
  ]
);

const modal = useModal();
const unicodeName = useUnicodeName();
const setUnicodeId = useUniqueId();
const newCard = useNewCard();
const newCardName = ref('');
const userTasks = ref(props.item.tasks);

const addNewTask = () => {
  userTasks.value.push({
    name: newCardName.value,
    unicodeName: unicodeName.result,
    uuid: newCardName.value + '_' + setUnicodeId.generate(),
  })
  return userTasks;
}
const modalDataRequest = () => {
  addNewTask();
  unicodeName.typedString = newCardName.value;
  newCard.settings.name = unicodeName.typedString;
  newCard.settings.unicodeName = unicodeName.result;
  newCard.settings.uuid = unicodeName.result + '_' + setUnicodeId.generate();
  closeAndReset();
}
const closeAndReset = () => {
  modal.resetSettings();
  newCardName.value = '';
}
const modalAddNewTask = () => {
  modal.updateSettings({
    toggle: true,
    title: 'Nowy task',
    type: 'task',
    input: {
      val: newCardName,
      placeholder: 'np. Usunięcie kolumny "backlog"',
      id: 'newCardName',
      type: 'text',
      label: 'Podaj nazwę tasku',
    },
    buttons: [
      {
        text: 'Udaremnij',
        action: closeAndReset,
        addClass: 'btn-secondary'
      },
      {
        text: 'Waliduj',
        action: modalDataRequest,
        addClass: 'btn-primary'
      }
    ],
  })
}
</script>

<template>
  <div class="col col-3 d-flex flex-column">
    <div class="card h-100">
      <div class="card-header">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="m-0 text-truncate">
            {{ props.item.name }}
          </h5>
          <div class="options d-flex align-items-center justify-content-end ms-1">
            <button @click="modalAddNewTask()"
                    type="button"
                    class="btn ms-1 p-0"
            >
              <i class="bi bi-plus fs-6 m-1"></i>
            </button>
              <SideMenu class="btn ms-1 p-0" />
          </div>
        </div>
      </div>
      <div class="card-body p-1 overflow-y-auto overflow-x-hidden">
        <template v-if="!!props.item.tasks">
              <Card
                v-for="task in props.item.tasks"
                :key="task"
              >
                {{ task }}
              </Card>
        </template>
        <template v-else>
              <button @click="modalAddNewTask()"
                      class="btn btn-secondary w-100"
              >
                dodaj task
              </button>
        </template>
      </div>
    </div>
  </div>
</template>
