<script setup lang="ts">
import {useModal} from "@/stores/modal.ts";

const modal = useModal();
</script>

<template>
  <label :for="modal.settings.input.id"
         class="form-label"
  >
    {{ modal.settings.input.label }}
  </label>
  <div class="input-group">
    <input v-model="modal.settings.input.val"
           :placeholder="modal.settings.input.placeholder"
           :type="modal.settings.input.type"
           :id="modal.settings.input.id"
           class="form-control"
           aria-describedby="basic-addon3 basic-addon4"
    >
  </div>
</template>
