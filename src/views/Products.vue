<template>
  <div v-if="loading == true">
    <OverlayerLoader />
  </div>
  <div v-else class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-3xl mb-4">{{ category }}</h2>
      <div
        class="overflow-hidden grid pt-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="item in categories"
          :key="item"
          @click="brandCategoryRoute(category, item)"
          class="rounded-lg bg-gray-200 h-[90px] border border-gray-300 flex items-center justify-center cursor-pointer hover:tracking-widest hover:bg-gray-300 hover:shadow-xl hover:border-none hover:scale-102 transition-all ease-in-out duration-300"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductCategory } from "../utils/queries";
import { useUiStore } from "../store/uiStore";
import OverlayerLoader from "../components/OverlayerLoader.vue";

const uiStore = useUiStore();
const route = useRoute();
const router = useRouter();

const props: any = defineProps<{
  category: string;
}>();

const products: any = ref([]);
const categories: any = ref([]);
const loading = ref(true);

function brandCategoryRoute(item: any, category: any) {
  router.push({ path: "/products/brandCategory", query: { item, category } });
}

watch(
  () => route.params.category,
  async (category: any) => {
    window.scrollTo(0, 0);
    uiStore.productDropdownOpen = false;
    products.value = await getProductCategory(category).then((res) => {
      const categoryList: any = [];
      res.map((x: any) => {
        categoryList.push(x.brand);
      });
      categories.value = categoryList.filter(
        (v: any, i: number) => categoryList.indexOf(v) === i,
      );
      categories.value.unshift("All");
      loading.value = false;
      return res;
    });
  },
);

onMounted(async () => {
  window.scrollTo(0, 0);
  uiStore.toggleProductDropdown();
  // @ts-ignore
  products.value = await getProductCategory(route.params.category).then(
    (res) => {
      const categoryList: any = [];
      res.map((x: any) => {
        categoryList.push(x.brand);
      });
      categories.value = categoryList.filter(
        (v: any, i: number) => categoryList.indexOf(v) === i,
      );
      categories.value.unshift("All");
      loading.value = false;
      return res;
    },
  );
});
</script>
