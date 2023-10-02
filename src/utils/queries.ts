import { useUserStore } from "../store/userStore";

const userStore = useUserStore();
const url = "http://localhost:3000";

export async function getProductCategory(query: string) {
  const response = await fetch(`${url}/product/category/${query}`).then(
    (res) => {
      return res.json();
    },
  );
  return response;
}

export async function getProductCategoryBrand(category: string, brand: string) {
  const response = await fetch(
    `${url}/brandCategory?category=${category}&brand=${brand}`,
  );

  return response.json();
}

export async function getFreekysPicks(query: string) {
  const response = await fetch(`${url}/freekysPick?category=${query}`).then(
    (res) => {
      return res.json();
    },
  );
  return response;
}

export async function getProduct(query: string) {
  const response = await fetch(`${url}/product/${query}`).then((res) => {
    return res.json();
  });
  return response[0];
}

export async function createOrder(itemList: any) {
  //
}

export async function getUser() {
  if (window.localStorage.getItem("id")) {
    const response = await fetch(
      `${url}/user/get?id=${window.localStorage.getItem("id")}`,
    );

    const user = await response.json();

    return user;
  }
}
