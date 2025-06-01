<script setup lang="ts">
import { useModal } from "@/stores/modal.ts";
import Task from "./type/Task.vue";
import SimpleInput from "./type/SimpleInput.vue";

const modal = useModal();
</script>

<template>
  <div @click="modal.stop.resetSettings"
       :class="modal.settings.status ? 'd-block' : 'd-none'"
       class="modal"
       tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ modal.settings.title }}
          </h5>
          <button @click="modal.resetSettings"
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="modal.settings.text.length > 0"
               class="mb-3"
          >
            {{ modal.settings.text }}
          </div>
          <div class="mb-3">
            <SimpleInput v-if="modal.settings.type === 'input'"></SimpleInput>
            <Task v-else-if="modal.settings.type === 'task'"></Task>
          </div>
        </div>
        <template v-if="modal.settings.type === 'input'">
        <div class="modal-footer">
          <button v-for="button in modal.settings.buttons"
                  @click="button.action"
                  :key="button"
                  :class="button.addClass"
                  class="btn"
                  type="button"
          >
            {{ button.text }}
          </button>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>
