import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userID: "",
    email: "",
    company: "",
    streetAddress: "",
    optAddress: "",
    city: "",
    province: "",
    postalCode: "",
  }),
  getters: {
    getUser: (state) => {
      return state.userID;
    },
  },
  actions: {
    setUser(user: any) {
      this.userID = user.userID;
      this.email = user.email;
      this.company = user.company;
      this.streetAddress = user.streetAddress;
      this.optAddress = user.optAddress;
      this.city = user.city;
      this.province = user.province;
      this.postalCode = user.postalCode;
    },
  },
});
