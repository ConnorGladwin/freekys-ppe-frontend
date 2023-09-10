<template>
  <div class="bg-white">
    <div
      class="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48"
    >
      <h1 class="sr-only">Order information</h1>

      <section
        aria-labelledby="summary-heading"
        class="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
      >
        <div class="mx-auto max-w-lg lg:max-w-none">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <ul
            role="list"
            class="divide-y divide-gray-200 text-sm font-medium text-gray-900"
          >
            <li
              v-for="product in products"
              :key="product.id"
              class="flex items-start space-x-4 py-6"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="h-20 w-20 flex-none rounded-md object-cover object-center"
              />
              <div class="flex-auto space-y-1">
                <h3>{{ product.product }}</h3>
                <p class="text-gray-500">{{ product.color }}</p>
                <p class="text-gray-500">{{ product.color }}</p>
                <p class="text-gray-500">{{ product.material }}</p>
                <p class="text-gray-500">Qty: {{ product.quantity }}</p>
              </div>
              <p class="flex-none text-base font-medium">{{ product.price }}</p>
            </li>
          </ul>

          <dl
            class="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block"
          >
            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Subtotal</dt>
              <dd>$320.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Shipping</dt>
              <dd>$15.00</dd>
            </div>

            <div
              class="flex items-center justify-between border-t border-gray-200 pt-6"
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">$361.80</dd>
            </div>
          </dl>

          <Popover
            class="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden"
            v-slot="{ open }"
          >
            <div
              class="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6"
            >
              <div class="mx-auto max-w-lg">
                <PopoverButton
                  class="flex w-full items-center py-6 font-medium"
                >
                  <span class="mr-auto text-base">Total</span>
                  <span class="mr-2 text-base">$361.80</span>
                  <ChevronUpIcon
                    class="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>

            <TransitionRoot as="template" :show="open">
              <div>
                <TransitionChild
                  as="template"
                  enter="transition-opacity ease-linear duration-300"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <PopoverOverlay
                    class="fixed inset-0 bg-black bg-opacity-25"
                  />
                </TransitionChild>

                <TransitionChild
                  as="template"
                  enter="transition ease-in-out duration-300 transform"
                  enter-from="translate-y-full"
                  enter-to="translate-y-0"
                  leave="transition ease-in-out duration-300 transform"
                  leave-from="translate-y-0"
                  leave-to="translate-y-full"
                >
                  <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                    <dl class="mx-auto max-w-lg space-y-6">
                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Subtotal</dt>
                        <dd>$320.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Shipping</dt>
                        <dd>$15.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Taxes</dt>
                        <dd>$26.80</dd>
                      </div>
                    </dl>
                  </PopoverPanel>
                </TransitionChild>
              </div>
            </TransitionRoot>
          </Popover>
        </div>
      </section>

      <form
        class="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
      >
        <div class="mx-auto max-w-lg lg:max-w-none">
          <section aria-labelledby="contact-info-heading">
            <h2
              id="contact-info-heading"
              class="text-lg font-medium text-gray-900"
            >
              Contact information
            </h2>

            <div class="mt-6">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="mt-10">
            <h2 id="shipping-heading" class="text-lg font-medium text-gray-900">
              Shipping address
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
              <div class="sm:col-span-3">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700"
                  >Company</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                  >Address</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-gray-300 shadow-sm p-2 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="apartment"
                  class="block text-sm font-medium text-gray-700"
                  >Apartment, suite, etc.</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    class="block w-full rounded-md border-gray-300 shadow-sm p-2 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                  >City</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-gray-300 shadow-sm p-2 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700"
                  >State / Province</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-gray-300 shadow-sm p-2 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700"
                  >Postal code</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-gray-300 shadow-sm p-2 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="billing-heading" class="mt-10">
            <!-- <h2 id="billing-heading" class="text-lg font-medium text-gray-900"> -->
            <!--   Create Account -->
            <!-- </h2> -->

            <div class="mt-6 flex items-center">
              <input
                id="same-as-shipping"
                name="same-as-shipping"
                type="checkbox"
                checked=""
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <div class="ml-2">
                <label
                  for="same-as-shipping"
                  class="text-sm font-medium text-gray-900"
                  >Create Account</label
                >
              </div>
            </div>
          </section>

          <div
            class="mt-10 border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between"
          >
            <button
              type="submit"
              class="w-full rounded-md border border-transparent bg-[#1c70b8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:text-[#1c70b8] hover:bg-white hover:border-[#1c70b8] transition duration-200 sm:order-last sm:ml-6 sm:w-auto"
            >
              Complete Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import { useCartStore } from "../store/cartStore";

const cartStore = useCartStore();

console.log(cartStore);

const products = cartStore.getItems;
</script>
