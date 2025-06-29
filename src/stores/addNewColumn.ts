import {reactive, ref} from 'vue'
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

    function rename(columnUuid: string, newName: string) {
      const column = items.find(item => item.uuid === columnUuid);
      if (column) {
        column.name = newName;
      }
      return column;
    }

    function removeColumn(columnUuid: string) {
      return items.splice(
        items.findIndex((item) => item.uuid === columnUuid), 1
      );
    }

    return {setNew, items, setUserColumns, addNewColumn, removeColumn, rename}
  })
