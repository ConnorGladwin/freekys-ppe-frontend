<template>
  <TransitionRoot as="template" :show="uiStore.cartOpen">
    <Dialog as="div" class="relative z-10" @close="uiStore.cartOpen = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Shopping cart</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="uiStore.cartOpen = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div
                        v-if="cartStore.items.length < 1"
                        class="w-full h-full flex justify-center py-12"
                      >
                        <span>No Items in Cart.</span>
                      </div>
                      <div v-else class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li
                            v-for="product in products"
                            :key="product?.uuid"
                            class="flex py-6"
                          >
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md"
                            >
                              <img :src="product?.image" alt="" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-gray-900"
                                >
                                  <h3>
                                    <a :href="product.href">{{
                                      product.product
                                    }}</a>
                                  </h3>
                                  <div class="flex flex-col">
                                    <p class="ml-4">R{{ product?.price }}</p>
                                    <p class="ml-4">
                                      R{{
                                        (
                                          product?.price * product?.quantity
                                        ).toFixed(2)
                                      }}
                                    </p>
                                  </div>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ product?.brand }}
                                </p>

                                <p class="mt-1 text-sm text-gray-500">
                                  {{ product?.color }}
                                </p>
                              </div>
                              <div
                                class="flex flex-1 items-end justify-between text-sm"
                              >
                                <p class="text-gray-500">
                                  Qty {{ product.quantity }}
                                </p>

                                <div class="flex">
                                  <button
                                    type="button"
                                    @click="cartStore.removeItem(product.id)"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>Subtotal</p>
                      <p>R{{ total }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <router-link
                      :to="{ name: 'checkout' }"
                      @click="uiStore.cartOpen = false"
                      class="mt-6"
                      :class="
                        cartStore.items.length < 1
                          ? 'opacity-50 cursor-not-allowed pointer-events-none'
                          : ''
                      "
                    >
                      <a
                        class="flex items-center justify-center rounded-md border border-transparent bg-[#1c70b8] px-6 py-3 text-base font-medium text-white shadow-sm hover:text-[#1c70b8] hover:bg-white hover:border-[#1c70b8] transition duration-200"
                        >Checkout</a
                      >
                    </router-link>
                    <div
                      class="mt-6 flex justify-center text-center text-sm text-gray-500"
                    >
                      <p>
                        or
                        <button
                          type="button"
                          class="font-medium text-[#1c70b8] hover:text-indigo-500"
                          @click="uiStore.cartOpen = false"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// @ts-ignore
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useUiStore } from "../store/uiStore";
import { useCartStore } from "../store/cartStore";

const uiStore = useUiStore();
const cartStore = useCartStore();

const products = ref(cartCondense());
let total = calcTotal();

function calcTotal() {
  let total: any = 0;

  cartStore.items.map((x) => {
    total = parseFloat(total) + parseFloat(x?.price);
  });

  return total.toFixed(2);
}

function cartCondense() {
  const cartList: any = [];
  cartStore.items.forEach((item) => {
    const index = cartList.findIndex((x: any) => x.uuid === item.uuid);
    if (index >= 0) {
      cartList[index].quantity += 1;
    } else {
      cartList.push({ ...item, quantity: 1 });
    }
    item.total = item.price * item.quantity;
  });

  return cartList;
}

watch(cartStore.items, () => {
  products.value = cartCondense();
  total = calcTotal();
});
</script>
