import {ref, computed, defineProps} from 'vue'
import { defineStore } from 'pinia'
import defaultPriorities from '@/data/prioritiesDefault.ts'

export const definePriorities = defineStore('definePriorities', () => {
  const priorities = ref(defaultPriorities())

  function arrPush(arr: []) {
    priorities.value = [...arr]
  }

  return { definePriorities, arrPush }
})
