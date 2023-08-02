<template>
  <Menu>
    <MenuButton>Products</MenuButton>
    <MenuItems
      class="absolute border py-2 w-[250px] mx-4 mt-2 bg-white z-50 flex flex-col"
    >
      <MenuItem v-for="item in menuList" class="hover:bg-gray-100 px-3">
        <RouterLink
          :to="{
            name: 'products',
            params: { category: item.name },
            query: { subcategories: item.subcategories },
          }"
          >{{ item.name }}
        </RouterLink>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { RouterLink } from "vue-router";

const menuList = [
  {
    name: "Dust Masks",
    category: "/dust-masks",
  },
  {
    name: "Footwear",
    category: "/footwear",
    subcategories: [
      { name: "Bova", category: "/bova" },
      { name: "Caterpillar", category: "/caterpillar" },
      { name: "Frams", category: "/frams" },
      { name: "Lemaitre", category: "/lemaitre" },
      { name: "Passion", category: "/passion" },
      { name: "Profit", category: "/profit" },
      { name: "Rebel", category: "/rebel" },
      { name: "Sisi", category: "/sisi" },
      { name: "Wayne Gumboots", category: "/wayne" },
    ],
  },
  {
    name: "Gloves",
    category: "/gloves",
    subcategories: [
      { name: "ATG", category: "/atg" },
      { name: "Cotton", category: "/cotton" },
      { name: "Latex", category: "/latex" },
      {
        name: "Leather",
        category: "/leather",
        subcategories: [
          { name: "Blue Leather", category: "/blue-leather" },
          { name: "Red Leather", category: "/red-leather" },
          { name: "Brown Leather", category: "/brown-leather" },
          { name: "Chrome Leather", category: "/chrome-leather" },
          { name: "Cowhide Leather", category: "/cowhide-leather" },
          { name: "Pigskin Leather", category: "/pigskin-leather" },
        ],
      },
      { name: "PVC", category: "/pvc" },
    ],
  },
  {
    name: "Hard Cap",
    category: "/hard-cap",
  },
  {
    name: "Overalls",
    category: "/overalls",
  },
  {
    name: "Reflective Vests",
    category: "/reflective-vests",
  },
];
</script>
