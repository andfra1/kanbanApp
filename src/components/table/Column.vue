<script setup lang="ts">
import {ref} from "vue";
import TaskInComlumn from "@/components/table/TaskInColumn.vue";
import {useModal} from "@/stores/modal.ts";
import {useUnicodeName} from "@/stores/unicodeName.ts";
import {useUniqueId} from "@/stores/uniqueId.ts";
import {useNewTask} from "@/stores/addNewTask.ts";

const props = defineProps(
  [
    'item'
  ]
);

const modal = useModal();
const unicodeName = useUnicodeName();
const setUnicodeId = useUniqueId();
const newTask = useNewTask();

const newTaskName = ref('');
const userTasks = ref(props.item.tasks);

const addNewTask= () => {
  userTasks.value.push({
    name: newTaskName.value,
    value: 'gggg',
    tasks: [3,1,2]
  })
  return userTasks;
}
const modalDataRequest = () => {
  addNewTask();
  unicodeName.typedString = newTaskName.value;
  newTask.set.name = unicodeName.typedString;
  newTask.set.unicodeName = unicodeName.result;
  newTask.set.uuid = unicodeName.result + '_' + setUnicodeId.generate();
  closeAndReset();
}
const closeAndReset = () => {
  modal.resetSettings();
  newTaskName.value = '';
}
const modalAddNewTask = () => {
  modal.updateSettings({
    status: true,
    title: 'Nowy task',
    text: '',
    type: 'input',
    input: {
      val: newTaskName,
      placeholder: 'np. Add modal',
      id: 'newTaskName',
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
  <div class="fr_column p-2">
    <div class="card">
      <div class="fr_column-name p-2 rounded-top-3">
        <span>
          {{ props.item.name }}
        </span>
        <div class="options d-none">
          <div>add task</div>
          <div>other options</div>
        </div>
      </div>
      <div class="p-2">
        <button @click="modalAddNewTask()"
          type="button"
                class="btn btn-primary btn-sm"
        >
          dodaj task
        </button>
      </div>
      <ol class="list-group">
        <TaskInComlumn
          v-for="task in props.item.tasks"
          :key="task"
        >
          {{ task }}
        </TaskInComlumn>
      </ol>
    </div>
  </div>
</template>
