import { ref } from 'vue';

const defaultPriorities = ref([
  {
    name: 'do zrobienia',
    tasks: []
  },
  {
    name: 'w trakcie',
    tasks: []
  },
  {
    name: 'wykonane',
    tasks: []
  },
])

export default  defaultPriorities;
