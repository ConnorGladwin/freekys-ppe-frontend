<template>
  <div
    class="py-10 flex flex-col justify-center items-center w-1/3 border rounded-lg shadow-md"
  >
    <div>
      <span v-if="registerState == false" class="text-4xl">Login</span>
      <span v-else class="text-4xl">Register</span>
    </div>
    <div class="mt-4 w-1/2">
      <div class="flex flex-col mb-2">
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="email"
          class="border text-md px-1 py-2 rounded-md"
        />
      </div>
      <div class="flex flex-col mb-2 w-full">
        <label for="password">Password</label>
        <div class="flex">
          <input
            :type="passwordView"
            placeholder="password"
            class="border text-md px-1 py-2 rounded-md w-full"
          />
          <div class="flex justify-center items-center ml-1">
            <EyeIcon
              v-if="passwordView == 'password'"
              @click="passwordView = 'text'"
              class="h-8 cursor-pointer"
            />
            <EyeSlashIcon
              v-else
              @click="passwordView = 'password'"
              class="h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div v-if="registerState == true" class="flex flex-col mb-2">
        <label for="password">Confirm Password</label>
        <div class="flex">
          <input
            :type="confirmPasswordView"
            placeholder="password"
            class="border text-lg px-1 py-2 rounded-md w-full"
          />
          <div class="flex justify-center items-center ml-1">
            <EyeIcon
              v-if="confirmPasswordView == 'password'"
              @click="confirmPasswordView = 'text'"
              class="h-8 cursor-pointer"
            />
            <EyeSlashIcon
              v-else
              @click="confirmPasswordView = 'password'"
              class="h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full border flex justify-center text-2xl py-2 rounded-lg cursor-pointer hover:bg-[--primary-blue] hover:text-white transition duration-150"
      >
        <span v-if="registerState == false">Login</span>
        <span v-else>Register</span>
      </div>
      <div v-if="registerState == false">
        <span class="text-xs">Don't have an account? </span>
        <span
          @click="registerState = true"
          class="text-xs text-[--primary-blue] cursor-pointer hover:underline"
          >Create one</span
        >
      </div>
      <div v-else>
        <span class="text-xs">Already have an account? </span>
        <span
          @click="registerState = false"
          class="text-xs text-[--primary-blue] cursor-pointer hover:underline"
          >Login</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const registerState = ref(false);
const passwordView = ref("password");
const confirmPasswordView = ref("password");
</script>
