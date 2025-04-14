import { defineStore } from 'pinia'
import { ref } from "vue";

export const useUniqueId = defineStore(
  'uniqueId', ()=>{
  const uuid = ref('');
  function generate() {
    return uuid.value = 'id-' + Math.random().toString(36).substring(2, 8);
  }

  return { uuid, generate }
})
