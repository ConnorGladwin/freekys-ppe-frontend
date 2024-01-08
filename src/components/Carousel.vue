<template>
  <div class="w-[90%] h-auto mt-10">
    <carousel :items-to-show="1.5" :wrap-around="true" :autoplay="3000">
      <slide v-for="slide in 7" :key="slide">
        <div
          @click="slideRoute(slide)"
          class="w-[90%] flex justify-center items-center cursor-pointer"
        >
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
import { useRouter } from "vue-router";

const router = useRouter();

function slideRoute(slide) {
  let slideName = "";

  switch (slide) {
    case 1:
      slideName = "agriculture";
      break;
    case 2:
      slideName = "mining";
      break;
    case 3:
      slideName = "food processing";
      break;
    case 4:
      slideName = "construction";
      break;
    case 5:
      slideName = "corporate wear";
      break;
    case 6:
      slideName = "engineering";
      break;
    case 7:
      slideName = "corporate gifts";
      break;
    default:
      break;
  }

  router.push({ name: "search", params: { searchTerm: slideName } });
}
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
