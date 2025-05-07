import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

export const useModal = defineStore(
  'modal', () => {
  const defaultSettings = ref({
    status: false,
    title: '',
    text: '',
    input: {
      val: '',
      type: '',
      placeholder: '',
      name: '',
      label: '',
      id: ''
    },
    type: '',
    buttons: [{
      text: '',
      addClass: '',
      action: null
    }
      // {
      //   text: 'Waliduj', // OK, Akceptuj, Autoryzuj, Dopuść, Zatwierdź, Zgódź się, Poświadcz, Przyjmij, Poprzyj, repsektuj, Waliduj
      //   addClass: 'btn-primary',
      //   action: () => {}
      // },
      // {
      //   text: 'Udaremnij', //Znieś, Przerwij, Anuluj, Zniwecz, Odwołaj
      //   addClass: 'btn-secondary',
      //   action: () => {}
      // }
    ],
    data: {}
  });

  const settings = reactive({...defaultSettings.value});

  function updateSettings(newSettings: object) {
    return Object.assign(settings, newSettings);
  }

  function resetSettings() {
    return Object.assign(settings, defaultSettings.value);
  }

  return {settings, updateSettings, resetSettings}
})

