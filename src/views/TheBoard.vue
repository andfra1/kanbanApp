<script setup lang="ts">
import Column from "@/components/TheBoard/Column.vue";
import {computed, onMounted, ref} from "vue";
import {useModal} from "@/stores/modal.ts";
import {useColumn} from "@/stores/addNewColumn.ts";
import {useUniqueId} from "@/stores/uniqueId.ts";
import {useUnicodeName} from "@/stores/unicodeName.ts";

const modal = useModal();
const column = useColumn();
const setUnicodeId = useUniqueId();
const unicodeName = useUnicodeName();

//get it from localstorage from first time
const userColumns = ref(
  [
    {
      name: 'to-do',
      unicodeName: 'todo',
      uuid: 'id-32424dsfsdf3424',
      tasks: [5, 6, 3, 1]
    },
    {
      name: 'w trakcie robienia tasków',
      unicodeName: 'w_trakcie',
      uuid: 'id-32424dsfsdf3414',
      tasks: [1]
    },
    {
      name: 'done',
      unicodeName: 'done',
      uuid: 'id-32424dsfs333f3424',
      tasks: [2, 5, 6, 3, 1]
    }
  ]);


// methods
const closeAndReset = () => {
  modal.resetSettings();
  unicodeName.reset();
}
const modalDataRequest = () => {
  const temp = {
    name: modal.settings.input.val,
    unicodeName: unicodeName.result,
    uuid: unicodeName.result + '_' + setUnicodeId.generate(),
    tasks: []
  };
  unicodeName.typedString = temp.unicodeName;
  column.setNew = temp;
  column.addNewColumn(temp);
  saveSettings();
  closeAndReset();
}

const modalAddNewColumn = () => {
  modal.updateSettings({
    toggle: true,
    title: 'Nowa kolumna',
    type: 'input',
    input: {
      val: modal.settings.input.val,
      id: 'newColumnName',
      type: 'text',
      label: 'Podaj nazwę kolumny',
      placeholder: 'np. backlog',
    },
    buttons: [
      {
        text: 'Udaremnij',
        action: closeAndReset,
        addClass: 'btn-secondary'
      },
      {
        text: 'Zapisz',
        action: modalDataRequest,
        addClass: 'btn-success'
      }
    ],
  })
}

const saveSettings = () => {
  localStorage.setItem('_kanban-table-columns', JSON.stringify(column.items));
}

onMounted(() => {
  column.setUserColumns(userColumns.value)
  if (!localStorage.getItem('_kanban-table-columns')) {
    localStorage.setItem('_kanban-table-columns', JSON.stringify(column.items));
  } else {
    column.setUserColumns(JSON.parse(localStorage.getItem('_kanban-table-columns')))
  }
})
</script>

<template>
  <div>
    <div class="d-flex my-3 w-100">
      <h3>
        Nazwa tablicy: tier 1
      </h3>
      <div class="ms-4">
        <button
          @click="modalAddNewColumn()"
          class="btn btn-primary">
          Dodaj kolejną kolumnę <i class="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto overflow-y-hidden"
         style="height: calc(100vh - 155px)">
      <div class="row flex-nowrap h-100 pb-3">
        <Column
          v-for="column in column.items"
          :item="column"
          :key="column.uuid"/>
      </div>
    </div>
  </div>
</template>
