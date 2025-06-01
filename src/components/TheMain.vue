<script setup lang="ts">
import Board from "@/components/Board.vue";
import TheFooter from "@/components/single-instance-components/TheFooter.vue";
import TheHeader from "@/components/single-instance-components/TheHeader.vue";
import TheModal from "@/components/modal/TheModal.vue";
</script>

<template>
  <div class="container">
  <TheHeader/>
  <Board/>
  <TheFooter/>
  </div>
  <TheModal/>
</template>
