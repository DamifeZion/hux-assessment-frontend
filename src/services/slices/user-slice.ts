import { createSlice } from "@reduxjs/toolkit";

export type TUserSlice = {
   user: {
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      profile: string;
      token: string;
   };
};

const initialState: TUserSlice = {
   user: {
      firstname: "Damife",
      lastname: "Olaleye-Martins",
      email: "damifeolaleye@gmail.com",
      phone: "08076568689",
      profile:
         "https://img.freepik.com/free-vector/animated-female-face-with-brown-hair_1308-171070.jpg?t=st=1729415197~exp=1729418797~hmac=5b9238b151331b0501440766fe3b48265850e94018783f239d3c7515ec2581c0&w=900",
      token: "lorem100",
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
