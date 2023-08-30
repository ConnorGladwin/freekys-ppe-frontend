<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-3xl mb-4">{{ category }}</h2>
      <div
        class="overflow-hidden mb-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="category in categories"
          :key="category"
          class="rounded-lg bg-gray-200 h-[90px] border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <span>{{ category }}</span>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group cursor-pointer"
        >
          <router-link :to="{ name: 'product', params: { id: product.uuid } }">
            <div
              class="w-full h-auto overflow-hidden rounded-lg bg-gray-200xl:aspect-w-7 shadow-xl"
            >
              <ProductImage
                :image="product.sku"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
          </router-link>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.product }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">R100</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProductCategory } from "../utils/queries";
import { useUiStore } from "../store/uiStore";
import ProductImage from "../utils/Product.vue";

const uiStore = useUiStore();
const route = useRoute();

const props: any = defineProps<{
  category: string;
}>();

const products = ref([]);
const categories = ref([]);

watch(
  () => route.params.category,
  async (category) => {
    uiStore.productDropdownOpen = false;
    products.value = await getProductCategory(category).then((res) => {
      const categoryList: any = [];
      res.map((x: any) => {
        categoryList.push(x.brand);
      });
      categories.value = categoryList.filter(
        (v: any, i: number) => categoryList.indexOf(v) === i
      );
      categories.value.unshift("All");
      return res;
    });
  }
);

onMounted(async () => {
  uiStore.toggleProductDropdown();
  products.value = await getProductCategory(route.params.category).then(
    (res) => {
      const categoryList: any = [];
      res.map((x: any) => {
        categoryList.push(x.brand);
      });
      categories.value = categoryList.filter(
        (v: any, i: number) => categoryList.indexOf(v) === i
      );
      categories.value.unshift("All");
      return res;
    }
  );
});
</script>
