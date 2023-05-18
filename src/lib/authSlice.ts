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
      return null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
