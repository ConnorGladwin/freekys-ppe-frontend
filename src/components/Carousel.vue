<template>
  <div class="w-1/2 h-1/3 mt-10">
    <carousel :items-to-show="1.5" :wrap-around="true" :autoplay="2000">
      <slide v-for="slide in 8" :key="slide" class=" ">
        <div
          class="w-[600px] h-[300px] flex justify-center items-center border"
        >
          <span class="my-auto">{{ slide }}</span>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
