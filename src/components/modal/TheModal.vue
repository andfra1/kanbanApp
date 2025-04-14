<script setup lang="ts">
import { useModal } from "@/stores/modal.ts";

const modal = useModal();
</script>

<template>
  <div class="modal" style="display: block"
       v-show="modal.settings.status"
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
                     class="form-control"
                     :id="modal.settings.input.id"
                     aria-describedby="basic-addon3 basic-addon4"
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button v-for="button in modal.settings.buttons"
                  :key="button"
                  @click="button.action"
                  type="button"
                  class="btn"
                  :class="button.addClass"
          >
            {{button.text}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
