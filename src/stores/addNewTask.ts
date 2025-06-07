import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewTask = defineStore(
  'newTask', () => {
    const defaultTask = ref({
        name: 'Gimme name! Gimme that fk\'n name!!',
        dateCreated: 'Set date - automatically',
        priority: 'based on array || default \'normal\'', // 'low', 'normal', 'high'
        assignedPerson: 'Select assigned person || null',
        status: 'based on columns names || ids',
        unicodeName: 'n/d',
        uuid: 'n/d',
    });

    const settings = reactive({...defaultTask.value});
    function updateSettings(newSettings: object) {
      return Object.assign(settings, newSettings);
    }

    function resetSettings() {
      return Object.assign(settings, defaultTask.value);
    }

    return {settings, updateSettings, resetSettings}
})
