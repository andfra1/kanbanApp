<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps([
  'menuItems'
]);

const dropdownMenuToggleState = ref(false);
const defaultMenuItems = ref([
  {
    text: '(empty)',
    action: () => console.log('Default option #1'),
    icon: 'bi bi-check2-square'
  },
]);

const currentItems = computed(() => {
  return props.menuItems || defaultMenuItems.value;
})

const dropdownMenuToggle = () => {
  dropdownMenuToggleState.value = !dropdownMenuToggleState.value;
};
</script>

<template>
  <div class="dropdown">
    <div class="position-relative">
      <button
        @click.prevent="dropdownMenuToggle"
        :aria-expanded="dropdownMenuToggleState"
        class="btn p-0 fr_corner-border position-relative border border-1"
        type="button"
        data-bs-toggle="dropdown">
        <i class="bi bi-three-dots-vertical m-1"></i>
      </button>
      <div>
        <ul :class="dropdownMenuToggleState ? 'show' : '' "
            class="dropdown-menu end-0 left-auto pt-2">
          <li v-for="item in currentItems"
              :key="item.text">
            <button
              @click.prevent="item.action();dropdownMenuToggle()"
              class="dropdown-item text-nowrap">
              {{ item.text }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      @click="dropdownMenuToggle"
      :class="dropdownMenuToggleState ? 'd-block' : 'd-none'"
      data-bs-dismiss="dropdown"
      aria-label="Close"
      class="modal bg-white"
      style="--bs-bg-opacity:.05;z-index:1"></div>
  </div>
</template>
