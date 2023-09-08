import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import cartReducer from "../features/cart/cartSlice";
import foodsReducer from "../features/foods/foodsSlice";
import userReducer from "../features/user/userSlice";

const rootPersistConfig = {
  key: "root",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const foodsPersistConfig = {
  key: "foods",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  foods: persistReducer(foodsPersistConfig, foodsReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
