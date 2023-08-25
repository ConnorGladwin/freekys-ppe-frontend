import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    getItems: (state) => {
      return state.items;
    },
  },
  actions: {
    addItem(item: any) {
      if (this.items.find((i) => i.uuid === item.uuid)) {
        item.quantity++;
      } else {
        item.quantity = 1;
        this.items.push(item);
      }
      console.log(this.items);
    },
    removeItem(item: any) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
});
