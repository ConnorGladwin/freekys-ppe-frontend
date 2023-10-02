<template>
  <div class="bg-white">
    <div v-if="loading == true">
      <OverlayerLoader />
    </div>
    <div
      v-else
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-3xl mb-4">{{ brand }} {{ category }}</h2>
      <div
        class="overflow-hidden grid pt-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group cursor-pointer"
        >
          <router-link :to="{ name: 'product', params: { id: product.uuid } }">
            <div
              class="w-[280px] h-[280px] flex items-center hover:scale-[1.05] transition duration-400"
            >
              <img :src="product.image" alt="" />
            </div>
          </router-link>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.product }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            R{{ product.price }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { getProductCategoryBrand } from "../utils/queries";
import { useUiStore } from "../store/uiStore";
import { useRoute } from "vue-router";
import OverlayerLoader from "../components/OverlayerLoader.vue";

const route = useRoute();
const uiStore = useUiStore();

const brand: any = route.query.category;
const category: any = route.query.item;

const loading = ref(true);
const products = ref([]);

watch(
  () => route.query,
  async () => {
    window.scrollTo(-100, -100);
    uiStore.productDropdownOpen = false;
    let query = "";
    if (brand == "All") {
      query = "*";
    } else {
      query = brand;
    }
    products.value = await getProductCategoryBrand(category, query).then(
      (res: any) => {
        const categoryList: any = [];

        res.map((x: any) => {
          categoryList.push(x.brand);
        });
        loading.value = false;
        return res;
      },
    );
  },
);

onMounted(async () => {
  window.scrollTo(-100, -100);
  uiStore.toggleProductDropdown();
  let query = "";
  if (brand == "All") {
    query = "*";
  } else {
    query = brand;
  }
  products.value = await getProductCategoryBrand(category, query).then(
    (res: any) => {
      const categoryList: any = [];
      console.log(res);
      res.map((x: any) => {
        categoryList.push(x.brand);
      });
      loading.value = false;
      return res;
    },
  );
});
</script>
