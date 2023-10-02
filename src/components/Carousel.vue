<template>
  <div class="w-[1000px] h-auto mt-10">
    <carousel :items-to-show="1.5" :wrap-around="true" :autoplay="3000">
      <slide v-for="slide in 7" :key="slide">
        <div class="w-auto h-[500px] flex justify-center items-center">
          <CloudinaryImage :image="slide" type="carousel" />
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import CloudinaryImage from "../utils/carousel.vue";
</script>

<style>
.carousel__slide--prev {
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
}
</style>
