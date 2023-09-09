import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Food } from "../../types";
import { firebaseFetchAllFoods } from "../../utils/firebaseFns";

export const fetchAllFoods = createAsyncThunk(
  "foods/fetchFoods",
  firebaseFetchAllFoods,
);

export const initialState: {
  foods: Food[];
  error: string | undefined;
  status: "idle" | "loading" | "succeeded" | "failed";
} = {
  foods: [],
  error: undefined,
  status: "idle",
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
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
