<template>
  <div class="w-full h-full shadow-lg border-b mb-2">
    <div class="flex h-full items-center">
      <div class="w-[20%] h-full flex justify-center items-center my-auto">
        <div class="">
          <img class="w-full" src="../assets/logo.svg" alt="" />
        </div>
      </div>
      <div class="w-[60%] flex justify-evenly h-full items-center">
        <div class="hover-underline-animation">
          <router-link
            :to="{ name: 'home' }"
            class="hover-underline-animation hover:text-black"
            >Home</router-link
          >
        </div>
        <div
          @click="uiStore.toggleProductDropdown()"
          class="hover-underline-animation"
        >
          <HeaderDropdown />
        </div>
        <div>
          <router-link
            :to="{ name: 'about' }"
            class="hover-underline-animation hover:text-black"
            >About Us</router-link
          >
        </div>
      </div>
      <div class="w-[20%] h-full flex items-center justify-evenly">
        <div class="flex justify-evenly items-center w-full h-full">
          <div
            @click="uiStore.toggleCart(true)"
            class="hover-underline-animation hover:text-black"
          >
            <div class="flex items-center">
              <span>Cart</span>
              <div
                v-if="cartCount > 0"
                class="flex items-center justify-center ml-1 w-5 h-5 text-white bg-black text-xs text-center rounded-full"
              >
                <span :key="cartCount" class="">{{ cartCount }}</span>
              </div>
            </div>
          </div>
          <div>Account</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useUiStore } from "../store/uiStore";
import { useCartStore } from "../store/cartStore";
import HeaderDropdown from "./HeaderDropdown.vue";

const uiStore = useUiStore();
const cartStore = useCartStore();

const cartCount = ref(cartStore.getItems.length);

watch(
  () => cartStore.getItems.length,
  (newVal) => {
    cartCount.value = newVal;
  }
);
</script>
