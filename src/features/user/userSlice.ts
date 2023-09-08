import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

const initialState: {
  user: User | null;
} = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
