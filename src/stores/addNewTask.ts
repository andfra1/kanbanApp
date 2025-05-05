import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useNewTask = defineStore(
  'newTask', () => {
  const set = reactive({
    name: '',
    unicodeName: '',
    uuid: '',
  })

  return { set }
})
