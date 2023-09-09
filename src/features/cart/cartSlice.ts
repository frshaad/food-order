import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Food } from "../../types";

const initialState: {
  cartItems: Food[];
} = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleAddToCart: (state, action: PayloadAction<Food>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    addToCart: (state, action: PayloadAction<Food>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        state.cartItems.map((item) =>
          item.id === action.payload.id ? item.qty++ : item,
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.filter(
        (item) => item.id === action.payload,
      );
      existingItem
        ? state.cartItems.filter((item) => item.id !== action.payload)
        : state.cartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const selectAllCartItems = (state: RootState) => state.cart.cartItems;
export const { toogleAddToCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
