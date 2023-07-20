<template>
  <div class="w-screen h-screen">
    <div class="h-[8%]">
      <Header />
    </div>
    <div class="h-auto w-auto">
      <router-view />
    </div>
    <div class="w-screen mt-8 bottom-0 border border-red-500 h-[5%]"></div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
