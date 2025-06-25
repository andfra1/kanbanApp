<script setup lang="ts">
import {useModal} from "@/stores/modal.ts";
interface InputSettings {
  id: string;
  label: string;
  placeholder: string;
  val: string;
  name: string;
  type: string;
}

const modal = useModal();
const inputSettings: InputSettings = {
  id: '_0a_rid_it',
  label: 'Podaj nazwę kolumny',
  placeholder: 'np. backlog',
  type: 'input',
  val: modal.settings.input.val,
  name: 'sample-input-name-0'
};

modal.settings.input = inputSettings;
</script>

<template>
  <label :for="(modal.settings as any).input.id"
         class="form-label"
  >
    {{ (modal.settings as any).input.label }}
  </label>
  <div class="input-group">
    <input v-model="modal.settings.input.val"
           :placeholder="(modal.settings as any).input.placeholder"
           :type="(modal.settings as any).input.type"
           :id="(modal.settings as any).input.id"
           class="form-control"
           aria-describedby="basic-addon3 basic-addon4"
    >
  </div>
</template>
