<script setup lang="ts">
import TheBoard from "./TheBoard.vue";
import TheFooter from "@/components/single-instance-components/TheFooter.vue";
import TheHeader from "@/components/single-instance-components/TheHeader.vue";
import TheModal from "@/components/TheModal/TheModal.vue";
</script>

<template>
  <div class="container">
  <TheHeader/>
  <TheBoard/>
  <TheFooter/>
  </div>
  <TheModal/>
</template>

