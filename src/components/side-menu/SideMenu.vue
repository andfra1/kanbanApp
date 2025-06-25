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
      <button @click.prevent="dropdownMenuToggle"
              :aria-expanded="dropdownMenuToggleState"
              class="btn p-0 fr_corner-border position-relative border border-1"
              type="button"
              data-bs-toggle="dropdown"
      >
        <i class="bi bi-three-dots-vertical m-1"></i>
      </button>
      <div>
        <ul :class="dropdownMenuToggleState ? 'show' : '' "
            class="dropdown-menu end-0 left-auto pt-2">
          <li v-for="item in defaultMenuItems"
              :key="item.text">
            <button
              @click.prevent="item.action()"
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
