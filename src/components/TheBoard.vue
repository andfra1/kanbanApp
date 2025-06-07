<script setup lang="ts">
import Column from "@/components/board/Column.vue";
import { computed, ref } from "vue";
import { useModal } from "@/stores/modal.ts";
import { useNewColumn } from "@/stores/addNewColumn.ts";
import { useUniqueId } from "@/stores/uniqueId.ts";
import { useUnicodeName } from "@/stores/unicodeName.ts";

const modal = useModal();
const newColumn = useNewColumn();
const setUnicodeId = useUniqueId();
const unicodeName = useUnicodeName();

const newColumnName = ref('');
const defaultColumns = ref([
  {
    name: 'to-do',
    unicodeName: 'to_do',
    tasks: [5, 6, 3, 1]
  },
  {
    name: 'w trakcie',
    unicodeName: 'w_trakcie',
    tasks: [4, 0, 9,]
  },
  {
    name: 'done',
    unicodeName: 'done',
    tasks: [2, 5, 6, 3, 1]
  }
])
const userColumns = ref(
  [
    {
      name: 'to-do',
      value: 'todo',
      tasks: [5, 6, 3, 1]
    },
    {
      name: 'w trakcie',
      value: 'inprogress',
      tasks: [4, 0, 9,]
    },
    {
      name: 'w trakcie',
      value: 'w trakcie',
      tasks: [1]
    },
    {
      name: 'done',
      value: 'done',
      tasks: [2, 5, 6, 3, 1]
    }
  ])

const addNewColumn = () => {
  userColumns.value.push({
    name: newColumnName.value,
  })
  return userColumns;
}

// computed
const currentColumns = computed(() => userColumns.value.length > 0
  ? userColumns.value
  : defaultColumns.value
);

// methods
const closeAndReset = () => {
  modal.resetSettings();
  unicodeName.reset();
  newColumnName.value = '';
}
const modalDataRequest = () => {
  addNewColumn();
  unicodeName.typedString = newColumnName.value;
  newColumn.set.name = unicodeName.typedString;
  newColumn.set.unicodeName = unicodeName.result;
  newColumn.set.uuid = unicodeName.result + '_' + setUnicodeId.generate();
  closeAndReset();
}

const modalAddNewColumn = () => {
  modal.updateSettings({
    status: true,
    title: 'Nowa kolumna',
    type: 'input',
    input: {
      val: newColumnName,
      placeholder: 'np. backlog',
      id: 'newColumnName',
      type: 'text',
      label: 'Podaj nazwę kolumny',
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
  <div>
    <div class="d-flex my-3">
      <h3>
        Nazwa tablicy: tier 1
      </h3>
    <div class="ms-4">
      <button class="btn btn-primary" @click="modalAddNewColumn()">
        Dodaj kolejną kolumnę <i class="bi bi-plus-lg"></i>
      </button>
    </div>
    </div>
    <div class="overflow-x-auto overflow-y-hidden" style="height: calc(100vh - 150px)">
      <div class="row flex-nowrap h-100 pb-3">
      <Column v-for="column in currentColumns"
              :item="column"
              :key="column"
      />
      </div>
    </div>
  </div>
</template>
