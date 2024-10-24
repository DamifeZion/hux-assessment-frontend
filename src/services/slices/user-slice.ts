import { createSlice } from "@reduxjs/toolkit";

export type TUserSlice = {
   user: {
      email: string;
      token: string;
   };
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
   },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
