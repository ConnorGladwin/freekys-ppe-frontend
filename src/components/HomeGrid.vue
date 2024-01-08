<template>
  <div class="w-[1000px] flex justify-center mb-8">
    <div class="w-full">
      <div class="py-3 mb-2">
        <span class="text-4xl border-b-4 border-[--primary-blue]"
          >Freeky's Picks</span
        >
      </div>
      <div class="grid grid-rows-3 grid-cols-3 gap-3">
        <div
          v-for="category in categoryList"
          :key="categoryList.indexOf(category)"
          class="w-full h-[315px] flex justify-center items-center text-xl rounded-sm group hover:tracking-wide hover:bg-gray-50 hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer"
        >
          <router-link
            :to="{ name: 'freekysPicks', params: { category: category?.name } }"
            class="w-[325px] h-[315px]"
          >
            <img
              :src="category.image"
              alt=""
              class="w-[315px] h-[315px] object-cover absolute group-hover:opacity-80"
            />
            <span
              class="h-full w-[315px] relative text-outline break-words bg-black bg-opacity-50 flex justify-center items-center text-gray-50 group-hover:font-bold"
              >{{ category.name }}</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categoryList = [
  {
    name: "Welder",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694936642/welder.jpg",
  },
  {
    name: "Artisans",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937663/Trade-testing_xxnw1u.jpg",
  },
  {
    name: "Boilermaker",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937356/Boilermaker_tgbwfb.webp",
  },
  {
    name: "Assistant / Cleaner",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937500/young-african-american-man-workwear-cleaning-floor-contemporary-office_274679-35135_qhr0hx.avif",
  },
  {
    name: "Construction",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937219/imgonline-com-ua-Resize-Tq0MSelOAZGAjEF-1-1_kzv5pj.jpg",
  },
  {
    name: "Farm Worker",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937432/113a8cf8-farm-workers-us-ettyimages-1211310309-copy-2-scaled_oj6bhq.jpg",
  },
  {
    name: "Food Processing",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937776/94216498_oyphy6.webp",
  },
  {
    name: "Chemical",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694938035/02.23.01_rvmwh9.jpg",
  },
  {
    name: "Electrical Contractors",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694937833/man-electrical-technician-working-switchboard-with-fuses_169016-24062_pecp5d.avif",
  },
  {
    name: "Warehousing",
    image:
      "https://res.cloudinary.com/dnogg21dd/image/upload/v1694938151/warehouse-distribution_cu2wtk.jpg",
  },
];
</script>
