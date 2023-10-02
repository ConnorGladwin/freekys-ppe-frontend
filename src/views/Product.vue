<template>
  <div class="h-screen flex justify-center mt-[10%]">
    <div class="w-2/3 h-1/2 flex">
      <div class="w-1/2 h-full flex justify-center">
        <div class="h-[90%] w-[90%] flex justify-center items-center">
          <img :src="product?.image" alt="" />
        </div>
      </div>
      <div class="w-1/2 h-full flex items-center">
        <div class="my-auto flex flex-col justify-center">
          <span class="ml-3 text-lg">SKU: {{ product?.sku }}</span>
          <span class="ml-3 text-xl"> {{ product?.brand }}</span>
          <span class="ml-3 text-3xl">{{ product?.product }}</span>
          <span v-if="product?.material" class="ml-3 text-xl"
            >Material: {{ product?.material }}</span
          >
          <span class="ml-3 text-2xl"
            >R{{ product?.price }} <span class="text-sm">excl.</span></span
          >
          <button
            @click="
              cartStore.addItem(product);
              uiStore.cartOpen = true;
            "
            class="mt-6 text-xl border rounded-sm py-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Add to quote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getProduct } from "../utils/queries";
import { useCartStore } from "../store/cartStore";
import { useUiStore } from "../store/uiStore";

const props = defineProps<{
  id: any;
}>();

const cartStore = useCartStore();
const uiStore = useUiStore();

const product = ref<any>(null);

onMounted(async () => {
  product.value = await getProduct(props.id);
  console.log(product.value);
});
</script>
