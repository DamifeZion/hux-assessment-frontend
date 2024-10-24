import { createSlice } from "@reduxjs/toolkit";

export type TUserSlice = {
   user: {
      email: string;
      token: string;
   } | null;
};

const initialState: TUserSlice = {
   user: {
      email: "damifeolaleye@gmail.com",
      token: "",
   },
};

const userSlice = createSlice({
   name: "userSlice",

   initialState,

   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      },
      logout: (state) => {
         state.user= null;
      }
   },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
