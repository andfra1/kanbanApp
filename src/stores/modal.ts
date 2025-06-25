import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

export const useModal = defineStore(
  'modal', () => {
    const defaultSettings = ref({
      toggle: false,
      title: '', //string
      text: '', //string
      type: '', // string: 'info', 'warning', 'error', 'success', 'question', 'input'
      name: '',
      minNameLength: 3, // number
      data: {},
      buttons: [{
        text: '',
        addClass: '',
        action: ()=>{}
      }],
      input: {
        val: '',
        type: '',
        placeholder: '',
        name: '',
        label: '',
        id: ''
      },
    });

    const settings = reactive({...defaultSettings.value});

    function updateSettings(newSettings: object) {
      return Object.assign(settings, newSettings);
    }

    function resetSettings() {
      return Object.assign(settings, defaultSettings.value);
    }

    return {settings, updateSettings, resetSettings, defaultSettings}
  })

