<template>
  <div class="h-screen flex justify-center mt-[10%]">
    <div class="w-2/3 h-1/2 flex">
      <div class="w-1/2 h-full flex flex-col justify-center">
        <div class="text-sm flex w-full relative">
          <router-link :to="{ name: 'home' }">
            <HomeIcon class="w-5 hover-underline-animation" />
          </router-link>
          <ChevronRightIcon class="w-5" />
          <router-link
            :to="{ name: 'products', params: { category: category } }"
          >
            <span class="hover-underline-animation">{{
              product?.category
            }}</span>
          </router-link>
          <div v-if="product?.brand" class="flex">
            <ChevronRightIcon class="w-5 text-black" />
            <span @click="routeBrand" class="hover-underline-animation">{{
              product?.brand
            }}</span>
          </div>
        </div>
        <div class="h-[90%] w-[90%] mt-3 flex justify-center">
          <img :src="product?.image" alt="" />
        </div>
      </div>
      <div class="w-1/2 h-full flex items-center">
        <div class="my-auto flex flex-col justify-center">
          <span class="ml-3 text-lg">SKU: {{ product?.sku }}</span>
          <span class="ml-3 text-xl"> {{ product?.brand }}</span>
          <span class="ml-3 text-3xl">{{ product?.product }}</span>
          <span v-if="product?.material" class="ml-3 text-xl mt-1"
            >Material: {{ product?.material }}</span
          >
          <div>
            <div class="flex items-center mt-1">
              <span class="mr-3 ml-3 text-xl">Color:</span>
              <div v-for="color in colors" :key="color" class="flex">
                <div
                  @click="colorSelection = color"
                  :key="colorSelection"
                  class="border ml-2 p-1 cursor-pointer text-center text-sm"
                  :class="colorSelection == color ? 'border border-black' : ''"
                >
                  {{ color }}
                </div>
              </div>
            </div>
            <!-- <span class="ml-3 text-2xl">Color: {{ colors[0] }}</span> -->
          </div>
          <div v-if="sizes.length > 0" class="flex items-center mt-1">
            <span class="mr-3 ml-3 text-xl">Sizes:</span>
            <div v-for="size in sizes" :key="size" class="flex">
              <div
                @click="sizeSelection = size"
                :key="sizeSelection"
                class="border ml-2 p-1 cursor-pointer text-center text-sm min-w-[30px]"
                :class="sizeSelection == size ? 'border border-black' : ''"
              >
                {{ size }}
              </div>
            </div>
          </div>
          <span else class="ml-3 text-2xl mt-1"
            >R{{ product?.price }} <span class="text-sm">excl.</span></span
          >
          <button
            @click="
              cartStore.addItem(product, colorSelection, sizeSelection);
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
import { HomeIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const props = defineProps<{
  id: any;
}>();

const router = useRouter();

const cartStore = useCartStore();
const uiStore = useUiStore();

const product = ref<any>(null);
const colors = ref<any>(0);
const colorSelection: any = ref("");
const category = ref(" ");
const brand = ref(" ");
const sizes = ref([]);
const sizeSelection = ref("");

function routeBrand() {
  const path = `/products/brandCategory?item=${category.value}&category=${brand.value}`;
  router.push(path);
}

onMounted(async () => {
  product.value = await getProduct(props.id);
  category.value = product.value.category;
  brand.value = product.value.brand;
  console.log(cartStore);

  if (product.value.color?.split(" / ")) {
    colors.value = product.value.color?.split(" / ");
    colorSelection.value = colors.value[0];
  } else {
    colors.value = null;
  }

  if (product.value.sizes != null) {
    const sizeParams = product.value.sizes.split("-");
    for (let i = sizeParams[0] - 1; i != sizeParams[1]; i++) {
      sizes.value.push(i + 1);
    }
    sizeSelection.value = sizeParams[0];
  }
});
</script>
