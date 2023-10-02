<template>
  <div class="h-screen bg-white">
    <div class="h-[10%]">
      <Header />
    </div>
    <div class="h-screen bg-white">
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </div>
    <Cart />
    <!-- <div -->
    <!--   class="w-screen absolute mt-8 bottom-0 border border-red-500 h-[5%]" -->
    <!-- ></div> -->
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";
</script>
