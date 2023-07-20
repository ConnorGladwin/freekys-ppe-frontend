import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    productDropdownOpen: false,
  }),
  getters: {
    isProductDropdownOpen: () => {
      return this.productDropdownOpen;
    },
  },
  actions: {
    toggleProductDropdown: () => {
      this.productDropdownOpen = !this.productDropdownOpen;
    },
  },
});
