import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewTask = defineStore(
  'newTask', () => {
    const defaultSettings = ref({
      task: {
        name: 'Task name',
        dateCreated: '2025-01-01',
        priority: 'wysoki',
        assignedPerson: 'K. Owalski',
        status: 'default'
      }
    });

  const set = reactive({
    name: '',
    unicodeName: '',
    uuid: '',
  })

    const settings = reactive({...defaultSettings.value});
    function updateSettings(newSettings: object) {
      return Object.assign(settings, newSettings);
    }

    function resetSettings() {
      return Object.assign(settings, defaultSettings.value);
    }

    return {settings, updateSettings, resetSettings, set}
})
