<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps([
  'mode',
  'data' || [],
  'data-value' || ['value'],
  'data-key' || ['uuid']
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
      return props.data
    case 'status':
      return props.data
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
  <select
    name="taskPriority"
    id="taskPriority"
    class="form-select">
    <option
      @click="selectedOption(p)"
      v-for="p in setData"
      :value="p.name"
      :key="p.uuid"
    >
      {{ p.name }}
    </option>
  </select>
</template>
