import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useNewColumn = defineStore(
  'newColumn', () => {
  const set = reactive({
    name: '',
    unicodeName: '',
    uuid: '',
  })

  return { set }
})
