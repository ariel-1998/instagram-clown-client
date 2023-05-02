import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";
import jwtDecode from "jwt-decode";

// interface UserToken
//   extends Pick<UserModel, "id" | "username" | "role" | "profileImg"> {}

// let initialState: UserToken | null = null;

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<string>) => {
//       state = jwtDecode<UserToken>(action.payload);
//       return state;
//     },
//   },
// });

interface UserToken
  extends Pick<UserModel, "id" | "username" | "role" | "profileImg"> {}

let initialState: UserToken | null = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: UserToken | null, action: PayloadAction<string>) => {
      state = jwtDecode<UserToken>(action.payload);
    },
    logout: (state) => {
      state = null;
      return state;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
