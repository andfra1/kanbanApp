<script setup lang="ts">
import {useModal} from "@/stores/modal.ts";

const modal = useModal();

interface InputSettings {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  val: string;
}

// Initialize if not exists
if (!modal.settings.input) {
  // Type assertion to more specific type, not 'any'
  (modal.settings as { input?: InputSettings }).input = {
    id: 'simple-input',
    label: 'Input Label',
    placeholder: 'Enter text here',
    type: 'text',
    val: ''
  };
}
</script>

<template>
  <label :for="(modal.settings as any).input.id"
         class="form-label"
  >
    {{ (modal.settings as any).input.label }}
  </label>
  <div class="input-group">
    <input v-model="(modal.settings as any).input.val"
           :placeholder="(modal.settings as any).input.placeholder"
           :type="(modal.settings as any).input.type"
           :id="(modal.settings as any).input.id"
           class="form-control"
           aria-describedby="basic-addon3 basic-addon4"
    >
  </div>
</template>
