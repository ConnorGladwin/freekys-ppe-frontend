<template>
  <Menu>
    <MenuButton>Products</MenuButton>
    <MenuItems
      class="absolute border py-2 w-[250px] mx-4 mt-2 bg-white z-50 flex flex-col"
    >
      <MenuItem v-for="item in menuList" class="hover:bg-gray-100 px-3">
        <span href="">{{ item.name }} </span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const menuList = [
  {
    name: "Agriculture",
    category: "/agriculture",
  },
  {
    name: "Engineering",
    category: "/engineering",
  },
  {
    name: "Mining",
    category: "/mining",
  },
  {
    name: "Construction",
    category: "/construction",
  },
  {
    name: "Food Processing",
    category: "/food-processing",
  },
  {
    name: "Corporate Wear",
    category: "/corporate-wear",
  },
  {
    name: "Corporate Gifts",
    category: "/corporate-gifts",
  },
];
</script>
