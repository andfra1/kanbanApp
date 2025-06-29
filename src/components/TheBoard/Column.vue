<script setup lang="ts">
import Card from "@/components/TheBoard/Card.vue";
import SideMenu from "@/components/side-menu/SideMenu.vue";
import {nextTick, watch, ref} from "vue";
import {useModal} from "@/stores/modal.ts";
import {useUnicodeName} from "@/stores/unicodeName.ts";
import {useUniqueId} from "@/stores/uniqueId.ts";
import {useNewCard} from "@/stores/addNewCard.ts";
import {useColumn} from "@/stores/addNewColumn.ts";
import myLocalStorage from "@/functions/localStorage.ts";

const props = defineProps(
  ['item']
);

const modal = useModal();
const unicodeName = useUnicodeName();
const setUnicodeId = useUniqueId();
const newCard = useNewCard();
const column = useColumn();
const newCardName = ref('');
const userTasks = ref(props.item.tasks);
const columnName = ref(props.item.name);
const editStatus = ref(false);
const columnNameEditionInput = ref(null)
const newCreatedCard = {
  name: newCardName.value,
  unicodeName: unicodeName.typedString,
  uuid: newCardName.value + '_' + setUnicodeId.generate(),
};

const columnRename = () => {
  editStatus.value = true
  column.rename(props.item.uuid, columnName.value);
  myLocalStorage('set', '_kanban-table-columns', column.items);
}
const addNewTask = () => {
  userTasks.value.push(newCreatedCard)
  return userTasks;
}
const modalDataRequest = () => {
  addNewTask();
  unicodeName.typedString = newCardName.value;
  newCard.updateSettings(newCreatedCard);
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
    buttons: [
      {
        text: 'Zamknij, zapomnij',
        action: closeAndReset,
        addClass: 'btn-secondary'
      },
      {
        text: 'Tak, zapisz!',
        action: modalDataRequest,
        addClass: 'btn-primary'
      }
    ],
  })
}

const saveSettings = () => {
  editStatus.value = false
  myLocalStorage('set', '_kanban-table-columns', column.items);
}

const sideMenuParams = [
  {
    text: 'Edycja kolumny',
    action: () => editStatus.value = true
  },
  {
    text: 'Dodaj nowy task',
    action: modalAddNewTask
  },
  {
    text: 'Usuń kolumnę',
    action: () => {
      column.removeColumn(props.item.uuid);
      myLocalStorage('set', '_kanban-table-columns', column.items);
      // localStorage.setItem('_kanban-table-columns', JSON.stringify(column.items));
    }
  }
];

// ustaw focus na input edycji nazwy kolumny
watch(editStatus, async (val) => {
  if (val) {
    await nextTick()
    columnNameEditionInput.value?.focus()
  }
})
</script>
<!--// TODO:-->
<!--// brak aktualizacji nazwy kolumny w store!!!!-->
<!--// statusy wobec tego tez sie nie zmnieniaja-->
<template>
  <div class="col col-3 d-flex flex-column">
    <div class="card h-100">
      <div :class="editStatus ? 'pt-1 pb-2' : ''"
           class="card-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="user-can-edit-indicator text-truncate w-100">
            <h5 :title="columnName"
                class="m-0 text-truncate">
              <input
                @blur="saveSettings()"
                @keydown.enter="saveSettings()"
                @keydown.esc="saveSettings()"
                v-if="editStatus"
                v-model="columnName"
                type="text"
                class="form-control form-control-sm fs-6"
                ref="columnNameEditionInput">
              <span
                v-else
                @dblclick="columnRename()"
                class="w-100 d-inline-block text-truncate"
                :style="columnName.length > 0 ? '' : 'opacity: 0.3;'">
                {{ columnName.length > 0 ? columnName : 'Gimme the name!' }}
              </span>
            </h5>

          </div>
          <div class="options d-flex align-items-center justify-content-end ms-1">
            <button
              @click="modalAddNewTask()"
              type="button"
              class="btn ms-1 p-0 border border-1"
              title="Dodaj nowy task">
              <i class="bi bi-plus fs-6 m-1"></i>
            </button>
            <SideMenu
              :menu-items="sideMenuParams"
              class="btn ms-1 p-0"
              title="Column options"/>
          </div>
        </div>
      </div>
      <div class="card-body p-2 overflow-y-auto overflow-x-hidden">
        <template v-if="props.item.tasks.length > 0">
          <Card
            v-for="(task, index) in props.item.tasks"
            :index="index"
            :tasksLength="props.item.tasks.length"
            :key="task">
            {{ task }}
          </Card>
        </template>
        <template v-else>
          <button
            @click="modalAddNewTask()"
            class="btn btn-secondary w-100">
            dodaj task
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
