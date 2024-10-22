/** This slice is for confirmation, verifications, e.t.c */

import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {
   email?: string;
};

const initialState: TInitialState = {
   email: "",
};

const authSlice = createSlice({
   name: "authSlice",

   initialState,

   reducers: {
      setEmail: (state, action) => {
         state.email = action.payload;
      },
   },
});

export const { setEmail } = authSlice.actions;
export default authSlice.reducer;
