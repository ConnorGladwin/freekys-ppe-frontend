<template>
  <div class="h-screen flex justify-center mt-[4%]">
    <div class="w-2/3 h-auto flex justify-center">
      <div class="w-full flex">
        <div class="flex flex-col w-3/4 h-full">
          <div
            v-for="product in productList"
            :key="product"
            class="h-1/3 mt-2 w-full"
          >
            <FreekysPickItem :item="product" />
          </div>
        </div>
        <div
          class="fixed top-[50%] right-[10%] flex flex-col items-start justify-end pb-3"
        >
          <span class="ml-3 text-3xl"
            >Freekys Pick: {{ route.params.category }}</span
          >
          <span else class="ml-3 text-2xl mt-4"
            >R{{ total }} <span class="text-sm">excl.</span></span
          >
          <button
            @click="
              cartStore.addItem(pick, 'n/a', 'n/a');
              uiStore.cartOpen = true;
            "
            class="ml-3 mt-6 text-xl border rounded-sm py-4 px-3 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Add to quote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getFreekysPicks } from "../utils/queries";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import OverlayerLoader from "../components/OverlayerLoader.vue";
import FreekysPickItem from "./FreekysPickItem.vue";
import { useCartStore } from "../store/cartStore";
import { useUiStore } from "../store/uiStore";

const route = useRoute();
const cartStore = useCartStore();
const uiStore = useUiStore();

const productList = ref([]);
const total = ref(0);
const colorSelection = null;
const sizeSelection = null;
const pick = ref();

const item = onBeforeMount(async () => {
  const category: any = route.params.category;

  const freekysPick: any = await getFreekysPicks(category).then((res) => {
    console.log(res);
    const product = res[0];
    const priceList = product?.color?.split("\n");
    const itemList = product?.material?.split("\n");
    total.value = priceList?.slice(-1)[0].replace("R", "");

    for (let i = 0; i < itemList?.length; i++) {
      productList.value.push({ product: itemList[i], price: priceList[i] });
    }

    return {
      price: priceList?.slice(-1)[0].replace("R", ""),
      uuid: product.uuid,
    };
  });

  pick.value = {
    product: `Freeky's Pick ${category}`,
    price: freekysPick.price,
    uuid: freekysPick.uuid,
  };
});
</script>
