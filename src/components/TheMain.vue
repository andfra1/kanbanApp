<script setup lang="ts">
import TheBoard from "@/components/TheBoard.vue";
import TheFooter from "@/components/single-instance-components/TheFooter.vue";
import TheHeader from "@/components/single-instance-components/TheHeader.vue";
import TheModal from "@/components/modal/TheModal.vue";
</script>

<template>
  <div class="container">
  <TheHeader/>
  <TheBoard/>
  <TheFooter/>
  </div>
  <TheModal/>
</template>
