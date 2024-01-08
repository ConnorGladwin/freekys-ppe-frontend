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
            class="hover-underline-animation text-2xl hover:text-black"
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
            class="hover-underline-animation text-2xl hover:text-black"
            >About Us</router-link
          >
        </div>
      </div>
      <div class="w-[20%] h-full flex items-center justify-evenly">
        <div class="flex justify-evenly items-center w-full h-full">
          <div class="w-1/3 flex items-center">
            <input
              type="text"
              v-model="searchTerm"
              class="border rounded-md w-full text-sm px-1 py-2"
            />
            <MagnifyingGlassIcon
              @click="search()"
              class="h-5 ml-2 cursor-pointer"
            />
          </div>
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
          <!-- <div -->
          <!--   @click="uiStore.toggleAuthModal()" -->
          <!--   class="hover-underline-animation hover:text-black" -->
          <!-- > -->
          <!--   Account -->
          <!-- </div> -->
          <!-- <TransitionRoot -->
          <!--   appear -->
          <!--   :show="uiStore.authOpen" -->
          <!--   enter="transition-opacity duration-150" -->
          <!--   enter-from="opacity-0" -->
          <!--   enter-to="opacity-100" -->
          <!--   leave="transition-opacity duration-150" -->
          <!--   leave-from="opacity-100" -->
          <!--   leave-to="opacity-0" -->
          <!--   class="w-[350px] h-auto bg-white rounded-md shadow-lg border fixed top-[80px] right-[1%]" -->
          <!-- > -->
          <!--   <AuthModal /> -->
          <!-- </TransitionRoot> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { TransitionRoot } from "@headlessui/vue";
import { useUiStore } from "../store/uiStore";
import { useCartStore } from "../store/cartStore";
import HeaderDropdown from "./HeaderDropdown.vue";
import AuthModal from "./AuthModal.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const uiStore = useUiStore();
const cartStore = useCartStore();
const router = useRouter();

const cartCount = ref(cartStore.getItems.length);
const searchTerm: any = ref("");

watch(
  () => cartStore.getItems.length,
  (newVal) => {
    cartCount.value = newVal;
  },
);

function search() {
  console.log("search init");
  if (searchTerm.value != "") {
    router.push({ name: "search", params: { searchTerm: searchTerm.value } });
  }
}
</script>
