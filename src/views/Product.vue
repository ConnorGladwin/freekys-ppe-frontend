<template>
  <div class="h-screen flex justify-center items-center -mt-[100px]">
    <div class="w-2/3 h-1/2 flex">
      <div class="w-1/2 h-full flex justify-center items-center">
        <div class="h-[90%] w-[90%] border flex justify-center items-center">
          <span class="text-center my-auto">Image</span>
        </div>
      </div>
      <div class="w-1/2 h-full flex items-center">
        <div class="my-auto flex flex-col justify-center">
          <span class="ml-3 text-xl">SKU:</span>
          <span class="ml-3 text-2xl">Brand:</span>
          <span class="ml-3 text-3xl">[Product Name]</span>
          <span class="ml-3 text-2xl">[Product Price]</span>
          <button
            class="mt-6 text-xl border rounded-sm py-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Add to quote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
