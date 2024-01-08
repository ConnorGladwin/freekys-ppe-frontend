<template>
  <div class="flex flex-col items-center">
    <div class="mt-10 w-2/3 text-3xl">Search: {{ searchTerm }}</div>
    <div v-if="loading == true" class="flex w-full items-center justify-center">
      <OverlayerLoader />
    </div>
    <div v-else>
      <div
        v-if="productList.length"
        class="mt-10 w-full flex flex-col items-center"
      >
        <div
          v-for="item in productList"
          :key="item"
          class="w-1/2 border rounded-md mb-2"
        >
          <SearchCard :item="item" />
        </div>
      </div>
      <div v-else class="mt-20 w-full flex flex-col items-center text-xl">
        Sorry, we couldn't find any products.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import OverlayerLoader from "../components/OverlayerLoader.vue";
import { search } from "../utils/queries";
import SearchCard from "./SearchCard.vue";

const route = useRoute();

const loading = ref(true);

const searchTerm: any = route.params.searchTerm;
const productList = ref([]);

onMounted(async () => {
  searchProducts();
});

watch(route, () => {
  searchProducts;
});

async function searchProducts() {
  console.log("searching...");
  productList.value = await search(searchTerm).then((res) => {
    loading.value = false;
    const returnList = res.filter((x: any) => x.price > 0);
    return returnList;
  });
}
</script>
