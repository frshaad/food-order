import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import foodsReducer from "../features/foods/foodsSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    foods: foodsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
