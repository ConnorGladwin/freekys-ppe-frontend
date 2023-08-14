<template>
  <div class="w-full flex justify-center mb-8">
    <div class="w-1/2">
      <div class="grid grid-rows-3 grid-cols-3 gap-3">
        <div
          v-for="catagory in catagoryList"
          :key="catagory"
          class="w-full h-[315px] border flex justify-center items-center text-xl hover:text-2xl hover:bg-gray-50 hover:shadow-xl hover:border-none transition-all ease-in-out duration-300"
        >
          <img src="" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const catagoryList = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
  "Category 8",
  "Category 9",
];
</script>
