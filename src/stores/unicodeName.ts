import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useUnicodeName = defineStore('unicodeName', () => {
  const typedString = ref('');
  const regex = /\w+/g;
  const result = computed(() => {
    return typedString.value
      .toLowerCase()
      .split('')
      .map(char => (char.match(regex) ? char : '_'))
      .join('');
  });

function reset() {
    typedString.value = '';
  }

  return { typedString, result, reset }
});
