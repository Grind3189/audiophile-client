import { createSlice } from "@reduxjs/toolkit";
import { CartedProductType } from "../types";
const cart = localStorage.getItem("cart");
const storedCart = cart ? JSON.parse(cart) : [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartedProducts: storedCart as CartedProductType[],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.cartedProducts.find(
        (product) => product.id === action.payload.id,
      );

      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.cartedProducts.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartedProducts));
    },
    decrement: (state, action) => {
      const product = state.cartedProducts.find(
        (product) => product.id === +action.payload.id,
      );
      if (product) {
        if (product.quantity < 2) {
          const updatedProducts = state.cartedProducts.filter(
            (cartedProduct) => cartedProduct.id !== product.id,
          );
          state.cartedProducts = updatedProducts;
        } else {
          product.quantity -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(state.cartedProducts));
      }
    },

    increment: (state, action) => {
      const product = state.cartedProducts.find(
        (product) => product.id === +action.payload.id,
      );
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartedProducts));
      }
    },
    removeAll: (state) => {
      state.cartedProducts = [];
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decrement, increment, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
