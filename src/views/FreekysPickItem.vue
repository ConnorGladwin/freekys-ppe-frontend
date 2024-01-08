<template>
  <div class="w-full h-full">
    <div class="h-full w-full flex">
      <div class="w-1/3">
        <img :src="product.image" alt="" class="object-contain" />
      </div>
      <div class="h-full flex flex-col justify-center ml-3">
        <div class="flex mb-2">
          <span class="mr-2">Product: </span>
          <span class="">{{ product.product }}</span>
        </div>
        <div class="flex mb-2">
          <span class="mr-2">Category: </span>
          <span>{{ product.category }}</span>
        </div>
        <div class="flex mb-2">
          <span class="mr-2">Brand: </span>
          <span>{{ product.brand }}</span>
        </div>
        <div class="flex mb-2">
          <span class="mr-2">Color: </span>
          <span>{{ product.color }}</span>
        </div>
        <div class="flex mb-2">
          <span class="mr-2">Material: </span>
          <span>{{ product.material }}</span>
        </div>
        <div class="flex mb-2">
          <span class="mr-2">Bundle Price: </span>
          <span>R{{ price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProductSku } from "../utils/queries";

const props = defineProps<{
  item: any;
}>();

const sku = props.item.product.split(" (")[1].replace(")", "");
const product = await getProductSku(sku);
const price = props.item.price.replace("-", "");
</script>
