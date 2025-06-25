<script setup lang="ts">
import {nextTick, watch, ref} from "vue";
import Card from "@/components/TheBoard/Card.vue";
import {useModal} from "@/stores/modal.ts";
import {useUnicodeName} from "@/stores/unicodeName.ts";
import {useUniqueId} from "@/stores/uniqueId.ts";
import {useNewCard} from "@/stores/addNewCard.ts";
import SideMenu from "@/components/side-menu/SideMenu.vue";

const props = defineProps(
  ['item']
);
const modal = useModal();
const unicodeName = useUnicodeName();
const setUnicodeId = useUniqueId();
const newCard = useNewCard();
const newCardName = ref('');
const userTasks = ref(props.item.tasks);
const columnName = ref(props.item.name);
const editStatus = ref(false);
const columnNameEditionInput = ref(null)
const tempTaskObj = {
  name: newCardName.value,
  unicodeName: unicodeName.typedString,
  uuid: newCardName.value + '_' + setUnicodeId.generate(),
};
const addNewTask = () => {
  userTasks.value.push(tempTaskObj)
  return userTasks;
}
const modalDataRequest = () => {
  addNewTask();
  unicodeName.typedString = newCardName.value;
  newCard.settings = tempTaskObj
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
        text: 'Zaniechaj, zamknij, zapomnij',
        action: closeAndReset,
        addClass: 'btn-secondary'
      },
      {
        text: 'Ta, zapisz normalnie',
        action: modalDataRequest,
        addClass: 'btn-primary'
      }
    ],
  })
}

// ustaw focus na input edycji nazwy kolumny
watch(editStatus, async (val) => {
  if (val) {
    await nextTick()
    columnNameEditionInput.value?.focus()
  }
})
</script>
// TODO:
// brak aktualizacji nazwy kolumny w store!!!!
// statusy wobec tego tez sie nie zmnieniaja
<template>
  <div class="col col-3 d-flex flex-column">
    <div class="card h-100">
      <div :class="editStatus?'pt-1 pb-2':''"
           class="card-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="user-can-edit-indicator text-truncate w-100">
            <h5 :title="columnName"
                class="m-0 text-truncate">
              <input
                @blur="editStatus = false"
                @keydown.enter="editStatus = false"
                @keydown.esc="editStatus= false"
                v-if="editStatus"
                v-model="columnName"
                type="text"
                class="form-control form-control-sm fs-6"
                ref="columnNameEditionInput">
              <span
                v-else
                @dblclick="editStatus = true"
                class="w-100 d-inline-block text-truncate"
              :style="columnName.length > 0 ? '' : 'opacity: 0.3;'">
                {{ columnName.length > 0 ? columnName : 'Gimme the name!' }}
              </span>
            </h5>

          </div>
          <div class="options d-flex align-items-center justify-content-end ms-1">
            <button @click="modalAddNewTask()"
                    type="button"
                    class="btn ms-1 p-0 border border-1"
                    title="Dodaj nowy task">
              <i class="bi bi-plus fs-6 m-1"></i>
            </button>
            <SideMenu class="btn ms-1 p-0" title="Column options"/>
          </div>
        </div>
      </div>
      <div class="card-body p-1 overflow-y-auto overflow-x-hidden">
        <template v-if="props.item.tasks.length > 0">
          <Card
            v-for="task in props.item.tasks"
            :key="task">
            {{ task }}
          </Card>
        </template>
        <template v-else>
          <button class="btn btn-secondary w-100">
            dodaj task
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
