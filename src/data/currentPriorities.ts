import { ref } from 'vue';

const currentPriorities = ref([
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

export default  currentPriorities;
