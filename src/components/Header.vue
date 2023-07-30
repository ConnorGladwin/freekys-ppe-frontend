<template>
  <div class="w-full h-full shadow-lg border-b mb-2">
    <div class="flex h-full items-center">
      <div class="w-[20%] h-full flex justify-center items-center my-auto">
        <div class="">
          <img class="w-[80%]" src="../assets/logo.svg" alt="" />
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
          <div @click="uiStore.toggleCart(true)" class="hover-underline-animation hover:text-black">Cart</div>
          <div>Account</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from "../store/uiStore";
import HeaderDropdown from "./HeaderDropdown.vue";

const uiStore = useUiStore();
</script>
