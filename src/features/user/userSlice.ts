import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import { RootState } from "../../app/store";

const initialState: {
  user: User | null;
} = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.user.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
