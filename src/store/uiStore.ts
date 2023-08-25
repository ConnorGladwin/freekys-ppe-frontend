import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    productDropdownOpen: false,
    cartOpen: false,
  }),
  getters: {
    isProductDropdownOpen: (state) => {
      return state.productDropdownOpen;
    },
    isCartOpen: (state) => {
      return state.cartOpen;
    },
  },
  actions: {
    toggleProductDropdown() {
      console.log("here");
      this.productDropdownOpen = !this.productDropdownOpen;
    },
    toggleCart(bool: boolean) {
      this.cartOpen = bool;
    },
  },
});
