import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

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
      this.items.push({
        id: uuidv4(),
        ...item,
      });
    },
    removeItem(item: any) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === item) {
          this.items.splice(i, 1);
        }
      }
    },
  },
});
