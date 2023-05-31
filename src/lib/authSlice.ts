import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";

type AuthState = UserModel | null;

const initialState = null as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserModel>) => {
      state = action.payload;
      return state;
    },
    logout: (state) => {
      state = null;
      return state;
    },
    increaseFollowing: (state) => {
      if (!state) return; //check if i can do  state?.followingAmount += 1; optional chaining
      state.followingAmount += 1;
      return state;
    },
    decreaseFollowing: (state) => {
      if (!state) return; //check if i can do  state?.followingAmount += 1; optional chaining
      state.followingAmount -= 1;
      return state;
    },
  },
});

export const { login, logout, increaseFollowing, decreaseFollowing } =
  authSlice.actions;

export default authSlice.reducer;
