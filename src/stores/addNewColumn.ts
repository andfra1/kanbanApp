import {computed, reactive, ref} from 'vue'
import {defineStore} from 'pinia'

export const useColumn = defineStore(
  'column', () => {
    const setNew = ref({
      name: '',
      unicodeName: '',
      uuid: '',
      tasks: []
    })
    const items = reactive([{...setNew.value}]);

    function setUserColumns(userColumns: object) {
      return Object.assign(items, userColumns);
    }

    function addNewColumn() {
      return items.push(setNew.value)
    }

    return {setNew, items, setUserColumns, addNewColumn}
  })
