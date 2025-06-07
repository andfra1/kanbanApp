<script setup lang="ts">
import {ref} from "vue";

const dropdownMenuToggleState = ref(false);
const defaultMenuItems = [
  {
    text: 'There\'s',
    action: () => console.log('Default option #1')
  },
  {
    text: 'no',
    action: () => console.log('Default option #2')
  },
  {
    text: 'data',
    action: () => console.log('Default option #3')
  },
  {
    text: 'here :(',
    action: () => console.log('Default option #4')
  }
];
const dropdownMenuToggle = () => {
  dropdownMenuToggleState.value = !dropdownMenuToggleState.value;
};
</script>

<template>
  <div class="dropdown">
    <div class="position-relative">
      <button @click="dropdownMenuToggle"
              :aria-expanded="dropdownMenuToggleState"
              class="btn btn-outline-light p-0"
              type="button"
              data-bs-toggle="dropdown"
      >
        <i class="bi bi-three-dots m-1"></i>
      </button>
      <div class="pt-2">
        <ul :class="dropdownMenuToggleState ? 'show' : '' "
            class="dropdown-menu end-0 left-auto">
          <li v-for="item in defaultMenuItems"
              :key="item.text">
            <button
              @click="item.action()"
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
      style="--bs-bg-opacity: .05;z-index:1"></div>
  </div>
</template>

<style scoped lang="scss">

</style>
