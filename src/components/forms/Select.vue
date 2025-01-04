<script setup>
import {computed, ref} from "vue";

const props = defineProps([
  'mode',
])
const hasData = ref(true);
const priority = [
  {
    text: '(nie wybrano)',
    value: ''
  },
  {
    text: 'normalny',
    value: 'normal'
  },
  {
    text: 'wysoki',
    value: 'high'
  },
  {
    text: 'niski',
    value: 'low'
  }
]

const status = [
  {
    text: '(nie wybrano)',
    value: ''
  },
  {
    text: 'to do',
    value: 'todo'
  },
  {
    text: 'w trakcie',
    value: 'inprogress'
  },
  {
    text: 'testy',
    value: 'tests'
  }
]

const setData = computed(() => {
  switch (props.mode) {
    case 'priority':
      return priority
    case 'status':
      return status
    default:
      noData.value = false
      return []
  }
});

const selectedOption = function (obj) {
  console.log('priority:\n', obj)
}
</script>

<template v-if="hasData">
  <select name="taskPriority" id="taskPriority" class="form-select">
    <option
      @click="selectedOption(p)"
      v-for="p in setData"
      :value="p.value"
      :key="p"
    >
      {{ p.text }}
    </option>
  </select>
</template>
