<template>
  <div class="w-screen">
    <div class="flex justify-center mt-3">
      <Carousel />
    </div>
    <div class="flex justify-center mt-8 w-full">
      <HomeGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import HomeGrid from "../components/HomeGrid.vue";
</script>
