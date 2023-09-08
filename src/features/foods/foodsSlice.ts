import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Food } from "../../types";

const initialState: {
  foods: Food[] | null;
} = {
  foods: [],
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
    },
  },
});

export const { setFoods } = foodsSlice.actions;
export default foodsSlice.reducer;
