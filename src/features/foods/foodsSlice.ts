import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../app/store";
import { db } from "../../firebase";
import { Food, FoodCategory } from "../../types";

export const fetchAllFoods = createAsyncThunk("foods/fetchFoods", async () => {
  const items = await getDocs(
    query(collection(db, "foods"), orderBy("category", "asc")),
  );
  return items.docs.map((doc) => doc.data());
});

export const initialState: {
  foods: Food[];
  error: unknown;
  status: "idle" | "loading" | "succeeded" | "failed";
} = {
  foods: [],
  error: null,
  status: "idle",
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
    },
    addFood: {
      prepare: (
        title: string,
        category: FoodCategory,
        imageUrl: string,
        price: number,
        calories: number,
      ) => {
        return {
          payload: {
            id: uuidv4(),
            title,
            category,
            imageUrl,
            price,
            calories,
            qty: 1,
          },
        };
      },
      reducer: (state, action: PayloadAction<Food>) => {
        state.foods.push(action.payload);
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllFoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foods = action.payload as Food[];
      })
      .addCase(fetchAllFoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllFoods = (state: RootState) => state.foods.foods;
export const getFoodsStatus = (state: RootState) => state.foods.status;
export const getFoodsError = (state: RootState) => state.foods.error;

export const { setFoods } = foodsSlice.actions;
export default foodsSlice.reducer;
