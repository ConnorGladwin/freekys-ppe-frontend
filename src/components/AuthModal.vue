<template>
  <div class="w-full h-full">
    <div class="flex flex-col py-4 pl-4">
      <div class="flex flex-col">
        <label for="email"> email </label>
        <input
          v-model="email"
          type="text"
          class="border mb-3 mt-1 rounded-sm py-1 px-2 text-sm w-[90%]"
        />
      </div>
      <div>
        <label for="password">password</label>
        <input
          v-model="password"
          type="password"
          class="border mb-3 mt-1 rounded-sm py-1 px-2 text-sm w-[90%]"
        />
      </div>
      <div class="mb-3 mt-1">
        <button
          class="px-3 py-1 border text-center rounded-md bg-[--primary-blue] text-gray-50 hover:bg-gray-50 hover:text-[--primary-blue] hover:border-[--primary-blue] transition duration-200"
        >
          login
        </button>
      </div>
      <div class="text-xs">
        <span class="mr-1">don't have and account yet?</span
        ><span class="text-[--primary-blue] cursor-pointer">click here</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref();
const password = ref();
</script>
