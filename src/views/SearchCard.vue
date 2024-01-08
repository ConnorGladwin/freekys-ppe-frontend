<template>
  <div class="h-48 flex">
    <div class="h-full p-1 w-1/4">
      <img :src="item?.image" alt="" class="h-full" />
    </div>
    <div class="w-2/4 flex flex-col justify-center">
      <div class="text-2xl mb-1">{{ item.product }}</div>
      <div class="mb-1">
        <span>Brand: </span> <span class="text-xl">{{ item.brand }}</span>
      </div>
      <div class="mb-1">
        <span>Category: </span><span class="text-xl">{{ item.category }}</span>
      </div>
      <div>
        <span>Price: </span>
        <span class="text-xl">R{{ item.price }} </span>
        <span class="text-sm"> excl.</span>
      </div>
    </div>
    <div class="w-1/4 flex justify-center items-center">
      <router-link
        :to="{ name: 'product', params: { id: item.uuid } }"
        class="w-1/3 h-1/3 flex justify-center items-center"
      >
        <EyeIcon
          class="w-2/3 rounded-full p-2 cursor-pointer hover:bg-[--primary-blue] hover:text-white transition duration-150"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon } from "@heroicons/vue/24/outline";
const props = defineProps<{
  item: any;
}>();

console.log(props);
</script>
