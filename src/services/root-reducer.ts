import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// Storage options
import storage from "redux-persist/lib/storage";
import requestApi from "./api/request";
import userSlice from "./slices/user-slice";
import authSlice from "./slices/auth-slice";

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["authSlice", "userSlice", "schoolSlice"],
};

const rootReducer = combineReducers({
   userSlice,
   authSlice,

   [requestApi.reducerPath]: requestApi.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
