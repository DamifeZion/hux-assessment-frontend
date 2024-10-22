import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// Storage options
import storage from "redux-persist/lib/storage";
import requestApi from "./api/request";
import userSlice from "./slices/user-slice";

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["authSlice", "userSlice", "schoolSlice"],
};

const rootReducer = combineReducers({
   userSlice,

   [requestApi.reducerPath]: requestApi.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
