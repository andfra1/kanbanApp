<script setup lang="ts">
import { useModal } from "@/stores/modal.ts";

const modal = useModal();
</script>

<template>
  <div v-show="modal.settings.status"
       class="modal"
       style="display: block"
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
            <label :for="modal.settings.input.id"
                   class="form-label"
            >
              {{ modal.settings.input.label }}
            </label>
            <div v-if="modal.settings.type && modal.settings.type === 'input'"
                 class="input-group"
            >
              <input v-model="modal.settings.input.val"
                     :placeholder="modal.settings.input.placeholder"
                     :type="modal.settings.input.type"
                     :id="modal.settings.input.id"
                     class="form-control"
                     aria-describedby="basic-addon3 basic-addon4"
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button v-for="button in modal.settings.buttons"
                  @click="button.action"
                  :key="button"
                  :class="button.addClass"
                  type="button"
                  class="btn"
          >
            {{button.text}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
